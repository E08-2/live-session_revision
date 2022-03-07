"use strict";

const table = document.querySelector("table");

// ? Using the table already in the HTML page, try to achieve the following functionality:

// * QUESTION 1: When you click the first button, add an extra row to the table.
// All cells should have the correct text content, e.g. "Row 3 Column 1" etc.

const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    let newRow = table.insertRow();
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    cell0.textContent = `Row ${table.rows.length} Column 1`;
    cell1.textContent = `Row ${table.rows.length} Column 2`;
});


// * QUESTION 2: When you click the second button, add a new cell to the end of the second row.
// The cell should also have a text content of "Row 2 Column 3"

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    const row2 = table.rows[1];

    let newCell = row2.insertCell();
    newCell.textContent = `Row 2 Column ${row2.cells.length}`;
})

// * QUESTION 3: When you click the third button, give the first cell of row 3 a yellow background color.

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    const row3 = table.rows[2];
    const row3Cell0 = row3.cells[0];
    row3Cell0.style.backgroundColor = "yellow";
})

// ==============================================================

// ? Now, try to create and add a new table to the page:

// * QUESTION 4: When you click the fourth button:
// Get the value from the input - this should be the number of rows in your new table, AND the number of columns per row.
// Write a function which will create this table and add it to the page.
// Additionally, each cell of the table should have text content correctly identifying its place in the table 
// (E.g. the top-left cell will have the text "Row 1 Column 1").

const body = document.querySelector("body");
const input = document.querySelector("input");
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", () => {
    let num = input.value;

    let newTable = document.createElement("table");

    for (let i = 1; i <= num; i++) {
        let newRow = newTable.insertRow();

        for (let j = 1; j <= num; j++) {
            let newCell = newRow.insertCell();
            newCell.textContent = `Row ${i} Column ${j}`;;
        }
    }

    body.appendChild(newTable);
})