const newQuote = document.querySelector('#js-new-quote');
newQuote.addEventListener('click',getQuote);
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote(){
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayQuote(json.message);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote')
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.innerHTML = `<q>${quote}</q>`;
}