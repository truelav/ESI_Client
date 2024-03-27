import { ProductSchema } from "../types/productSchema";

export const updateProductsBySearchTerm = (
    products: ProductSchema[],
    searchTerm: string
) => {
    const filteredProducts = products.filter(
        (product: ProductSchema) =>
            product.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredProducts;
};

export const updateProductsByFilter = (
    products: ProductSchema[],
    selectedFilters: string[]
) => {
    const filteredProducts = products.filter((product: ProductSchema) =>
        selectedFilters.includes(product.subcategory)
    );
    return filteredProducts;
};

export const updateProductsByFilterCategoryAndSubcategory = (
    products: ProductSchema[],
    selectedCategories,
    selectedSubcategories
) => {
    const filteredProducts = products.filter(
        (product: ProductSchema) =>
            selectedCategories.includes(product.category) ||
            selectedSubcategories.includes(product.subcategory)
    );

    console.log(filteredProducts);
    return filteredProducts;
};

export const updateProductsBySort = (
    products: ProductSchema[],
    selectedSort
) => {
    const filteredProducts = [...products];
    const sortBy: string = selectedSort.name;

    filteredProducts.sort((a: ProductSchema, b: ProductSchema) => {
        if (selectedSort.ascending) {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] > b[sortBy] ? -1 : 1;
        }
    });
    return filteredProducts;
};
