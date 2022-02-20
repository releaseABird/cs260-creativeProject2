document.getElementById("colorSubmit").addEventListener("click", function(event){
  event.preventDefault();
  const url = "http://colormind.io/api/";
  var data = {
  model : "default",
	input : ["N","N","N","N","N"]
}

var http = new XMLHttpRequest();


fetch(url)
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
    console.log(palette);
    //let results = "";
    //document.getElementById("colorResults").innerHTML = "<div class='color-boxes'>";
    document.getElementById("colorResults").innerHTML = "";
    currColor="";
    for (let i = 0; i < 5; i++){
      //console.log(palette[i]);
      result = ""
      result += "<div class='color-box'> <div class='img' id='color" + i + "'></div>";
      currColor = "#";
      for (let j = 0; j < 3; j++) {
        let hexNum = palette[i][j].toString(16);
        if (hexNum.length < 2) {
          hexNum = "0" + hexNum;
        }
        currColor += hexNum;
      }
      //palette[i][0].toString(16) + palette[i][1].toString(16) + palette[i][2].toString(16)
      result += "<p>Color: " + currColor + "</p>";
      result += "</div>";
      document.getElementById("colorResults").innerHTML += result;

      document.getElementById('color'+ i).style.backgroundColor = currColor;
      document.getElementById('color'+ i).style.height = "100px";
      document.getElementById('color'+ i).style.width = "100px";
      document.getElementById('ball' + i).style.background = document.getElementById('color'+ i).style.backgroundColor;


    }

	}

}

http.open("POST", url, true);
http.send(JSON.stringify(data));

});
