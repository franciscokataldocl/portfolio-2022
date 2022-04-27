
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Loading = () => {


  return (
    <Container>
      <ImageBox
        className="multiply rotate"
        as={motion.div}
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0, type: "spring", duration: 2 }}
      >
        <Image
          priority
          src="https://res.cloudinary.com/kataldo/image/upload/v1648099044/circle_pink_bd9289bf24.svg"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="kataldo-cl"
          quality={100}
        />
      </ImageBox>
    </Container>
  );
}

export default Loading;


const Container = styled.div`
width:100%;
height: 100vh;
position:absolute;
z-index:100;
top:0;
left:0;
background:var(--white);
display:flex;
justify-content: center;
align-items:center;
`
const ImageBox = styled.div`
  width: 150px;
  overflow: hidden;
  right: 0;
  top: 15%;
  z-index: 0;
  &:nth-child(2) {
    width: 500px;
    height: 500px;
    overflow: hidden;
    top: 30%;
    right: -20%;
  }
`;