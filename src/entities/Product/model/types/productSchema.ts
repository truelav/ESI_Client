export interface ProductSchema {
    _id: string;
    name: string;
    brand: string;
    updatedAt: string;
    description: string;
    category: string;
    subcategory: string;
    price?: string;
    quantity?: number;
    images?: string | undefined;
    model: string;
    upc: string;
    isActive: boolean;
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
