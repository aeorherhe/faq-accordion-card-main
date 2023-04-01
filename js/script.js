// selecting HTML elements
const questions = document.querySelectorAll(".qtns");

// qtn = question
questions.forEach(function (qtn) {
  const qtnTitle = qtn.querySelector(".qtn-title");

  qtnTitle.addEventListener("click", function () {
    //
    // hiding text for unselected section
    questions.forEach(function (item) {
      if (item !== qtn) {
        item.classList.remove("show-content", "arrow-btn-rotate");
      }
    });

    qtn.classList.toggle("show-content");
    qtn.classList.toggle("arrow-btn-rotate");
  });
});
