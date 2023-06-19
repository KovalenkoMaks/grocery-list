import axios from "axios";
import { Item, ItemToAdd } from "../types/types";

axios.defaults.baseURL = 'https://grocery-serv.onrender.com/api/items';
// axios.defaults.baseURL = 'http://localhost:8080/api/items';


export const getAllItems = async (filter: string, user: string) => {
    const res = await axios.get<Item[]>(`/${filter}`, {
        params: {
            user: user,
        }
    }
    );
    return res.data;
}

export const getCompletedToggle = async (id: string, body: object) => {
    const res = await axios.patch<Item>(`/${id}/completed`, body);
    return res.data;
}

export const getItemDelete = async (id: string) => {
    const res = await axios.delete<Item[]>(`/${id}`);
    return res.data
}

export const getItemAdd = async (body: ItemToAdd) => {
    const res = await axios.post<Item>(`/`, body);
    return res.data
}

export const getItemEdit = async (item: Item) => {
    const res = await axios.put<Item>(`/${item._id}`, item);
    return res.data
}