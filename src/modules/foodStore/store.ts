import FoodService from "api/services/FoodService";
import { IFoodResponse } from "models/IFoodResponse";
import { ItemActive } from "models/IMenuItem";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface FoodState {
    foodList: IFoodResponse[] | null,
    currentPizza: IFoodResponse | null,
    currentDessert: IFoodResponse | null,
    isLoading: boolean,
    activeMenuItem: ItemActive,
    currentSearch: string,
    activeMenuItemText: string,
    setActiveMenuItemText: () => void,
    setIsLoading: (load: boolean) => void,
    setActiveMenuItem: (currentItem: ItemActive) => void,
    setCurrentSearch: (newSearch: string) => void,
    getCurrentPizza: (pizzaId: string) => Promise<void>,
    getAllPizza: () => Promise<void>,
    getCurrentDessert: (dessertId: string) => Promise<void>,
    getAllDesserts: () => Promise<void>,
    getFoodList: () => Promise<void>,
}

const useFoodStore = create<FoodState>()(devtools(immer((set, get) => ({
    foodList: null,
    currentPizza: null,
    currentDessert: null,
    isLoading: false,
    activeMenuItem: "pizza",
    currentSearch: '',
    activeMenuItemText: '',
    setIsLoading: (load: boolean) => set(() => ({
        isLoading: load,
    })),
    setCurrentSearch: (newSearch: string) => set(() => ({
        currentSearch: newSearch
    })),
    setActiveMenuItem: (currentItem: ItemActive) => {
        set(() => ({
            activeMenuItem: currentItem,
        }));
    },
    getAllPizza: async () => {
        get().setIsLoading(true);
        try {
            const response = await FoodService.getAllPizza();
            set({ foodList: response.data });
        } catch (error: any) {
            throw new Error(error.response?.data?.message || error.message);
        } finally {
            get().setIsLoading(false);
        }
    },
    getCurrentPizza: async (pizzaId: string) => {
        get().setIsLoading(true);
        try {
            const response = await FoodService.getOnePizza(pizzaId);
            set({ currentPizza: response.data });
        } catch (error: any) {
            throw new Error(error.response?.data?.message || error.message);
        } finally {
            get().setIsLoading(false);
        }
    },
    getCurrentDessert: async (dessertId: string) => {
        get().setIsLoading(true);
        try {
            const response = await FoodService.getOneDessert(dessertId);
            set({ currentDessert: response.data });
        } catch (error: any) {
            throw new Error(error.response?.data?.message || error.message);
        } finally {
            get().setIsLoading(false);
        }
    },
    getAllDesserts: async () => {
        get().setIsLoading(true);
        try {
            const response = await FoodService.getAllDesserts();
            set({ foodList: response.data });
        } catch (error: any) {
            throw new Error(error.response?.data?.message || error.message);
        } finally {
            get().setIsLoading(false);
        }
    },
    getFoodList: async () => {
        get().setCurrentSearch("");
        if (get().activeMenuItem == "pizza") {
            get().getAllPizza();
        } else if (get().activeMenuItem == "dessert") {
            get().getAllDesserts();
        }
    },
    setActiveMenuItemText: () =>
        set(() => {
            let activeMenuItemText = 'Unknown';
            if (get().activeMenuItem === "pizza") {
                activeMenuItemText = 'Pizza';
            } else if (get().activeMenuItem === "dessert") {
                activeMenuItemText = 'Dessert';
            }
            return { activeMenuItemText };
        })
})), { name: 'foodStore', version: 1 }))

export default useFoodStore