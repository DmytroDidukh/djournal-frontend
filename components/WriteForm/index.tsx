import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import clsx from 'clsx';

// UTILS & SERVICES
import { Api } from 'api';
import { PostDtoType } from 'api/types';
// STYLES
import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
    data?: PostDtoType;
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
    const [title, setTitle] = useState(data ? data.title : '');
    const [blocks, setBlocks] = useState(data ? data.body : []);

    const router = useRouter();

    const publishHandler = async () => {
        if (!title || !blocks) {
            return;
        }

        try {
            const post = {
                title,
                description: blocks[0].data.text,
                body: blocks,
            };

            const resp = await Api().post.create(post);

            console.log(resp);
            await router.push('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Input
                classes={{ root: styles.titleField }}
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className={clsx(styles.editor, 'p-20')}>
                <Editor initialBlocks={blocks} onChange={setBlocks} />
            </div>
            <Button variant='contained' color='primary' className='mt-20' onClick={publishHandler}>
                Publish
            </Button>
        </div>
    );
};
