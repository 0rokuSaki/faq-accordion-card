var first = true;

function closeOther(ansNum) {
  for (i = 0; i < document.querySelectorAll(".answer").length; i++) {
    var ans = ".a" + (i+1);
    if (i+1 == ansNum) {
      continue;
    }
    if ($(ans).hasClass("visible")) {
      var q = ".q" + (i+1);
      var arrowImg = q + " img";
      $(ans).toggleClass("visible");
      $(q).toggleClass("very-dark-grayish-blue fw-bold")
      $(ans).slideToggle();
      $(arrowImg).toggleClass("rotate-180");
    }
  }
}

for (i = 0; i < document.querySelectorAll(".question").length; i++) {
  var q = ".q" + (i+1);
  $(q).click(function() {
    var q = "." + this.className.split(" ")[1];
    var ansNum = q[2];
    var ans = ".a" + ansNum;
    var arrowImg = q + " img";
    closeOther(ansNum);
    $(q).toggleClass("very-dark-grayish-blue fw-bold")
    $(ans).toggleClass("visible");
    $(ans).slideToggle();
    $(arrowImg).toggleClass("rotate-180");
  });
}
