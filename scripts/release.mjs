#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import inquirer from 'inquirer';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 检查当前分支是否为 main 或 master
function checkBranch() {
  const currentBranch = execSync('git branch --show-current').toString().trim();
  if (!['main', 'master'].includes(currentBranch)) {
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
    execSync('npx bumpp', { stdio: 'inherit' });
  } catch (error) {
    console.error(chalk.red('版本更新失败'));
    process.exit(1);
  }
}

// 创建发布分支
function createReleaseBranch(version) {
  const branchName = `release/v${version}`;
  execSync(`git checkout -b ${branchName}`);
  return branchName;
}

// 提交更改
function commitChanges(version) {
  execSync('git add .');
  execSync(`git commit -m "chore: release v${version}"`);
}

// 推送分支
function pushBranch(branchName) {
  execSync(`git push origin ${branchName}`);
}

// 创建标签
function createTag(version) {
  execSync(`git tag -a v${version} -m "Release v${version}"`);
  execSync(`git push origin v${version}`);
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
    process.exit(1);
  }
}

main(); 