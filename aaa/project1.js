function sy(obj){
	
$('.letters').each(function() {

  var $letterWrapper = $(this);
  var words = obj.val().split(' ');
  var wordArray = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = word.split('');
    var letterElements = letters.map(getHTMLForCharacter);
    wordArray.push(
    	'<div class="word">' +
    	letterElements.join('') +
      '</div>'
    );
  }

  console.log(wordArray.join(getHTMLForCharacter(' ')));
	$("#tp").empty();
  $("#tp").append(wordArray.join(getHTMLForCharacter(' ')));
});
}
function getHTMLForCharacter(character) {
    	var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    	var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';
      return characterHTML;
}
