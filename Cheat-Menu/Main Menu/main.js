(function() {
    // Load the CSS
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('css/styles.css');
    document.head.appendChild(link);

    // Load the JavaScript files
    var scriptPaths = [
        'js/menu.js',
        'js/beta.js',
        'js/toggle.js'
    ];

    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.src = chrome.runtime.getURL(src);
        script.onload = callback;
        document.body.appendChild(script);
    }

    function loadScriptsSequentially(paths, index) {
        if (index < paths.length) {
            loadScript(paths[index], function() {
                loadScriptsSequentially(paths, index + 1);
            });
        }
    }

    loadScriptsSequentially(scriptPaths, 0);
})();
