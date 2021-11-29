import React from 'react';

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./pdf-viewer'), {
	ssr: false,
});

const ResumeModal = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent
				backgroundColor="#1b1e23"
				minW="40vw"
				minH="95vh"
				maxH="95vh"
				display="flex"
				flexDir="column"
				alignItems="center"
				pt="20px"
			>
				<ModalCloseButton colorScheme="blue" />
				<ModalBody>
					<PDFViewer />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default ResumeModal;
