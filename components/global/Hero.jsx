import Image from "next/image";
import styled from "styled-components";
import ArrowDown from './ArrowDown';
import CircleText from './CircleText';
import { motion } from 'framer-motion';
import Script from "next/script";


const Hero = ({ title, img }) => {


  return (
    <Container>
      <Content className="section-spaces">
        <Title
          className="c-pink multiply"
          as={motion.h1}
          initial={{ x: "-100", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring", duration: 3 }}
        >
          {title}
        </Title>
        <ImageContent>
          {img !== "" && (
            <ImageContainer>
              <ImageBox
                as={motion.div}
                initial={{ x: "100", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", duration: 3 }}
              >
                <Image
                  className="image-hero"
                  priority
                  src={img}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  alt="kataldo-cl"
                  quality={100}
                />
              </ImageBox>
            </ImageContainer>
          )}
          <ImageBox
            className="multiply"
            as={motion.div}
            initial={{ x: "-100", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, type: "spring", duration: 5 }}
          >
            <Image
              src="/img/elipse.svg"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="kataldo-cl"
              quality={100}
            />
          </ImageBox>
        </ImageContent>
        <CircleText />
        <ArrowDown />
      </Content>
      <Script src="/js/animation-home.js" strategy="afterInteractive" />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  margin-top: 90px;
  padding: 0;
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
const Title = styled.h1`
  width: 100%;
  max-width: 900px;
  z-index: 1;
  text-align: left;

  @media (max-width: 980px) {
    text-align: center;
  }
`;

const ImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: -0;
  @media (max-width: 980px){
    left:100%!important;
  }
`;

const ImageBox = styled.div`
  width: 500px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 15%;
  z-index: 0;

  &:nth-child(2) {
    width: 500px;
    height: 500px;
    overflow: hidden;
    top: 30%;
    right: -20%;
    @media (max-width: 980px) {
      right: 50%!important;
    }
  }
`;
const ImageContainer = styled.div`

`