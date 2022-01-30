import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

// STYLES
import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
    data?: any;
}

export const WriteForm: React.FC<WriteFormProps> = () => {
    const [title, setTitle] = useState('');
    const [blocks, setBlocks] = useState(null);

    console.log(blocks);

    return (
        <div>
            <Input
                classes={{ root: styles.titleField }}
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.editor}>
                <Editor onChange={setBlocks} />
            </div>
            <Button variant='contained' color='primary'>
                Publish
            </Button>
        </div>
    );
};
