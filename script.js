// Copy Number Function
function copyNumber(num) {
  navigator.clipboard.writeText(num);
  alert(num + " আপনার নম্বর কপি করা হয়েছে!");
  let c = document.getElementById("copyCount");
  c.innerText = parseInt(c.innerText) + 1;
}

// Call Now Function
function callNow(num, name) {
  let coinEl = document.getElementById("coinCount");
  let coins = parseInt(coinEl.innerText);

  // কয়েন চেক করা
  if (coins < 20) {
    alert("আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই! (কমপক্ষে ২০ কয়েন প্রয়োজন)");
    return;
  }

  // ২০ কয়েন কাটা
  coins -= 20;
  coinEl.innerText = coins;

  // Alert message দেখানো
  alert(name + " (" + num + ") আপনার নম্বরে কল হচ্ছে...");

  // Call initiate (mobile হলে কাজ করবে, desktop browser এ শুধু চেষ্টা করবে)
  window.location.href = "tel:" + num;

  // Call history তে যোগ করা
  addHistory(num, name);
}

// Add Call History Function
  function addHistory(name) {
  const historyBox = document.getElementById("history");
  const div = document.createElement("div");
  div.className = "history-item";

  // তারিখ + সময় format
  let now = new Date();
  let dateTime =
    now.toLocaleDateString("bn-BD") + " " + now.toLocaleTimeString("bn-BD");

  div.innerHTML = `
    <strong>${num, name}</strong><br>
    ${num}<br>
    <small>${dateTime}</small>
  `;
  historyBox.prepend(div);
}

// Clear History Function
function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";;
}

// Favorite Toggle Function
function toggleFavorite(el) {
  let favCount = document.getElementById("favCount");
  if (el.innerText === "♡") {
    el.innerText = "❤️";
    favCount.innerText = parseInt(favCount.innerText) + 1;
  } else {
    el.innerText = "♡";
    favCount.innerText = parseInt(favCount.innerText) - 1;
  }
}
