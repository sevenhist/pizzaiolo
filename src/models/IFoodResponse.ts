export interface IFoodResponse {
    description: string,
    id: number,
    img: string,
    name: string,
    price: number,
    quantity: number,
    sizeandcrust?: Array<any>,
    veg?: boolean
}