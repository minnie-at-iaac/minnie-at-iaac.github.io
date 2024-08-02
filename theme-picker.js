function changeTheme() {
    docsifyDarkSwitcher();
}

function docsifyDarkSwitcher() {
    var element = document.querySelector('body');
    element.classList.toggle("docsify-dark-mode");

    if (element.classList.contains("docsify-dark-mode")) {
        localStorage.setItem('docsify-dark-mode', 'true');
    } else {
        localStorage.removeItem('docsify-dark-mode');
    }
}

function applyInitialMode() {
    if (localStorage.getItem('docsify-dark-mode') === 'true') {
        document.querySelector('body').classList.add("docsify-dark-mode");
    }
}

document.addEventListener('DOMContentLoaded', applyInitialMode);

function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
        return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    } else {
        head.appendChild(style);
    }

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}

function install(hook, vm) {
    hook.afterEach(function (html) {
        //var docsifyDarkSwitcherButton = '<button onclick="docsifyDarkSwitcher()" aria-label="Toggle dark mode" title="Toggle dark mode"></button>';
        //var docsifyDarkSwitcherButton = '<span>hello</span>'
        //return docsifyDarkSwitcherButton + html;
    });
}

//$docsify.plugins = [].concat(install, $docsify.plugins);