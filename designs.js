// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



var height, width, color;
//this javaScript code will pick up the id to be affected from the index html
	    $("#sizePicker").submit(function (event){
			event.preventDefault();
			height = $("#inputHeight").val(); //this calls the input of the height
			width = $("#inputWeight").val(); //this calls the input of the weight(width)
			makeGrid(height, width);
			//console.log("Height: " height + "and width: " + width); this was done tp test if the code above is valid

		})
//the makeGrid function is developed below
	function makeGrid(x,y){
		$("tr").remove();


// codes for the makeGrid() function goes here!

		for (var i = 1; i <= x; i++){
			$("#pixelCanvas").append(<"tr id=table" + i + "></tr>");
			for (var j = 1; j <= y; j++){
				$("#table" + i).append("<td></td>")
			}
		}
	//add color to cell
		$("td").click(function addColor(){
			//this wil allow picking of the color so that it can be placed on the table 
			color = $("#colorPicker").val();
			if ($(this).attr("style")){
				$(this).removeAttr("style")
//this will allow the color to be left on the table created
			}else {
				$(this).attr("style", "background-color:" + color);
			}
		})

	}
