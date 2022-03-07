# Manipulating Dropdown Lists

Using the live coding we just did together... 

---

When you "click" one of the options in the `<select>` dropdown list...

* 1. Console log the id, class list and name of the `<select>` element
* 2. Populate (fill) the first div (".div1") with the **index** of the `<option>` you selected.
* 3. Populate (fill) the second div (".div2") with the **text content** of the `<option>` you selected.

---

When you have answered questions 2 and 3, comment your answers out. Then answer question 4...

* 4. Now when you click an option, you should DELETE it from the dropdown!

### Hints:
- You can use either the remove() or removeChild() method of the "select" object - e.g. `select.remove(...)`.
- The remove() method takes the **index** (a number) of the `option` you want to remove.
- The removeChild() method takes the **`<option>` object** you want to remove.
- Try to use some of the logic you used for questions 2 and 3 to make at least one of these methods work, preferably both!
- **Remember, clicking an option should DELETE it from the dropdown!**