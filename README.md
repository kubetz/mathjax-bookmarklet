MathJax Bookmarklet
===================

MathJax Bookmarklet is a bookmarklet for rendering Tex/LaTeX and MathML notation on pages dynamically using [mathjax](http://www.mathjax.org/) library.

Pages don't have to include mathjax.js. Library is included and configured dynamically. LaTeX preprocessor will render equations delimitated by "$", "$$", "\\[" and "\\]".

*Note: This bookmarklet will also try to render math notation inside iframes. This will be successfully executed only on iframes on the same domain because cross-domain policy don't support modification of iframe content from other domains*.

Minify the bookmarklet from bookmarklet.js by using `uglifyjs bookmarklet.js -m`. (with UglifyJS2)

Install the bookmarklet **[HERE](http://kubetz.github.io/mathjax-bookmarklet/)**.
