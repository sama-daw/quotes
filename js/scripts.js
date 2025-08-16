// const quote1 = { text: "True peace is not merely the absence of tension; it is the presence of justice.", author: "Martin Luther King Jr", image:"quotes\assets\images\Martin_Luther_King,_Jr..jpg" };
// const quote2 = { text: "Do not judge me by my successes, judge me by how many times I fell down and got back up again.", author: "Nelson Mandela",  image:"quotes\assets\images\Nelson_Mandela.jpg" };
// const quote3 = { text: "Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.", author: "Oprah Winfrey",  image:"quotes\assets\images\Oprah_Winfrey.jpg" };
// const quote4 = { text: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard.", author: "Malala Yousafzai",  image:"quotes\assets\images\Malala_Yousafzai.jpg" };
// const quote5 = { text: "I am no longer accepting the things I cannot change. I am changing the things I cannot accept.", author: "Angela Davis",  image:"quotes\assets\images\Angela_Davis.jpg" };
// const quote6 = { text: "To be, or not to be, that is the question.", author: "William Shakespeare", image:"quotes\assets\images\William_Shakespeare.jpg" };
// const quote7 = { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill",  image:"quotes\assets\images\Winston_Churchill.jpg" };
// const quote8 = { text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean",  image:"quotes\assets\images\Jimmy_Dean.jpg" };
// const quote9 = { text: "We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.", author: "Ursula K. Le Guin" };
// const quote10 = { text: "Where there is power, there is resistance.", author: "Michel Foucault",  image:"quotes\assets\images\Michel_Foucault.jpg" };
// const quote11 = { text: "We must learn that passively to accept an unjust system is to cooperate with that system, and thereby to become a participant in its evil.", author: "Martin Luther King Jr",  image:"quotes\assets\images\Martin_Luther_King,_Jr..jpg" };

// const quotesArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11];

// const quoteText = document.getElementById("quoteContent");
// const quoteAuthor = document.getElementById("quoteSayer");
// const newQuoteBtn = document.getElementById("newQuoteGen");
// const quoteImage = document.getElementById("quoteImage");




// newQuoteBtn.addEventListener("click", function  generateQuotee(){
//     const randIndex= Math.floor(Math.random() * quotesArray.length);
//     const qt=  quotesArray[randIndex];
//     quoteText.textContent= `${qt.text}`;
//     quoteImage.src = qt.image;

// } )
const quote1 = { 
    text: "True peace is not merely the absence of tension; it is the presence of justice.", 
    author: "Martin Luther King Jr", 
    image: "assets/images/Martin_Luther_King,_Jr..jpg" 
};
const quote2 = { 
    text: "Do not judge me by my successes, judge me by how many times I fell down and got back up again.", 
    author: "Nelson Mandela",  
    image: "assets/images/Nelson_Mandela.jpg" 
};
const quote3 = { 
    text: "Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.", 
    author: "Oprah Winfrey",  
    image: "assets/images/Oprah_Winfrey.jpg" 
};
const quote4 = { 
    text: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard.", 
    author: "Malala Yousafzai",  
    image: "assets/images/Malala_Yousafzai.jpg" 
};
const quote5 = { 
    text: "I am no longer accepting the things I cannot change. I am changing the things I cannot accept.", 
    author: "Angela Davis",  
    image: "assets/images/Angela_Davis.jpg" 
};
const quote6 = { 
    text: "To be, or not to be, that is the question.", 
    author: "William Shakespeare", 
    image: "assets/images/William_Shakespeare.jpg" 
};
const quote7 = { 
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    author: "Winston Churchill",  
    image: "assets/images/Winston_Churchill.jpg" 
};
const quote8 = { 
    text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", 
    author: "Jimmy Dean",  
    image: "assets/images/Jimmy_Dean.jpg" 
};
const quote9 = { 
    text: "We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.", 
    author: "Ursula K. Le Guin",
    image: "assets/images/Ursula K.Le Guin.jpg" 
};
const quote10 = { 
    text: "Where there is power, there is resistance.", 
    author: "Michel Foucault",  
    image: "assets/images/Michel_Foucault.jpg" 
};
const quote11 = { 
    text: "We must learn that passively to accept an unjust system is to cooperate with that system, and thereby to become a participant in its evil.", 
    author: "Martin Luther King Jr",  
    image: "assets/images/Martin_Luther_King,_Jr..jpg" 
};

const quotesArray = [
    quote1, quote2, quote3, quote4, quote5, 
    quote6, quote7, quote8, quote9, quote10, quote11
];

const quoteText = document.getElementById("quoteContent");
const quoteAuthor = document.getElementById("quoteSayer");
const newQuoteBtn = document.getElementById("newQuoteGen");
const quoteImage = document.getElementById("quoteImage");

newQuoteBtn.addEventListener("click", function generateQuotee() {
    const randIndex = Math.floor(Math.random() * quotesArray.length);
    const qt = quotesArray[randIndex];

    quoteText.textContent = qt.text;
    quoteAuthor.textContent = qt.author; 

    if (qt.image) {
        quoteImage.src = qt.image;
        quoteImage.style.display = "block";
    } else {
        quoteImage.style.display = "none";
    }
});

