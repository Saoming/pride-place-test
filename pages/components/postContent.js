import { useDisclosure } from "@chakra-ui/hooks"
import { Image } from "@chakra-ui/image"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"

export const PosContent = ({title, paragraph, name, catchPhrase}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex onClick={onOpen} width="100%" height="400px" p="8" position="relative" color="black" cursor="pointer">
                <Image src="https://picsum.photos/seed/picsum/800/400" objectFit="cover" width="100%" height="100%" position="absolute" top="0" left="0" zIndex="2" filter="brightness(0.7)"  />
                {/* Heading Post */}
                <Flex zIndex="3" alignItems="flex-end">
                    <Heading color="white" fontSize="28px">{title}</Heading>
                </Flex>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/* User Title */}
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* User post */}
                        <Heading mb="4">{title}</Heading>
                        {/* User body */}
                        <Text> {paragraph} </Text>

                    </ModalBody>
                    <ModalFooter>
                        {/* User Catchprase */}
                        <Text>{catchPhrase}</Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}