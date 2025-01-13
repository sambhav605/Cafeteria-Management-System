
// function to add data to the table
function addData()
{
        // get input values
    let name = document.getElementById("itemsName").value;
    let qty = document.getElementById("itemsQty").value;

    // get the table and insert a new row at the end
    let table = document.getElementById("inventoryList");
    let newRow = table.insertRow(table.rows.length);// nabujeko wala

    // to insert data into cells of the new rows
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = qty;
    newRow.insertCell(2).innerHTML =
    '<button onclick="editData(this)">Edit</button>' +
    '<button onclick="deleteData(this)">Delete</button>';

    // to clear input fields
    clearInputs();
}
// function to edit data of the table
function editData(button){
    // get the parent row of the clicked button 
    let row = button.parentNode.parentNode;// nabujeko wala part

    // get the cells within the row
    let nameCell = row.cells[0];// this on two
    let qtyCell = row.cells[1];// this one two

    // prompt the user to enter the updated value 
    let nameInput =
            prompt("Enter the updated name :",nameCell.innerHTML);
    let qtyInput = 
            prompt("Enter the updated quantity: ",qtyCell.innerHTML);

    // update the old variable with new variable
    nameCell.innerHTML = nameInput;
    qtyCell.innerHTML = qtyInput;
}
function deleteData(button){
    //get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // remove the row from the table
    row.parentNode.removeChild(row);
}

function clearInputs() {
    
    // clear input fields
    document.getElementById("itemsName").value ="";
    document.getElementById("itemsQty").value ="";
}
