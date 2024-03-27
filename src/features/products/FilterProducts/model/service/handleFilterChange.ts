import { store } from "../../../../../app/providers/StoreProvider/store";
import { addSelectedFilter, removeSelectedFilter } from "../slice/filterSlice";

// const dispatch = useDispatch()

export const handleFilterChange = (filter: string, isSelected: boolean) => {
    if (isSelected) {
        store.dispatch(addSelectedFilter(filter));
    } else {
        store.dispatch(removeSelectedFilter(filter));
    }
};
