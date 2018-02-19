<!doctype html>
<html>
<head>
<meta charset="gbk">
<title>404页面</title>
<style>
html {
  margin: 0;
  padding: 0;
  background-color: white;
}
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
</head>
<body>
<script type="text/javascript">
	var num=5;
	function redirect(){
		num--;
		document.getElementById("num").innerHTML=num;
		if(num<=0){
			document.getElementById("num").innerHTML=0;
			location.href="/";
			}
		}
	setInterval("redirect()", 1000);
</script>

<div id="svgContainer"></div>
<center><strong>页面丢失啦！ <span id="num">5</span>秒钟之后将会带您进入本站首页!</strong><br />
<a href="/">直接返回首页</a></center>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1377373bec4de4dc869ccf13ba4f9c95";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

</body>
</html>
