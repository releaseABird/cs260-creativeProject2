document.getElementById("colorSubmit").addEventListener("click", function(event){
  event.preventDefault();
  //const value = document.getElementById

  const url = "http://colormind.io/api/";
  var data = {
  model : "default",
	input : [[44,43,44],[90,83,82],"N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
    console.log(palette);
    let results = "";
    results += "<div class='color-boxes'>";
    for (let i = 0; i < 5; i++){

    }
    results += "/div";
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));



});
