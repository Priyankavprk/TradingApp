import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OrderBook from '../components/orderBook';

configure({ adapter: new Adapter() });
  
jest.mock('react-native-table-component', () => ({
    Table: 'Table',
    Row: 'Row',
    Rows: 'Rows',
}));

describe("table", () => {
    it('order book render rows correctly', () => {
        const wrapper = shallow(<OrderBook bids={[[1,2]]} asks={[[3,4]]} />);
        const table = wrapper.find('Table');
        const row = table.find('Row');
        const rows = table.find('Rows');
        expect(table).toHaveLength(1);
        expect(row).toHaveLength(1);
        expect(rows).toHaveLength(1);
    });
})
