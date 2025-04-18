#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import inquirer from 'inquirer';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 存储发布过程中的状态
let state = {
  originalBranch: '',
  originalVersion: '',
  releaseBranch: '',
  hasTag: false,
  hasPushed: false
};

// 检查当前分支是否为 main 或 master
function checkBranch() {
  state.originalBranch = execSync('git branch --show-current').toString().trim();
  if (!['main', 'master'].includes(state.originalBranch)) {
    console.error(chalk.red('错误：发布版本必须在 main 或 master 分支上进行'));
    process.exit(1);
  }
}

// 检查是否有未提交的更改
function checkUncommittedChanges() {
  const status = execSync('git status --porcelain').toString();
  if (status) {
    console.error(chalk.red('错误：有未提交的更改，请先提交或暂存更改'));
    process.exit(1);
  }
}

// 获取当前版本号
function getCurrentVersion() {
  const pkgPath = join(process.cwd(), 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  return pkg.version;
}

// 更新版本号
async function bumpVersion() {
  try {
    state.originalVersion = getCurrentVersion();
    const currentVersion = state.originalVersion.split('.').map(Number);
    
    // 询问要更新的版本类型
    const { versionType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'versionType',
        message: '选择要更新的版本类型:',
        choices: [
          { name: '主版本号 (major)', value: 'major' },
          { name: '次版本号 (minor)', value: 'minor' },
          { name: '修订号 (patch)', value: 'patch' }
        ]
      }
    ]);

    // 根据选择更新版本号
    let newVersion;
    switch (versionType) {
      case 'major':
        newVersion = `${currentVersion[0] + 1}.0.0`;
        break;
      case 'minor':
        newVersion = `${currentVersion[0]}.${currentVersion[1] + 1}.0`;
        break;
      case 'patch':
        newVersion = `${currentVersion[0]}.${currentVersion[1]}.${currentVersion[2] + 1}`;
        break;
    }

    // 更新 package.json
    const pkgPath = join(process.cwd(), 'package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    pkg.version = newVersion;
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

    console.log(chalk.green(`版本已更新: ${state.originalVersion} -> ${newVersion}`));
  } catch (error) {
    console.error(chalk.red('版本更新失败'));
    throw error;
  }
}

// 创建发布分支
function createReleaseBranch(version) {
  try {
    state.releaseBranch = `release/v${version}`;
    execSync(`git checkout -b ${state.releaseBranch}`);
    return state.releaseBranch;
  } catch (error) {
    console.error(chalk.red('创建发布分支失败'));
    throw error;
  }
}

// 提交更改
function commitChanges(version) {
  try {
    execSync('git add .');
    execSync(`git commit -m "chore: release v${version}"`);
  } catch (error) {
    console.error(chalk.red('提交更改失败'));
    throw error;
  }
}

// 推送分支
function pushBranch(branchName) {
  try {
    execSync(`git push origin ${branchName}`);
    state.hasPushed = true;
  } catch (error) {
    console.error(chalk.red('推送分支失败'));
    throw error;
  }
}

// 创建标签
function createTag(version) {
  try {
    execSync(`git tag -a v${version} -m "Release v${version}"`);
    execSync(`git push origin v${version}`);
    state.hasTag = true;
  } catch (error) {
    console.error(chalk.red('创建标签失败'));
    throw error;
  }
}

// 回滚函数
async function rollback() {
  console.log(chalk.yellow('\n开始回滚...'));

  try {
    // 如果创建了标签，删除它
    if (state.hasTag) {
      const newVersion = getCurrentVersion();
      execSync(`git tag -d v${newVersion}`);
      execSync(`git push origin :refs/tags/v${newVersion}`);
      console.log(chalk.yellow('✓ 删除标签'));
    }

    // 如果推送了分支，删除它
    if (state.hasPushed && state.releaseBranch) {
      execSync(`git push origin :${state.releaseBranch}`);
      console.log(chalk.yellow('✓ 删除远程分支'));
    }

    // 如果创建了分支，切换回原分支并删除发布分支
    if (state.releaseBranch) {
      execSync(`git checkout ${state.originalBranch}`);
      execSync(`git branch -D ${state.releaseBranch}`);
      console.log(chalk.yellow('✓ 删除本地分支'));
    }

    // 如果更新了版本号，恢复原版本
    if (state.originalVersion) {
      const pkgPath = join(process.cwd(), 'package.json');
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
      pkg.version = state.originalVersion;
      writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
      execSync('git add package.json');
      execSync(`git commit -m "chore: revert version to ${state.originalVersion}"`);
      console.log(chalk.yellow('✓ 恢复版本号'));
    }

    console.log(chalk.green('回滚完成！'));
  } catch (error) {
    console.error(chalk.red('回滚过程中出现错误:'));
    console.error(error);
    console.log(chalk.yellow('请手动检查并恢复以下内容:'));
    console.log(`1. 版本号: ${state.originalVersion}`);
    console.log(`2. 分支: ${state.originalBranch}`);
    console.log(`3. 标签: v${getCurrentVersion()}`);
    process.exit(1);
  }
}

// 主函数
async function main() {
  try {
    console.log(chalk.blue('开始发布流程...'));

    // 检查分支
    // checkBranch();
    // console.log(chalk.green('✓ 分支检查通过'));

    // 检查未提交的更改
    checkUncommittedChanges();
    console.log(chalk.green('✓ 工作区检查通过'));

    // 获取当前版本
    const currentVersion = getCurrentVersion();
    console.log(chalk.blue(`当前版本: ${currentVersion}`));

    // 更新版本
    await bumpVersion();
    const newVersion = getCurrentVersion();
    console.log(chalk.green(`✓ 版本更新完成: ${newVersion}`));

    // 创建发布分支
    const branchName = createReleaseBranch(newVersion);
    console.log(chalk.green(`✓ 创建发布分支: ${branchName}`));

    // 提交更改
    commitChanges(newVersion);
    console.log(chalk.green('✓ 提交更改'));

    // 推送分支
    pushBranch(branchName);
    console.log(chalk.green('✓ 推送分支'));

    // 创建标签
    createTag(newVersion);
    console.log(chalk.green('✓ 创建标签'));

    console.log(chalk.green('\n发布流程完成！'));
    console.log(chalk.blue(`\n下一步操作：`));
    console.log(`1. 创建 Pull Request 合并到主分支`);
    console.log(`2. 等待 CI 构建通过`);
    console.log(`3. 合并 PR 并发布到 npm`);

  } catch (error) {
    console.error(chalk.red('发布过程中出现错误:'));
    console.error(error);
    
    // 询问是否回滚
    const { shouldRollback } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'shouldRollback',
        message: '是否要回滚到之前的状态？',
        default: true
      }
    ]);

    if (shouldRollback) {
      await rollback();
    } else {
      console.log(chalk.yellow('未执行回滚，请手动处理以下内容:'));
      console.log(`1. 版本号: ${state.originalVersion}`);
      console.log(`2. 分支: ${state.originalBranch}`);
      console.log(`3. 标签: v${getCurrentVersion()}`);
    }
    
    process.exit(1);
  }
}

main(); 