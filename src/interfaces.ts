export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export type TCreateProduct = Pick<IProduct, 'name' | 'price'>;
export type TMessage = {
    message: string
};

export interface IProductList {

    createProduct(data: TCreateProduct): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: TCreateProduct): IProduct;
    deleteProduct(id: number): TMessage;
}