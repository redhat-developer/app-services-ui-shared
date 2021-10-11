export type CreateInstanceProps = {
    onCreate?: () => void;
}


export interface KafkaInstance {
    id?: string;
    /**
     * Values: [accepted, preparing, provisioning, ready, failed, deprovision, deleting]
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    status?: string;
    /**
     * Name of Cloud used to deploy. For example AWS
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    cloud_provider?: string;
    /**
     *
     * @type {boolean}
     * @memberof KafkaRequestAllOf
     */
    multi_az?: boolean;
    /**
     * Values will be regions of specific cloud provider. For example: us-east-1 for AWS
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    region?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    bootstrap_server_host?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    created_at?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    updated_at?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    failed_reason?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    version?: string;
    /**
     *
     * @type {string}
     * @memberof KafkaRequestAllOf
     */
    instance_type?: string;
}

export interface ServiceAccount {
    /**
     * server generated unique id of the service account
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    client_id?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    client_secret?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceAccountAllOf
     */
    created_at?: string;
}

export type DeleteInstanceProps = {
    kafka: KafkaInstance;
    onDelete?: () => void;
};

export type CreateServiceAccountProps = {
    onCreate?: () => void;
}

export type DeleteServiceAccountProps = {
    serviceAccount: ServiceAccount
    onDelete?: () => void;
}

export type ResetServiceAccountCredentialsProps = {
    serviceAccount: ServiceAccount
    onReset?: () => void;
}

export type CredentialsProps = {
    loading: boolean
    serviceAccount: ServiceAccount
}

export type TransferOwnershipProps = {
    kafka: KafkaInstance;
}
