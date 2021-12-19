import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from '../components/searchBar';

configure({ adapter: new Adapter() });

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));