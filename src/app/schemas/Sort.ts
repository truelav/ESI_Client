interface SelectedSortSchema {
    name: null | boolean;
    ascending: boolean;
    descending: boolean;
}

interface MetadataSortSchema {
    totalSort: number;
}

export interface SortSliceSchema {
    sortList: string[];
    selectedSort: SelectedSortSchema;
    metadataSort: MetadataSortSchema;
}
