
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const Intro = ({ image, year }) => {

  return (
    <Container>
      <Content className="section-spaces">
        <ImageBox
          as={motion.div}
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring", duration: 3 }}
        >
          <Year
            className="h2-outline"

          >
            {year}
          </Year>

          <Image
            priority="true"
            src={image}
            layout="fill"
            objectFit="cover"
            alt="kataldo-cl"
            quality={100}
          />
        </ImageBox>
      </Content>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: var(--white);
  position: relative;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
`;
const Content = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 980px) {
    justify-content: center;
  }
`;

const ImageBox = styled.div`
  width: 70%;
  height: 500px;

  position:relative!important;
  z-index: 0;
   @media (max-width: 980px) {
   width:100%;
    height: 400px;
  }

`;

const Year = styled.h2`
position:absolute;
top:-10%;
right:-10%;
z-index:1;
`