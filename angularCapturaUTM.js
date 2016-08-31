(function () {
    angular.module('capturaUTM', []).service('capturaUTM', function () {
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        function setURL(param, con) {
            return param + con + "utm_source=" + getParameterByName('utm_source') + "&utm_medium=" + getParameterByName('utm_medium') + "&utm_campaign=" + getParameterByName('utm_campaign');
        }

        this.captura = function (className) {
            var x = document.getElementsByClassName(className);
            for (var i = 0; i < x.length; i++) {
                var con;
                if (x[i].nodeName == 'A') {
                    con = (x[i].href.includes('?')) ? '&' : '?';
                    x[i].href = setURL(x[i].href, con);
                }
                else if (x[i].nodeName == 'IFRAME') {
                    con = (x[i].src.includes('?')) ? '&' : '?';
                    x[i].src = setURL(x[i].src, con);
                }
            }
        }
    });
})();