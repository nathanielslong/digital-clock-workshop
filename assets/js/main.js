function startClock() {
  var d = new Date()
  var h = ("0" + d.getHours()).slice(-2);
  var m = ("0" + d.getMinutes()).slice(-2);
  var s = ("0" + d.getSeconds()).slice(-2);
  document.getElementById("time").innerText = "#" + h + m + s;
}

function updateClock() {

}
