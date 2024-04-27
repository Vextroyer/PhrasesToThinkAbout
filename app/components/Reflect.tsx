'use client'
import { useState } from "react";


export default function Reflect() {
    const [text, setText] = useState("");
    
    /* Dinamically generate a txt file from the text and create an url for donwloading it automatically. */
    function handleSave() {
        const blob = new Blob([text],{type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = "Reflection.txt";
        a.click();

        URL.revokeObjectURL(url);
    }

    return (
        <div className="flex flex-col space-y-3">
            <textarea placeholder="Write your reflections here" value={text} onChange={(e) => setText(e.target.value)} className="bg-inherit focus:outline-none focus:border-0" />
            <div className="flex flex-row justify-end">
                <button onClick={handleSave}><p className="p-2 border border-red-200 max-w-min">Save</p></button>
            </div>
        </div>
    );
}