
    const token = Math.random().toString(36).substr(2);
    localStorage.setItem("authToken", token);
let tabSwitchCount = 0;

// 🚫 Tab switch detection
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    tabSwitchCount++;
    if (tabSwitchCount >= 4) {
      window.location.href = "cheating.html";
    }
  }
});

// 🚫 Prevent copy to clipboard
document.addEventListener("copy", (e) => {
  e.preventDefault();
  const warning = "Copying text is not allowed!";
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", warning);
  } else if (window.clipboardData) {
    window.clipboardData.setData("Text", warning);
  }
  alert(warning);
});

// 📱 Mobile minimize/close detection (works in many cases)
let isWindowFocused = true;

window.addEventListener("blur", () => {
  isWindowFocused = false;
  // Delay check in case of quick focus switch
  setTimeout(() => {
    if (!isWindowFocused) {
      localStorage.removeItem("testScore");
      window.location.href = "cheating.html";
    }
  }, 1500);
});

window.addEventListener("focus", () => {
  isWindowFocused = true;
});

