var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserCRUD } from "./userCrud.js";
const DateTimeFormatter = (target, methodName, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        let header = document.getElementById("Date");
        header.innerHTML += `${args[0].toLocaleString('en-US')}`;
        return result;
    };
    return descriptor;
};
class Main {
    constructor() {
        this.date = new Date();
        this.loadButton = document.querySelector(".loadButton");
        this.loadButton.id = "button1";
        this.userCRUD = new UserCRUD();
        this.loadButton.addEventListener('click', () => this.load());
    }
    load() {
        if (this.loadButton.innerHTML == "Load Data") {
            this.userCRUD.createTable();
            this.updateDate(new Date(), this.loadButton.innerHTML);
            this.loadButton.innerHTML = "Refresh";
        }
        else {
            this.userCRUD.refreshData();
            this.updateDate(new Date(), this.loadButton.innerHTML);
        }
    }
    updateDate(date, text) {
        let header = document.getElementById("Date");
        header.innerHTML = `"${text}" Button was last clicked on: `;
    }
}
__decorate([
    DateTimeFormatter,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, String]),
    __metadata("design:returntype", void 0)
], Main.prototype, "updateDate", null);
new Main();
