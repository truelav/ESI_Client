import { useMemo } from "react";
import { useSelector } from "react-redux";

import { ProductSchema } from "../../model/types/productSchema";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import {
    updateProductsBySearchTerm,
    updateProductsBySort,
    updateProductsByFilterCategoryAndSubcategory,
} from "../../model/service/filterSortAndSearchProduct";

const ProductList = (props: {
    products: ProductSchema[] | never[];
    searchTerm: string;
}) => {
    const { products, searchTerm } = props;

    const selectedCategories = useSelector((state) => state.filter.categories);
    const selectedSubCategories = useSelector(
        (state) => state.filter.subcategories
    );
    const selectedSort = useSelector((state) => state.sort.selectedSort);

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products || [];

        if (searchTerm) {
            filteredProducts = updateProductsBySearchTerm(
                filteredProducts,
                searchTerm
            );
        }
        if (selectedCategories.length || selectedSubCategories.length) {
            filteredProducts = updateProductsByFilterCategoryAndSubcategory(
                filteredProducts,
                selectedCategories,
                selectedSubCategories
            );
        }
        if (selectedSort.name) {
            filteredProducts = updateProductsBySort(
                filteredProducts,
                selectedSort
            );
        }
        return filteredProducts;
    }, [
        searchTerm,
        products,
        selectedSort,
        selectedCategories,
        selectedSubCategories,
    ]);

    return (
        <>
            <h2>Product List: </h2>
            <div>
                {filteredAndSortedProducts.map((product: ProductSchema) => (
                    <ProductListItem key={"" + product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;
