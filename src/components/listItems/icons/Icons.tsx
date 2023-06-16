import { IconButton, Tooltip } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Iitems } from "@/utils/api/items";
import { useMutateDeleteQuery } from "@/utils/hooks/reactQuery/useItemsQuery";

interface Iicons {
    item: Iitems
    id: string,
    isEditable: string,
    setIsEditable: (value: string) => void,
}
export const Icons = ({ item, id, isEditable, setIsEditable }: Iicons) => {
    const { mutate: itemDelete } = useMutateDeleteQuery()
    const onDelete = () => {
        itemDelete(id)
    }
    const setEdit = () => {
        setIsEditable(item._id)
    }
    const editCansel = () => {
        setIsEditable('')
    };
    return (
        <IconButton edge="end" aria-label="controls">
            {isEditable === item._id ?
                <>
                    <Tooltip title="done">
                        <DoneIcon
                            onClick={() => setEdit()}
                            sx={{
                                zIndex: 99,
                                fill: '#0080006e', marginRight: '10px',
                                ":hover": { fill: '#00ff00' }
                            }} />
                    </Tooltip>
                    <Tooltip title="Cancel">
                        <CloseIcon
                            onClick={() => editCansel()}
                            sx={{ fill: '#ff00006e', ":hover": { fill: '#ff0000' } }} />
                    </Tooltip>

                </> : <>
                    <Tooltip title="Edit">
                        <EditIcon
                            onClick={() => setEdit()}
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
                </>
            }
        </IconButton>
    )
}