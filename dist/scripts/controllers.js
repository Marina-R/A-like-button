$(document).ready(countLikes);

function countLikes() {
	var $btn = $('#like-button');
	var counter = 0;
	$btn.html(counter + ' likes');

	$btn.click(changeHtml);

	function changeHtml (e) {
		counter++;
		if(counter == 1) $btn.html(counter + ' like');
		else $btn.html(counter + ' likes');
	}
}