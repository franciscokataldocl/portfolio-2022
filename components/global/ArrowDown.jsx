import Image from "next/image";
import styled from "styled-components";
import { motion } from 'framer-motion';

const ArrowDown = () => {
  return (
    <ImageArrow
      className="bounce"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1, type: "spring", duration: 3 }}
    >
      <Image
        src="/img/arrow-down.svg"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        alt="kataldo-cl"
        quality={100}
      />
    </ImageArrow>
  );
};

export default ArrowDown;
const ImageArrow = styled.div`
  width: 120px;
  overflow: hidden;
  position: absolute;
  right: 5%;
  bottom: 5%;
  z-index: 0;
  @media (max-width: 980px) {
    width: 90px;
  }
`;
