import React from 'react';
import { shallow } from 'enzyme';
import Searchbox from './Searchbox';

it('expect to render CardList component', () => {
    expect(shallow(<Searchbox  />)).toMatchSnapshot();
})
