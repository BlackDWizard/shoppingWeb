import React from 'react';
import TopBar from './1/TopBar'
import NavBar from './2/NavBar'
import Main_1 from './3/Main_1'

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <NavBar></NavBar>
                <Main_1></Main_1>
            </div>
        );
    }
}
