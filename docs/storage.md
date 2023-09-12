---
sidebar_position: 8
title: 💾 存储说明
---

# 存储说明

## 同步存储

扩展的设置（如情景模式、分组管理、扩展别名、规则设置）等数据，保存在用户的账号下，可以跟随账号同步，即使换了电脑，只要使用相同账号登录浏览器，就能够同步这些配置。

但浏览器对可以跟随账号同步的数据，有存储大小的限制。具体见：[chrome.storage - Chrome Developers](https://developer.chrome.com/docs/extensions/reference/storage/ )

每一个存储项，不能够超过 8KB，总大小不能超过 100KB。

本扩展使用了 <https://github.com/dtuit/chrome-storage-largeSync> 中的方法，让单项存储可以超过 8KB，但总存储大小，依旧必须小于 100KB。

在关于页面显示的，就是当前已经使用的存储总大小，超过 100KB 配置保存会失败。

## 本地存储

历史记录等数据，保存在当前计算机上，不会随账号同步。这部分的大小限制是 10MB。
