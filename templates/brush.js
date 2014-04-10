(function( $ ){
	

        function getWindowHeight() {
            var windowHeight = 0;
            if (typeof(window.innerHeight) == 'number') {
                windowHeight = window.innerHeight;
            }
            else {
                if (document.documentElement && document.documentElement.clientHeight) {
                    windowHeight = document.documentElement.clientHeight;
                }
                else {
                    if (document.body && document.body.clientHeight) {
                        windowHeight = document.body.clientHeight;
                    }
                }
            }
            return windowHeight;
        }
        function setContent() {
            if (document.getElementById) {
                var windowHeight = getWindowHeight();
                if (windowHeight > 0) {
                    var contentElement = document.getElementById('OBJECT_TO_CENTER');
                    var contentHeight = contentElement.offsetHeight;
                    if (windowHeight - contentHeight > 0) {
                        contentElement.style.position = 'relative';
                        contentElement.style.top = ((windowHeight / 2) - (contentHeight / 2)) + 'px';
                    }
                    else {
                        contentElement.style.position = 'static';
                    }
                }
            }
        }
        window.onload = function() {
            setContent();
        };
        window.onresize = function() {
            setContent();
        }; /* Center content vert, set object to center on line 25 */

        $('div').hide().fadeIn(70).delay(6000); /* All purpose FOUC Baker loader */

})( jQuery );