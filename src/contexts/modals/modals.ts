// The available types of modal
import {
    ConsumerGroupResetOffsetProps,
    DeleteConsumerGroupProps,
    DeleteTopicProps, ManagePermissionsProps,
    PartitionsChangeProps
} from "./kafka-modals";

export enum ModalType {
    KafkaDeleteTopic = 'KafkaDeleteTopic',
    KafkaDeleteConsumerGroup = 'KafkaDeleteConsumerGroup',
    KafkaUpdatePartitions = 'KafkaUpdatePartitions',
    KafkaConsumerGroupResetOffset = 'KafkaConsumerGroupResetOffset',
    KafkaManagePermissions = 'KafkaManagePermissions',
}

// A map of modal types to their props
export interface ModalTypePropsMap {
    [ModalType.KafkaDeleteTopic]: DeleteTopicProps;
    [ModalType.KafkaUpdatePartitions]: PartitionsChangeProps;
    [ModalType.KafkaDeleteConsumerGroup]: DeleteConsumerGroupProps;
    [ModalType.KafkaConsumerGroupResetOffset]: ConsumerGroupResetOffsetProps;
    [ModalType.KafkaManagePermissions]: ManagePermissionsProps;
}