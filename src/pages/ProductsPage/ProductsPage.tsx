import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";

import { useGetAllProductsQuery } from "../../app/api/productApiSlice";
import { setFilters } from "../../features/products/FilterProducts/model/slice/filterSlice";

import { ProductSearchBar } from "../../entities/Product/ui/ProductSearchBar/ProductSearchBar";
import { ProductSortBar } from "../../entities/Product/ui/ProductSortBar/ProductSortBar";
import ProductList from "../../entities/Product/ui/ProductList/ProductList";
import FilterBar from "../../features/products/FilterProducts/ui/FilterBar/FilterBar";
import DashProductListSkeleton from "../../components/products/DashProductListSkeleton/DashProductListSkeleton";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess, isError, error } =
        useGetAllProductsQuery();

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (data) {
            const filterList = data.categories;
            dispatch(setFilters(filterList));
        }
    }, [data, dispatch]);

    let content = <div></div>;

    if (isLoading) {
        content = <DashProductListSkeleton />;
        console.log("Loading Products...");
    }

    if (isError) {
        content = <>No Products Found : {JSON.stringify(error)}</>;
        console.log(error);
    }

    if (isSuccess) {
        content = (
            <ProductList products={data.allProducts} searchTerm={searchTerm} />
        );
        console.log("Product Loaded!");
    }

    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={3}>
                <FilterBar />
            </GridItem>
            <GridItem colSpan={9}>
                <ProductSearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <ProductSortBar />
                {content}
            </GridItem>
        </Grid>
    );
};

export default ProductsPage;
