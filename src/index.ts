import {
    IProduct, 
    IProductList, 
    TCreateProduct,
    TMessage, 
} from "./interfaces";

class ProductList implements IProductList {
    private productList: IProduct[] = [];
    id: number = 1;

    createProduct(data: TCreateProduct): IProduct {
        const newObject: IProduct = {
            id: this.id++,
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.productList.push(newObject);
        
        return newObject;
    }

    getProducts(): IProduct[] {
        return this.productList;
    }

    getOneProduct(id: number): IProduct | undefined {
       return this.productList.find(product => product.id === id);
    }

    updateProduct(id: number, data: TCreateProduct): IProduct {
        
        const findProduct = this.productList.findIndex((product) => id === product.id);

        const updatedProduct: IProduct = {
            id: id,
            name: data.name,
            price: data.price,
            createdAt: this.productList[findProduct].createdAt,
            updatedAt: new Date(),
        };

        this.productList.splice(findProduct, 1, updatedProduct);
        return updatedProduct;
    }

    deleteProduct(id: number): TMessage {
        const findProduct = this.productList.findIndex((product) => id === product.id);

        this.productList.splice(findProduct, 1);

        return { message: "Product sucessfully deleted."};
    }

}

export const productList = new ProductList;
