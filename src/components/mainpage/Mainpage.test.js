import { shallow } from 'enzyme';
import React from 'react';
import Mainpage from './Mainpage';

let wrapper;
beforeEach( () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<Mainpage {...mockProps} />)
})

it('Renders Mainpage without crashing', () => {
    expect(wrapper).toMatchSnapshot()
})

it('Filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Asf'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper2 = shallow(<Mainpage {...mockProps2} />)
    expect(wrapper2.instance().filteredRobot()).toEqual([
        {
            id: 3,
            name: 'Asf'
        }
    ])
    //instance() property comes with that gives us access to all methods in Mainpage
})