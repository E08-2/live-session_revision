"use strict";

const select = document.querySelector("select");

// Question 1, Solution 1
const selectId = select.getAttribute("id");
const selectClass = select.getAttribute("class");
const selectName = select.getAttribute("name");

console.log(selectId);
console.log(selectClass);
console.log(selectName);

// Question 1, Solution 2
console.log(select.id);
console.log(select.classList[0]);
console.log(select.name);

// ==============================

// Question 2

const div1 = document.querySelector(".div1");

// select.addEventListener("click", () => {
//     //                        Property
//     //                        number
//     div1.textContent = select.selectedIndex;
// })

// =============================

// Question 3

const div2 = document.querySelector(".div2");

// select.addEventListener("click", () => {
//     // Solution 1 - using the index:

//     //                 "Find the element at index x"
//     //                         object
//     div2.textContent = select[select.selectedIndex].textContent;

//     // Solution 2:

//     // div2.textContent = select.value;
// })

// ============================

// Question 4:

select.addEventListener("click", () => {
    let selectedIndex = select.selectedIndex;

    // Using the index to remove the last selected <option>
    //select.remove(selectedIndex);

    let selectedOption = select[selectedIndex];

    // Using the <option> OBJECT which references the last selected <option>
    select.removeChild(selectedOption);
});