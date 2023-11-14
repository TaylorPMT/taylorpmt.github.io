const myCopyright = document.getElementById("myCopyright");

function handleKeyPress(event) {
  if (event.ctrlKey && event.which === 85) {
    window.location.replace("https://taylorpmt.dev/");
    return false;
  }
}

function handleContextMenu(event) {
  if (event.which === 3) {
    alert("Thank you for visiting my website :)");
    return false;
  }
}

function openSocialMedia(type) {
  const urls = {
    facebook: "https://www.facebook.com/thien.phamminh1998",
    github: "https://github.com/TaylorPMT"
  };

  if (urls[type]) {
    window.open(urls[type]);
  }
}

if (!myCopyright) {
  window.location.href = "https://taylorpmt.dev/";
}

document.onkeydown = handleKeyPress;
document.oncontextmenu = handleContextMenu;

document.addEventListener("keyup", (event) => {
  if (event.key === "PrintScreen") {
    navigator.clipboard.writeText("");
    alert("Screenshots disabled!");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "p") {
    alert("This section is not allowed to print or export to PDF");
    event.cancelBubble = true;
    event.preventDefault();
    event.stopImmediatePropagation();
  }
});

function handlePayment() {
  alert("Please contact me personally!");
}
