import { Role } from "./role.js";
import { data } from "./data.js";
export class UserCRUD {
    constructor() {
        this.users = data;
        this.tableContainer = document.querySelector('.Table');
        this.table = document.createElement("table");
        this.table.id = 'table';
    }
    create(user) {
        this.createTable();
    }
    // Creating Table and loading Data.
    createTable() {
        // Checking for  existing Table element.
        while (this.table.rows.length > 0) {
            this.table.deleteRow(0);
        }
        if (this.users.length == 0) {
            return;
        }
        // Adding a Header row in the Table
        let newHeader = this.table.insertRow();
        for (const [key, value] of Object.entries(data[0])) {
            var cell = newHeader.insertCell();
            var text = document.createTextNode(key);
            cell.appendChild(text);
        }
        //Adding the data in the Table body.
        for (let i = 0; i < this.users.length; i++) {
            let newRow = this.table.insertRow();
            newRow.id = i.toString();
            for (const [key, value] of Object.entries(data[i])) {
                let newCell = newRow.insertCell();
                let text = document.createTextNode(value.length > 0 ? value : "");
                newCell.append(text);
            }
            // Adding Edit Button in the row.
            let cell1 = newRow.insertCell();
            let editButton = document.createElement('Button1');
            editButton.innerHTML = "Edit";
            editButton.id = "button1" + i;
            editButton.classList.add("editButton");
            cell1.appendChild(editButton);
            // Adding an event listener to Edit button.
            editButton.addEventListener('click', (e) => {
                if (editButton.innerHTML === 'Edit') {
                    editButton.innerHTML = 'Save';
                    return this.update(this.users[i]);
                }
                else {
                    editButton.innerHTML = 'Edit';
                    return this.saveData(this.users[i]);
                }
            });
            //Adding Delete Button in the row.
            let cell2 = newRow.insertCell();
            let deleteButton = document.createElement('button2');
            deleteButton.innerHTML = 'Delete';
            deleteButton.id = 'button2' + i;
            deleteButton.classList.add("deleteButton");
            cell2.append(deleteButton);
            //Adding an event listener to Delete Button.
            deleteButton.addEventListener('click', () => {
                if (deleteButton.innerHTML === 'Delete') {
                    return this.delete(this.users[i]);
                }
                else {
                    deleteButton.innerHTML = 'Delete';
                    return this.cancel(this.users[i]);
                }
            });
            this.tableContainer.append(this.table);
        }
    }
    // Updating  the User Data.
    update(user) {
        let n = this.users.indexOf(user);
        let tr = this.table.rows[n + 1];
        tr.contentEditable = "true";
        let button2 = document.getElementById("button2" + n);
        button2.innerHTML = "Cancel";
        //Creating a dropdown list for Roles.
        let select = document.createElement("select");
        select.classList.add("select");
        for (const i in Role) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            if (tr.children[6].textContent === i) {
                option.selected = true;
            }
            else
                option.selected = false;
            select.appendChild(option);
        }
        tr.children[6].replaceWith(select);
    }
    // Saving the User Data.
    saveData(user) {
        let n = this.users.indexOf(user);
        let tr = this.table.rows[n + 1];
        tr.contentEditable = 'false';
        let Button2 = document.getElementById('button2' + n);
        Button2.innerHTML = "Delete";
        //for saving the selected option.
        for (let i = 0; i <= 2; i++) {
            let s = tr.children[6].children[i];
            if (s.selected) {
                user.Role = s.textContent;
            }
        }
        let td = document.createElement("td");
        tr.children[6].replaceWith(user.Role);
        tr.children[6].innerHTML = user.Role;
    }
    // For deleting any User from the table.
    delete(user) {
        let n = this.users.indexOf(user);
        this.table.deleteRow(n + 1);
        this.users.forEach((item, index) => {
            if (item === user)
                this.users.splice(index, 1);
        });
        this.createTable();
    }
    // Reverting the changes back.
    cancel(user) {
        let n = this.users.indexOf(user);
        let tr = this.table.rows[n + 1];
        let Button1 = document.getElementById("button1" + n);
        Button1.innerHTML = "Edit";
        tr.contentEditable = 'false';
        tr.children[0].textContent = user.id;
        tr.children[1].textContent = user.FirstName;
        tr.children[2].textContent = user.MiddleName;
        tr.children[3].textContent = user.LastName;
        tr.children[4].textContent = user.Email;
        tr.children[5].textContent = user.Phone;
        tr.children[6].innerHTML = user.Role;
        let td = document.createElement("td");
        tr.children[6].replaceWith(td);
        tr.children[6].innerHTML = user.Role;
        tr.children[7].textContent = user.Address;
    }
    read() {
    }
    refreshData() {
        this.createTable();
    }
}
