import * as React from "react";
import {useContext} from "react";
import {ModalContextProps} from "./types";
import {ModalType} from "./modals";

export const ModalContext = React.createContext<ModalContextProps<ModalType> | undefined>(undefined);

export const useModal = <T extends ModalType>(): ModalContextProps<T> => {
    const answer = useContext(ModalContext);
    if (answer === undefined) {
        throw new Error('not inside modal provider');
    }
    return answer;
};
