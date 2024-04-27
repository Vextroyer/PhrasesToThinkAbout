import React from "react";

interface Props {
    phrase: string
}

export default function Phrase(props: Props) {
    return (
        <>
            <p>{props.phrase}</p>
        </>
    );
}