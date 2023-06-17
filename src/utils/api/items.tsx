import axios from "axios";
import { Iitems } from "../types/types";

axios.defaults.baseURL = 'https://grocery-serv.onrender.com/api/items';
// axios.defaults.baseURL = 'http://localhost:8080/api/items';


export const getAllItems = async (filter: string, user: string) => {
    const res = await axios.get<Iitems[]>(`/${filter}`, {
        params: {
            user: user,
        }
    }
    );
    return res.data;
}

export const getCompletedToggle = async (id: string, body: object) => {
    const res = await axios.patch<Iitems[]>(`/${id}/completed`, body);
    return res.data;
}

export const getItemDelete = async (id: string) => {
    const res = await axios.delete<Iitems[]>(`/${id}`);
    return res.data
}
type AddItem = {
    // _id: string,
    value: string,
    quantity: number,
    user: string
}
export const getItemAdd = async (body: AddItem) => {
    const res = await axios.post<Iitems[]>(`/`, body);
    return res.data
}

export const getItemEdit = async (item: Iitems) => {
    const res = await axios.put<Iitems[]>(`/${item._id}`, item);
    return res.data
}