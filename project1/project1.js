function sy(obj){
	
$('.letters').each(function(i,n) {

  var $letterWrapper = $(this);
  var words = obj.val();
  var wordArray = [];
	
    var word = words;
    var letters = word.split('');
    var letterElements = letters.map(getHTMLForCharacter,i);
    wordArray.push(
    	'<div class="word">' +
    	letterElements.join('') +
      '</div>'
    );
  

  console.log(wordArray.join(getHTMLForCharacter(' ')));
	$("#tp").empty();
  $("#tp").append(wordArray.join(getHTMLForCharacter(' ')));
});
}
function getHTMLForCharacter(character,i) {
    	var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    	var characterHTML = '<div class="letter" style="left:'+i*106+'" data-character="' + character + '">' + characterDefinition + '</div>';
      return characterHTML;
}
