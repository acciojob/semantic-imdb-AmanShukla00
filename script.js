//your code here
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Toggle "Read More" functionality for the summary
  const summary = document.getElementById("summary-text");
  const readMoreBtn = document.createElement("button");
  readMoreBtn.innerText = "Read More";
  readMoreBtn.style.display = "block";
  readMoreBtn.style.marginTop = "10px";
  summary.parentNode.appendChild(readMoreBtn);

  readMoreBtn.addEventListener("click", function () {
    if (summary.style.maxHeight) {
      summary.style.maxHeight = null;
      readMoreBtn.innerText = "Read More";
    } else {
      summary.style.maxHeight = "500px";
      readMoreBtn.innerText = "Show Less";
    }
  });

  // Highlight actors on hover
  document.querySelectorAll("#actor-list li").forEach((actor) => {
    actor.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#f0f0f0";
      this.style.transition = "0.3s";
    });

    actor.addEventListener("mouseout", function () {
      this.style.backgroundColor = "transparent";
    });
  });
});
