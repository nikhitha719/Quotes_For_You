const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("new-quote");

let quotes = [];

// Fetch quotes from external JSON
async function loadQuotes() {
  try {
    const res = await fetch("quotes.json");
    quotes = await res.json();
    getRandomQuote(); // Show first quote once loaded
  } catch (error) {
    quoteEl.textContent = "Failed to load quotes.";
    authorEl.textContent = "";
    console.error("Error loading quotes:", error);
  }
}

function getRandomQuote() {
  if (quotes.length === 0) return;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteEl.textContent = `"${quote.text}"`;
  authorEl.textContent = `– ${quote.author}`;
}

// Event listener
btn.addEventListener("click", getRandomQuote);

// Load quotes on page start
loadQuotes();
