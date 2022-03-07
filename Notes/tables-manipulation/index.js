// * Q1. How can we add a row to a table?

const table = document.querySelector("table");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// How can we access the table's rows?
console.log("Row 1", table.rows[0]);

// How can we find out how many rows the table has?
console.log("The table has this many rows:", table.rows.length);

// How can we add a row to the table?
btn1.addEventListener("click", () => {
    let tableLength = table.rows.length;   // 3
    
    // Insert a new row at the bottom of the table
    let newRow = table.insertRow();

    // Insert a new cell at indexes 0 and 1 of the new row
    let newRowCell0 = newRow.insertCell(0);
    let newRowCell1 = newRow.insertCell(1);

    // Give both new cells some text content
    newRowCell0.textContent = `Row ${tableLength + 1} Col 1`;
    newRowCell0.style.backgroundColor = "yellow";
    newRowCell1.textContent = `Row ${tableLength + 1} Col 2`;;
    newRowCell1.style.backgroundColor = "yellow";
})

// How can we add a cell to the end of a row?
btn2.addEventListener("click", () => {
    let row2 = table.rows[1];

    // * Insert cell at end of row
    // let newCell = row2.insertCell();
    
    // * Insert cell at beginning of row 2 
    // let newCell = row2.insertCell(0);
    
    let newCell = row2.insertCell(1);
    newCell.textContent = "Middle of row 2";
    newCell.style.backgroundColor = "yellow";
})