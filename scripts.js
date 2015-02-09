$(function() {
	$("h1").click(function() {
		alert("This is a header.");
		alert("I told you, THIS IS A HEADER!");
	});

	$("p").click(function() {
		alert("This is a paragraph.");
	});

	$("img").click(function() {
		alert("This is an image.");
	});
	$("h2").hover(function() {
		alert("This is the secound header.")
	});
	$("ul").dblclick(function() {
		alert("Click me once!")
	});
});
