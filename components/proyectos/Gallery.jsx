import Image from "next/image";
import styled from 'styled-components';
import { motion } from 'framer-motion';


Image

const Gallery = ({ imgs }) => {



  return (
    <Container>
      <Content>
        {imgs &&
          imgs.map((img) => (
            <ImageBox
              key={img.attributes.url}
              as={motion.div}
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0, type: "spring", duration: 2 }}
            >
              <Image
                src={img.attributes.url}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="kataldo-cl"
                quality={100}
              />
            </ImageBox>
          ))}
      </Content>
    </Container>
  );
}

export default Gallery;

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: var(--white);
  max-width: 1200px;
  margin: 0 auto;
`;
const Content = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 980px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const ImageBox = styled.div`
  width: 100%;
  max-width:900px;
  margin:0;
  @media (max-width: 980px) {
    margin-top: 20%;
  }
   @media (max-width: 780px) {
    margin-top: 0%;
  }
`;