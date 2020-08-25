import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.scss';
import Content from './Content.md';

export default function ContentView(props: Readonly<{}>) {

    return (
        <div className="content-view">
            <ReactMarkdown
                source={ Content } />
        </div>
    );
}
