// 初始化CodeMirror编辑器
var editor = CodeMirror.fromTextArea(document.getElementById("htmlEditor"), {
    mode: "xml",
    theme: "monokai",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    lineWrapping: true
});

// 设置默认HTML内容
const defaultHtml = `<!DOCTYPE html>
<html>
<head>
    <title>示例HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>你好，世界！</h1>
    <p>这是一个HTML示例内容。</p>
    <p>下面是一个图片示例：</p>
    <img src="example.jpg" alt="示例图片">
</body>
</html>`;

editor.setValue(defaultHtml);

// 更新预览的函数
function updatePreview() {
    const preview = document.getElementById("preview");
    let content = editor.getValue();
    
    // 创建一个新的iframe来渲染HTML
    const iframe = document.createElement('iframe');
    
    // 清空预览区域并添加iframe
    preview.innerHTML = '';
    preview.appendChild(iframe);
    
    // 获取当前页面的基础URL
    const baseUrl = window.location.origin + '/';
    
    // 处理图片路径
    content = content.replace(
        /<img[^>]+src="([^"]+)"[^>]*>/g,
        function(match, src) {
            // 如果是完整的URL，则不做修改
            if (src.startsWith('http://') || src.startsWith('https://')) {
                return match;
            }
            // 如果是相对路径，转换为绝对路径
            const absoluteSrc = new URL(src, window.location.href).href;
            return match.replace(src, absoluteSrc);
        }
    );
    
    // 写入HTML内容
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(content);
    doc.close();
}

// 监听编辑器变化
editor.on("change", updatePreview);

// 初始化时立即更新预览
updatePreview();

// 转换按钮点击事件
document.getElementById("convertBtn").addEventListener("click", function() {
    const preview = document.getElementById("preview");
    const iframe = preview.querySelector('iframe');
    const content = iframe.contentDocument.documentElement;
    
    // 获取用户输入的文件名
    let filename = document.getElementById("filename").value.trim();
    // 如果文件名为空，使用默认名称
    if (!filename) {
        filename = "转换结果";
    }
    // 确保文件名以.pdf结尾
    if (!filename.toLowerCase().endsWith('.pdf')) {
        filename += '.pdf';
    }
    
    // 配置选项
    const opt = {
        margin: 1,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // 生成PDF
    html2pdf().set(opt).from(content).save().catch(error => {
        console.error("Error:", error);
        alert("转换PDF时发生错误。");
    });
}); 