#!/bin/bash

# Dependabot 配置切换脚本
# 用法: ./scripts/switch-dependabot-config.sh [alternative]

set -e

GITHUB_DIR=".github"
CURRENT_CONFIG="$GITHUB_DIR/dependabot.yml"
ALTERNATIVE_CONFIG="$GITHUB_DIR/dependabot-alternative.yml"
BACKUP_CONFIG="$GITHUB_DIR/dependabot.yml.backup"

if [ "$1" = "alternative" ]; then
    echo "🔄 切换到备选 Dependabot 配置..."
    
    # 备份当前配置
    if [ -f "$CURRENT_CONFIG" ]; then
        cp "$CURRENT_CONFIG" "$BACKUP_CONFIG"
        echo "✅ 已备份当前配置到 $BACKUP_CONFIG"
    fi
    
    # 使用备选配置
    if [ -f "$ALTERNATIVE_CONFIG" ]; then
        cp "$ALTERNATIVE_CONFIG" "$CURRENT_CONFIG"
        echo "✅ 已切换到备选配置"
        echo "📝 备选配置特点："
        echo "   - 只更新直接依赖"
        echo "   - 严格忽略传递依赖"
        echo "   - 减少 PR 数量"
    else
        echo "❌ 备选配置文件不存在: $ALTERNATIVE_CONFIG"
        exit 1
    fi
    
elif [ "$1" = "restore" ]; then
    echo "🔄 恢复原始 Dependabot 配置..."
    
    if [ -f "$BACKUP_CONFIG" ]; then
        cp "$BACKUP_CONFIG" "$CURRENT_CONFIG"
        echo "✅ 已恢复原始配置"
        rm "$BACKUP_CONFIG"
        echo "🗑️  已删除备份文件"
    else
        echo "❌ 备份文件不存在: $BACKUP_CONFIG"
        exit 1
    fi
    
else
    echo "📋 Dependabot 配置管理脚本"
    echo ""
    echo "用法:"
    echo "  $0 alternative  # 切换到备选配置（严格模式）"
    echo "  $0 restore      # 恢复原始配置"
    echo ""
    echo "当前配置状态:"
    if [ -f "$CURRENT_CONFIG" ]; then
        echo "✅ 当前配置: $CURRENT_CONFIG"
        if grep -q "dependency-type.*direct" "$CURRENT_CONFIG"; then
            echo "🔒 模式: 限制直接依赖"
        else
            echo "🌐 模式: 标准模式"
        fi
    else
        echo "❌ 配置文件不存在"
    fi
    
    if [ -f "$BACKUP_CONFIG" ]; then
        echo "💾 备份存在: $BACKUP_CONFIG"
    fi
    
    if [ -f "$ALTERNATIVE_CONFIG" ]; then
        echo "🔄 备选配置可用: $ALTERNATIVE_CONFIG"
    fi
fi 