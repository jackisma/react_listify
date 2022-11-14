import _ from 'lodash';

import { ShoppingListItem } from '../../../app.interfaces';
import { updateShoppingListItemAction } from '../shopping-list-details.actions';
import { shoppingListDetailsService } from '../shopping-list-details.service';

type HookProps = {
  shoppingListId: string;
  shoppingListItems: ShoppingListItem[];
};

type ReturnedHookType = {
  onSelectProductItem: (id: string) => Promise<void>;
};

export const useSelectProductItem = ({ shoppingListId, shoppingListItems }: HookProps): ReturnedHookType => {
  async function onSelectProductItem(id: string): Promise<void> {
    try {
      const changeSelectedItemIsCheckedProperty = shoppingListItems.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        } else {
          return item;
        }
      });

      const selectedProductItem = _.find(changeSelectedItemIsCheckedProperty, { _id: id }) ?? null;

      await updateShoppingListItemAction({
        shoppingListItem: selectedProductItem,
        url: `/api/shopping-lists/${shoppingListId}/select-product-item`,
        serviceMethod: shoppingListDetailsService.updateShoppingListItem,
      });
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }

  return { onSelectProductItem };
};
