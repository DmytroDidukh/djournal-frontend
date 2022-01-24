import React from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

// STYLES
import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
    title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
    return (
        <div>
            <Input classes={{ root: styles.titleField }} placeholder='Title' defaultValue={title} />
            <div className={styles.editor}>
                <Editor />
            </div>
            <Button variant='contained' color='primary'>
                Publish
            </Button>
        </div>
    );
};
