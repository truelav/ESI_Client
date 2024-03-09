import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, memo, useEffect, useState } from "react";
import { Button, VStack, Grid, GridItem } from "@chakra-ui/react";

import { useEditSingleProductMutation } from "../../../app/api/apiSlice";
import { Product } from "../../../entities/Product/model/types/productSchema";
import { FormResult } from "../../forms/FormResult/FormResult";

import {
    initialStore,
    productInitialStoreTypes,
} from "../../../features/products/EditSingleProduct/model/store/EditSingleProductInitialStore";
import { prepareDataToSave } from "../../../features/products/EditSingleProduct/model/service/EditSingleProductServices";

import { EditProductInfo } from "../../../features/products/EditSingleProduct/ui/EditProductInfo/EditProductInfo";
import { EditProductPrice } from "../../../features/products/EditSingleProduct/ui/EditProductPrice/EditProductPrice";
import { EditProductFeatures } from "../../../features/products/EditSingleProduct/ui/EditProductFeatures/EditProductFeatures";
import { AddProductFeatures } from "../../../features/products/EditSingleProduct/ui/EditProductFeatures/AddProductFeature";
import { EditProductImages } from "../../../features/products/EditSingleProduct/ui/EditProductImages/EditProductImages";

export interface EditProductFormProps {
    product: Partial<Product>;
}

export const DashProductDetails = memo((props: EditProductFormProps) => {
    const { product } = props;
    const [formData, setFormData] =
        useState<productInitialStoreTypes>(initialStore);
    const [imagePreview, setImagePreview] = useState(formData.images);
    const [editSingleProduct, { isLoading, error, isSuccess }] =
        useEditSingleProductMutation();

    console.log(product);

    useEffect(() => {
        setFormData({
            ...initialStore,
            ...product,
            currentImage: product.images,
        });
        setImagePreview(product.images);
    }, [product, formData]);

    console.log(formData);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(value, name);
        setFormData({ ...formData, [name]: value });
    };

    const handleEditFeature = (oldFeature: string, newFeature: string) => {
        const updatedFeatures = formData.features.map((feature) =>
            feature === oldFeature ? newFeature : feature
        );
        setFormData({ ...formData, features: updatedFeatures });
    };

    const handleAddFeature = () => {
        const updatedFeatures = [...formData.features, formData.newFeature];
        setFormData({ ...formData, features: updatedFeatures, newFeature: "" });
        console.log(formData.features);
    };

    const handleDeleteFeature = (feature: string) => {
        console.log(feature, formData.features);
        const updatedFeatures = formData.features.filter((existingFeature) => {
            return existingFeature != feature;
        });
        setFormData({ ...formData, features: updatedFeatures });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData({ ...formData, images: file });

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formDataToSend = prepareDataToSave(formData);

        try {
            console.log("formData: " + formDataToSend);
            const result = await editSingleProduct(formDataToSend);
            console.log("result: " + result);
        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    };

    if (isSuccess) {
        return (
            <FormResult
                headlineText={`Product Saved ${formData.model} Success`}
                bodyText={formData.description}
            >
                <Link to={`/products`}>
                    <Button>Check Added Product</Button>
                </Link>
            </FormResult>
        );
    }

    if (error) {
        return <div>...Error Adding Product: {JSON.stringify(error)}</div>;
    }

    if (isLoading) {
        return <div>...Is Loading</div>;
    }

    return (
        <>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem colSpan={6} colStart={4}>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <VStack spacing={4}>
                            <EditProductInfo
                                productInfo={formData}
                                handleChange={handleChange}
                            />
                            <EditProductPrice
                                productInfo={formData}
                                handleChange={handleChange}
                            />

                            <EditProductImages
                                handleFileChange={handleFileChange}
                                imagePreview={imagePreview}
                                altInfo={formData.description}
                            />

                            <AddProductFeatures
                                newFeature={formData.newFeature}
                                handleChange={handleChange}
                                handleAddFeature={handleAddFeature}
                            />
                            <EditProductFeatures
                                features={formData.features}
                                handleChange={handleChange}
                                handleEditFeature={handleEditFeature}
                                handleDeleteFeature={handleDeleteFeature}
                            />

                            <Button type="submit" colorScheme="blue">
                                Save Product
                            </Button>
                        </VStack>
                    </form>
                </GridItem>
            </Grid>
        </>
    );
});
