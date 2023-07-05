import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import './../../assets/css/GeneralTmoney.css';
import {
  Flex,
  Box,
  IconButton,
  chakra,
  useDisclosure,
  Button,
  CloseButton,
  VStack,
  useColorModeValue,
  Container,
  SimpleGrid,
  Icon,
  Stack,
  Link,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Highlight,
  VisuallyHidden,
  Input,
  Image,
  AspectRatio,
  Avatar,
  Select,
  useMediaQuery,
  Progress,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
function PdePrivacidad({ isOpen, onOpen, onClose }) {
  const iterador = 18;

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        onClose={onClose}
        isOpen={isOpen}
        isCentered>
        <ModalOverlay />
        <ModalContent
          maxW={'38%'}
          borderRadius={'10px'}
          bgColor={'#E3E3E3'}
          p={'1.5% 1.5% 0.5% 1.5%'}>
          <ModalBody>
            <Flex
              direction={'column'}
              gap={'20px'}
              alignItems={'center'}>
              <Flex
                borderRadius={'10px'}
                bg={'#FFFFFF'}
                height={'auto'}
                padding={'3% 1.5% 2% 0'}
                maxHeight={'75vh'}>
                <Flex
                  scrollBehavior={'smooth'}
                  bg={'#FFFFFF'}
                  overflowY={'auto'}
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '10px'
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'transparent',
                      borderRadius: '0px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: '#E3E3E3',
                      borderRadius: '6px'
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      background: '#9b9b9b'
                    }
                  }}
                  direction={'column'}
                  bgColor={'#FFFFFF'}
                  borderRadius={'10px'}
                  p={'3% 8%'}
                  gap={'12px'}
                  alignItems={'center'}
                  color={'#0A1A4A'}>
                  <Text
                    fontFamily={'ObjectiveMedium'}
                    fontSize={'2rem'}></Text>
                  <Text
                    fontFamily={'ObjectiveMedium'}
                    textAlign={'justify'}
                    fontSize={'1.3rem'}>
                    <br />
                    <br /> <br />
                  </Text>
                  {[...Array(iterador)].map((i, index) => (
                    <>
                      <Flex width={'100%'}>
                        <Text
                          fontFamily={'ObjectiveMedium'}
                          textAlign={'left'}
                          fontSize={'1.3rem'}></Text>
                      </Flex>
                      <Text
                        fontFamily={'ObjectiveMedium'}
                        textAlign={'justify'}
                        fontSize={'1.3rem'}></Text>
                    </>
                  ))}
                </Flex>
              </Flex>

              <Button
                onClick={onClose}
                w={'22%'}
                p={'2.5% 0%'}
                borderRadius={'10px'}
                fontSize={'1.4rem'}
                fontFamily={'ObjectiveMedium'}
                textColor={'#FEFEFE'}
                bgColor={'#13235B'}>
                Cerrar
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PdePrivacidad;
