import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.scss';
import Content from './Content.md';

export default function ContentView(props: Readonly<{}>) {

    return (
        <div className="content-view">
            <ReactMarkdown
                source={ Content }
                renderers={ {
                    "link": LinkRenderer
                }} />
        </div>
    );
}

function LinkRenderer(props: Readonly<any>) {
    return (
        <a
            href={ props.href }
            target="_blank">
            { props.children }
        </a>
    );
}
