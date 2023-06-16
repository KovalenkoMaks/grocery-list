import axios from "axios";

axios.defaults.baseURL = 'https://grocery-serv.onrender.com/api/items';
// axios.defaults.baseURL = 'http://localhost:8080/api/items';


export interface Iitems {
    _id: string,
    value: string,
    quantity: number,
    completed: boolean,
}

export const getAllItems = async (filter: string) => {
    const res = await axios.get<Iitems[]>(`/${filter}`);
    return res.data;
}

export const getCompletedToggle = async (id: string, body: object) => {
    // console.log(id);

    const res = await axios.patch<Iitems[]>(`/${id}/completed`, body);
    return res.data;
}

export const getItemDelete = async (id: string) => {
    const res = await axios.delete<Iitems[]>(`/${id}`);
    return res.data
}

export const getItemAdd = async (body: Omit<Iitems, '_id' | 'completed'>) => {
    const res = await axios.post<Iitems[]>(`/`, body);
    return res.data
}