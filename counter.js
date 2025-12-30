let minus = document.querySelector("#decrease");
let plus = document.querySelector("#increase");
let zero = document.querySelector("#reset");

let heading = document.querySelector("h1");

minus.addEventListener("click", function() {
    let number = Number(heading.innerText);
    number=number-1;
    heading.innerText=number;
})
plus.addEventListener("click", function() {
    let number = Number(heading.innerText);
    number+=1;
    heading.innerText=number;
})
zero.addEventListener("click", function() {
    heading.innerText=0;
})
