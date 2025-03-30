# HTML转PDF工具

一个简单而强大的在线HTML转PDF工具，支持实时预览和自定义文件名。

## 功能特点

- 实时HTML编辑器，支持语法高亮
- 实时预览HTML渲染效果
- 支持图片显示（本地图片和在线图片）
- 自定义PDF文件名
- 一键转换为PDF文件
- 纯前端实现，无需后端服务

## 项目结构

```
html-to-pdf/
├── templates/
│   └── index.html          # 主页面
├── static/
│   ├── css/
│   │   └── style.css      # 样式文件
│   └── js/
│       └── main.js        # JavaScript逻辑
└── README.md              # 项目说明文档
```

## 使用的技术

- HTML5
- CSS3
- JavaScript
- [CodeMirror](https://codemirror.net/) - 代码编辑器
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - HTML转PDF库
- [Bootstrap](https://getbootstrap.com/) - UI框架

## 如何使用

1. 启动本地服务器：
   ```bash
   # 使用Python启动简单的HTTP服务器
   python -m http.server 8000
   ```

2. 在浏览器中访问：
   ```
   http://localhost:8000/templates/index.html
   ```

3. 在左侧编辑器中编写或粘贴HTML代码
4. 在右侧实时查看渲染效果
5. 输入自定义文件名（可选，默认为"转换结果"）
6. 点击"转换为PDF"按钮下载生成的PDF文件

## 图片使用说明

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

## 注意事项

1. 本工具为纯前端实现，所有操作都在浏览器中完成
2. 使用本地图片时，需要通过HTTP服务器访问页面
3. 生成PDF时，请确保所有资源（如图片）都可以正常访问
4. 建议使用现代浏览器（Chrome、Firefox、Edge等）以获得最佳体验

## 自定义开发

如果你想修改或扩展功能：

1. 样式修改：编辑 `static/css/style.css`
2. 功能修改：编辑 `static/js/main.js`
3. 界面修改：编辑 `templates/index.html`

## 许可证

MIT License 