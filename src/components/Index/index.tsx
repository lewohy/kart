import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.scss';
import ContentView from '../ContentView';

export default function Index(props: Readonly<{}>) {

    return (
        <div className="index">
            <ContentView
                />
        </div>
    );
}
