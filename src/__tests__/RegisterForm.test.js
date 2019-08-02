import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import RegisterForm from '../components/RegisterForm';

configure({ adapter: new Adapter() });

it('RegisterForm renders', () => {
  const compJson = renderer.create(<RegisterForm />).toJSON();
  expect(compJson).toMatchSnapshot();
});
