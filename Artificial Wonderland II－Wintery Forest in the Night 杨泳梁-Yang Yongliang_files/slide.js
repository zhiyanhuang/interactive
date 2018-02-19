document.writeln("<script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/prefixfree.js\" charset=\"utf-8\"></script>");
document.writeln("<script language=\"JavaScript\" type=\"text/javascript\" src=\"/js/fangda.js?v=1.0\" charset=\"utf-8\"></script>");
function killErrors() {
return true;
} 
window.onerror = killErrors;
var timer = null;
var offset = 1000;
var index = -1;
var allindex
var fuc
//大图交替轮换
function slideImage(i){
    var id = 'image_'+ target[i];
	//$("#bigpicarea  img").fadeIn("slow"); 
	$(".magnify").css("height",$('#'+ id).height()+'px');
	//$("#txt").css("width",$('#'+ id).width()+'px');
    $('#'+ id)
        .animate({opacity: 1}, 800, function(){
			 
			  $(this).find('.word').animate({height: 'show'}, 'slow');
			  
		 }).show()
        .siblings(':visible')
        .find('.word').animate({height: 'show'},'slow',function(){
			 						
            $(this).parent().animate({opacity: 0}, 800).hide();
					
        });
	 
	  if (typeof(fuc)!=="undefined")
	  {  
	    delete fuc;
	  }
	  fuc=new  fangda.init(id);
}
//bind thumb a
function hookThumb(){    
    $('#thumbs li a')
        .bind('click', function(){
            if (timer) {
                clearTimeout(timer);
            }    
			var id = this.id;            
            index = getIndex(id.substr(6));
			 
            rechange(index);
            slideImage(index); 
            //timer = window.setTimeout(auto, offset);  
            this.blur();            
            return false;
        });
}
//bind next/prev img
function hookBtn(){
    $('#thumbs li img').filter('#play_prev,#play_next')
	   
        .bind('click', function(){ 
		   	 
            if (timer){
                clearTimeout(timer);
            }
            var id = this.id;
            if (id == 'play_prev') {
                index--;
                if (index < 0) index = 6;
            }else{
                index++;
                if (index > 6) index = 0;
            }
			
            rechange(index);
            slideImage(index);
           // timer = window.setTimeout(auto, offset);
        });
}

function bighookBtn(){
    $('#bigpicarea p span').filter('#big_play_prev,#big_play_next')
        .bind('click', function(){
            if (timer){
                clearTimeout(timer);
            }
            var id = this.id;
            if (id == 'big_play_prev') {
                index--;
                if (index < 0) index = 6;
            }else{
                index++;
                if (index > 6) index = 0;
            }
            rechange(index);
            slideImage(index);
           // timer = window.setTimeout(auto, offset);
        });
}

//get index
function getIndex(v){
    for(var i=0; i < target.length; i++){
		
        if (target[i] == v)
		{
		 	//alert('#thumb_xixi-0'+(i+1)+' img');
		  $("#thetitle").html(title[i]);
		  $("#thetitle1").html(title1[i]);
		  $('#thumb_xixi-0'+(i+1)+' img').addClass("class2").removeClass('class1');
		  a=i;
		}else
		{
		  
		  $('#thumb_xixi-0'+(i+1)+' img').addClass("class1").removeClass('class2');	
		}
		
    }
	return a;
}
function rechange(loop){
    var id = 'thumb_'+ target[loop];
    $('#thumbs li a.current').removeClass('current');
    $('#'+ id).addClass('current');
}
function auto(){
    index++;
	allindex=target.length-1;
 
    if (index > allindex){
        index = 0;
    }
	 
	$('#thumb_xixi-0'+(index+1)+' img').addClass("class2").removeClass('class1');
    rechange(index);
    slideImage(index);
    //timer = window.setTimeout(auto, offset);
}
$(function(){    
    //change opacity
    $('div.word').css({opacity: 0.85});
    auto();  
    hookThumb(); 
    hookBtn();
	bighookBtn()
    
}); 