document.getElementById("search").addEventListener("focus", function () {
  this.style.borderColor = "#e74c3c";
});

document.getElementById("search").addEventListener("blur", function () {
  this.style.borderColor = "#ccc";
});
document.getElementById("searchBtn").addEventListener("click", function() {
  let query = document.getElementById("search").value;
  if (query.trim() !== "") {
      alert("Searching for: " + query);
  } else {
      alert("Please enter a search term.");
  }
});
// Selecting all category boxes
const categories = document.querySelectorAll(".category");

// Defining links for each category
const categoryLinks = {
    "Latest Jobs": "latest-jobs.html",
    "Results": "results.html",
    "Admit Cards": "admit-cards.html",
    "Syllabus": "syllabus.html",
    "Answer Keys": "answer-keys.html"
};

// Adding click event listener to each category
categories.forEach(category => {
    category.addEventListener("click", () => {
        const categoryName = category.querySelector("p").innerText;
        const url = categoryLinks[categoryName];

        if (url) {
            window.location.href = url;  // Redirect to the respective page
        }
    });
});
// Selecting all category boxes
const categories = document.querySelectorAll(".category");

// Defining links for each category
const categoryLinks = {
    "Latest Jobs": "latest-jobs.html",
    "Results": "results.html",
    "Admit Cards": "admit-cards.html",
    "Syllabus": "syllabus.html",
    "Answer Keys": "answer-keys.html"
};

// Adding click event listener to each category
categories.forEach(category => {
    category.addEventListener("click", () => {
        const categoryName = category.querySelector("p").innerText;
        const url = categoryLinks[categoryName];

        if (url) {
            window.location.href = url;  // Redirect to the respective page
        }
    });
});
