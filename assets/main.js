// 初始化模式
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // 从localStorage中读取模式
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark');
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun-o');
    } else {
        body.classList.remove('dark');
        themeIcon.classList.remove('fa-sun-o');
        themeIcon.classList.add('fa-moon-o');
    }

    // 监听模式切换按钮的点击事件
    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            themeIcon.classList.remove('fa-sun-o');
            themeIcon.classList.add('fa-moon-o');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark');
            themeIcon.classList.remove('fa-moon-o');
            themeIcon.classList.add('fa-sun-o');
            localStorage.setItem('theme', 'dark');
        }
    });
});