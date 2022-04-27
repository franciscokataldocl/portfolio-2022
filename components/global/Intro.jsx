import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import { motion } from 'framer-motion';
import parse from "html-react-parser";
import { useState, useEffect } from "react";




const Intro = ({ title, detail, button, images }) => {


  const [imgs, setImgs] = useState([])

  //pasar imagenes al state
  useEffect(() => {
    if (images !== null) {
      images.data.map((image) => {
        setImgs((imgs) => [...imgs, image.attributes.url]);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  return (
    <Container>
      <Content className="section-spaces">
        <Col>
          <ImageBox
            as={motion.div}
            initial={{ x: "-50%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", duration: 4 }}
          >
            {imgs[0] && (
              <Image
                priority={true}
                className="image-intro"
                src={imgs[0]}
                layout="fill"
                objectFit="contain"
                alt="kataldo-cl"
                quality={100}
              />
            )}
          </ImageBox>
        </Col>
        <Col
          as={motion.div}
          initial={{ x: "50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", duration: 4 }}
        >
          <h2 className="c-black text-max-width mb-20 mt-50">
            {parse(title)}
          </h2>
        </Col>
      </Content>
      <Content className="section-spaces">
        <Col
          as={motion.div}
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", duration: 4 }}
        >
          <div>
            <p className="text-max-width">{detail && parse(detail)}</p>
            {button !== null && (
              <Button title={button.button_title} url={button.button_url} />
            )}
          </div>
        </Col>
        <Col
          className="mt-50"
          as={motion.div}
          initial={{ x: "50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", duration: 4 }}
        >
          {imgs.length !== 1 && (
            <ImageBox>
              {imgs[1] && (
                <Image
                  className="image-intro"
                  src={imgs[1]}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  alt="kataldo-cl"
                  quality={100}
                />
              )}
            </ImageBox>
          )}
        </Col>
      </Content>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  background: var(--white);
  max-width: 1800px;
  margin:0 auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 2%;

  @media (max-width: 980px) {
    width: 100%;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ImageBox = styled.div`
  width: 500px;
  height:500px;
  overflow:hidden;
  position:relative;
  @media (max-width: 980px) {
    margin-top: 0%;
  }
`;
