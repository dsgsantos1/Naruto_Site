function openElements(elementName) {
  var i;
  var x = document.getElementsByClassName("element");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(elementName).style.display = "block";  
}