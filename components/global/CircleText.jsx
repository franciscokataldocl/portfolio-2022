import Image from "next/image";
import styled from "styled-components";
import { motion } from 'framer-motion';


const CircleText = () => {
  return (
    <ImageCircle
      className="rotate"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.5, type: "spring", duration: 3 }}
    >
      <Image

        src="https://res.cloudinary.com/kataldo/image/upload/v1648099044/circle_pink_bd9289bf24.svg"
        width="9%"
        height="9%"
        layout="responsive"
        objectFit="contain"
        alt="kataldo-cl"
        quality={100}
      />
    </ImageCircle>
  );
};

export default CircleText;
const ImageCircle = styled.div`
  width: 150px;
  overflow: hidden;
  position: absolute;
  right: 15%;
  top: 10%;
  z-index: 1;
  @media (max-width: 980px) {
    width: 120px;
  }
`;
