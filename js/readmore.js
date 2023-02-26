function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var mySvg = document.getElementById("mySvg");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more &rarr;";
    moreText.style.display = "none";
    mySvg.style.display = "inline";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less &larr;";
    moreText.style.display = "inline";
    mySvg.style.display = "inline";
  }
}
