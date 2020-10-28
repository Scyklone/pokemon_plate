import React, { Component } from 'react';
import MainPage from './MainPage';
import SideBar from './SideBar';

export default class PokemonPlate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: 'Charmander'
        }
    }

    

    render() {
        return(
            <div>
                <MainPage 
                
                />
                <SideBar 
                
                />
            </div>
        )
    }
}