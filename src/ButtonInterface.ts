export interface ButtonInterface {
    load(): void;
    loadButton: HTMLButtonElement;
    updateDate(date: Date, text: string): void;
}