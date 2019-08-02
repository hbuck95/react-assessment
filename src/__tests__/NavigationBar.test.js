import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from '../components/NavigationBar';

configure({adapter: new Adapter()});

it('Navigation bar renders', () => {
    const compJson = renderer.create(<Router><NavigationBar/></Router>).toJSON();
    expect(compJson).toMatchSnapshot();
  });
