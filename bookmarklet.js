(function() {


    /* insert the MathJax script dynamically into the document */
    /* also insert a fix for Google+, until fixed upstream in MathJax */
    function insertScript(doc) {
	
        var googleFix = '.MathJax .mn {background: inherit;} .MathJax .mi {color: inherit;} .MathJax .mo {background: inherit;}';
        var style = doc.createElement('style');
        style.innerText = googleFix;
        try {
            style.textContent = googleFix;
        } catch(e) {}
        doc.getElementsByTagName('body')[0].appendChild(style);
		
        var script = doc.createElement('script'), config;

        /* see http://www.mathjax.org/resources/faqs/#problem-https */
        script.src = '//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML.js';
        script.type = 'text/javascript';

        /* see http://docs.mathjax.org/en/v1.1-latest/options/tex2jax.html */
        config = 'MathJax.Ajax.config.path[\'Contrib\']=\'//cdn.mathjax.org/mathjax/contrib\';MathJax.Hub.Config({tex2jax:{inlineMath:[[\'$\',\'$\'],[\'$$\', \'$$\']],displayMath:[[\'\\\\[\',\'\\\\]\']],processEscapes:true},TeX:{extensions: [\'[Contrib]/xyjax/xypic.js\']}});MathJax.Hub.Startup.onload();';

        if (window.opera) script.innerHTML = config; else script.text = config;

        doc.getElementsByTagName('head')[0].appendChild(script);
    }

    /* execute MathJax for given window */
    function executeMathJax(win) {
        if (win.MathJax === undefined) {
            /* insert the script into document if MathJax global doesn't exist for given window */
            insertScript(win.document);
        } else {
            /* using win.Array instead of [] to get 'instanceof Array' check working inside iframe */
            /* see http://www.mathjax.org/docs/1.1/typeset.html */
            win.MathJax.Hub.Queue(new win.Array('Typeset', win.MathJax.Hub));
        }
    }

    var frames = document.getElementsByTagName('iframe'), index, win;

    /* execute MathJax on the window object */
    executeMathJax(window);

    /* try to execute MathJax on every iframe */
    for (index = 0; index < frames.length; index++) {
        /* find the iframe's window object */
        win = frames[index].contentWindow || frames[index].contentDocument;
        if (!win.document) win = win.parentNode;

        executeMathJax(win);
    }
})();
