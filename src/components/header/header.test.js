import React from 'react';
import {Header} from './header';
import {mount} from 'enzyme';

 
describe('testing Header', () => {
    let header = mount (<Header />);    

    it('renders the button tag for logout' , () =>{
        expect(header.find('button').text().toEqual('Logout'))
    })
})

