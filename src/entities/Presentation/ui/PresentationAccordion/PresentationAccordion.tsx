import {
    Accordion,
} from "@chakra-ui/react";

import { useGetGroupedProductsQuery } from "../../../../app/api/apiSlice";
import { GroupedProducts } from "../../../../app/api/types/Product";
import PresentationAccordionItem from "../PresentationAccordionItem/PresentationAccordionItem";

const PresentationAccordion = () => {

    const {
        data: dataProducts,
        isLoading: isLoadingDataProducts,
        isSuccess: isSuccessDataProducts,
        isError: isErrorDataProducts,
        error: errorDataProducts,
    } = useGetGroupedProductsQuery();

    console.log(dataProducts)
    let content = <div></div>;

    if (isLoadingDataProducts) {
        content = <>Loading Presentation Products ...</>;
    }
    
    if (isErrorDataProducts) {
        content = (
            <>
                No Products Found :{" "}
                {JSON.stringify(errorDataProducts)}
            </>
        );
    }
    
    if (isSuccessDataProducts) {
        content = (
            <>
                <Accordion defaultIndex={[0]} allowMultiple>
                    {dataProducts?.map((category: GroupedProducts) => (
                        <PresentationAccordionItem 
                            category={category}
                            key={category.category}
                        />
                    ))}
                </Accordion>
            </>
        );
    }

    return (
        <>
            {content}
        </>
    )
}

export default PresentationAccordion