// to create a new document
const close = document.getElementsByClassName("trash");
var i;
for (i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}

// create a new document when a new document is added and button is clicked

