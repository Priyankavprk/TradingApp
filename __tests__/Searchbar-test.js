import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from '../components/searchBar';

configure({ adapter: new Adapter() });

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

it('change search text', () => {
  const setSearchTextMock = jest.fn();
  const wrapper = shallow(<SearchBar setSearchText={setSearchTextMock} />);
  wrapper.find('TextInput').simulate('changeText', 'search text');
  expect(setSearchTextMock).toHaveBeenCalledWith('search text');
});

it("can press the search button", () => {
  const onSearchMock = jest.fn();
  const wrapper = shallow((<SearchBar onSearch={onSearchMock} />));
  wrapper.find('TouchableOpacity').simulate('press');
  expect(onSearchMock).toHaveBeenCalled();
  expect(onSearchMock.mock.calls.length).toEqual(1);
});
