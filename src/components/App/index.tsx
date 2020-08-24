import React from 'react';
import ReactMarkdown from 'react-markdown';
import AppMD from './App.md';

export default function App(props: Readonly<{}>) {

    return (
        <div className="app">
            <ReactMarkdown
                source={ AppMD } />
        </div>
    );
}
