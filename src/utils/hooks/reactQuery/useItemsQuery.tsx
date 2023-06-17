import { getAllItems, getCompletedToggle, getItemAdd, getItemDelete, getItemEdit } from "@/utils/api/items"
import { queryClient } from "@/utils/providers/ReacrQueryProvider"
import { IitemToAdd, Iitems, SetIsEditable } from "@/utils/types/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"



export const useItemsQuery = (filter: string) => {
    return useQuery<Iitems[]>({
        queryFn: () => getAllItems(filter),
        queryKey: ['items', filter],
        keepPreviousData: true,
        staleTime: 2000 * 30,
        onError: (err) => {
            if (err instanceof Error) {
                return toast.error("Oops... It`s connection troubles");
            }
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['items', filter], data);
        },
    })
}
type Variables = {
    item: Iitems;
    filter: string;
};

export const useMutateCompletedQuery = () => {
    return useMutation({
        mutationFn: (variables: Variables) =>
            getCompletedToggle(variables.item._id, { completed: !variables.item.completed }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['items'] }),
    })
}

export const useMutateDeleteQuery = () => {
    return useMutation({
        mutationFn: (id: string) =>
            getItemDelete(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['items'] })
    })
}

export const useMutateAddQuery = () => {
    return useMutation({
        mutationFn: (variables: IitemToAdd) => getItemAdd(variables),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['items'] }),
    })
}

export const useMutateEditQuery = (setIsEditable: SetIsEditable) => {
    return useMutation({
        mutationFn: (item: Iitems) =>
            getItemEdit(item),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['items'] }),
                setIsEditable('')
        }
    })
}