let numbers = document.querySelectorAll(".num");
let firstHolder = "";
let secondHolder = "";
let operandHolder = "";
let display = document.querySelector(".display");
let eventHolder;
let solution;
console.log(numbers);
console.log("hello world");

for (let num of numbers) {
    num.addEventListener("click", function (event) {
        eventHolder = event.target.textContent;
        console.log(eventHolder);
        if (eventHolder === "1" || eventHolder === "2" ||
            eventHolder === "3" || eventHolder === "4" ||
            eventHolder === "5" || eventHolder === "6" ||
            eventHolder === "7" || eventHolder === "8" ||
            eventHolder === "9" || eventHolder === "0") {
            firstHolder = firstHolder + eventHolder;
            talkToMe();
            if (operandHolder != "") {
                display.innerText = secondHolder + operandHolder + firstHolder;
            } else {
                display.innerText = firstHolder;
            }
        }
        else if (eventHolder === "*" || eventHolder === "/" || eventHolder === "+" || eventHolder === "-") {
            if (firstHolder != "" && secondHolder != "" && operandHolder != "") {
                firstHolder = "";
                secondHolder = "";
                operandHolder = "";
                display.innerText = firstHolder;

            }
            if (firstHolder != "") {
                secondHolder = firstHolder;
                firstHolder = "";
                operandHolder = eventHolder;
                eventHolder = event.target;
                display.innerText = secondHolder + operandHolder + firstHolder;
            }



            talkToMe();

        }
        else if (eventHolder === ".") {
            if (firstHolder === "") {
                firstHolder = firstHolder + "0";
            }
            if (firstHolder.includes(".") === false) {
                firstHolder = firstHolder + eventHolder;
                talkToMe();
                display.innerText = firstHolder;
            }
        }
        else if (eventHolder === "C") {
            firstHolder = "";
            secondHolder = "";
            operandHolder = "";
            display.innerText = firstHolder;
            talkToMe();
        }
        else if (eventHolder === "=") {
            talkToMe();
            if (firstHolder != "" && secondHolder != "" && operandHolder != "") {
                solution = solve(secondHolder, operandHolder, firstHolder);
                display.innerText = solution;
                firstHolder = "";
                secondHolder = "";
                operandHolder = "";

            }
        }


        // log the element that was clicked
        //  event.target.classList.remove("unhighlight");
        //  event.target.classList.add("highlight");
    });
    function talkToMe() {
        console.log("First number" + firstHolder);
        console.log("Second Number" + secondHolder);
        console.log("Operand" + operandHolder);
    }
    function solve(n1, op, n2) {
        let num1 = parseFloat(n1);
        let num2 = parseFloat(n2);
        if (op === "*") {
            return num1 * num2;
        }
        if (op === "-") {
            return num1 - num2;
        }
        if (op === "+") {
            return num1 + num2;
        }
        if (op === "/") {
            return num1 / num2;
        }
    }


}