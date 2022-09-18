// Grabing the social media icons to display with event
const social_icons = document.querySelector(".social-grouping");
// Arrow button to display the social icons
const arrow_btn = document.querySelector(".arrow-box");
const social_btn = document.querySelector(".social-grouping .fa-share");

arrow_btn.addEventListener("click", () => {
  toggleHide();
});

social_btn.addEventListener("click", () => {
  toggleHide();
});

function toggleHide() {
  social_icons.classList.toggle("hide");
}
