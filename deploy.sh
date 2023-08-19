#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
rm -rf ./build
npm run build


# 进入生成的文件夹
cd ./build

time=$(date "+%Y%m%d-%H%M%S")
message="deploy$time"

git init
git config user.email "junjiegrass@qq.com"
git config user.name "jasongrass"
git add -A
git commit -m $message
git checkout -b public


git push -f https://gitee.com/Jasongrass/extension-manager-docs.git master
