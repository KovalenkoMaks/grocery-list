export interface Iitems {
    _id: string,
    value: string,
    quantity: number,
    completed: boolean,
}
export type SetIsEditable = (value: string) => void;

export interface IListItemForm {
    item: Iitems,
    setIsEditable: SetIsEditable;
}
export interface IitemToAdd {
    value: string,
    quantity: number,
}

export type IListItemTextEl = {
    setIsEditable: SetIsEditable,
    item: Iitems,
    isEditable: string,
    filter: string,
};

