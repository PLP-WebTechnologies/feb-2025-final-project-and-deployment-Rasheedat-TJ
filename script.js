// Store user likes using localStorage
function toggleLike(button) {
  const currentState = button.textContent;
  if (currentState === "Like") {
    button.textContent = "Liked";
    button.style.backgroundColor = "green";
    localStorage.setItem("postLiked", "true");
  } else {
    button.textContent = "Like";
    button.style.backgroundColor = "#0057e7";
    localStorage.setItem("postLiked", "false");
  }
}

// On load, apply stored preference
window.onload = () => {
  const liked = localStorage.getItem("postLiked");
  if (liked === "true") {
    const button = document.querySelector("button");
    button.textContent = "Liked";
    button.style.backgroundColor = "green";
  }
};
