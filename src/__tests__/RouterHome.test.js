import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import RouterHome from '../components/RouterHome';

configure({adapter: new Adapter()});

it('RouterHome renders', () => {
    const compJson = renderer.create(<RouterHome/>).toJSON();
    expect(compJson).toMatchSnapshot();
  });
