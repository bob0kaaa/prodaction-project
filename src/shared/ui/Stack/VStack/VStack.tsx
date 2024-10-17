import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>
export const VStack = (props: VStackProps) => {
    const { aling = 'start' } = props;
    return (
        <Flex direction="column" {...props} aling={aling} />
    );
};
