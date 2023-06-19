import { Checkbox, ListItem, ListItemButton, ListItemIcon, TextField, Tooltip } from "@mui/material";
import { useEffect, useRef } from "react";
import { EditForm } from "@/components/editForm/EditForm";
import { ListItemForm } from "@/utils/types/types";

export const ListItemform = ({ item, setIsEditable }: ListItemForm) => {
    const listItemRef = useRef<HTMLLIElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (listItemRef.current && !listItemRef.current.contains(e.target as Node)) {
            setIsEditable('');
            document.removeEventListener('click', handleClickOutside);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ListItem
            ref={listItemRef}
            key={item._id}
            sx={{
                borderBottom: '1px solid #999'
            }}
        >
            <ListItemButton
                focusVisibleClassName={'edit'}
                disableGutters
                sx={{
                    '&.edit': {
                        backgroundColor: '#222222',
                    },
                }}
            >
                <ListItemIcon>
                    <Checkbox
                        checked={item.completed}
                        sx={{
                            color: '#999',
                            '&.Mui-checked': {
                                color: '#454545',
                            }
                        }}
                    />
                </ListItemIcon>

                <EditForm item={item} setIsEditable={setIsEditable} />
            </ListItemButton>
        </ListItem >
    )
}
