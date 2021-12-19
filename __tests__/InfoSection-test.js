import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InfoSection from '../components/infoSection';

configure({ adapter: new Adapter() });

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

it('flatlist return keyExtractor correctly', () => {
  const wrapper = shallow((<InfoSection />));
  const key = wrapper.find('FlatList').props().keyExtractor('open', 0);
  expect(key).toEqual('open0')
});