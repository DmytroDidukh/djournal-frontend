import React, { SetStateAction } from 'react';

interface DialogContextInterface {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const defaultDialogContext: DialogContextInterface = {
    open: false,
    setOpen: () => {},
};

export const DialogContext = React.createContext(defaultDialogContext);

export const DialogProvider: React.FC = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const dialogContext = { open, setOpen };

    return <DialogContext.Provider value={dialogContext}>{children}</DialogContext.Provider>;
};
