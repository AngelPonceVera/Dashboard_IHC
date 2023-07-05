import React, { Component, useState, useEffect } from 'react';
import {
  Flex,
  Box,
  IconButton,
  HStack,
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
  useColorMode
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import { useViewportScroll } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';
import moment from 'moment';
import './../../../assets/css/GeneralTmoney.css';
import './../../../assets/css/general.css';
import { useHistory } from 'react-router-dom';
import SidebarI from './../../../components/SideNav/SideNav.js';
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const period = hour >= 12 ? ' p.m.' : ' a.m.';
  const formattedHour =
    hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const formattedMinute = String(minute).padStart(2, '0');

  const days = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
  ];
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ];
  const day = days[time.getDay()];
  const date = time.getDate();
  const month = months[time.getMonth()];
  const year = time.getFullYear();

  return (
    <Flex
      fontSize={['1.5rem', '1.8rem', '2.3rem']}
      color='#13235B'
      fontFamily='ObjectiveBold'
      fontWeight='600'
      direction={'column'}
      w='60%'
      lineHeight={'9'}>
      {formattedHour}:{formattedMinute}
      {period}
      <Flex
        fontFamily='Objective'
        letterSpacing={'3%'}
        fontSize='1.2rem'
        direction={'column'}
        margin={'0'}>
        {day} {date} de {month} del {year}
      </Flex>
    </Flex>
  );
}

