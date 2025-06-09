// Toggle dark mode when the button is clicked
const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
};

// Create a button for dark mode
const button = document.createElement("button");
button.innerText = "Toggle Dark Mode";
button.onclick = toggleDarkMode;
button.style.position = "fixed";
button.style.top = "20px";
button.style.right = "20px";
button.style.padding = "10px";
button.style.zIndex = "1000";
document.body.appendChild(button);
