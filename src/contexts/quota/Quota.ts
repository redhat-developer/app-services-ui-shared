import React, { useContext } from "react";
import {AlertContext} from "../alert";

export type QuotaValue = {
    allowed: number;
    consumed: number;
    remaining: number;
};

export enum QuotaType {
    kas = 'kas',
    kasTrial = 'kas-trial',
    srs = 'srs',
    srsTrial = 'srs-trial'
}

export enum ProductType {
    kas = 'kas',
    srs = 'srs'
}

export type Quota = {
    data: Map<QuotaType, QuotaValue> | undefined;
    loading: boolean;
    isServiceDown: boolean;
};


/**
 * The QuotaProps object provides information about the quota
 */
export type QuotaProps = {
    getQuota: () => Promise<Quota>;
}

export const QuotaContext: React.Context<QuotaProps | undefined> = React.createContext<QuotaProps | undefined>(undefined);

/**
 * useQuota is a custom hook that is a shorthand for useContext(QuotaContext)
 */
export const useQuota = (): QuotaProps  => {
    const answer = useContext(QuotaContext);
    if (answer === undefined) {
        throw new Error("must be used inside an QuotaContext provider");
    }
    return answer;
}