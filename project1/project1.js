function sy(obj){
	
$('.letters').each(function(i,n) {
	var n = 0;
  var $letterWrapper = $(this);
  var words = obj.val();
  var wordArray = [];
  var wordh = [];
  var s ="";
  	var n = 0;
	for(var i =0;i<words.length;i++){
	
		if(n*100<$(window).width()-200){
			s+=";"+words[i];
			n++
		}else{
			s+=",;"+words[i];
			n=0;
		}
		
	}
	console.log(s);
	wordArray = s.split(",");
    var word = words;
    console.log(wordArray)
   	for(var i=0;i<wordArray.length;i++){
   		 var letters = wordArray[i].substring(1,wordArray[i].length).split(';');
    	var letterElements = letters.map(getHTMLForCharacter,i);
   		wordh.push(
    		'<div class="word" style="top:'+i*150+'">' +
    		letterElements.join('') +
     	 '</div>'
    	);
   	}
   
  

  console.log(wordh);
	$("#tp").empty();
  $("#tp").append(wordh);
  
});
}
function getHTMLForCharacter(character,i) {
    	var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    	var characterHTML = '<div class="letter" style="left:'+i*100+'" data-character="' + character + '">' + characterDefinition + '</div>';
      return characterHTML;
}
