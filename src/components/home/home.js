import React from 'react';
import {MobileListComponent} from '../mobile-list/mobile-list';
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
            <MobileListComponent mobiles={mobiles} />
            </React.Fragment>
                )

    }
  
}