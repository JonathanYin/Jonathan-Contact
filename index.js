// const subtitle = document.getElementsByClassName("card-subtitle")[0];

// const createWord = (text, index) => {
//     const word = document.createElement("span");
    
//     word.innerHTML = `${text} `;
    
//     word.classList.add("card-subtitle-word");
    
//     word.style.transitionDelay = `${index * 40}ms`;
    
//     return word;
// }

// const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

// const createSubtitle = text => text.split(" ").map(addWord);

// createSubtitle("I am a Mathematics-Computer Science major at UC San Diego.");

// (function() {
//     $('.btn').on(function() {
//         $(this).toggleClass('active');
//         return $('.box').toggleClass('open');
//     });
    
// }).call(this);

function openBox() {
    var element = document.getElementById("box");
    element.classList.toggle("open");
}