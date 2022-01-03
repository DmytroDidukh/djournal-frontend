import React from 'react';
import EditorJS from '@editorjs/editorjs';

export const Editor: React.FC = () => {
    React.useEffect(() => {
        const editor: EditorJS = new EditorJS({
            holder: 'editor',
            placeholder: 'Enter the text of your article',
        });

        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy();
                })
                .catch((e) => console.error('ERROR editor cleanup', e));
        };
    }, []);

    return <div id='editor' />;
};
