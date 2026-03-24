# 个人主页

一个简洁、现代、响应式的纯前端静态个人网站，使用 HTML、CSS 和 JavaScript 构建，支持浅色/暗黑模式切换。

## 项目结构

```
├── index.html          # 主页面
├── css/                # 样式目录
│   └── styles.css      # 自定义样式
├── js/                 # JavaScript 目录
│   └── main.js         # 交互逻辑
├── assets/             # 资源目录（图片等）
├── README.md           # 项目说明
├── .gitignore          # Git 忽略文件
└── LICENSE             # MIT 许可证文件
```

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式
- **JavaScript** - 交互逻辑
- **Tailwind CSS** - 响应式样式框架（CDN）
- **Font Awesome** - 图标库（CDN）

## 本地预览

1. 克隆或下载项目到本地
2. **直接在浏览器中打开 `index.html` 文件**即可预览
3. 或使用本地服务器（如 VS Code 的 Live Server 插件）

## GitHub 上传命令

```bash
# 初始化 Git 仓库
git init

# 添加文件
git add .

# 提交 commit
git commit -m "Initial commit"

# 添加远程仓库（将 your-username 替换为你的 GitHub 用户名，repository-name 替换为你的仓库名）
git remote add origin https://github.com/your-username/repository-name.git

# 推送代码
git push -u origin main
```

## GitHub Pages 开启步骤

1. 登录 GitHub，进入你的仓库
2. 点击顶部导航栏中的 "Settings"
3. 在左侧菜单中点击 "Pages"
4. 在 "Source" 部分，选择 "main" 分支
5. 在 "Folder" 部分，选择 "/root" 目录
6. 点击 "Save"
7. 等待几分钟，GitHub 会生成访问链接

## 部署成功后的可分享网址

部署完成后，你可以通过以下格式的网址访问你的个人网站：

```
https://你的用户名.github.io/仓库名/
```

例如：`https://octocat.github.io/personal-website/`

## 功能特点

- ✅ 响应式设计，适配移动端和桌面端
- ✅ 浅色/暗黑模式切换
- ✅ 平滑滚动效果
- ✅ 动画效果
- ✅ 卡片悬停效果
- ✅ 主题记忆功能（本地存储）

## 自定义

1. **修改个人信息**
   - 打开 `index.html` 文件
   - 修改姓名、标签、简介等个人信息
   - 修改快速信息卡片中的内容
   - 修改关于我部分的描述和技术栈

2. **修改样式**
   - 打开 `css/styles.css` 文件
   - 调整自定义样式
   - 或修改 `index.html` 中的 Tailwind 类

3. **添加项目**
   - 可以在 "查看项目" 按钮的点击事件中添加项目链接
   - 或在页面中添加项目展示区域

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT License
