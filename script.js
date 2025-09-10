// Copy number function
function copyNumber(num) {
  navigator.clipboard.writeText(num);
  let copyCount = document.getElementById("copyCount");
  copyCount.textContent = parseInt(copyCount.textContent) + 1;
  alert(num + " নম্বর কপি করা হয়েছে ✅");
}

// Call function
function callNow(num, name) {
  let coinElem = document.getElementById("coinCount");
  let coins = parseInt(coinElem.textContent);

  // কয়েন চেক
  if (coins < 20) {
    alert("⚠ পর্যাপ্ত কয়েন নেই! কল করা সম্ভব নয়।");
    return;
  }

  // কয়েন কমানো
  coinElem.textContent = coins - 20;

  // Alert দেখানো
  alert(`${name} (${num}) এ কল হচ্ছে...`);

  // Call History তে যোগ করা
  addHistory(num, name);
}

// Add to Call History
function addHistory(num, name) {
  const historyBox = document.getElementById("callHistory");
  const div = document.createElement("div");
  div.className = "history-item";
  div.innerHTML = `
    <strong>${name}</strong><br>
    ${num}
  `;
  historyBox.prepend(div); // নতুন কল সবসময় উপরে আসবে
}

// Clear History
function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}

// Favorite toggle
function toggleFavorite(el) {
  let favCount = document.getElementById("favCount");
  if (el.textContent === "♡") {
    el.textContent = "❤️";
    favCount.textContent = parseInt(favCount.textContent) + 1;
  } else {
    el.textContent = "♡";
    favCount.textContent = parseInt(favCount.textContent) - 1;
  }
}
