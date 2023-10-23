import JoditEditor from "jodit-react";
import React, { useRef } from "react";


const editorConfig = {
    readonly: false,
    toolbar: true,
    spellcheck: true,
    language: "en",
    toolbarButtonSize: "large",
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    // buttons: buttons,
    uploader: {
        insertImageAsBase64URI: true
    },

};
const EditorComponent = ({ initialValue, getValue })=>{
    const editor = useRef(null);

    return(
        <>
            <JoditEditor
                ref={editor}
                value={initialValue}
                config={editorConfig}
                tabIndex={1}
                onChange={(newContent) => getValue(newContent)}
            />
        </>
    )
}
export  default EditorComponent;
