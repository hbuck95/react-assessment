import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import LoginForm from '../components/LoginForm';

configure({adapter: new Adapter()});

it('LoginForm renders', () => {
    const compJson = renderer.create(<LoginForm/>).toJSON();
    expect(compJson).toMatchSnapshot();
  });
