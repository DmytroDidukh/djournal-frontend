import React, { useEffect } from 'react';
import EditorJS, { OutputBlockData } from '@editorjs/editorjs';

interface EditorProps {
    onChange: (blocks: OutputBlockData[]) => void;
    initialBlocks: OutputBlockData[];
}

export const Editor: React.FC<EditorProps> = ({ onChange, initialBlocks }) => {
    useEffect(() => {
        const editor: EditorJS = new EditorJS({
            holder: 'editor',
            placeholder: 'Enter the text of your article',
            data: {
                blocks: initialBlocks,
            },
            async onChange() {
                const { blocks } = await editor.save();
                onChange(blocks);
            },
        });

        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy();
                })
                .catch((e) => console.error('ERROR editor cleanup', e));
        };

        // eslint-disable-next-line
    }, []);

    return <div id='editor' />;
};
