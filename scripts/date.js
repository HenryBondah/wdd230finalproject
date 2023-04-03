window.onload = function() {
    var today = new Date();
    var date = today.toLocaleDateString();
    document.getElementById("date").innerHTML = date;
  }