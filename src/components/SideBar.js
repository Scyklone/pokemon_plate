import React from 'react';
import GrassAnimation from './GrassAnimation';

const SideBar2 = () => (
    <div className="sidebox-layout">
    <p>This is SideBar!</p>  
    </div>
);



export default class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 1,
            name: 'Charmander'
        }
    }

    

    handleNameChange(e) {
        this.setState({
            id: e.target.value
        });
    }

    render() {
        
        return(

            
            <div className="sidebox-layout">
               <h2 className="header_s">Welcome to the World of Pokemon</h2>
               <h3 className="header_s">{this.state.name}</h3> 
                
               <GrassAnimation />
               
            </div>
        )
    }
}

//export default SideBar;