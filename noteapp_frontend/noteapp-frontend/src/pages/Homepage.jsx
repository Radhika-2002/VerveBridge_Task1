import { Box, Heading, Image, Text } from "@chakra-ui/react";
import note from "../assets/note.png.png";

export default function Homepage() {
    return <Box padding={8}>
        {/* <Navbar /> */}
        <Image position={"absolute"} right={0} src={note} />
        <Heading mt={16} textAlign={"start"} size={"3xl"}>Note App</Heading>
        <Text mt={6} maxW={"58%"} textAlign={"justify"} >A note application is a digital tool designed to help users organize and manage their personal and professional notes efficiently. This application provides a seamless and intuitive interface where users can create, edit, and store notes on various topics, ensuring they have easy access to important information whenever needed. Whether you need to jot down quick thoughts, compile detailed meeting minutes, or maintain a list of tasks, a note application offers the flexibility and functionality to handle it all.

            One of the standout features of our note application is its user-friendly design that ensures a smooth and hassle-free experience. Users can create new notes with just a few clicks and organize them into different categories or folders for better management. The search functionality allows users to quickly locate specific notes by keywords, saving time and effort. Additionally, our note application supports rich text formatting, enabling users to highlight important points, add bullet points, and include links, making their notes more informative and visually appealing.

            Collaboration is also a key aspect of our note application. This feature is particularly useful for team projects, brainstorming sessions, and group studies. In summary, our note application is a comprehensive solution designed to meet all your note-taking needs, enhancing productivity and organization in your daily life.</Text>
    </Box>
}