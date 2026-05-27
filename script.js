// 获取按钮元素
const btn = document.getElementById('myBtn');
// 获取显示文字的区域
const demo = document.getElementById('demo');

// 点击按钮时执行
btn.addEventListener('click', function() {
    demo.textContent = '✅ 按钮点击成功！网站运行正常～';
    demo.style.color = 'green';
    demo.style.fontSize = '18px';
});