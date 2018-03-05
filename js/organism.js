$(document).ready(function(){
	$(".turn").click(function(){
		if($(".turn").css("left")==="0px"){
		$(this).css({"left":"58px","background-color":"red"});
    $("body").css("background-color","black");
    $(".astro").css({"box-shadow":"0 0 128px white","background-color":"white","border":"1px solid white"});
    $(".eye").css("background-color","red");
    $(".cloud2").css({"box-shadow":"100px 200px 2px red,50px 205px 1px red,10px 200px 1px red,35px 170px 1px red,70px 170px 1px red"});
    $(".cloud3").css({"box-shadow":"150px 200px 2px red,75px 205px 1px red,10px 200px 1px red,45px 150px 1px red,120px 150px 1px red"});
    $(".cloud1").css({"box-shadow":"50px 50px 2px red,30px 55px 1px red,10px 50px 1px red,20px 35px 1px red,40px 35px 1px red"});
    $(".wing").css("background-color","red");

      var audio = $("#mysoundclip2")[0];
          console.log(audio);
      $(".beebody").click(function() {
          audio.play();
      });


}else{
			$(this).css({"left":"0px","background-color":"white"});
					$("body").css("background-color","lightblue");
					$(".astro").css({"box-shadow":"0 0 128px yellow","background-color":"#ECE01A","border":"1px solid #ECE01A"});
          $(".eye").css("background-color","black");
          $(".cloud2").css({"box-shadow":"100px 200px 2px white,50px 205px 1px white,10px 200px 1px white,35px 170px 1px white,70px 170px 1px white"});
          $(".cloud3").css({"box-shadow":"150px 200px 2px white,75px 205px 1px white,10px 200px 1px white,45px 150px 1px white,120px 150px 1px white"});
          $(".cloud1").css({"box-shadow":"50px 50px 2px white,30px 55px 1px white,10px 50px 1px white,20px 35px 1px white,40px 35px 1px white"});
          $(".wing").css("background-color","#7BE8C1");
          var audio = $("#mysoundclip")[0];
              console.log(audio);
          $(".beebody").click(function() {
              audio.stop();
          });

				}
			});
		});
