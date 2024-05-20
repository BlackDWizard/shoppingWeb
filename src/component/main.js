import React from 'react';
import TopBar from './1/TopBar'
import NavBar from './2/NavBar'
import MainBody from './3/MainBody'

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <NavBar></NavBar>
                <MainBody></MainBody>
            </div>
        );
    }
}
