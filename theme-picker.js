function changeTheme() {
    docsifyThemeSwitcher();
}

function docsifyThemeSwitcher() {
    var element = document.querySelector('body');
    element.classList.toggle("docsify-dark-mode");

    if (element.classList.contains("docsify-dark-mode")) {
        localStorage.setItem('docsify-dark-mode', 'true');
        document.querySelector('#switch-theme-btn').textContent = "Ube Theme";
        document.querySelector('#cover-logo').src = '/images/logo_minnie.png';
    } else {
        localStorage.removeItem('docsify-dark-mode');
        document.querySelector('#switch-theme-btn').textContent = "Padan Theme";
        document.querySelector('#cover-logo').src = '/images/logo_minnie_pandan.png';
    }
}
