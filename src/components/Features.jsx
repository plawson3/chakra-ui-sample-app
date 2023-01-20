import { Box, Stack, HStack, Icon, Text } from '@chakra-ui/react';
import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from '../icons/icon';

function Feature(props) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize={['8', '8', '12']}></Icon>
      <Text textAlign={'left'} fontSize={'lg'} fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box maxW={'1024px'} m="auto" pt={'60px'} pb="32px">
      <Stack
        px="12"
        direction={['column', 'column', 'row']}
        spacing={['6', '6', '5']}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
