function startClock() {
  var d = new Date()
  var h = ("0" + d.getHours()).slice(-2);
  var m = ("0" + d.getMinutes()).slice(-2);
  var s = ("0" + d.getSeconds()).slice(-2);
  var t = h + m + s;
  document.getElementById("time").innerText = "#" + t;
  document.getElementById("colors").style.backgroundColor = "#" + t;
  var base = parseInt(t,16);
  var fc = 1677215 - base;
  var fc = ("0" + fc.toString(16)).slice(-6);
  document.getElementById("time").style.color = "#" + fc;
  var r = setTimeout(startClock,1000)
}

