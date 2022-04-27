
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../global/Button';
import { motion } from 'framer-motion';
import parse from "html-react-parser";






const Intro = ({title, detail, button,images}) => {




  return (
    <Container className="hero-trigger">
      <Content>
        <Col
          as={motion.div}
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", duration: 4 }}
        >
          <h2 className="c-black text-max-width mb-20 ">
            {/* Francisco Kataldo{" "}
            <span className="h2-highlight">Diseñador & desarrollador {""}</span>
            fullstack Javascrip */}
            {/* {title} */}
            {parse(title)}
          </h2>
          <div className="text-to-right">
            <p className="text-max-width">{detail}</p>
            <Button title={button.button_title} url={button.button_url} />
          </div>
        </Col>
        <Col>
          <ImageBox
            as={motion.div}
            initial={{ x: "50%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", duration: 4 }}
          >
            <Image
              className="image-intro"
              src={images.attributes.url}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt="francisco kataldo desarrollador web freelance"
              quality={100}
            />
          </ImageBox>
        </Col>
      </Content>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 90px;
  padding: 50px;
  position: relative;
  background: var(--white);
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 980px){
    margin-top: 0;
    padding: 30px;
  }

`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 980px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 50%;
  height: 100%;
  padding:0 2%;
  @media (max-width: 980px) {
    width: 100%;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
const ImageBox = styled.div`
  width: 600px;
  @media (max-width: 980px) {
    margin-top:20%;
  }
`;