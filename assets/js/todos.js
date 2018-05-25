// Check off Specific Todos by Clicking
// Second argument: A selector string to filter the descendants of the selected elements 
// that trigger the event. If the selector is null or omitted, the event is always triggered 
// when it reaches the selected element.
// This code does is it says when a li is clicked inside of ul the function is fire
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation(); // Don't activate parent event
});

$("input[type='text']").on("keypress", function(e){
	if(e.which == 13){
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});