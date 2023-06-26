import { ListItem, ListItemButton, ListItemText, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    useMutateCompletedQuery,
    useMutateDeleteQuery,
} from '@/utils/hooks/reactQuery/useItemsQuery';
import { TListItemTextEl, Item } from '@/utils/types/types';
import { CheckBox } from '@/components/checkBox/CheckBox';

import { TypographyStyled } from './ListItem.styled';

export const ListItemTextEl = ({ item, setIsEditable, isEditable, filter }: TListItemTextEl) => {
    const { mutate: itemDelete } = useMutateDeleteQuery();
    const { mutate: toggleCompleted } = useMutateCompletedQuery();

    const handleToggle = (item: Item) => {
        if (isEditable !== '') return;
        toggleCompleted({ item, filter });
    };

    return (
        <ListItem
            sx={{ borderBottom: '1px solid #999' }}
            key={item._id}
            secondaryAction={
                <>
                    <Tooltip title="Edit">
                        <EditIcon
                            onClick={() => setIsEditable(item._id)}
                            sx={{
                                fill: '#999',
                                marginRight: '10px',
                                cursor: 'pointer',
                                ':hover': { fill: 'white' },
                            }}
                        />
                    </Tooltip>

                    <Tooltip title="Delete">
                        <DeleteIcon
                            onClick={() => itemDelete(item._id)}
                            sx={{ fill: '#999', cursor: 'pointer', ':hover': { fill: 'white' } }}
                        />
                    </Tooltip>
                </>
            }
        >
            <ListItemButton
                focusVisibleClassName={'edit'}
                disableGutters
                onClick={() => handleToggle(item)}
                sx={{ '&.edit': { backgroundColor: '#222222' }, maxWidth: '650px' }}
            >
                <CheckBox item={item} />

                <ListItemText
                    sx={{ width: '100%', marginRight: '10px' }}
                    primary={
                        <TypographyStyled className={item.completed ? 'checked' : ''}>
                            {item.value}
                        </TypographyStyled>
                    }
                />
                <ListItemText
                    sx={{ textAlign: 'end' }}
                    primary={
                        <TypographyStyled className={item.completed ? 'checked' : ''}>
                            {item.quantity}
                        </TypographyStyled>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
};
