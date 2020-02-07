const url = "http://colormind.io/api/";
const data = {
  model: "default"
  // input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
}

function requestPalette() {
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var palette = JSON.parse(http.responseText).result;
      console.log('palette: ', palette);

      getColorsFromArray(palette);
      console.log(palette);
    }
  }

  // when this completes, runs the above
  http.open("POST", url, true);
  http.send(JSON.stringify(data));
}