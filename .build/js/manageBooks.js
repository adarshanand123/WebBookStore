$(function(){
	$(".deleteBook").click(function(event){
		var bookId = $(event.target).attr('book-id');
		$.ajax({
		    url: `/manageBooks/${bookId}`,
		    type: 'DELETE'
		});
		window.location = '/manageBooks'
	});
})