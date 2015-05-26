$(document).ready(countLikes);

function countLikes() {
	var $btn = $('#like-button');
	var counter = 0;
	$btn.html(counter + ' likes');

	$btn.click(changeHtml);

	function changeHtml (e) {
		counter++;
		$btn.html(counter + ' likes');
	}
}