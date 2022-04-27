import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const Desafio = ({detail,perspectivas, acciones, img}) => {





  return (
    <Container className="section-spaces">
      <Content>
        <Col
          as={motion.div}
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", duration: 4 }}
        >
          <h2 className="c-black text-max-width mb-20">
            El {""}
            <span className="h2-highlight">desafío</span>
          </h2>
          <div className="text-to-right">
            <p className="text-max-width mb-20">{detail}</p>
          </div>
          <ParrafoContent>
            <h3 className="c-pink">Perspectiva</h3>
            <ul>
              {perspectivas &&
                perspectivas.map((item) => (
                  <li key={item.perspectiva}>{item.perspectiva}</li>
                ))}
            </ul>
          </ParrafoContent>
          <ParrafoContent>
            <h3 className="c-pink">Acciones</h3>
            <ul>
              {acciones &&
                acciones.map((item) => (
                  <li key={item.accion}>{item.accion}</li>
                ))}
            </ul>
          </ParrafoContent>
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
              src={img}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt="kataldo-cl"
              quality={100}
            />
          </ImageBox>
        </Col>
      </Content>
    </Container>
  );
};

export default Desafio;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--white);
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
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
  padding:2%;
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
    margin-top: 20%;
  }
`;



const ParrafoContent = styled.div`
  max-width: 600px;
  margin-bottom: 5%;
  & h3 {
    margin-bottom: 10px;
  }
  & ul {
      margin-left:12px;
    & li {
      position: relative;
      list-style: none;
      margin-bottom:.6rem;
      &:before {
        content: "*";
        position: absolute;
        left: -15px;
        bottom: 0px;
        font-size:1.1rem;
        color:var(--black);
      }
    }
  }
`;