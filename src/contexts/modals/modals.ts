// The available types of modal
import {
    ConsumerGroupResetOffsetProps,
    DeleteConsumerGroupProps,
    DeleteTopicProps, ManagePermissionsProps,
    PartitionsChangeProps
} from "./kafka-modals";
import {
    ChangeOwnerProps,
    CreateInstanceProps,
    CreateServiceAccountProps, CredentialsProps,
    DeleteInstanceProps,
    DeleteServiceAccountProps, ResetServiceAccountCredentialsProps
} from "./kas-modals";

export enum ModalType {
    KafkaDeleteTopic = 'KafkaDeleteTopic',
    KafkaDeleteConsumerGroup = 'KafkaDeleteConsumerGroup',
    KafkaUpdatePartitions = 'KafkaUpdatePartitions',
    KafkaConsumerGroupResetOffset = 'KafkaConsumerGroupResetOffset',
    KafkaManagePermissions = 'KafkaManagePermissions',
    KasCreateInstance = 'KasCreateInstance',
    KasDeleteInstance = 'KasDeleteInstance',
    KasCreateServiceAccount = 'KasCreateServiceAccount',
    KasDeleteServiceAccount = 'KasDeleteServiceAccount',
    KasResetServiceAccountCredentials = 'KasResetServiceAccountCredentials',
    KasDisplayCredentials = 'KasDisplayCredentials',
    KasChangeOwner = 'KasChangeOwner'
}

// A map of modal types to their props
export interface ModalTypePropsMap {
    [ModalType.KafkaDeleteTopic]: DeleteTopicProps;
    [ModalType.KafkaUpdatePartitions]: PartitionsChangeProps;
    [ModalType.KafkaDeleteConsumerGroup]: DeleteConsumerGroupProps;
    [ModalType.KafkaConsumerGroupResetOffset]: ConsumerGroupResetOffsetProps;
    [ModalType.KafkaManagePermissions]: ManagePermissionsProps;
    [ModalType.KasCreateInstance]: CreateInstanceProps;
    [ModalType.KasDeleteInstance]: DeleteInstanceProps;
    [ModalType.KasCreateServiceAccount]: CreateServiceAccountProps;
    [ModalType.KasDeleteServiceAccount]: DeleteServiceAccountProps;
    [ModalType.KasResetServiceAccountCredentials]: ResetServiceAccountCredentialsProps;
    [ModalType.KasDisplayCredentials]: CredentialsProps;
    [ModalType.KasChangeOwner]: ChangeOwnerProps;
}
