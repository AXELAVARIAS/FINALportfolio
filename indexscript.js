const typingText = document.getElementById('typing-text');
const descriptions = ["Info.Technology Student.", "Gamer.", "Computer Enthusiast.", "Network Engineer.", "Food Lover."];
let index = 0;
let charIndex = 0;
function typeText() {
  const currentDescription = descriptions[index];
  if (charIndex < currentDescription.length) {
    let currentText = "I am " +currentDescription.substring(0, charIndex + 1) + "|";
    typingText.innerHTML = currentText;
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    charIndex = 0;
    index++;
    if (index >= descriptions.length) {
      index = 0;
    }
    setTimeout(typeText, 2000);
  }
}
window.addEventListener('load', typeText);
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})