import React from 'react';
import {MobileListComponent} from '../mobile-list/mobile-list';
import {Header} from '../header/header';
export class HomeComponent extends React.Component 
{
    constructor(props){
        super(props);
        console.log(props);
        props.getMobiles({searchText:this.props.searchCriteria, sorting : this.props.orderCode});

        this.updateSearchCriteria = this.updateSearchCriteria.bind(this);
        this.sortList = this.sortList.bind(this);
    }

    updateSearchCriteria (searchText){
      
        this.props.updateSearchCriteria(searchText);
        this.props.getMobiles({searchText:searchText, sorting : this.props.orderCode});
    }

   sortList (orderCode) {
    this.props.updateSortOrder(orderCode);
     console.log('Home - orderCode - ' + orderCode);
        this.props.getMobiles({ searchText:this.props.searchCriteria,sorting : orderCode});
    }
 
    render(){
        let { isLoading, mobiles} = this.props
        return (
            <React.Fragment>
            <Header onSearchUpdate={this.updateSearchCriteria}></Header>
            <MobileListComponent orderCode={this.props.orderCode} mobiles={mobiles} handleSorting={this.sortList} />
            </React.Fragment>
                )

    }
  
}