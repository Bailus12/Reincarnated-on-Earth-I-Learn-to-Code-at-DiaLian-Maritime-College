// 暗黑模式切换
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 检查本地存储中的主题设置
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// 主题切换按钮点击事件
themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    // 保存主题设置到本地存储
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// 查看项目按钮点击事件
const projectButton = document.querySelector('a[href="#"]');
projectButton.addEventListener('click', (e) => {
    e.preventDefault();
    // 这里可以添加跳转到项目页面的逻辑
    alert('项目页面开发中，敬请期待！');
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 滚动时顶部栏效果
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});