function HomeViews() {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining()
  );

  function calculateTimeRemaining() {
    const targetDate = new Date('2023-07-29'); // Reemplaza con tu fecha objetivo
    const now = new Date();
    const difference = Math.max(targetDate - now, 0);

    const seconds = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const Articulos = [
    {
      descripcion:
        'LA CÁMARA WEB PERFECTA PARA REUNIONES POR VÍDEO.',
      imagen:
        'https://res.cloudinary.com/dzqqikdrp/image/upload/v1688521592/Ecommerce%20MemoryKings/Captura_de_pantalla_2023-05-24_182738_ho60sz.jpg',
      url: ''
    },
    {
      descripcion:
        'Disco Duro Wester Digital Elements.',
      imagen:
        'https://res.cloudinary.com/dzqqikdrp/image/upload/v1688521637/Ecommerce%20MemoryKings/Captura_de_pantalla_2023-05-24_183001_fzoxya.jpg',
      url: ''
    },
    {
      descripcion:
        'Laptop ASUS M1502IA-EJ205.',
      imagen:
        'https://res.cloudinary.com/dzqqikdrp/image/upload/v1688521688/Ecommerce%20MemoryKings/Laptop_Ryzen_7_4800H_ASUS_M1502IA_itusrs.jpg',
      url: ''
    }
  ];

  return (
    <>
      <SidebarI />
      <Box
        bg='#FFFFFF'
        w={'100%'}
        height='auto'
        maxHeight='100vh'
        overflowY='auto'
        css={{
          '&::-webkit-scrollbar': {
            width: '12px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#6b6b6b',
            borderRadius: '0px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#9b9b9b',
            borderRadius: '6px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#9b9b9b'
          }
        }}>
        <Flex
          bgImage='https://res.cloudinary.com/dzqqikdrp/image/upload/v1688340504/Ecommerce%20MemoryKings/background_web_.png'
          h='92%'
          bgPosition={'50% 50%'}
          bgRepeat='no-repeat'
          bgSize='cover'
          minHeight='100vh'
          flexDirection='column'>
          <Box>
            <Container
              position={'fixed'}
              h={'100%'}
              padding={'3% 2.8% 3% 5%'}
              maxW={'100%'}
              margin={'0'}>
              <Flex
                direction='column'
                width='100%'
                h='100%'
                justifyContent='space-between'
                // gap={'20px'}
              >
                <Flex
                  alignItems='center'
                  height={'auto'}
                  gap={'20px'}
                  textColor='#13235B'
                  fontSize={'3rem'}
                  //fontSize='3rem'
                >
                  <Text fontFamily={'Objective'}>Bienvenido,</Text>
                  <Text fontFamily='ObjectiveBold'>Angel Ponce</Text>
                </Flex>

                <Flex h={'12%'} /*h={'18%'}*/ w='100%'>
                  <Flex
                    p={'1% 4% 1% 2%'}
                    bg={'#fff'}
                    justifyContent={'space-between'}
                    borderRadius='10px'>
                    <Flex
                      direction={'column'}
                      justifyContent={'center'}
                      textColor={'#132358'}
                      lineHeight={'25px'}
                      //lineHeight={'8.5rem'}
                    >
                      <Flex
                        gap={'10px'}
                        fontSize={{
                          '2xl': '4rem',
                          xl: '2.6rem',
                          lg: '2.5rem',
                          md: '2rem',
                          sm: '1.9rem'
                        }}>
                        <Clock />
                        <Flex
                          w={'11%'}
                          //w={'10%'}
                          h='80%'
                          alignItems={'center'}
                          marginBlockStart={'-4'}
                          marginLeft={'-59'}>
                          <Image
                            w={'100%'}
                            src='https://icons.iconarchive.com/icons/wikipedia/flags/256/PE-Peru-Flag-icon.png'
                          />
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex
                      w={'16%'}
                      //w={'15%'}
                      direction={'row'}
                      justifyContent='center'
                      gap={{
                        '2xl': '25px',
                        xl: '80px',
                        lg: '90px',
                        md: '50px',
                        sm: '20px'
                      }}>
                      <Link
                        display={'flex'}
                        justifyContent='center'
                        href='https://www.youtube.com/channel/UCYsKcR2k3XT9cNQUm-CBxPg'
                        target='_blank'>
                        <Image
                          w={{
                            '2xl': '100%',
                            xl: '100%',
                            lg: '100%',
                            md: '100%',
                            sm: '70%'
                          }}
                          src={
                            'https://res.cloudinary.com/ddsfttqtk/image/upload/v1680214595/T-Money/YOUTUBE_mtkjgv.svg'
                          }></Image>
                      </Link>
                      <Link
                        display={'flex'}
                        justifyContent='center'
                        href='https://www.youtube.com/channel/UCYsKcR2k3XT9cNQUm-CBxPg'
                        target='_blank'>
                        <Image
                          w={{
                            '2xl': '100%',
                            xl: '100%',
                            lg: '100%',
                            md: '100%',
                            sm: '70%'
                          }}
                          src={
                            'https://res.cloudinary.com/ddsfttqtk/image/upload/v1680214595/T-Money/WHATSAPP_ujrhd9.svg'
                          }></Image>
                      </Link>
                      <Link
                        display={'flex'}
                        justifyContent='center'
                        href='https://www.youtube.com/channel/UCYsKcR2k3XT9cNQUm-CBxPg'
                        target='_blank'>
                        <Image
                          w={{
                            '2xl': '100%',
                            xl: '100%',
                            lg: '100%',
                            md: '100%',
                            sm: '70%'
                          }}
                          src={
                            'https://res.cloudinary.com/ddsfttqtk/image/upload/v1680214595/T-Money/FACEBOOK_lwdldp.svg'
                          }></Image>
                      </Link>
                      <Link
                        display={'flex'}
                        justifyContent='center'
                        href='https://www.youtube.com/channel/UCYsKcR2k3XT9cNQUm-CBxPg'
                        target='_blank'>
                        <Image
                          w={{
                            '2xl': '100%',
                            xl: '100%',
                            lg: '100%',
                            md: '100%',
                            sm: '70%'
                          }}
                          src={
                            'https://res.cloudinary.com/ddsfttqtk/image/upload/v1680214595/T-Money/TIKTOK_yjo66s.svg'
                          }></Image>
                      </Link>

                      <Link
                        display={'flex'}
                        justifyContent='center'
                        href='https://www.youtube.com/channel/UCYsKcR2k3XT9cNQUm-CBxPg'
                        target='_blank'>
                        <Image
                          w={{
                            '2xl': '100%',
                            xl: '100%',
                            lg: '100%',
                            md: '100%',
                            sm: '70%'
                          }}
                          src={
                            'https://res.cloudinary.com/ddsfttqtk/image/upload/v1680214596/T-Money/INSTAGRAM_t9cp7u.svg'
                          }></Image>
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex
                  w='100%'
                  h={'76%'}
                  //h='100%'
                  //gap={'25px'}
                  justifyContent={'space-between'}>
                  <Flex
                    w={'32%'}
                    //w={'100%'}
                    h={'100%'}
                    justifyContent={'space-between'}
                    direction={'column'}
                    //gap={'20px'}
                  >
                    <Flex h={'10%'} /*h={'14%'}*/ w='100%'>
                      <Flex
                        w={'100%'}
                        p={'3% 6% 3% 6%'}
                        alignItems={'center'}
                        bgColor={'#fff'}
                        borderRadius={'10px'}
                        justifyContent={'space-between'}>
                        <Text
                          textColor={'#132358'}
                          fontFamily={'ObjectiveBold'}
                          fontSize={'1.5rem'}
                          //fontSize={'1.5rem'}
                        >
                          Conoce el escáner
                        </Text>
                        <Flex>
                          <Icon
                            as={'FaPlay'}
                            color='#13235B'
                            fontSize={'1.5rem'}
                          />
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex h='87%' /*h='100%'*/ w='100%'>
                      <Flex
                        w={'100%'}
                        p={'3% 6%'}
                        height={'100%'}
                        justifyContent={'space-between'}
                        bgColor={'#FFFFFF'}
                        direction='column'
                        borderRadius='10px'>
                        <Flex
                          justifyContent={'center'}
                          w='100%'
                          alignItems='center'>
                          <Text
                            textColor={'#13235B'}
                            textAlign='center'
                            fontFamily='ObjectiveBold'
                            fontSize={'1.6rem'}
                            //fontSize='1.6rem'
                          >
                            Artículos recientes
                          </Text>
                        </Flex>

                        <Flex
                          h='90%'
                          direction={'column'}
                          justifyContent={'space-between'}
                          alignItems='center'>
                          {Articulos.map((a) => {
                            return (
                              <Flex
                                w={'100%'}
                                bg={
                                  '#F3F3F3 0% 0% no-repeat padding-box'
                                }
                                justifyContent='space-between'
                                alignItems={'center'}
                                borderRadius='10px'
                                p={'2% 6%'}>
                                <Flex
                                  w={'42%'}
                                  direction='column'
                                  gap={'5px'}>
                                  <Text
                                    textColor={'#13235B'}
                                    fontSize='0.9rem'
                                    fontFamily={'ObjectiveLight'}>
                                    {a.descripcion}
                                  </Text>
                                  <Link
                                    href={a.url}
                                    fontSize={'1rem'}
                                    /*fontSize='1rem'*/
                                    textColor={'#01913C'}
                                    fontFamily='ObjectiveBold'>
                                    Click para comprar
                                  </Link>
                                </Flex>
                                <Flex w={'40%'}>
                                  <Image src={a.imagen}></Image>
                                </Flex>
                              </Flex>
                            );
                          })}
                          <Flex>
                            <Link
                              fontSize={'1.1rem'}
                              //fontSize='1.1rem'
                              textColor={'#01913C'}
                              fontFamily='ObjectiveBold'>
                              Buscar más
                            </Link>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    w={'32%'}
                    //w={'100%'}
                    h='10em'
                    direction={'column'}
                    gap='20px'>
                    <Flex w={'100%'}>
                      <Flex
                        w={'100%'}
                        p={'1% 1% 1% 1%'}
                        bgColor={'#FFFFFF'}
                        gap='3px'
                        alignItems='center'
                        borderRadius='10px'
                        justifyContent={'center'}
                        direction='column'>
                        <Text
                          color='#13235B'
                          fontFamily='ObjectiveBold'
                          fontSize='25px'
                          marginBottom='0.5em'>
                          ¡25% de descuento!
                        </Text>
                        <Flex
                          position={'relative'}
                          bgColor={'White'}
                          borderRadius={'10'}
                          p={'1%'}
                          width={'100%'}
                          justifyContent={'center'}
                          sx={'outerBoxstyles'}>
                          <Flex
                            sx={'innerBoxStyles'}
                            p={'1% 33% 0% 33%'}
                            backdropFilter={'auto'}
                            backdropBlur={'8px'}
                            w={'100%'}
                            position={'absolute'}
                            top={'0'}>
                            <Text
                              letterSpacing={'8.33px'}
                              //letterSpacing='5px'
                              fontFamily='ObjectiveBold'
                              fontSize='0.9rem'
                              //marginTop='0.5em'
                              textColor='#01913C'
                              //fontWeight={'600'}
                            >
                              <Link>VER CODIGO</Link>
                            </Text>
                          </Flex>
                          <Text
                            textColor={'#13235B'}
                            letterSpacing={'8px'}
                            fontFamily={'ObjectiveBold'}
                            fontSize={'1.1rem'}>
                            AKYRIWE
                          </Text>
                        </Flex>
                        <Flex
                          textColor={'#13235B'}
                          gap={'4.8px'}
                          fontSize={'1.2rem'}>
                          <Text
                            fontFamily='ObjectiveBold'
                            //fontSize='14px'
                            //marginTop='1em'
                            //color='#13235B'
                          >
                            Sujeto a
                          </Text>
                          <Link
                            textColor='#01913C'
                            fontFamily={'Objective'}
                            textDecoration='underline'>
                            Términos y Condiciones
                          </Link>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex w='100%' /*h={'40%'}*/>
                      <Flex
                        w={'100%'}
                        p={'2% 1% 2% 1%'}
                        gap={'15px'}
                        textAlign={'center'}
                        direction={'column'}
                        bg='#fff'
                        borderRadius='10px'>
                        <Text
                          textColor={'#13235B'}
                          fontFamily={'ObjectiveBold'}
                          fontSize={'1.7rem'}>
                          Duración de membresía
                        </Text>

                        <Flex
                          justifyContent='center'
                          alignItems='center'
                          fontFamily='ObjectiveBold'
                          fontSize='30px'>
                          <Text color='#13235B' marginRight='10px'>
                            {timeRemaining.days
                              .toString()
                              .padStart(2, '0')}
                          </Text>
                          <Text
                            color='#01913C'
                            marginLeft='10px'
                            marginRight='10px'>
                            :
                          </Text>
                          <Text
                            color='#13235B'
                            marginLeft='15px'
                            marginRight='10px'>
                            <strong>
                              {timeRemaining.hours
                                .toString()
                                .padStart(2, '0')}
                            </strong>
                          </Text>
                          <Text
                            color='#01913C'
                            marginLeft='10px'
                            marginRight='10px'>
                            :
                          </Text>
                          <Text
                            color='#13235B'
                            marginLeft='15px'
                            marginRight='10px'>
                            <strong>
                              {timeRemaining.minutes
                                .toString()
                                .padStart(2, '0')}
                            </strong>
                          </Text>
                          <Text
                            color='#01913C'
                            marginLeft='10px'
                            marginRight='10px'>
                            :
                          </Text>
                          <Text
                            color='#13235B'
                            marginLeft='15px'
                            marginRight='10px'>
                            <strong>
                              {timeRemaining.seconds
                                .toString()
                                .padStart(2, '0')}
                            </strong>
                          </Text>
                        </Flex>
                        <Flex
                          justifyContent='center'
                          alignItems='center'
                          fontFamily='ObjectiveBold'
                          fontSize='13px'>
                          <Text
                            color='#13235B'
                            marginLeft='1.3em'
                            marginRight='2.6em'>
                            DÍAS
                          </Text>
                          <Text
                            color='#13235B'
                            marginLeft='1.5em'
                            marginRight='2em'>
                            HORAS
                          </Text>
                          <Text
                            color='#13235B'
                            marginLeft='1.1em'
                            marginRight='2em'>
                            MINUTOS
                          </Text>
                          <Text color='#13235B' marginLeft='1em'>
                            SEGUNDOS
                          </Text>
                        </Flex>
                        <Flex
                          w={'100%'}
                          textColor={'#13235B'}
                          gap='4.8px'
                          justifyContent='center'
                          fontSize={'1.32rem'}>
                          <Text fontFamily='Objective'>Quiero</Text>
                          <Link
                            textColor='#01913C'
                            fontFamily={'Objective'}
                            textDecoration='underline'>
                            Renovar mi membresia
                          </Link>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex w={'100%'}>
                      <Flex
                        w={'100%'}
                        p={'1% 5% 0% 5%'}
                        bgColor='#fff'
                        borderRadius='10px'
                        alignItems={'center'}
                        justifyContent={'space-between'}>
                        <Text
                          textColor='#13235B'
                          fontFamily='ObjectiveBold'
                          fontSize='1.6rem'
                          // marginTop={'0.5em'}
                          // marginLeft={'1em'}
                        >
                          Comunícate con soporte
                        </Text>
                        <Link>
                          <Text
                            fontSize={'2.6rem'}
                            color={'#01913C'}
                            fontFamily={'ObjectiveBold'}>
                            &gt;&gt;&gt;
                          </Text>
                          {/* <FaChevronRight
                            color='#F39D2F'
                            size={20}
                            transform='translateY(-50%)'
                          />
                          <FaChevronRight
                            color='#F39D2F'
                            size={20}
                            transform='translateY(-50%)'
                          />
                          <FaChevronRight
                            color='#F39D2F'
                            size={20}
                            position='absolute'
                            top='50%'
                            right='2.5em'
                            transform='translateY(-50%)'
                          /> */}
                        </Link>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    w={'32%'}
                    //w={'100%'}
                    h='100%'
                    direction={'column'}
                    gap={'15px'}
                    //gap={'20px'}
                  >
                    <Flex
                      w='100%'
                      h={'300px'}
                      borderRadius={'10px'}
                      //h={'45%'}
                    >
                      <Link
                        h={'100%'}
                        w={'100%'}
                        href='https://www.youtube.com/@MemoryKingsPeru'
                        target='_blank'>
                        <Image
                          src='https://res.cloudinary.com/dzqqikdrp/image/upload/v1688520052/Ecommerce%20MemoryKings/hqdefault_hn7xd0.png'
                          alt='Video Youtube'
                          borderRadius={'10px'}
                          h={'100%'}
                          w={'100%'}
                        />
                      </Link>
                    </Flex>
                    <Flex
                      w={'100%'}
                      p={'1.5% 6% 1.5% 6%'}
                      bgColor={'#fff'}
                      gap={'10px'}
                      borderRadius='10px'
                      justifyContent={'space-between'}
                      alignItems={'center'}>
                      <Image
                        src='https://res.cloudinary.com/ddsfttqtk/image/upload/v1680214594/T-Money/NOVEDADES_cpk9vc.png'
                        width={'25%'}
                      />
                      <Flex
                        direction={'column'}
                        alignItems={'flex-end'}
                        justifyContent={'center'}
                        gap={'5px'}
                        h={'100%'}>
                        <Flex
                          direction={'column'}
                          alignItems={'flex-end'}
                          textColor={'#13235B'}
                          lineHegiht={'25px'}>
                          <Text
                            fontFamily='ObjectiveBold'
                            fontSize='3rem'>
                            Novedades
                          </Text>
                          <Text
                            fontFamily='ObjectiveBold'
                            fontSize='1.05rem'
                            //textAlign='center'
                            //marginLeft={'5.5em'}
                            //color='#13235B'
                          >
                            Actualización 23.01.559
                          </Text>
                        </Flex>
                        <Link
                          fontSize={'1rem'}
                          fontFamily={'ObjectiveBold'}
                          textColor={'#01913C'}>
                          {/* <Flex
                              fontFamily='ObjectiveBold'
                              fontSize='15px'
                              marginLeft={'9.5em'}> */}
                          {/* <Text style={{ color: '#01913C' }}> */}
                          Ver Actualizaciones
                          {/* </Text> */}
                          {/* </Flex> */}
                        </Link>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default HomeViews;
