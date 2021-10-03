'use strict';
// dark theme toggle - part.2
// part.1 is at header.html
$(document).ready((function (_this) {
  return function () {
    var btn = document.getElementById("dark-mode-toggle");
    var icon = btn.getElementsByTagName("i")[0];
    var darkTheme = document.getElementById("dark-mode-theme-css");

    // init icon
    var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
    if(savedTheme === "light") {
      icon.className = "ri-moon-fill";
    } else if(savedTheme === "dark") {
      icon.className = "ri-sun-fill";
    }

    function setThemeDOM(mode) {
      localStorage.setItem("dark-mode-storage", mode);
      savedTheme = mode;
      if(mode === "light") {
        darkTheme.disabled = true;
        icon.className = "ri-moon-fill";
      } else if(mode === "dark") {
        darkTheme.disabled = false;
        icon.className = "ri-sun-fill";
      }
    }

    btn.addEventListener("click", () => {
      if(savedTheme === "light") {
        setThemeDOM("dark");
      } else {
        setThemeDOM("light");
      }
    });
  }
})(this));

// image
mediumZoom('.post img')

// code block copy
if(document.queryCommandSupported('copy')) {
  function flashCopyMessage(el, msg) {
    el.textContent = msg;
    setTimeout(function() {
      el.textContent = "Copy";
    }, 2000);
  }
  
  function selectText(node) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    return selection;
  }
  
  function addCopyButton(containerEl) {
    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";
  
    var codeEl = containerEl.firstElementChild;
    copyBtn.addEventListener('click', function() {
      try {
        var selection = selectText(codeEl);
        document.execCommand('copy');
        selection.removeAllRanges();
  
        flashCopyMessage(copyBtn, 'Copied!')
      } catch(e) {
        console && console.log(e);
        flashCopyMessage(copyBtn, 'Failed :\'(')
      }
    });
  
    containerEl.appendChild(copyBtn);
  }
  
  // Add copy button to code blocks
  var highlightBlocks = document.getElementsByClassName('highlight');
  Array.prototype.forEach.call(highlightBlocks, addCopyButton);
}
