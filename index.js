const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");
const face = document.querySelector(".face");

stars.forEach((star, index) => {
  // Set a custom property starValue to the index + 1
  star.starValue = index + 1;

  ["click", "mouseover", "mouseout"].forEach((event) => {
    star.addEventListener(event, starRating);
  });
});

function starRating(e) {
  let type = e.type;
  // In your code, this.starValue refers to a custom property (starValue) that you've added to each star element in the array of stars (stars).
  let starValue = this.starValue;

  if (type === "click") {
    output.innerHTML = `You've got ${starValue} Ratings`;
    switch (starValue) {
      case 1:
        face.innerHTML = "😫";
        break;
      case 2:
        face.innerHTML = "😥";
        break;
      case 3:
        face.innerHTML = "😅";
        break;
      case 4:
        face.innerHTML = "😁";
        break;
      case 5:
        face.innerHTML = "😇";
        break;
      default:
        face.innerHTML = "😐"; // Default face if no rating
    }
  }

  stars.forEach((elm, index) => {
    if (type === "click") {
      if (index < starValue) {
        elm.classList.add("orange");
      } else {
        elm.classList.remove("orange");
      }
    }
    if (type === "mouseover") {
      if (index < starValue) {
        elm.classList.add("yellow");
      } else {
        elm.classList.remove("yellow");
      }
    }
    if (type === "mouseout") {
      elm.classList.remove("yellow");
    }
  });
}
