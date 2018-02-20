$(function() {
	$(".kick-em").on("click", function(event) {
		const id = $(this).data("id");
		const newKick = $(this).data("newkick");

		const newKickState = {
			ass_kicked: newKick
		};

		//updated the database
		$.ajax("/api/asses/" + id, {
			type: "PUT",
			data: newKickState
		}).then(
		function() {
			console.log("ass has been changed to", newKick);

			location.reload();
		});
	});
	//add to the database
	$(".create-form").on("submit", function(event) {
		event.preventDefault();
		var newAss = {
			ass_name: $("#ass_name").val().trim(),
			ass_picture: $("input[name='pic-choice']:checked").val(),
			ass_kicked: false
		};

		//If the user has entered both a name and a picture
		if(newAss.ass_name && newAss.ass_picture)
		{
			$.ajax("/api/asses", {
				type: "POST",
				data: newAss
			}).then(
			function() {
				console.log("ass has been created");
				location.reload();
			})
			$("#ass_name").val("");
			$("input[name='pic-choice'").prop('checked', false);
		}
		else
		{
			alert("Please enter a name and choose a picture");
		}
	})
})