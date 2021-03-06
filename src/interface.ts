import { User } from "./user.js";

export interface CRUD<T> {
    create(ob: T): void;
    read(): void;
    update(ob: T): void;
    delete(ob: T): void;
    cancel(ob: T): void
}
//s