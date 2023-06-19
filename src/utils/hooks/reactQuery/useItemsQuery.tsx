import { getAllItems, getCompletedToggle, getItemAdd, getItemDelete, getItemEdit } from "@/utils/api/items"
import { queryClient } from "@/utils/providers/ReacrQueryProvider"
import { ItemToAdd, Item, SetIsEditable } from "@/utils/types/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useSessionUser } from "../auth/useSessionUser"

export const useItemsQuery = (filter: string, user: string) => {
    return useQuery<Item[]>({
        queryFn: () => getAllItems(filter, user as string),
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
    item: Item;
    filter: string;
};

export const useMutateCompletedQuery = () => {
    return useMutation({
        mutationFn: (variables: Variables) =>
            getCompletedToggle(variables.item._id, { completed: !variables.item.completed }),
        onSuccess: () => queryClient.invalidateQueries(['items'])

    })
}

export const useMutateEditQuery = (setIsEditable: SetIsEditable) => {
    const queryKeys: [string, string][] = [
        ['items', 'viewAll'],
        ['items', 'active'],
        ['items', 'completed'],
    ];

    return useMutation<Item, unknown, Item>((item: Item) => getItemEdit(item), {
        onSuccess: (data: Item) => {
            queryKeys.forEach((key) => {
                queryClient.setQueryData(key, (oldData: Item[] | undefined) => {
                    if (oldData) {
                        const updatedData = oldData.map((item) => {
                            if (item._id === data._id) {
                                return {
                                    _id: item._id,
                                    value: data.value,
                                    quantity: data.quantity,
                                    completed: data.completed,
                                };
                            }
                            return item;
                        });
                        return updatedData;
                    }
                });
            });
            setIsEditable('');
        },
    });
};


export const useMutateDeleteQuery = () => {
    return useMutation({
        mutationFn: (id: string) => getItemDelete(id),
            
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['items'] }),
        
    })
}


export const useMutateAddQuery = () => {
    const queryKeys: [string, string][] = [
        ['items', 'viewAll'],
        ['items', 'active'],
    ];
    const session = useSessionUser();
    const user = session?.data?.user?.email ?? '';

    return useMutation((variables: ItemToAdd) =>
        getItemAdd({ ...variables, user }), {
        onSuccess: (data: Item) => {
            queryKeys.forEach(key => {
                queryClient.setQueryData(key, (oldQueryData: Item[] | undefined) => {
                    if (oldQueryData) {
                        const updatedData = [...oldQueryData, data];
                        return updatedData;
                    }
                    return;
                });
            });
        },
    });
};
