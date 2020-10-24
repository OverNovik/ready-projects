const blockquote = document.querySelector('blockquote'),
    figcaption = document.querySelector('figcaption'),
    quoteBtn = document.getElementById('quote');

async function getQuote() {  
  const url = `https://api.kanye.rest/`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quote;
};

document.addEventListener('DOMContentLoaded', getQuote);
quoteBtn.addEventListener('click', getQuote);
