(function() {
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	var x = document.getElementsByClassName(className);
	for (var i = 0; i < x.length; i++) {
		if(x[i].nodeName == 'A'){
			if (x[i].href.includes('?')) {
				x[i].href = x[i].href+"&utm_source="+getParameterByName('utm_source')+"&utm_medium="+getParameterByName('utm_medium')+"&utm_campaign="+getParameterByName('utm_campaign');
			} else {
				x[i].href = x[i].href+"?utm_source="+getParameterByName('utm_source')+"&utm_medium="+getParameterByName('utm_medium')+"&utm_campaign="+getParameterByName('utm_campaign');
			}
		}
		else if(x[i].nodeName == 'IFRAME'){
			if (x[i].src.includes('?')) {
					x[i].src = x[i].src+"&utm_source="+getParameterByName('utm_source')+"&utm_medium="+getParameterByName('utm_medium')+"&utm_campaign="+getParameterByName('utm_campaign');
				} 
			else {
					x[i].src = x[i].src+"?utm_source="+getParameterByName('utm_source')+"&utm_medium="+getParameterByName('utm_medium')+"&utm_campaign="+getParameterByName('utm_campaign');
			}
		
		}
	}
})();