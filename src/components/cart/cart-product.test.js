import React from 'react';
import {CartProductComponent} from './cart-product';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

const props = {cartProducts:[{id:1,name:'product 1', originalPrice:1000, discountedPrice:500}]};

describe('testing cartProductComponent', () => {
    let cartProductComponent = mount (<CartProductComponent cartProducts={props.cartProducts} />);

    test('snapshot renders', () => {
        const component = renderer.create(<CartProductComponent cartProducts={props.cartProducts} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

    it('renders the tr tag for every cart product' , () =>{
        expect(cartProductComponent.find('a').text().toEqual(props.cartProducts[0].name))
    })
})

