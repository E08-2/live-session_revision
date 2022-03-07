// * Manipulating Dropdown Lists

const select = document.querySelector("select");

// * 1. With any element (not just dropdown lists)...
// * We can access ANY attribute belonging to the element using dot notation

console.log("Value of the dropdown's 'name' attribute", select.name);

// ==================================================

// * 2. Now, let's look at some of the ways we can manipulate the <select> using JavaScript:

console.log("Length of the <select> element", select.length);

// * How to find out which <option> is currently selected?

select.addEventListener("click", () => {
    let selectedIndex = select.selectedIndex;
    
    // The INDEX of the option I clicked - this is a number value
    // First option = index 0, the fourth option = index 3 etc.
    console.log(selectedIndex);

    // We can also use the index to get a reference to the <option> OBJECT we selected
    //console.log("Current selected option:", select[selectedIndex]);

    let selectedOption = select[selectedIndex];

    console.log("Content of the selected option:", selectedOption.textContent);

    // Now let's make a list by looping through all the <option> elements...
    // And list their content in an alert()
    let list = "";

    for (let i = 0; i < select.length; i++) {
        list += select[i].textContent + "\n";
    }

    alert(list);

    // To use a forEach loop, you would target select.options
    // ... to get an ARRAY of the <select> element's <option>s
    console.log("select.options =", select.options);
})