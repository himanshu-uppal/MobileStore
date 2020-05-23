import React from 'react';
import {MobileListComponent} from '../mobile-list/mobile-list';
import {Header} from '../header/header';
export class HomeComponent extends React.Component 
{
    constructor(props){
        super(props);
        console.log(props);
        props.getMobiles();
    }
 
    render(){
        let { isLoading, mobiles} = this.props
        return (
            <React.Fragment>
            <Header></Header>
            <MobileListComponent mobiles={mobiles} />
            </React.Fragment>
                )

    }
  
}