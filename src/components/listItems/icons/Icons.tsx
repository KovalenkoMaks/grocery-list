import { IconButton, Tooltip } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation } from "@tanstack/react-query";
import { getItemDelete } from "@/utils/api/items";
// import { queryclient } from "@/utils/providers/ReacrQueryProvider";
import { queryClient } from "@/app/layout";

export const Icons = ({ id }: { id: string }) => {
    const { mutate: itemDelete } = useMutation({
        mutationFn: (id: string) =>
            getItemDelete(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['items'] })
    })
    const onDelete = () => {
        itemDelete(id)
    }
    return (
        <IconButton edge="end" aria-label="controls">
            <Tooltip title="Edit">
                <EditIcon
                    // onClick={() => edit(e)}
                    sx={{
                        fill: '#999', marginRight: '10px',
                        ":hover": { fill: 'white' }
                    }} />
            </Tooltip>
            <Tooltip title="Delete">
                <DeleteIcon
                    onClick={() => onDelete()}
                    sx={{ fill: '#999', ":hover": { fill: 'white' } }} />
            </Tooltip>
        </IconButton>
    )
}