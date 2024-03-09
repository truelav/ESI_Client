import { Box } from "@chakra-ui/react";
import { filterCategory } from "../../../../../entities/Product/model/types/productSchema";

import { SubcategoryAccordion } from "../SubcategoryAccordion/SubcategoryAccordion";

interface FilterItemProps {
    filterItem: filterCategory;
}

const FilterItem = (props: FilterItemProps) => {
    const { filterItem } = props;

    return (
        <Box margin={2}>
            <SubcategoryAccordion
                category={filterItem.name}
                subcategories={filterItem.subcategories}
            />
        </Box>
    );
};

export default FilterItem;
