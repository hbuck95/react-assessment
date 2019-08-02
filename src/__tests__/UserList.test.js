import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import UserList from '../components/UserList';

configure({ adapter: new Adapter() });

it('UserList renders', () => {
  const compJson = renderer.create(<UserList />).toJSON();
  expect(compJson).toMatchSnapshot();
});
