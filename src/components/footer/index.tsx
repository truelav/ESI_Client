import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react'
  import { ReactNode } from 'react'
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
  import { BiMailSend } from 'react-icons/bi'

  import logo from "/logo.png";
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode
    label: string
    href: string
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    )
  }
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Image src={logo} />
              </Box>
              <Text fontSize={'sm'}>© 2023 ESI Enterprises. All rights reserved</Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={'#'}>
                About us
              </Box>
              <Box as="a" href={'#'}>
                Blog
              </Box>
              <Box as="a" href={'#'}>
                Contact us
              </Box>
              <Box as="a" href={'#'}>
                Pricing
              </Box>
              <Box as="a" href={'#'}>
                Testimonials
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Box as="a" href={'#'}>
                Help Center
              </Box>
              <Box as="a" href={'#'}>
                Terms of Service
              </Box>
              <Box as="a" href={'#'}>
                Legal
              </Box>
              <Box as="a" href={'#'}>
                Privacy Policy
              </Box>
              <Box as="a" href={'#'}>
                Satus
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('blue.400', 'blue.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'blue.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    )
  }


            // <div>
            //     Headquarters: 7801 Hayvenhurst Ave, Van Nuys, CA 91406
            // </div>
            // <div>
            //     Phone: (818) 887-0700
            // </div>
            // <div>
            //     Email: info@esintl.com
            // </div>
            //  2023 #ESI © Copyrights ESI Enterprises, Inc. All rights reserved.
