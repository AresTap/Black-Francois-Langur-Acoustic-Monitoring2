async function register() {   // 可以保留 async，即使现在没用 await 也无妨
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('请输入用户名和密码');
        return;
    }

    if (password.length < 6) {
        alert('密码请至少设置为 6 位');
        return;
    }

    let users = JSON.parse(localStorage.getItem('guardians') || '[]');

    // 检查是否已存在（包含大小写敏感比对）
    if (users.some(u => u.username === username)) {
        alert('该守护者ID已被注册，请更换');
        return;
    }

    // 添加并保存
    users.push({ username, password });
    localStorage.setItem('guardians', JSON.stringify(users));

    alert(`注册成功！\n守护者ID：${username}\n\n即将返回登录界面...`);

    // 延迟跳转，避免用户没看清提示
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1400);
}