import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import User from '../components/User';

configure({adapter: new Adapter()});

it('User renders', () => {
    const compJson = renderer.create(<User/>).toJSON();
    expect(compJson).toMatchSnapshot();
  });
