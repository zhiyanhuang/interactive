var fangda = {

 init:function(magni){
     var src_div_id=magni;
     var native_width = 0;
	 var native_height = 0;
	 var img="#"+src_div_id+" img";
	//Now the mousemove function
	$(".magnify").mousemove(function(e){
	 
		if(!native_width && !native_height)
		{
			 
			var image_object = new Image();
			image_object.src =$(img).attr("bsrc");
		    document.getElementById('large').style.background="url("+image_object.src+")  no-repeat";
		   
			native_width = image_object.width;
			native_height = image_object.height;
	 
		}
		else
		{
			 
			var magnify_offset = $(this).offset();
		 
			var mx = e.pageX - magnify_offset.left;
			var my = e.pageY - magnify_offset.top;
			 
			if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
			{
				$(".large").fadeIn(100);
			}
			else
			{
				$(".large").fadeOut(100);
			}
			if($(".large").is(":visible"))
			{
			 
				var rx = Math.round(mx/$(img).width()*native_width - $(".large").width()/2)*-1;
				var ry = Math.round(my/$(img).height()*native_height - $(".large").height()/2)*-1;
				var bgp = rx + "px " + ry + "px";
				
				//Time to move the magnifying glass with the mouse
				var px = mx - $(".large").width()/2;
				var py = my - $(".large").height()/2;
			 
				$(".large").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	
	})
 
} 
	
}