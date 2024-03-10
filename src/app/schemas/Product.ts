export interface ProductSchemaInterface {
    _id: string;
    model: string;
    brand: string;
    category: string;
    subcategory: string;
    createdAt: string;
    description: string;
    features: string[];
    images: string;
    isActive: boolean;
    price: number;
    quantity: number;
    upc: string;
    updatedAt: string;
}

export interface ProductFilterSchemaInterface {
    name: string;
    subcategories: string[];
}

export interface ProductsAPIData extends ProductSchemaInterface {
    allProducts: ProductSchemaInterface[] | [];
    categories: ProductFilterSchemaInterface[] | [];
}
