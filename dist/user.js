"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, FirstName, MiddleName, LastName, Email, Phone, Role, Address) {
        this.id = id;
        this.FirstName = FirstName;
        this.MiddleName = MiddleName;
        this.LastName = LastName;
        this.Email = Email;
        this.Phone = Phone;
        this.Role = Role;
        this.Address = Address;
    }
}
exports.User = User;
