import React from 'react';

export interface ConsumerGroup {
    /**
     * Unique identifier for the consumer group
     * @type {string}
     * @memberof ConsumerGroup
     */
    groupId: string;
    /**
     *
     * @type {string}
     * @memberof ConsumerGroup
     */
    state?: ConsumerGroupStateEnum;
    /**
     * The list of consumers associated with this consumer group
     * @type {Array<Consumer>}
     * @memberof ConsumerGroup
     */
    consumers: Array<Consumer>;
}

export interface Consumer {
    /**
     * Unique identifier for the consumer group to which this consumer belongs.
     * @type {string}
     * @memberof Consumer
     */
    groupId: string;
    /**
     * The unique topic name to which this consumer belongs
     * @type {string}
     * @memberof Consumer
     */
    topic: string;
    /**
     * The partition number to which this consumer group is assigned to.
     * @type {number}
     * @memberof Consumer
     */
    partition: number;
    /**
     * Offset denotes the position of the consumer in a partition.
     * @type {number}
     * @memberof Consumer
     */
    offset: number;
    /**
     * The log end offset is the offset of the last message written to a log.
     * @type {number}
     * @memberof Consumer
     */
    logEndOffset?: number;
    /**
     * Offset Lag is the delta between the last produced message and the last consumer\'s committed offset.
     * @type {number}
     * @memberof Consumer
     */
    lag: number;
    /**
     * The member ID is a unique identifier given to a consumer by the coordinator upon initially joining the group.
     * @type {string}
     * @memberof Consumer
     */
    memberId?: string;
}

export interface AclBinding {
    /**
     *
     * @type {AclResourceType}
     * @memberof AclBinding
     */
    resourceType: AclResourceType;
    /**
     *
     * @type {string}
     * @memberof AclBinding
     */
    resourceName: string;
    /**
     *
     * @type {AclPatternType}
     * @memberof AclBinding
     */
    patternType: AclPatternType;
    /**
     * Identifies the user or service account to which an ACL entry is bound. The literal prefix value of `User:` is required. May be used to specify all users with value `User:*`.
     * @type {string}
     * @memberof AclBinding
     */
    principal: string;
    /**
     *
     * @type {AclOperation}
     * @memberof AclBinding
     */
    operation: AclOperation;
    /**
     *
     * @type {AclPermissionType}
     * @memberof AclBinding
     */
    permission: AclPermissionType;
}

export enum AclResourceType {
    Group = 'GROUP',
    Topic = 'TOPIC',
    Cluster = 'CLUSTER',
    TransactionalId = 'TRANSACTIONAL_ID'
}

export enum AclPatternType {
    Literal = 'LITERAL',
    Prefixed = 'PREFIXED'
}

export enum AclOperation {
    All = 'ALL',
    Read = 'READ',
    Write = 'WRITE',
    Create = 'CREATE',
    Delete = 'DELETE',
    Alter = 'ALTER',
    Describe = 'DESCRIBE',
    DescribeConfigs = 'DESCRIBE_CONFIGS',
    AlterConfigs = 'ALTER_CONFIGS'
}

export enum AclPermissionType {
    Allow = 'ALLOW',
    Deny = 'DENY'
}

/**
 * @export
 * @enum {string}
 */
export enum ConsumerGroupStateEnum {
    Stable = 'STABLE',
    Dead = 'DEAD',
    Empty = 'EMPTY',
    CompletingRebalance = 'COMPLETING_REBALANCE',
    PreparingRebalance = 'PREPARING_REBALANCE',
    Unknown = 'UNKNOWN'
}

export type DeleteTopicProps = {
    topicName?: string;
    onDeleteTopic?: () => void;
    refreshTopics?: () => void;
};

export type PartitionsChangeProps = {
    onSaveTopic: React.MouseEventHandler<HTMLButtonElement>;
};

export type DeleteConsumerGroupProps = {
    consumerName: string;
    refreshConsumerGroups?: () => void;
    state?: string;
};

export type ConsumerGroupResetOffsetProps = {
    consumerGroupData: ConsumerGroup | undefined;
    refreshConsumerGroups?: () => void;
};

export type ManagePermissionsProps = {
    onSave?: () => Promise<void>;
    kafkaName?: string;
    topicNames: string[];
    consumerGroupIds: string[];
    selectedAccountId?: string;
    acls: Array<AclBinding>;
};

export type ManagePermissionsModalProps = ManagePermissionsProps & {
    resourceOperations: { [key: string]: Array<string> } | undefined;
    hideModal: () => void;
};
