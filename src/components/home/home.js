import React from 'react';
import {MobileListComponent} from '../mobile-list/mobile-list';
import {Header} from '../header/header';
const pageSize = 5;
export class HomeComponent extends React.Component 
{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            currentPageNumber : 1
        }       

        this.getMobiles();

      
        this.updateSearchCriteria = this.updateSearchCriteria.bind(this);
        this.sortList = this.sortList.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

   async updateSearchCriteria (searchText){
      
       await this.props.updateSearchCriteria(searchText);
        this.getMobiles();
        
    }

  async sortList (orderCode) {
    await this.props.updateSortOrder(orderCode);
    this.getMobiles();
    
    }

    async handlePagination(pageNumber) {
        this.setState({ currentPageNumber : pageNumber }, this.getMobiles);
      }

    getMobiles(){
        let pageNumber = this.state.currentPageNumber;
    

        let start = pageNumber*pageSize - pageSize;
        let end =  pageNumber*pageSize;
        this.props.getMobiles({searchText:this.props.searchCriteria, sorting : this.props.orderCode, pagination : {
            start : start, end :end
        }});
    }

    handleAddToCart(productId){

        this.props.addToCart(productId);

    }
 
    render(){
        let { isLoading, mobiles,totalMobiles, handleLogout} = this.props;
        
        return (
            <React.Fragment>
            <Header handleLogout={handleLogout} ></Header>
            <MobileListComponent orderCode={this.props.orderCode} mobiles={mobiles} handleSorting={this.sortList}   handlePagination={this.handlePagination}
              totalMobiles={totalMobiles}
              pageNumber={this.state.currentPageNumber}
              handleAddToCart={this.handleAddToCart}
              onSearchUpdate={this.updateSearchCriteria}
              />
            </React.Fragment>
                )

    }
  
}