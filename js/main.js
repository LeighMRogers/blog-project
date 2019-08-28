//Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const name = "Leigh";
const journalHeader = document.querySelector("section.article__header");
console.log(journalHeader);

journalHeader.textContent = `Welcome to ${name}'s Blog`;
console.log("Is this working?");

//Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
let allHeaders = document.querySelectorAll(".article__header");
console.log("all headers", allHeaders);

for (let i =0; i < allHeaders.length; i++) {
    allHeaders[i].classList.add("important");
    console.log(allHeaders[i].className);
}

//Obtain a reference the element with a class of dashed and remove it.
let dashedClass = document.querySelector(".dashed");
console.log("all elements with dashes are", dashedClass);

//if you have defined and called the class, you don't need the dot anymore???
dashedClass.classList.remove("dashed");

//Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
let journalFooter = document.querySelector(".article__footer");
console.log("What elements have footer?", journalFooter);

journalFooter.classList.add("goldenrod");
console.log("Was goldenrod added?", journalFooter);

