import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

import { qKeyTodo, URL } from 'src/constants'

const useCompleteTodoMutation = () => {
    const queryClient = useQueryClient()

    const completeMut = () => {
        try {
            return axios
                .patch(`https://grocery-serv.onrender.com/api/items/${id}/completed`, { ...data, isComplete: true })
                .then((res) => {
                    queryClient.setQueryData(qKeyTodo(data.id), (cacheData) => ({
                        ...cacheData,
                        isComplete: true,
                    }))

                    return res.data
                })
        } catch (err) {
            throw err
        }
    }



    const {
        mutateAsync: complete,
        isLoading,
        error,
    } = useMutation(completeMut, {
        // onSuccess: () => queryClient.invalidateQueries(qKeyTodoList()),
    })

    return {
        complete,
        errorComplete: error,
        isCompleting: isLoading,
    }
}

export default useCompleteTodoMutation
