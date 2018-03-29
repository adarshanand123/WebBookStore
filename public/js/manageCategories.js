$(function(){
	$(".deleteCategory").click(function(event){
		var categoryId = $(event.target).attr('category-id');
		$.ajax({
		    url: `/manageCategories/${categoryId}`,
		    type: 'DELETE'
		});
		window.location = '/manageCategories'
	});
})