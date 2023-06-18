import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TypographyStyled } from "./ListItem.styled";
import { useMutateCompletedQuery, useMutateDeleteQuery } from "@/utils/hooks/reactQuery/useItemsQuery";
import { IListItemTextEl, Iitems } from "@/utils/types/types";

export const ListItemTextEl = ({ item, setIsEditable, isEditable, filter }: IListItemTextEl) => {
    const { mutate: itemDelete } = useMutateDeleteQuery()
    const { mutate: toggleCompleted } = useMutateCompletedQuery();

    const handleToggle = (item: Iitems) => {
        if (isEditable !== '') return;
        toggleCompleted({ item, filter });
    };

    //checkBox to anotger component

    return (
        <ListItem
            sx={{ borderBottom: '1px solid #999' }}
            key={item._id}
            secondaryAction={
                <>
                    <Tooltip title="Edit">
                        <EditIcon
                            onClick={() => setIsEditable(item._id)}
                            sx={{ fill: '#999', marginRight: '10px', ":hover": { fill: 'white' } }} />
                    </Tooltip>

                    <Tooltip title="Delete">
                        <DeleteIcon
                            onClick={() => itemDelete(item._id)}
                            sx={{ fill: '#999', ":hover": { fill: 'white' } }} />
                    </Tooltip>
                </>}
        >
            <ListItemButton
                focusVisibleClassName={'edit'}
                disableGutters
                onClick={() => handleToggle(item)}
                sx={{ '&.edit': { backgroundColor: '#222222' } }}
            >
                <ListItemIcon>
                    <Checkbox
                        checked={item.completed}
                        sx={{ color: '#999', '&.Mui-checked': { color: '#454545' } }}
                    />
                </ListItemIcon>
                <ListItemText
                    sx={{ width: '100%', marginRight: '10px' }}
                    primary={
                        <TypographyStyled
                            className={item.completed ? 'checked' : ''}
                        >{item.value}
                        </TypographyStyled>
                    }
                />
                <ListItemText
                    sx={{ textAlign: 'end' }}
                    primary={
                        <TypographyStyled
                            className={item.completed ? 'checked' : ''}
                        >{item.quantity}
                        </TypographyStyled>
                    }
                />
            </ListItemButton>
        </ListItem >
    );
}