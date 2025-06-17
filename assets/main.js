// 暗黑模式切换功能
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // 检查本地存储或系统偏好
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeIcon.classList.replace('fa-moon-o', 'fa-sun-o');
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.classList.replace('fa-sun-o', 'fa-moon-o');
    }
    
    // 切换按钮点击事件
    themeToggle.addEventListener('click', function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            themeIcon.classList.replace('fa-sun-o', 'fa-moon-o');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            themeIcon.classList.replace('fa-moon-o', 'fa-sun-o');
        }
    });
});