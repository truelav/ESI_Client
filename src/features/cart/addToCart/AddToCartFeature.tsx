import { Button, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ProductSchema } from "../../../entities/Product/model/types/productSchema";
import { addToCart } from "../../../entities/Profile/model/slice/profileSlice";

interface AddToCartProps {
    product: ProductSchema;
}

const AddToCart = (props: AddToCartProps) => {
    const { product } = props;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.profile.cart.products);
    const isProductsInCart = cart.includes(product);

    const handleAddToCart = (product: ProductSchema) => {
        dispatch(addToCart(product));
    };

    let content = <></>;

    if (isProductsInCart) {
        content = (
            <Button variant="solid" colorScheme="blue" isDisabled={true}>
                Product Added
            </Button>
        );
    } else {
        content = (
            <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => handleAddToCart(product)}
            >
                Add to cart
            </Button>
        );
    }

    return <Box>{content}</Box>;
};

export default AddToCart;
