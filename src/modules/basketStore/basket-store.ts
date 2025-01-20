import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IFoodResponse } from "models/IFoodResponse";

interface BasketState {
    items: IFoodResponse[];
    isOpen: boolean;
    addItem: (item: IFoodResponse) => void;
    removeItem: (itemId: number) => void;
    toggleBasket: () => void;
    closeBasket: () => void;
    confirmOrder: () => void;
}

const useBasketStore = create<BasketState>()(devtools(immer((set, get) => ({
    items: [],
    isOpen: false,
    addItem: (item: IFoodResponse) => set((state) => {
        state.items.push(item);
    }),
    removeItem: (itemId: number) => set((state) => {
        state.items = state.items.filter(item => item.id !== itemId);
    }),
    toggleBasket: () => set((state) => {
        state.isOpen = !state.isOpen;
    }),
    closeBasket: () => set((state) => {
        state.isOpen = false;
    }),
    confirmOrder: () => {
        const items = get().items;
        console.log('Order confirmed with items:', items.map(item => item.name));
        set((state) => {
            state.items = [];
            state.isOpen = false;
        });
    }
})), { name: 'basketStore', version: 1 }))

export default useBasketStore;
