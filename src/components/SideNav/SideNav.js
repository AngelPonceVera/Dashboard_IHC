import React, { useEffect, useState } from 'react';
import {
  HStack,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  Image,
  Link,
  Divider,
  Button,
  Tooltip,
  IconButton,
  useDisclosure,
  useColorMode,
  Collapse,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  Highlight
} from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';
import PdePrivacidad from '../ModalesComponents/PdePrivacidad';
import {
  BsCreditCard2BackFill,
  BsBank,
  BsFillHouseFill,
  BsCashStack
} from 'react-icons/bs';
import { BsWrench } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { MdKeyboardArrowRight } from 'react-icons/md';

import {
  Herramientas,
  Registro,
  Tienda,
  Live,
  Notificaciones,
  Mododark,
  Prematch,
  Live2,
  Prematch2,
  Herramientas2,
  Registro2,
  Tienda2,
  Notificaciones2,
  Lightmode
} from '../../assets/icons/Icons';
import axios from 'axios';

export default function SidebarI() {
  // const [soporte, setSoporte] = useState(true);
  // const correo = localStorage.getItem('correo');
  const [inactive, setInactive] = useState(true);
  const [inactive1, setInactive1] = useState(true);
  const [inactive2, setInactive2] = useState(true);
  const [inactive3, setInactive3] = useState(true);
  const [inactive4, setInactive4] = useState(true);
  const [inactive5, setInactive5] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2
  } = useDisclosure();

  const history = useHistory();
  const sidebar = useDisclosure();
  const nombre = localStorage.getItem('nombres');
  const { colorMode, toggleColorMode } = useColorMode();

  const notif = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur ',
      description:
        'Duis scelerisque justo sit amet urna sollicitudin sodales. Donec placerat, nunc vitae rhoncus blandit, est ligula...'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur ',
      description:
        'Duis scelerisque justo sit amet urna sollicitudin sodales. Donec placerat, nunc vitae rhoncus blandit, est ligula...'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur ',
      description:
        'Duis scelerisque justo sit amet urna sollicitudin sodales. Donec placerat, nunc vitae rhoncus blandit, est ligula...'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur ',
      description:
        'Duis scelerisque justo sit amet urna sollicitudin sodales. Donec placerat, nunc vitae rhoncus blandit, est ligula...'
    }
  ];
  const token = localStorage.getItem('token');

  const [usuario, setUsuario] = useState({
    nombres: ''
  });
  const parar = () => {
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  };

  const cerrarsesion = () => {
    localStorage.clear();
    history.push('/login');
  };

  // const permisos = () => {
  //   if (correo == 'soporte@tmoney.com') {
  //     setSoporte(false);
  //   }
  // };

  useEffect(() => {
    // permisos();
  });

  return (
    <>
      <PdePrivacidad
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
      />
      <Box as='section'>
        <Flex
          display={{
            base: 'none',
            md: 'unset'
          }}>
          <Box
            as='nav'
            pos='fixed'
            top='0'
            left='0'
            zIndex='sticky'
            h='full'
            // pb='10'
            overflowX='hidden'
            overflowY='auto'
            bg='#F3F3F3'
            _dark={{
              bgColor: '#000411'
            }}
            boxShadow={'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'}
            borderColor='blackAlpha.300'
            borderRightWidth='1px'
            w='60px'>
            <Flex direction={'column'} h='100%' gap={'0px'}>
              <Flex
                align='center'
                justifyContent={'center'}
                h='20%'
                p={'0% 20%'}>
                <Link
                  onClick={() => {
                    setInactive(true);
                    setInactive1(true);
                    setInactive2(true);
                    setInactive3(true);
                    setInactive4(true);
                    setInactive5(true);
                    parar();
                    history.push('/home');
                  }}>
                  <HStack>
                    <Image
                      w={'100%'}
                      borderRadius={6}
                      src={
                        'https://res.cloudinary.com/dzqqikdrp/image/upload/v1688521055/Ecommerce%20MemoryKings/Imagen_de_WhatsApp_2023-07-04_a_las_20.36_1_cbur3j.png'
                      }
                    />
                  </HStack>
                </Link>
              </Flex>

              <Flex
                direction={'column'}
                justifyContent='space-between'
                h='70%'>
                <Flex
                  direction={'column'}
                  alignItems='center'
                  gap='25px'>
                  <Flex
                    direction={'column'}
                    alignItems='center'
                    bgColor={'#01913C'}
                    w='72%'
                    gap={'20px'}
                    h={'90px'}
                    justifyContent='center'
                    borderRadius='5px'>
                    {inactive ? (
                      <Flex
                        onClick={() => {
                          setInactive(false);
                          setInactive1(true);
                          setInactive2(true);
                          setInactive3(true);
                          setInactive4(true);
                          setInactive5(true);
                          parar();
                          history.push('/live');
                        }}
                        align='center'
                        justifyContent={'center'}
                        rounded='md'
                        cursor='pointer'
                        color='#13235b'
                        _hover={{
                          bg: 'transparent',
                          color: '#01913C'
                        }}
                        role='group'
                        fontWeight='semibold'
                        transition='.15s ease'>
                        <Icon
                          color='#ffff'
                          boxSize='25px'
                          as={Live}
                        />
                      </Flex>
                    ) : (
                      <Flex
                        align='center'
                        justifyContent={'center'}
                        rounded='md'
                        cursor='pointer'
                        color='#13235b'
                        _hover={{
                          bg: 'transparent',
                          color: '#01913C'
                        }}
                        role='group'
                        fontWeight='semibold'
                        transition='.15s ease'>
                        <Icon
                          color='#ffff'
                          boxSize='25px'
                          as={Live2}
                        />
                      </Flex>
                    )}

                    {inactive1 ? (
                      <Flex
                        onClick={() => {
                          setInactive1(false);
                          setInactive(true);
                          setInactive2(true);
                          setInactive3(true);
                          setInactive4(true);
                          setInactive5(true);
                          parar();
                          history.push('/prematch');
                        }}
                        align='center'
                        justifyContent={'center'}
                        rounded='md'
                        cursor='pointer'
                        color='#13235b'
                        _hover={{
                          bg: 'transparent',
                          color: '#01913C'
                        }}
                        role='group'
                        fontWeight='semibold'
                        transition='.15s ease'>
                        <Icon
                          color='#ffff'
                          boxSize='25px'
                          as={Prematch}
                        />
                      </Flex>
                    ) : (
                      <Flex
                        align='center'
                        justifyContent={'center'}
                        rounded='md'
                        cursor='pointer'
                        color='#13235b'
                        _hover={{
                          bg: 'transparent',
                          color: '#01913C'
                        }}
                        role='group'
                        fontWeight='semibold'
                        transition='.15s ease'>
                        <Icon
                          color='#ffff'
                          boxSize='25px'
                          as={Prematch2}
                        />
                      </Flex>
                    )}
                  </Flex>

                  {inactive2 ? (
                    <Flex
                      onClick={() => {
                        setInactive2(false);
                        setInactive(true);
                        setInactive1(true);
                        setInactive3(true);
                        setInactive4(true);
                        setInactive5(true);
                        parar();
                        history.push('/tools');
                      }}
                      align='center'
                      justifyContent={'center'}
                      rounded='md'
                      cursor='pointer'
                      color='#13235b'
                      _dark={{
                        color: '#FFFF'
                      }}
                      _hover={{
                        bg: 'transparent',
                        color: '#01913C'
                      }}
                      role='group'
                      fontWeight='semibold'
                      transition='.15s ease'>
                      <Icon boxSize='25px' as={Herramientas} />
                    </Flex>
                  ) : (
                    <Flex
                      align='center'
                      justifyContent={'center'}
                      rounded='md'
                      cursor='pointer'
                      color='#13235b'
                      _dark={{
                        color: '#FFFF'
                      }}
                      _hover={{
                        bg: 'transparent',
                        color: '#01913C'
                      }}
                      role='group'
                      fontWeight='semibold'
                      transition='.15s ease'>
                      <Icon boxSize='25px' as={Herramientas2} />
                    </Flex>
                  )}

                  {inactive3 ? (
                    <Flex
                      onClick={() => {
                        setInactive3(false);
                        setInactive(true);
                        setInactive1(true);
                        setInactive2(true);
                        setInactive4(true);
                        setInactive5(true);
                        parar();
                        history.push('/mysurebets');
                      }}
                      align='center'
                      justifyContent={'center'}
                      rounded='md'
                      cursor='pointer'
                      color='#13235b'
                      _dark={{
                        color: '#FFFF'
                      }}
                      _hover={{
                        bg: 'transparent',
                        color: '#01913C'
                      }}
                      role='group'
                      fontWeight='semibold'
                      transition='.15s ease'>
                      <Icon boxSize='25px' as={Registro} />
                    </Flex>
                  ) : (
                    <Flex
                      align='center'
                      justifyContent={'center'}
                      rounded='md'
                      cursor='pointer'
                      color='#13235b'
                      _dark={{
                        color: '#FFFF'
                      }}
                      _hover={{
                        bg: 'transparent',
                        color: '#01913C'
                      }}
                      role='group'
                      fontWeight='semibold'
                      transition='.15s ease'>
                      <Icon boxSize='25px' as={Registro2} />
                    </Flex>
                  )}

                  {inactive4 ? (
                    <Flex
                      onClick={() => {
                        setInactive4(false);
                        setInactive(true);
                        setInactive1(true);
                        setInactive2(true);
                        setInactive3(true);
                        setInactive5(true);
                        parar();
                        history.push('/store');
                      }}
                      align='center'
                      justifyContent={'center'}
                      rounded='md'
                      cursor='pointer'
                      color='#13235b'
                      _dark={{
                        color: '#FFFF'
                      }}
                      _hover={{
                        bg: 'transparent',
                        color: '#01913C'
                      }}
                      role='group'
                      fontWeight='semibold'
                      transition='.15s ease'>
                      <Icon boxSize='25px' as={Tienda} />
                    </Flex>
                  ) : (
                    <Flex
                      align='center'
                      justifyContent={'center'}
                      rounded='md'
                      cursor='pointer'
                      color='#13235b'
                      _dark={{
                        color: '#FFFF'
                      }}
                      _hover={{
                        bg: 'transparent',
                        color: '#01913C'
                      }}
                      role='group'
                      fontWeight='semibold'
                      transition='.15s ease'>
                      <Icon boxSize='25px' as={Tienda2} />
                    </Flex>
                  )}
                </Flex>

                <Flex
                  direction={'column'}
                  alignItems='center'
                  gap='35px'>
                  <Popover
                    minWidth={'20%'}
                    // closeOnBlur={false}
                    trigger={'hover'}
                    placement='right'>
                    <PopoverTrigger>
                      {colorMode === 'light' ? (
                        <Notificaciones
                          w={'3em'}
                          h={'2em'}
                          color={'#0A1A4A'}
                        />
                      ) : (
                        <Notificaciones
                          w={'3em'}
                          h={'2em'}
                          color={'#FFFF'}
                        />
                      )}
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent
                        top={'-140'}
                        marginLeft={'5%'}
                        w={'426px'}
                        h={'420px'}
                        borderRadius={'10px'}
                        bgColor={'#FFFF'}
                        _dark={{
                          bgColor: '#000D27'
                        }}>
                        <PopoverBody
                          borderRadius={'10px'}
                          p={'4% 7%'}
                          h={'100%'}>
                          <Flex
                            direction={'column'}
                            justify={'space-between'}
                            h={'100%'}
                            alignItems={'center'}>
                            <Flex
                              overflowY={'auto'}
                              scrollBehavior={'smooth'}
                              bg={'#FFFFFF'}
                              _dark={{
                                bgColor: '#000D27'
                              }}
                              height={'auto'}
                              maxHeight={'100vh'}
                              css={{
                                '&::-webkit-scrollbar': {
                                  width: '12px'
                                },
                                '&::-webkit-scrollbar-track': {
                                  background: 'transparent',
                                  borderRadius: '0px'
                                },
                                '&::-webkit-scrollbar-thumb': {
                                  background: '#01913C',
                                  borderRadius: '6px'
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                  background: '#01913C'
                                }
                              }}
                              direction={'column'}
                              gap={'18px'}
                              justifyContent={'space-between'}>
                              {notif.map((n) => {
                                return (
                                  <Flex
                                    bgColor={'#F3F3F3'}
                                    _dark={{
                                      bgColor: '#03153B'
                                    }}
                                    p={'4%'}
                                    borderRadius={'10px'}>
                                    <Text
                                      textColor={'#0A1A4A'}
                                      _dark={{
                                        textColor: '#FFFF'
                                      }}
                                      fontFamily={'ObjectiveLight'}
                                      fontSize={'1.2rem'}>
                                      <Text
                                        fontFamily={'ObjectiveBold'}
                                        fontSize={'1.5rem'}>
                                        {n.title}
                                      </Text>
                                      {n.description}
                                    </Text>
                                  </Flex>
                                );
                              })}
                            </Flex>

                            <Flex>
                              <Text
                                fontSize={'1.2rem'}
                                textColor={'#0A1A4A'}
                                _dark={{
                                  textColor: '#FFFF'
                                }}
                                fontFamily={'ObjectiveLight'}>
                                Es todo por hoy.
                              </Text>
                            </Flex>
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>

                  <Flex
                    onClick={toggleColorMode}
                    align='center'
                    justifyContent={'center'}
                    rounded='md'
                    cursor='pointer'
                    color='#13235b'
                    _dark={{
                      color: '#FFFF'
                    }}
                    _hover={{
                      bg: 'transparent',
                      color: '#01913C'
                    }}
                    role='group'
                    fontWeight='semibold'
                    transition='.15s ease'>
                    {colorMode === 'light' ? (
                      <Icon boxSize='25px' as={Mododark} />
                    ) : (
                      <Icon boxSize='25px' as={Lightmode} />
                    )}
                  </Flex>

                  <Popover
                    minWidth={'20%'}
                    // closeOnBlur={false}
                    trigger={'hover'}
                    placement='right'>
                    <PopoverTrigger>
                      <Avatar
                        size='lg'
                        name={'Angel Ponce'}
                        // src='https://i.kym-cdn.com/entries/icons/original/000/037/263/pedrocover.jpg'
                      />
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent
                        marginLeft={'5%'}
                        w={'430px'}
                        borderRadius={'10px'}
                        bgColor={'#FFFF'}
                        _dark={{
                          bgColor: '#000D27'
                        }}>
                        <PopoverBody
                          borderRadius={'10px'}
                          p={'4% 7%'}>
                          <Flex
                            direction={'column'}
                            gap={'18px'}
                            alignItems={'center'}>
                            <Flex
                              w={'100%'}
                              gap={'10px'}
                              justifyContent={'space-between'}>
                              <Flex
                                w={'100%'}
                                bgColor={'#F3F3F3'}
                                _dark={{
                                  bgColor: '#03153B'
                                }}
                                borderRadius={'10px'}
                                p={'3% 5%'}
                                alignItems={'center'}
                                gap={'11px'}>
                                <Avatar
                                  size='xl'
                                  name={'Angel Ponce'}
                                  fontSize={'8rem'}

                                  // src='https://i.kym-cdn.com/entries/icons/original/000/037/263/pedrocover.jpg'
                                />
                                <Flex
                                  lineHeight={'15px'}
                                  direction={'column'}
                                  color={'#0A1A4A'}
                                  _dark={{
                                    color: '#FFFF'
                                  }}>
                                  <Text
                                    fontFamily={'ObjectiveMedium'}
                                    lineHeight={'2rem'}
                                    fontSize={'2rem'}>
                                    {nombre}
                                  </Text>
                                  <Link
                                    onClick={() => {
                                      setInactive(true);
                                      setInactive1(true);
                                      setInactive2(true);
                                      setInactive3(true);
                                      setInactive4(true);
                                      setInactive5(true);
                                      parar();
                                      history.push('/profile');
                                    }}
                                    fontFamily={'ObjectiveMedium'}
                                    fontSize={'1.1rem'}>
                                    Configurar perfil
                                  </Link>
                                </Flex>
                              </Flex>
                              <Flex
                                bgColor={'#F3F3F3'}
                                _dark={{
                                  bgColor: '#03153B'
                                }}
                                borderRadius={'10px'}
                                p={'3% 5%'}
                                alignItems={'center'}
                                gap={'10px'}>
                                <IconButton
                                  bg={'transparent'}
                                  onClick={cerrarsesion}
                                  fontSize={'4rem'}
                                  color={'#0A1A4A'}
                                  _dark={{
                                    color: '#FFFF'
                                  }}
                                  icon={<MdLogout />}></IconButton>
                              </Flex>
                            </Flex>
                            <Flex>
                              <Link
                                onClick={onOpen}
                                fontSize={'1.2rem'}
                                fontFamily={'ObjectiveLight'}
                                textColor={'#0A1A4A'}
                                _dark={{
                                  color: '#FFFF'
                                }}>
                                Politica de Privacidad .
                              </Link>
                              <Link
                                onClick={onOpen2}
                                fontSize={'1.2rem'}
                                fontFamily={'ObjectiveLight'}
                                textColor={'#0A1A4A'}
                                _dark={{
                                  color: '#FFFF'
                                }}>
                                Términos de Uso.
                              </Link>
                            </Flex>
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement='left'>
          <DrawerOverlay />
          <DrawerContent>
            <Flex w='full' borderRight='none'>
              <Box
                as='nav'
                pos='fixed'
                top='0'
                left='0'
                zIndex='sticky'
                h='full'
                // pb='10'
                overflowX='hidden'
                overflowY='auto'
                bg='#F3F3F3'
                boxShadow={'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'}
                borderColor='blackAlpha.300'
                borderRightWidth='1px'
                w='60px'>
                <Flex direction={'column'} h='100%' gap={'0px'}>
                  <Flex
                    align='center'
                    justifyContent={'center'}
                    h='20%'
                    p={'0% 20%'}>
                    <Image
                      w={'80%'}
                      borderRadius={6}
                      src={
                        'https://res.cloudinary.com/ddsfttqtk/image/upload/v1680298345/T-Money/LOGO_T-Money_SideBar_yzq9ky.svg'
                      }
                    />
                  </Flex>

                  <Flex
                    direction={'column'}
                    justifyContent='space-between'
                    h='70%'>
                    <Flex
                      direction={'column'}
                      alignItems='center'
                      gap='22px'>
                      <Flex
                        direction={'column'}
                        alignItems='center'
                        bgColor={'#13235b'}
                        w='72%'
                        gap={'20px'}
                        h={'90px'}
                        justifyContent='center'
                        borderRadius='5px'>
                        {inactive ? (
                          <Flex
                            onClick={() => {
                              setInactive(false);
                              setInactive1(true);
                              setInactive2(true);
                              setInactive3(true);
                              setInactive4(true);
                              setInactive5(true);
                              history.push('/LiveI');
                            }}
                            align='center'
                            justifyContent={'center'}
                            rounded='md'
                            cursor='pointer'
                            color='#13235b'
                            _hover={{
                              bg: 'transparent',
                              color: '#01913C'
                            }}
                            role='group'
                            fontWeight='semibold'
                            transition='.15s ease'>
                            <Icon
                              color='#ffff'
                              boxSize='25px'
                              as={Live}
                            />
                          </Flex>
                        ) : (
                          <Flex
                            align='center'
                            justifyContent={'center'}
                            rounded='md'
                            cursor='pointer'
                            color='#13235b'
                            _hover={{
                              bg: 'transparent',
                              color: '#01913C'
                            }}
                            role='group'
                            fontWeight='semibold'
                            transition='.15s ease'>
                            <Icon
                              color='#ffff'
                              boxSize='25px'
                              as={Live2}
                            />
                          </Flex>
                        )}

                        {inactive1 ? (
                          <Flex
                            onClick={() => {
                              setInactive1(false);
                              setInactive(true);
                              setInactive2(true);
                              setInactive3(true);
                              setInactive4(true);
                              setInactive5(true);
                            }}
                            align='center'
                            justifyContent={'center'}
                            rounded='md'
                            cursor='pointer'
                            color='#13235b'
                            _hover={{
                              bg: 'transparent',
                              color: '#01913C'
                            }}
                            role='group'
                            fontWeight='semibold'
                            transition='.15s ease'>
                            <Icon
                              color='#ffff'
                              boxSize='25px'
                              as={Prematch}
                            />
                          </Flex>
                        ) : (
                          <Flex
                            align='center'
                            justifyContent={'center'}
                            rounded='md'
                            cursor='pointer'
                            color='#13235b'
                            _hover={{
                              bg: 'transparent',
                              color: '#01913C'
                            }}
                            role='group'
                            fontWeight='semibold'
                            transition='.15s ease'>
                            <Icon
                              color='#ffff'
                              boxSize='25px'
                              as={Prematch2}
                            />
                          </Flex>
                        )}
                      </Flex>

                      {inactive2 ? (
                        <Flex
                          onClick={() => {
                            setInactive2(false);
                            setInactive(true);
                            setInactive1(true);
                            setInactive3(true);
                            setInactive4(true);
                            setInactive5(true);
                          }}
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Herramientas} />
                        </Flex>
                      ) : (
                        <Flex
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Herramientas2} />
                        </Flex>
                      )}

                      {inactive3 ? (
                        <Flex
                          onClick={() => {
                            setInactive3(false);
                            setInactive(true);
                            setInactive1(true);
                            setInactive2(true);
                            setInactive4(true);
                            setInactive5(true);
                          }}
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Registro} />
                        </Flex>
                      ) : (
                        <Flex
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Registro2} />
                        </Flex>
                      )}

                      {inactive4 ? (
                        <Flex
                          onClick={() => {
                            setInactive4(false);
                            setInactive(true);
                            setInactive1(true);
                            setInactive2(true);
                            setInactive3(true);
                            setInactive5(true);
                          }}
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Tienda} />
                        </Flex>
                      ) : (
                        <Flex
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Tienda2} />
                        </Flex>
                      )}
                    </Flex>

                    <Flex
                      direction={'column'}
                      alignItems='center'
                      gap='18px'>
                      {inactive5 ? (
                        <Flex
                          onClick={() => {
                            setInactive5(false);
                            setInactive(true);
                            setInactive1(true);
                            setInactive2(true);
                            setInactive3(true);
                            setInactive4(true);
                          }}
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <IconButton
                            bgColor={'transparent'}
                            cursor={'pointer'}
                            _hover={{ color: '#FFFF' }}
                            as={Notificaciones}
                          />
                        </Flex>
                      ) : (
                        <Flex
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Notificaciones2} />
                        </Flex>
                      )}

                      {colorMode === 'light' ? (
                        <Flex
                          onClick={toggleColorMode}
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Mododark} />
                        </Flex>
                      ) : (
                        <Flex
                          onClick={toggleColorMode}
                          align='center'
                          justifyContent={'center'}
                          rounded='md'
                          cursor='pointer'
                          color='#13235b'
                          _hover={{
                            bg: 'transparent',
                            color: '#01913C'
                          }}
                          role='group'
                          fontWeight='semibold'
                          transition='.15s ease'>
                          <Icon as={Mododark} />
                        </Flex>
                      )}

                      <Avatar
                        size='lg'
                        name='Dan Abrahmov'
                        src='https://i.kym-cdn.com/entries/icons/original/000/037/263/pedrocover.jpg'
                      />
                    </Flex>
                  </Flex>
                </Flex>

                {/* <Flex
        direction='column'
        as='nav'
        textColor={'#707070'}
        aria-label='Main Navigation'>
        <IconButton
          bgColor={'transparent'}
          _hover={{
            bgColor: 'transparent',
            color: '#F39D2F'
          }}
          fontSize={'1.5rem'}
          w='100%'
          icon={<Live />}></IconButton>
      </Flex>

      <Flex
        direction='column'
        as='nav'
        textColor={'#707070'}
        aria-label='Main Navigation'>
        <IconButton
          bgColor={'transparent'}
          _hover={{
            bgColor: 'transparent',
            color: '#F39D2F'
          }}
          fontSize={'1.5rem'}
          w='100%'
          icon={<Herramientas />}></IconButton>
      </Flex>
      <Flex
        direction='column'
        as='nav'
        textColor={'#707070'}
        aria-label='Main Navigation'>
        <IconButton
          bgColor={'transparent'}
          _hover={{
            bgColor: 'transparent',
            color: '#F39D2F'
          }}
          fontSize={'1.5rem'}
          w='100%'
          icon={<Registro />}></IconButton>
      </Flex>
      <Flex
        direction='column'
        as='nav'W
        textColor={'#707070'}
        aria-label='Main Navigation'>
        <IconButton
          bgColor={'transparent'}
          _hover={{
            bgColor: 'transparent',
            color: '#F39D2F'
          }}
          fontSize={'1.5rem'}
          w='100%'
          icon={<Tienda />}></IconButton>
      </Flex> */}
              </Box>
            </Flex>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}