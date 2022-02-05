import React, { SetStateAction } from 'react';

interface AuthDialogContextInterface {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const defaultAuthDialogContext: AuthDialogContextInterface = {
    open: false,
    setOpen: () => {},
};

export const AuthDialogContext = React.createContext(defaultAuthDialogContext);

export const AuthDialogProvider: React.FC = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const dialogContext = { open, setOpen };

    return (
        <AuthDialogContext.Provider value={dialogContext}>{children}</AuthDialogContext.Provider>
    );
};
