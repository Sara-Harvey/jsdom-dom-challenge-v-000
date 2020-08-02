document.addEventListener("DOMContentLoaded", () => {

    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let pause = document.getElementById("pause");
    let counter = document.getElementById("counter");
    let comments = document.getElementById("list");
    let submit = document.getElementById("submit");
    let nIntervId;
    
    countUp();
    
    function count() {
        counter.innerText = parseInt(counter.innerText) + 1;
    };
    
    function countUp() {
      nIntervId = setInterval(count, 1000);
    };
 
});