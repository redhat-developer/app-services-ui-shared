import React from 'react';
import {ModalType, ModalTypePropsMap} from "./modals";

export type ModalContextProps<T extends ModalType> = {
  registerModals: (modals: ModalRegistry) => void;
  showModal: (modalType: ModalType, modalProps: ModalTypePropsMap[T]) => void;
  hideModal: () => void;
};

export type ActiveModalProps<T extends ModalType> = {
  modalType: T;
  modalProps: ModalTypePropsMap[T];
};

// Properties available to all Modal components
export type BaseModalProps = {
  hideModal: () => void;
  title?: string;
  variant?: 'small' | 'medium' | 'large' | 'default';
};

export type ModalRegistryEntry<T extends ModalType> = {
  lazyComponent: React.LazyExoticComponent<
    React.FunctionComponent<ModalTypePropsMap[T] & BaseModalProps>
  >;
} & Pick<BaseModalProps, 'variant' | 'title'>;

export type ModalRegistry = {
  [T in ModalType]?: ModalRegistryEntry<T>;
};
