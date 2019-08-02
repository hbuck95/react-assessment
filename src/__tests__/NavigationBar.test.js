import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from '../components/NavigationBar';
import UserList from '../components/UserList';

configure({ adapter: new Adapter() });

it('Navigation bar renders', () => {
  const compJson = renderer.create(<Router><NavigationBar /></Router>).toJSON();
  expect(compJson).toMatchSnapshot();
});

//Commented out as incomplete and will fail
// it('Link to UserList works', () =>{
//   const wrapper = mount(<Router><NavigationBar/></Router>)
//   const wrapperCompJson = renderer.create(<Router><NavigationBar/></Router>).toJSON();
//   const userListJson = renderer.create(<UserList/>).toJSON();
//   expect(wrapper).toMatchSnapshot();
//   wrapper.find('[id="viewUsers"]').last().simulate("click");
//   console.log(wrapper.html())
//   expect(wrapperCompJson).toEqual(userListJson);

// });