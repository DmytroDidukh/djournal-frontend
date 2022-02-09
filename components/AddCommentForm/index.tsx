import React from 'react';
import Input from '@material-ui/core/Input';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import { AxiosError } from 'axios';

// UTILS & SERVICES
import { Api } from 'api';
import { CommentDtoType } from 'api/types';
// STYLES
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    postId: number;
    onSuccessAdd: (comment: CommentDtoType) => void;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId, onSuccessAdd }) => {
    const [clicked, setClicked] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [text, setText] = React.useState('');

    const onAddComment = async () => {
        try {
            setIsLoading(true);
            const comment = await Api().comment.create({ postId, text });

            onSuccessAdd(comment);

            setClicked(false);
            setError(null);
            setText('');
        } catch (err) {
            if (err.response) {
                const _err: AxiosError = err;
                setError(_err.response.data);
            } else {
                setError(err);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.form}>
            <Input
                onChange={(e) => setText(e.target.value)}
                value={text}
                onFocus={() => setClicked(true)}
                error={!!error}
                minRows={clicked ? 5 : 1}
                classes={{ root: styles.fieldRoot }}
                placeholder='Write a comment...'
                fullWidth
                multiline
            />
            {error && (
                <Alert severity='error' color='error'>
                    {error.message}
                </Alert>
            )}
            {clicked && (
                <Button
                    onClick={onAddComment}
                    disabled={isLoading || !text}
                    className={styles.addButton}
                    variant='contained'
                    color='primary'
                >
                    Publish
                </Button>
            )}
        </div>
    );
};
