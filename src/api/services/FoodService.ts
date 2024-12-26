import $api, { API_URL } from "api/http";
import { IFoodResponse } from "models/IFoodResponse";

export default class FoodService {
    static async getAllPizza() {
        return $api.get<Array<IFoodResponse>>(`/pizza`)
    }
    static async getOnePizza(pizzaId: string) {
        return $api.get<IFoodResponse>(`/pizza/${pizzaId}`)
    }
    static async getAllDesserts() {
        return $api.get<Array<IFoodResponse>>(`/desserts`)
    }
    static async getOneDessert(dessertId: string) {
        return $api.get<IFoodResponse>(`/desserts/${dessertId}`)
    }
}