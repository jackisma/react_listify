import { ShoppingListData, ShoppingListItem } from '../../app.interfaces';
import { AXIOS_CONFIG } from '../../configs/axios';
import { toastService } from '../../services/toast.service';
import {
  FAILED_CREATE_SHOPPING_LIST_ITEM,
  FAILED_DELETE_SHOPPING_LIST_ITEM,
  FAILED_EDIT_SHOPPING_LIST_ITEM,
  SUCCESSFUL_CREATE_SHOPPING_LIST_ITEM,
  SUCCESSFUL_DELETE_SHOPPING_LIST_ITEM,
  SUCCESSFUL_EDIT_SHOPPING_LIST_ITEM,
} from './shopping-list-details.constants';

class ShoppingListDetailsService {
  async createShoppingListItem(id: string, shoppingListItem: ShoppingListItem): Promise<ShoppingListData | null> {
    try {
      const response = await AXIOS_CONFIG.put(`/api/shopping-lists/${id}/product-item`, shoppingListItem);

      if (!response.data) {
        return null;
      }

      toastService.success(SUCCESSFUL_CREATE_SHOPPING_LIST_ITEM);
      return response.data;
    } catch (error) {
      toastService.success(FAILED_CREATE_SHOPPING_LIST_ITEM);
      throw new Error((error as Error).message);
    }
  }

  async deleteShoppingListItem(id: string, productItemId: string): Promise<ShoppingListData | null> {
    try {
      const response = await AXIOS_CONFIG.delete(`/api/shopping-lists/${id}/delete-product-item`, {
        data: {
          id: productItemId,
        },
      });

      if (!response.data) {
        return null;
      }

      toastService.success(SUCCESSFUL_DELETE_SHOPPING_LIST_ITEM);
      return response.data;
    } catch (error) {
      toastService.error(FAILED_DELETE_SHOPPING_LIST_ITEM);
      throw new Error((error as Error).message);
    }
  }

  async checkShoppingListItem(id: string, shoppingListItem: ShoppingListItem | null): Promise<ShoppingListData | null> {
    try {
      const response = await AXIOS_CONFIG.put(`/api/shopping-lists/${id}/select-product-item`, shoppingListItem);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async editShoppingListItem(id: string, shoppingListItem: ShoppingListItem | null): Promise<ShoppingListData | null> {
    try {
      const response = await AXIOS_CONFIG.put(`/api/shopping-lists/${id}/edit-product-item`, shoppingListItem);

      if (!response.data) {
        return null;
      }

      toastService.success(SUCCESSFUL_EDIT_SHOPPING_LIST_ITEM);
      return response.data;
    } catch (error) {
      toastService.error(FAILED_EDIT_SHOPPING_LIST_ITEM);
      throw new Error((error as Error).message);
    }
  }
}

export const shoppingListDetailsService = new ShoppingListDetailsService();
