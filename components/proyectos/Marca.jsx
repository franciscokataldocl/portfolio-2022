// import Image from "next/image";
// import styled from "styled-components";
// import { motion } from "framer-motion";

// const Intro = () => {
//   return (
//     <Container className="section-spaces">
//       <Content>
//         <Col>
//           <ImageBox
//             as={motion.div}
//             initial={{ x: "-50%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5, type: "spring", duration: 4 }}
//           >
//             <Image
//               src="/img/project/marca-1.jpg"
//               layout="fill"
//               objectFit="cover"
//               alt="kataldo-cl"
//               quality={100}
//             />
//           </ImageBox>
//         </Col>
//         <Col
//           as={motion.div}
//           initial={{ x: "50%", opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, type: "spring", duration: 4 }}
//         >
//           <h2 className="c-black text-max-width mb-20 mt-50">
//             La <span className="h2-highlight">marca</span>
//           </h2>

//           <ParrafoContent>
//             <h3 className="c-pink">Qué</h3>
//             <p>
//               I'm baby hexagon VHS poke direct trade kickstarter. Cray butcheR
//               forage plaid hella echo park. Food truck direct trade green juice
//               succulents letterpress before they sold out.{" "}
//             </p>
//           </ParrafoContent>
//           <ParrafoContent>
//             <h3 className="c-pink">Qué</h3>
//             <p>
//               I'm baby hexagon VHS poke direct trade kickstarter. Cray butcheR
//               forage plaid hella echo park. Food truck direct trade green juice
//               succulents letterpress before they sold out.{" "}
//             </p>
//           </ParrafoContent>
//           <ParrafoContent>
//             <h3 className="c-pink">Qué</h3>
//             <p>
//               I'm baby hexagon VHS poke direct trade kickstarter. Cray butcheR
//               forage plaid hella echo park. Food truck direct trade green juice
//               succulents letterpress before they sold out.{" "}
//             </p>
//           </ParrafoContent>
//         </Col>
//       </Content>

//     </Container>
//   );
// };

// export default Intro;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 50px;
//   position: relative;
//   background: var(--white);
//   max-width: 1800px;
//   margin: 0 auto;
// `;
// const Content = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   @media (max-width: 980px) {
//     justify-content: center;
//     flex-direction: column;
//   }
// `;

// const Col = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   padding:2%;
//   @media (max-width: 980px) {
//     width: 100%;
//   }
//   &:nth-child(2) {
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     flex-direction: column;
//   }
// `;
// const ImageBox = styled.div`
//   width: 100%;
//   height: 600px;
//   max-width: 500px;
//   overflow: hidden;

//   @media (max-width: 980px) {
//     margin-top: 0%;
//   }
//    @media (max-width: 780px) {
//    height: 400px;

//   }
// `;


// const ParrafoContent = styled.div`
// max-width:600px;
// margin-bottom:5%;
// & h3{
//     margin-bottom:10px;
// }
// `