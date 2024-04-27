import React from "react";

interface Props {
    author: string
}

export default function Author(props: Props) {
    return (
        <>
            <p>{props.author}</p>
        </>
    );
}