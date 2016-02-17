$(document).ready(function() {

var quoteArray = ["I can resist everything except temptation. - Oscar Wilde", 
"Do not go around saying the world owes you a living. The world owes you nothing. It was here first. - Mark Twain", 
"Do what you can, with what you have, where you are."];

    function randomize () {
	var rand=Math.floor(Math.random() * quoteArray.length)
	$("h2").text(quoteArray[rand]).fadeIn('slow');
	tweetLine=encodeURIComponent(quoteArray[rand]);
	$("#tweet").prop("href",'https://twitter.com/intent/tweet?text="'+tweetLine+'"');
	return rand;
}

$("#retrieve").click(function(){
		var rand = randomize()
	});

});
	