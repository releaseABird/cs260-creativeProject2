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
    //let results = "";
    document.getElementById("colorResults").innerHTML = "<div class='color-boxes'>";
    currColor="";
    for (let i = 0; i < 5; i++){
      console.log(palette[i]);
      result = ""
      result += "<div class='color-box'> <div class='img' id='color" + i + "'></div>";
      currColor = "#" + palette[i][0].toString(16) + palette[i][1].toString(16) + palette[i][2].toString(16)
      result += "<p>Color: " + currColor + "</p>";
      result += "</div>";
      document.getElementById("colorResults").innerHTML += result;
      //document.getElementById("colorResults").innerHTML += results;

      console.log(document.getElementById('color' + i));

      //console.log(document.getElementById("color"+ i))
      document.getElementById('color'+ i).style.backgroundColor = currColor;
      document.getElementById('color'+ i).style.height = "100px";
      document.getElementById('color'+ i).style.width = "100px";
      //document.getElementById("color" + i).style.color = "#" + palette[i][0] + palette[i][1] + palette[i][2];
    }



    document.getElementById("colorResults").innerHTML += "</div>";

    //console.log(results);
    //document.getElementById("colorResults").innerHTML = results;
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));





});
