const quotes = [
    "The wound is the place where the Light enters you.", //index 0
    "What you seek is seeking you.", // index 1
    "Try not to resist the changes that come your way. Instead, let life live through you.",
    "You were born with wings, why prefer to crawl through life?",
    "Don't grieve. Anything you lose comes round in another form.",
    "The only lasting beauty is the beauty of the heart.",
    "The only way to escape the feeling of loneliness is to love yourself.",
    "The wound is the place where the Light enters you.",
    "Stop acting so small. You are the universe in ecstatic motion.",
    "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
    "Be like a tree and let the dead leaves drop.",
    "Raise your words, not your voice. It is rain that grows flowers, not thunder.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "You have to keep breaking your heart until it opens.", //index 13
]

//create new set class and get quote id
const usedIndexes = new Set(); //quotes will be stored here
const quoteElement = document.getElementById("quote"); 

//for the button
function generateQuote() { 

    //recycle quotes
    if (usedIndexes.size >= quotes.length) { 
        usedIndexes.clear() // empties the set of quote after reaching index 13
    }

    while (true){ //starts an infinite loop
        const randomIndex = Math.floor(Math.random() * quotes.length) //define randomIndex

        if (usedIndexes.has(randomIndex)) continue 
    const quote = quotes[randomIndex]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex)
    break // breaks loop
    }
    
} 

//math.random generates random value between 0 and 1 (decimal)
// * quotes.length will create a value for our quotes like 13.999 if there's 14 quotes
//math.floor rounds the number down, for example 13