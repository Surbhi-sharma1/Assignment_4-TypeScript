import { ButtonInterface } from "./ButtonInterface.js";
import { User } from "./user.js";
import { UserCRUD } from "./userCrud.js";
const DateTimeFormatter =
    (target: Object, methodName: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any) {

            const result = originalMethod.apply(this, args);
            let header = document.getElementById("Date")! as HTMLHeadElement;
            header.innerHTML += `${args[0].toLocaleString('en-US')}`;
            console.log(args[0]);
            return result;
        };

        return descriptor;
    }
class Main implements ButtonInterface {
    loadButton: HTMLButtonElement;

    userCRUD: UserCRUD;
    date: Date = new Date();
    constructor() {
        this.loadButton = <HTMLButtonElement>document.querySelector(".loadButton")!;
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
    @DateTimeFormatter
    updateDate(date: Date, text: String): void {

        let header = document.getElementById("Date")! as HTMLHeadElement;
        header.innerHTML = `"${text}" Button was last clicked on: `;
    }
}
new Main();
