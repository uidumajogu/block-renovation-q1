import { TColors } from './data';

type TGetItemsBasedOnOrder = Record<'items' | 'order', TColors>;
type TOrderObject = Record<string, string[]>;

//Finds all items in an order and returns a new order containing the items sorted in order of occurrence in the items list
export const getItemsBasedOnOrder = ({
  items,
  order,
}: TGetItemsBasedOnOrder): TColors => {
  //Convert order to an object for quick search
  const orderObject: TOrderObject = order.reduce((acc, orderItem) => {
    return { ...acc, [orderItem]: [] };
  }, {}); //O(n)

  //Assign each occurence of item to the orderObject
  items.forEach((item) => {
    if (orderObject[item]) orderObject[item] = [...orderObject[item], item];
  }); //O(n)

  //Reduce the orderObject to an array of items and return
  return Object.values(orderObject).reduce(
    (acc, value) => [...acc, ...value],
    []
  ); //O(n)
};

/**
 * EXPLANATION OF THE TIME AND SPACE COMPLEXITY OF THE FUNCTION USING BigO NOTATION
 *
 * The function getItemsBasedOnOrder has 3 linear operations, with a BigO complexity of O(n) each
 * The first operation is the array reduce method which has a complexity of O(n), because it loops through the array of n items and apply the reduction function
 * The second operation is the array filter method which has a complexity of O(n), becuase it loops through the array of n items and matches the filter condition
 * The third operation is the array reduce method which has a complexity of O(n), because it loops through the array of n items and apply the reduction function
 * Therefore the complexity of this function is O(n)
 *
 */

//SHORTER SOLUTIONS BUT WITH GREATER COMPLEXITY

/**
 * Complexity - O(n log n)
 * */
// const getItemsBasedOnOrder = ({
//   items,
//   order,
// }: TGetItemsBasedOnOrder): TColors => {
//   //Convert order to an object for quick search
//   type TOrderObject = Record<string, string[]>;
//   const orderObject: TOrderObject = order.reduce((acc, orderItem) => {
//     return { ...acc, [orderItem]: [] };
//   }, {}); //O(n)

//     const itemsBasedOnOrder = items.filter((item) => orderObject[item]); //O(n)
//     return itemsBasedOnOrder.sort((a, b) => order.indexOf(a) - order.indexOf(b)); //O(n log n)
// };

/**
 * Complexity - O(n^2)
 * */
// export const getItemsBasedOnOrder = ({
//   items,
//   order,
// }: TGetItemsBasedOnOrder): TColors => {
//   const itemsBasedOnOrder = items.filter((item) => order.includes(item)); //O(n^2)
//   return itemsBasedOnOrder.sort((a, b) => order.indexOf(a) - order.indexOf(b)); //O(n log n)
// };
