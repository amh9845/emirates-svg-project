const plane = document.getElementById("plane");
const audio = document.getElementById("boardingSound");

plane.addEventListener("click", () => {
  audio.play(); // 1. Play the boarding music
  plane.classList.add("shaking"); // 2. Start shaking

  // 3. Stop shaking after 7 seconds
setTimeout(() => {
  plane.classList.remove("shaking");
  plane.classList.add("flying"); // start gentle flying
}, 7000);
  // 4. Stop audio and redirect after 20 seconds
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
    plane.classList.remove("flying");
    window.location.href = "https://www.emirates.com";
}, 20000);
});