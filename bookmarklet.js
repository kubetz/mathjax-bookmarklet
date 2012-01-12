javascript:(function() {

	/* execute MathJax on the window object */
	executeMathJax(window);

	/* try to execute MathJax on every iframe */
	for (var i = 0, frames = document.getElementsByTagName('iframe'); i < frames.length; i++) {

		var win = frames[i].contentWindow || frames[i].contentDocument;

		if (!win.document) {
			win = win.parentNode;
		}

		executeMathJax(win);
	}

	/* insert the MathJax script dynamically into the document */
	function insertScript(doc) {

		var script = doc.createElement('script');

		script.type = 'text/javascript';

		/* see http://www.mathjax.org/resources/faqs/#problem-https */
		script.src = 'https://d3eoax9i5htok0.cloudfront.net/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML.js';

		/* configuration for MathJax */
		/* see http://www.mathjax.org/docs/1.1/options/tex2jax.html */
		var config = 'MathJax.Hub.Config({tex2jax:{inlineMath:[[\'$\',\'$\'],[\'\\(\',\'\\)\']],processEscapes: true}});MathJax.Hub.Startup.onload();';

		/* include the configuration with the script */
		if (window.opera) {
			script.innerHTML = config;
		} else {
			script.text = config;
		}

		doc.getElementsByTagName('head')[0].appendChild(script);
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