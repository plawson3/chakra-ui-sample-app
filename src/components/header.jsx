import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function header() {
  return (
    <Box as="section" pb={'112px'}>
      <Box
        color="gray.50"
        bg={'purple.600'}
        pt="90px"
        pb={'198px'}
        px="32px"
        textAlign={['left','left','center']}
      >
        <Heading as={'h1'} fontWeight={'800'} fontSize="48px">
          Simple Pricing for you business
        </Heading>
        <Text fontWeight={'500'} pt={'15px'} fontSize={'24px'}>
          Plans that are carefully creafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}
