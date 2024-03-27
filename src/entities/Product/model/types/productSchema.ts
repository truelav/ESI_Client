export interface ProductSchema {
    // _id: string;
    // brand: string;
    // updatedAt: string;
    // description: string;
    // category: string;
    // subcategory: string;
    // price?: string;
    // quantity?: number;
    // images?: string | undefined;
    // model: string;
    // upc: string;
    // isActive: boolean;
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

export interface filterCategory {
    name: string;
    subcategories: string[];
}

export interface ProductsAPIData extends ProductSchema {
    allProducts: ProductSchema[];
    categories: filterCategory[];
}

export enum ProductView {
    BIG = "BIG",
    SMALL = "SMALL",
}
