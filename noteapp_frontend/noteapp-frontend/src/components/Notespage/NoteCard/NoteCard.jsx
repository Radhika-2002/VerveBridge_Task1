import {
    Button, Card, CardBody, Flex, Heading, Input, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure, VStack
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import "./style.css";

export default function NoteCard({ title, body, user, _id }) {
    const dispatch = useDispatch();
    const [tempTitle, setTitle] = useState(title);
    const [tempBody, setBody] = useState(body);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = useRef(null);
    const finalRef = useRef(null);

    const updateNote = () => {
        dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
        onClose();
    };

    return (
        <Card className="card">
            <CardBody>
                <VStack>
                    <Heading>{title}</Heading>
                    <Text>{body}</Text>
                    <Flex gap={2}>
                        <Button onClick={onOpen}>Update</Button>
                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Update Note</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <Input value={tempTitle} m placeholder="Please enter title" onChange={(e) => setTitle(e.target.value)} />
                                    <Textarea mt={6} value={tempBody} m placeholder="Please enter description" onChange={(e) => setBody(e.target.value)} />
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={updateNote}>
                                        Update
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Button onClick={() => dispatch(deleteNotes(_id))}>Delete</Button>
                    </Flex>
                </VStack>
            </CardBody>
        </Card>
    );
}
