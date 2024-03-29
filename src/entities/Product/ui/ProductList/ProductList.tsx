import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ProductSchema } from "../../model/types/productSchema";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import {
    updateProductsBySearchTerm,
    updateProductsBySort,
    updateProductsByFilterCategoryAndSubcategory,
} from "../../model/service/filterSortAndSearchProduct";
import { StateSchema } from "../../../../app/providers/StoreProvider/StateSchema";

const ProductList = (props: {
    products: ProductSchema[] | [];
    searchTerm: string;
}) => {
    const { products, searchTerm } = props;
    const selectedCategories = useSelector(
        (state: StateSchema) => state.filter.categories
    );
    const selectedSubCategories = useSelector(
        (state: StateSchema) => state.filter.subcategories
    );
    const selectedSort = useSelector(
        (state: StateSchema) => state.sort.selectedSort
    );

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
