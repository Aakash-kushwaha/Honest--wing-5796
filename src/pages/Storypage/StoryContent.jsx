import React, { Fragment } from "react";
import {
  Box,
  Avatar,
  Image,
  Heading,
  Text,
  Divider,
  HStack,
} from "@chakra-ui/react";
import CircleIcon from "../../component/CircleIcon/CircleIcon";

const StoryContent = () => {
  const FooterTitles = [
    "Terms of Use",
    "Privacy Policy",
    "Interest-Based Ads",
    "Addendum to the Global Privacy Policy",
    "Feedback",
  ];
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      w="100%"
      p="2.5rem"
      borderRadius="0.75rem"
      textAlign="left"
    >
      <Heading
        as="h5"
        size="sm"
        mb="1rem"
        textTransform="uppercase"
        color="#03a9f4"
      >
        Story Type
      </Heading>
      <Heading as="h2" size="xl" mb="0.5rem">
        Story Title
      </Heading>
      <Text fontSize="xl" mb="0.5rem">
        Story sub-title
      </Text>
      <HStack>
        <Avatar size="md" bg="#03a9f4" mb="1rem" />
        <Box pb="1rem">
          <Text fontSize="0.875rem" fontWeight="500">
            Name
          </Text>
          <Divider borderColor="rgba(203,204,206)" />
          <Text fontSize="0.75rem" color="rgba(108,109,111)">
            1hr ago
          </Text>
        </Box>
      </HStack>
      <Image
        borderRadius="0.75rem"
        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/341700/341768.4.jpg"
      />
      <Text p="0 15%" mt="2rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Cursus risus at
        ultrices mi tempus imperdiet. Imperdiet dui accumsan sit amet nulla.
        Sollicitudin tempor id eu nisl nunc mi ipsum. Urna molestie at elementum
        eu facilisis sed odio morbi quis. Et odio pellentesque diam volutpat
        commodo. Malesuada pellentesque elit eget gravida cum sociis natoque.
        Aliquam id diam maecenas ultricies mi eget mauris. Vitae congue mauris
        rhoncus aenean vel elit scelerisque mauris pellentesque. In tellus
        integer feugiat scelerisque varius morbi enim nunc faucibus. In dictum
        non consectetur a erat. Tempus iaculis urna id volutpat lacus laoreet
        non. Aliquam faucibus purus in massa. Integer quis auctor elit sed
        vulputate mi. Volutpat consequat mauris nunc congue nisi vitae suscipit
        tellus mauris. Integer enim neque volutpat ac tincidunt vitae semper
        quis. Dolor purus non enim praesent. Quam pellentesque nec nam aliquam
        sem et tortor consequat id. Turpis egestas maecenas pharetra convallis
        posuere. Ut aliquam purus sit amet luctus. Ut tortor pretium viverra
        suspendisse potenti nullam ac. Vivamus at augue eget arcu dictum varius
        duis at. Arcu odio ut sem nulla pharetra diam sit amet nisl. Turpis nunc
        eget lorem dolor sed viverra. Laoreet non curabitur gravida arcu ac
        tortor. Tristique senectus et netus et. Feugiat sed lectus vestibulum
        mattis ullamcorper velit. Orci phasellus egestas tellus rutrum tellus.
        Pharetra et ultrices neque ornare aenean euismod. Sed adipiscing diam
        donec adipiscing tristique risus nec feugiat. Egestas purus viverra
        accumsan in nisl. Congue nisi vitae suscipit tellus mauris a diam
        maecenas. Mi proin sed libero enim. Eget nullam non nisi est. Consequat
        id porta nibh venenatis. Pharetra massa massa ultricies mi quis.
        Condimentum mattis pellentesque id nibh tortor. Odio morbi quis commodo
        odio aenean sed adipiscing diam. Eget aliquet nibh praesent tristique
        magna sit amet purus gravida. Vulputate mi sit amet mauris. Elit
        ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Nibh
        ipsum consequat nisl vel. Sed egestas egestas fringilla phasellus
        faucibus. Volutpat ac tincidunt vitae semper quis lectus. Tincidunt eget
        nullam non nisi est sit amet facilisis. Urna porttitor rhoncus dolor
        purus non enim praesent. Cras sed felis eget velit aliquet sagittis.
        Urna condimentum mattis pellentesque id nibh tortor. Etiam non quam
        lacus suspendisse faucibus interdum posuere. Feugiat nisl pretium fusce
        id velit ut. Quam pellentesque nec nam aliquam sem et tortor consequat
        id. Urna porttitor rhoncus dolor purus. Nulla facilisi etiam dignissim
        diam quis enim lobortis scelerisque fermentum. Eu turpis egestas pretium
        aenean. Dolor magna eget est lorem ipsum dolor. Tincidunt vitae semper
        quis lectus nulla. Vitae turpis massa sed elementum tempus egestas sed
        sed risus. Arcu risus quis varius quam quisque id diam vel. At ultrices
        mi tempus imperdiet nulla. Odio aenean sed adipiscing diam donec
        adipiscing tristique risus. Sollicitudin aliquam ultrices sagittis orci
        a. Suspendisse in est ante in nibh mauris cursus mattis. Ultrices in
        iaculis nunc sed. Quam adipiscing vitae proin sagittis nisl rhoncus
        mattis rhoncus urna. Scelerisque varius morbi enim nunc. Euismod in
        pellentesque massa placerat. Magna eget est lorem ipsum. Posuere lorem
        ipsum dolor sit amet consectetur adipiscing elit duis. Et odio
        pellentesque diam volutpat commodo sed egestas. Purus gravida quis
        blandit turpis cursus in hac habitasse. Id aliquet lectus proin nibh
        nisl condimentum.
      </Text>
      <HStack fontSize="0.75rem" mt="1rem">
        {FooterTitles.map((item, index) => {
          if (index === FooterTitles.length - 1) {
            return <Text key={item}>{item}</Text>;
          } else {
            return (
              <Fragment key={item}>
                <Text>{item}</Text>
                <CircleIcon boxSize={1} />
              </Fragment>
            );
          }
        })}
      </HStack>
    </Box>
  );
};

export default StoryContent;
