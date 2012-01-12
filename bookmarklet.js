javascript:(function() {

    var frames = document.getElementsByTagName('iframe'), script, index, win;

    /* execute MathJax on the window object */
    executeMathJax(window);

    /* try to execute MathJax on every iframe */
    for (index = 0; index < frames.length; index++) {

        win = frames[index].contentWindow || frames[index].contentDocument;

        if (!win.document) {
            win = win.parentNode;
        }

        executeMathJax(win);
    }

    /* insert the MathJax script dynamically into the document */
    function insertScript(doc) {

        var config;

        /* don't create script for each window */
        if (script === undefined) {
            
            script = doc.createElement('script');
    
            script.type = 'text/javascript';
    
            /* see http://www.mathjax.org/resources/faqs/#problem-https */
            script.src = 'https://d3eoax9i5htok0.cloudfront.net/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML.js';
    
            /* configuration for MathJax */
            /* see http://www.mathjax.org/docs/1.1/options/tex2jax.html */
            config = 'MathJax.Hub.Config({tex2jax:{inlineMath:[[\'$\',\'$\'],[\'\\(\',\'\\)\']],processEscapes: true}});MathJax.Hub.Startup.onload();';
    
            /* include the configuration with the script */
            if (window.opera) {
                script.innerHTML = config;
            } else {
                script.text = config;
            }                    
        }

        doc.getElementsByTagName('head')[0].appendChild(script.cloneNode(true));
    }

    /* execute MathJax for given window */
    function executeMathJax(win) {

        if (win.MathJax === undefined) {

            /* insert the script into document if MathJax global doesn't exist for given window */
            insertScript(win.document);

        } else {

            /* using win.Array instead of [] to get "instanceof Array" check working inside iframe */
            /* see http://www.mathjax.org/docs/1.1/typeset.html */
            win.MathJax.Hub.Queue(new win.Array("Typeset", win.MathJax.Hub));
        }
    }
})();