/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    source: 'Thomas Edison',
  },
  {
    quote: 'He travels the fastest who travels alone.',
    source: 'Rudyard Kipling',
    year: '1917',
    tag: 'Novel'
  },
  {
    quote: 'If at first you don’t succeed, try, try again.',
    source: 'W. E. Hickson',
    tag: 'Educational'
  },
  {
    quote: 'May the Force be with you.',
    source: 'Harrison Ford',
    citation: 'Star Wars',
    tag: 'Movie'
  },
  {
    quote: 'If you want something done right, do it yourself.',
    source: 'Charles-Guillaume Étienne',
    
  },
  {
    quote: 'Keep your friends close, but your enemies closer.',
    source: '	Michael Corleone',
    citation: 'The Godfather',
    year: '1974',
    tag: 'Movie'
  }
]

//creating colors array to return random color when quote is changed
const colorsArr = ['gray', 'red', 'blue', 'pink', 'yellow', 'black']



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const lower = 0
  const upper = quotes.length
  const random_num = Math.floor(Math.random() * upper)
  return quotes[random_num]
}




/***
 * `printQuote` function
***/

// function to change background color.
function changeBackgroundColor() {
  const random_num = Math.floor(Math.random() * 6)
  const color = colorsArr[random_num]
  document.body.style.backgroundColor = color;
}

function printQuote() {
  //calling the function to change the background color.
  changeBackgroundColor()
  const quoteObj = getRandomQuote()
  let citationString
  let yearString
  let tagString
  if (quoteObj.citation != undefined) {
    citationString = `<span class="citation">${quoteObj.citation}</span>`
  } else {
    citationString = ''
  }
  if (quoteObj.year != undefined) {
    yearString = `<span class="year">${quoteObj.year}</span>`
  } else {
    yearString = ''
  }
  if (quoteObj.tag != undefined) {
    tagString = `<span>(${quoteObj.tag})</span>`
  } else {
    tagString = ''
  }
  const htmlString = `
  <p class="quote">${quoteObj.quote}</p>
  <p class="source">${quoteObj.source}
    ${citationString}
    ${yearString}
    ${tagString}
  </p>
  `
  document.getElementById('quote-box').innerHTML = htmlString; 
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// calling the function after every 10 seconds using setInterval
setInterval(() => {
  printQuote()
}, 10000);