import { FormikProps } from 'formik';
import { useState } from 'react';

import { EditProductItemFormInitialValues } from '../components/edit-product-item-modall/edit-product-item.modal.interfaces';

type HookProps = {
  formikInstance: FormikProps<EditProductItemFormInitialValues>;
  onSetShoppingListItemId: (value: string) => void;
  onSetValidateAfterSubmit: (value: boolean) => void;
};

type ReturnedHookType = {
  isProductItemDeleteModalOpen: boolean;
  isShoppingListDeleteModalOpen: boolean;
  isCreateShoppingListModalOpen: boolean;
  isProductItemEditModalOpen: boolean;
  onOpenProductItemDeleteModal: (id: string) => void;
  onOpenProductItemEditModal: (id: string) => void;
  onOpenShoppingListDeleteModal: () => void;
  onOpenCreateShoppingListModal: () => void;
  onCloseProductItemEditModal: () => void;
  onCloseShoppingListDeleteModal: () => void;
  onCloseProductItemDeleteModal: () => void;
  onCloseCreateShoppingListModal: () => void;
  onEditProductItem: () => void;
};

export const useShoppingListDetailsModal = ({
  formikInstance,
  onSetShoppingListItemId,
  onSetValidateAfterSubmit,
}: HookProps): ReturnedHookType => {
  const [isProductItemDeleteModalOpen, setIsProductItemDeleteModalOpen] = useState<boolean>(false);
  const [isShoppingListDeleteModalOpen, setIsShoppingListDeleteModalOpen] = useState<boolean>(false);
  const [isCreateShoppingListModalOpen, setIsCreateShoppingListModalOpen] = useState<boolean>(false);
  const [isProductItemEditModalOpen, setIsProductItemEditModalOpen] = useState<boolean>(false);

  function onOpenProductItemDeleteModal(id: string): void {
    setIsProductItemDeleteModalOpen(true);
    onSetShoppingListItemId(id);
  }

  function onOpenProductItemEditModal(id: string): void {
    setIsProductItemEditModalOpen(true);
    onSetShoppingListItemId(id);
  }

  function onOpenShoppingListDeleteModal(): void {
    setIsShoppingListDeleteModalOpen(true);
  }

  function onOpenCreateShoppingListModal(): void {
    setIsCreateShoppingListModalOpen(true);
  }

  function onCloseShoppingListDeleteModal(): void {
    setIsShoppingListDeleteModalOpen(false);
  }

  function onCloseCreateShoppingListModal(): void {
    setIsCreateShoppingListModalOpen(false);
  }

  function onCloseProductItemEditModal(): void {
    setIsProductItemEditModalOpen(false);
    onSetValidateAfterSubmit(false);
  }

  function onCloseProductItemDeleteModal(): void {
    setIsProductItemDeleteModalOpen(false);
  }

  function onEditProductItem(): void {
    onSetValidateAfterSubmit(true);
    formikInstance.submitForm();
  }

  return {
    isProductItemDeleteModalOpen,
    isShoppingListDeleteModalOpen,
    isCreateShoppingListModalOpen,
    isProductItemEditModalOpen,
    onOpenProductItemDeleteModal,
    onOpenProductItemEditModal,
    onOpenShoppingListDeleteModal,
    onOpenCreateShoppingListModal,
    onCloseProductItemDeleteModal,
    onCloseProductItemEditModal,
    onCloseShoppingListDeleteModal,
    onCloseCreateShoppingListModal,
    onEditProductItem,
  };
};
