export type Item = {
    _id: string;
    value: string;
    quantity: number;
    completed: boolean;
};
export type SetIsEditable = (value: string) => void;

export type ListItemForm = {
    item: Item;
    setIsEditable: SetIsEditable;
};
export type ItemToAdd = {
    value: string;
    quantity: number;
    user: string;
};

export interface TListItemTextEl extends ListItemForm {
    isEditable: string;
    filter: string;
}

export enum FilterType {
    ViewAll = 'viewAll',
    Completed = 'completed',
    Active = 'active',
}

export type THeader = {
    user: string;
    name: string;
    img: string;
};

export type IListItems = {
    filter: string;
    user: string;
};
