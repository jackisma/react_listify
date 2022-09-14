import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { Currencies, ProductUnits } from './app.enums';
import { ShoppingListItem, SortingItem } from './app.interfaces';
import { DropdownOption } from './shared/components/select/select.interfaces';

/**
 * Custom sorting utility function that allows to sort shopping lists and product items
 * @param sortingItems defines either array of Shopping lists or Product item
 * @returns Partial<ShoppingListData & ShoppingListItem>[]
 */
export const sortedItems = (sortingItems: SortingItem[]): SortingItem[] =>
  _.chain(sortingItems).flatten().sortBy('name').sortBy('isChecked').value();

/**
 * Returns transformed list of available currencies for a dropdown menu
 * @returns DropdownOption<string>[]
 */
export const availableCurrencies: DropdownOption<string>[] = Object.entries(Currencies).flatMap((currency) => ({
  id: uuidv4(),
  value: currency[1],
  label: currency[1],
}));

/**
 * Returns transformed list of available product units for a dropdown menu
 * @returns DropdownOption<string>[]
 */
export const availableProductUnits: DropdownOption<string>[] = Object.entries(ProductUnits).flatMap((unit) => ({
  id: uuidv4(),
  value: unit[1],
  label: unit[1],
}));

/**
 * Function returns a sorted list of available items for a dropdown menu
 * @returns DropdownOption<string>[]
 */
export const sortedDropdownItems = (items: DropdownOption<string>[]) => {
  return _.sortBy(items, 'label');
};

/**
 * Function calculates the price of specific product item
 * @returns number
 */
export const calculateProductItemPrice = (price: number, quantity: number): number => {
  return price * quantity;
};

/**
 * Function calculates the price of specific product item based on user preferences (if calculateByQuantity is true or false)
 * @returns number
 */
export const calculateByQuantity = (
  price: number,
  quantity: number,
  calculateTotalPriceByQuantity: boolean
): number => {
  return calculateTotalPriceByQuantity ? calculateProductItemPrice(price, quantity) : price;
};

/**
 * Function calculates the total price of all product item of specific shopping list item and returns a total price
 * @returns number
 */
export const calculateTotalPrice = (shoppingListItems: ShoppingListItem[], calculateTotalPriceByQuantity: boolean) => {
  return _.sumBy(shoppingListItems, (item) => {
    return calculateTotalPriceByQuantity ? calculateProductItemPrice(item.price, item.quantity) : item.price;
  });
};

/**
 * Function calculates total To But or Purchased values, within Shopping list details widget, based on passed boolean flag
 * @returns number
 */
export const calculateProductItemsByCheckedSate = (
  shoppingListItems: ShoppingListItem[],
  itemsState: boolean,
  calculateTotalPriceByQuantity: boolean
): number => {
  const productItemsByCheckedSate = _.filter(shoppingListItems, (item) => item.isChecked === itemsState);
  return _.sumBy(productItemsByCheckedSate, (item) =>
    calculateTotalPriceByQuantity ? calculateProductItemPrice(item.price, item.quantity) : item.price
  );
};
