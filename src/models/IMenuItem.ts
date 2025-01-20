export const MenuItems = {
    pizza: "Pizza",
    dessert: "Dessert",
    drink: "Drink"
}

export type ItemActive = keyof typeof MenuItems

export interface IMenuItem {
    srcImg: string;
    name: string;
    itemActive: ItemActive;
}

