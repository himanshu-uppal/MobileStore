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

    updateSearchCriteria = (searchText) =>{
        console.log()
        this.props.getMobiles({searchText:searchText});
    }
 
    render(){
        let { isLoading, mobiles} = this.props
        return (
            <React.Fragment>
            <Header updateSearchCriteria={this.updateSearchCriteria}></Header>
            <MobileListComponent mobiles={mobiles} />
            </React.Fragment>
                )

    }
  
}