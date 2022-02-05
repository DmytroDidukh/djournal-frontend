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
    const [title, setTitle] = useState(data?.title || '');
    const [blocks, setBlocks] = useState(data?.body || []);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const publishHandler = async () => {
        setIsLoading(true);
        try {
            const isEditing = !!data;
            const post = {
                title,
                description: blocks[0].data.text,
                body: blocks,
            };

            if (isEditing) {
                await Api().post.update(data.id, post);
            } else {
                await Api().post.create(post);
            }

            await router.push('/');
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
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
            <Button
                variant='contained'
                color='primary'
                className='mt-20'
                onClick={publishHandler}
                disabled={isLoading || !title || !blocks.length}
            >
                {data ? 'Save' : 'Publish'}
            </Button>
        </div>
    );
};
