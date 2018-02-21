$(function() {
	$("#new-kicker-name").on("submit", function(event) {
		event.preventDefault();
		if ($("#type-name").val())
		{
			const newKicker = {
				name: $("#type-name").val().trim()
			};

			if(newKicker.name)
			{
				$.ajax("/api/kickers", {
					type: "POST",
					data: newKicker
				}).then(
				function() {
					console.log("Kicker has been created");
					location.reload();
				})
				$("#type-name").val("");
			}
		}
		else
		{
			alert("Don't be a wimp. You gotta enter your name, buddy");
		}
	});

	getKickers();

	function getKickers() {
		$.get("api/kickers", renderKickerList);
	}	
	function renderKickerList(data) {
		var rowsToAdd = [];
		if (data.length === 0)
		{
			$("#choose-name").append("<option value=null style='color:#999'>Oop! There are no names. Add one below!</option>");	
		}
		else
		{
			for(var i = 0; i < data.length; i++)
			{	
				rowsToAdd.push(createKickerRow(data[i]));
			}
			$("#choose-name").empty();
			$("#choose-name").append("<option value=null style='color:#999'>Select your name</option>")
			$("#choose-name").append(rowsToAdd);
		}


	}
	function createKickerRow(kicker)
	{
		var listOption = $("<option>");
		listOption.attr("value", kicker.id);
		listOption.text(kicker.name);
		return listOption;
	}
})