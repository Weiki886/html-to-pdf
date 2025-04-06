# HTML转PDF工具

一个简单而强大的在线HTML转PDF工具，完全在浏览器中运行，支持实时预览和自定义文件名。

## 🚀 功能特点

- ✅ 实时HTML编辑器，支持语法高亮
- ✅ 实时预览HTML渲染效果
- ✅ 支持图片显示（本地图片和在线图片）
- ✅ 自定义PDF文件名
- ✅ 一键转换为PDF文件
- ✅ 纯前端实现，所有数据都在本地处理，不会上传到任何服务器

## 📂 项目结构

```
html-to-pdf/
├── index.html          # 主页面
├── static/
│   ├── css/
│   │   └── style.css   # 样式文件
│   └── js/
│       └── main.js     # JavaScript逻辑
└── README.md           # 项目说明文档
```

## 🛠️ 使用的技术

- HTML5
- CSS3
- JavaScript
- [CodeMirror](https://codemirror.net/) - 专业的代码编辑器
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - 强大的HTML转PDF库
- [Bootstrap](https://getbootstrap.com/) - 响应式UI框架

## 📝 如何使用

### 在线使用

直接访问：[HTML转PDF工具在线版](https://your-deployment-url.com)

### 本地使用

1. 克隆仓库或下载源码:
   ```bash
   git clone https://github.com/yourusername/html-to-pdf.git
   cd html-to-pdf
   ```

2. 启动本地服务器：
   ```bash
   # 使用Python启动简单的HTTP服务器
   python -m http.server 8000
   
   # 或使用Node.js的http-server (需先安装: npm install -g http-server)
   http-server -p 8000
   ```

3. 在浏览器中访问：
   ```
   http://localhost:8000
   ```

## 💡 使用指南

1. 在左侧编辑器中编写或粘贴HTML代码
2. 在右侧实时查看渲染效果
3. 输入自定义文件名（默认为"转换结果"）
4. 点击"转换为PDF"按钮下载生成的PDF文件

### 图片使用说明

1. 使用在线图片：
   ```html
   <img src="https://example.com/image.jpg" alt="图片描述">
   ```

2. 使用本地图片：
   - 在项目目录下创建 `images` 文件夹
   - 将图片文件放入该文件夹
   - 在HTML中使用相对路径引用：
     ```html
     <img src="images/your-image.jpg" alt="图片描述">
     ```

## ⚠️ 注意事项

- 本工具为纯前端实现，所有操作都在浏览器中完成，不会上传任何数据
- 使用本地图片时，需要通过HTTP服务器访问页面
- 生成PDF时，请确保所有资源（如图片）都可以正常访问
- 建议使用现代浏览器（Chrome、Firefox、Edge等）以获得最佳体验

## 🔧 自定义开发

如果你想修改或扩展功能：

1. 样式修改：编辑 `static/css/style.css`
2. 功能修改：编辑 `static/js/main.js`
3. 界面修改：编辑 `index.html`

## 📱 响应式设计

本工具支持在各种设备上使用，包括：
- 桌面电脑
- 平板电脑
- 移动设备

## 📄 许可证

[MIT License](LICENSE)

## 🤝 贡献

欢迎提交问题和贡献代码，请先创建issue或pull request。 