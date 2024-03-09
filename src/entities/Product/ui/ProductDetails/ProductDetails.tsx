import { memo } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useGetSingleProductQuery } from "../../../../app/api/apiSlice";
import { ProductDetailsImage } from "./ProductsDetailsImage";
import { ProductDetailsInfo } from "./ProductDetailsInfo";

export const ProductDetails = memo(() => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleProductQuery(id);

  let content = <div></div>;

  if (isLoading) {
    content = <>Loading...</>;
  }

  if (isError) {
    content = <>No Products Found : {error}</>;
  }

  if (isSuccess) {
    content = (
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={6}>
              {/* 
               eslint-disable-next-line @typescript-eslint/ban-ts-comment */} 
              {/* 
              // @ts-ignore */}
              <ProductDetailsImage images={[product?.images] || []}/>
          </GridItem>
          <GridItem colSpan={6}>
              <ProductDetailsInfo product={product}/>
            </GridItem>
        </Grid>
    );
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
});
