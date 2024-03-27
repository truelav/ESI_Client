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

export interface ProductsAPIData {
    allProducts: ProductSchemaInterface[] | [];
    categories: ProductFilterSchemaInterface[] | [];
}

export interface ProductsBrandedSchemaInterface {
    category: string;
    products: ProductSchemaInterface[];
}

export interface ProductSliceMetadataSchema {
    totalProducts: number;
    totalBrands: number;
    totalCategories: number;
}

export interface ProductSliceSchema {
    products: ProductSchemaInterface[] | [];
    selectedProductIds: [];
    categoryProducts: [];
    metadataProducts: ProductSliceMetadataSchema;
}
