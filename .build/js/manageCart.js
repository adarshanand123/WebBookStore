$(function(){
	$("#addToCart").click(function(event){
		var itemData = $(event.target).data('item');
		$.ajax({
		    url: "/cart",
		    type: 'POST',
		    data: itemData
		});
	});

	$("#emptyCard").click(function(event){
		var itemData = $(event.target).data('item');
		$.ajax({
		    url: "/cart",
		    type: 'DELETE'
		});
	});
})