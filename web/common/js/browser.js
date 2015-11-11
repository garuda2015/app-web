define(function(){
	var support = {o: undefined, ov: undefined, b: undefined, bv: undefined};
	var nav = window.navigator;
	var userAgent = nav.userAgent.toLowerCase();
	//浏览器类型判断
	if((/msie/gi).test(userAgent)){
		support.b = 'ie';
		support.bv = userAgent.match(/msie ([\d.]+)/)[1];
	} else if((/chrome/gi).test(userAgent)){
		support.b = 'chrome';
		support.bv = userAgent.match(/chrome\/([\d.]+)/)[1];
	} else if((/firefox/gi).test(userAgent)){
		support.b = 'firefox';
		support.bv = userAgent.match(/firefox\/([\d.]+)/)[1];
	} else if((/opera/gi).test(userAgent)){
		support.b = 'opera';
		support.browserVer = userAgent.match(/opera.([\d.]+)/)[1];
	}
	return support;
});