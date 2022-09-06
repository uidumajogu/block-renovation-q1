import { getItemsBasedOnOrder } from '.';
import { items, order } from './data';

test('Recieves an order and items, returns a new order containing the items sorted in order of occurrence in the items list', () => {
  expect(getItemsBasedOnOrder({ items, order })).toStrictEqual([
    'blue',
    'blue',
    'red',
    'red',
  ]);
});
