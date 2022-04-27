import styled from "styled-components";
import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <>
      <Layerone
        as={motion.div}
        transition={{ delay: 0, type: "tween", duration: 0.8 }}
        initial={{ opacity: 1, y: "0%" }}
        animate={{ opacity: 1, y: "-100%" }}
        exit={{ opacity: 0, y: "-110%" }}
      ></Layerone>
      <Layertwo
        as={motion.div}
        transition={{ delay: 0.2, type: "tween", duration: 1 }}
        initial={{ opacity: 1, y: "0%" }}
        animate={{ opacity: 1, y: "-100%" }}
        exit={{ opacity: 0, y: "-110%" }}
      ></Layertwo>
      <Layerthree
        as={motion.div}
        transition={{ delay: 0.8, type: "spring", duration: 1.1 }}
        initial={{ opacity: 1, y: "0%" }}
        animate={{ opacity: 1, y: "-100%" }}
        exit={{ opacity: 0, y: "-110%" }}
      ></Layerthree>
      {/*  */}
      {/* <Layerthree
        as={motion.div}
        transition={{ delay: 0.3, type: "spring", duration: .8 }}
        initial={{ opacity: 1, y: "0%" }}
        animate={{ opacity: 1, y: "-100%" }}
        exit={{ opacity: 0 }}
      ></Layerthree> */}
    </>
  );
};

export default PageTransition;

const Layerone = styled.div`
  width: 100%;
  height: 150vh;
  background: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

`;
const Layertwo = styled.div`
  width: 100%;
  height: 150vh;
  background: var(--pink);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
const Layerthree = styled.div`
  width: 100%;
  height: 150vh;
  background:var(--black);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
`;
