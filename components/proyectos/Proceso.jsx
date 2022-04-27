import React, {useRef} from 'react'
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";


const Proceso = ({imgs, proceso, entrega}) => {

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);




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
          <SliderContainer>
            <Swiper
              pagination={{
                type: "progressbar",
              }}

              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {imgs &&
                imgs.map((img) => (
                  <SwiperSlide key={img.attributes.url}>
                    <ImageBox>
                      <Image
                        src={img.attributes.url}
                        layout="fill"
                        objectFit="cover"
                        alt="kataldo-cl"
                        quality={100}
                      />
                    </ImageBox>
                  </SwiperSlide>
                ))}


              <SliderNavContainer>
                <NavSlider ref={navigationPrevRef} className="animate-3s">
                  <NavImageBox>
                    <Image
                      src="/img/nav-left.svg"
                      layout="fill"
                      objectFit="contain"
                      alt="kataldo-cl"
                      quality={100}
                    />
                  </NavImageBox>
                </NavSlider>
                <NavSlider ref={navigationNextRef} className="animate-3s">
                  <NavImageBox>
                    <Image
                      src="/img/nav-right.svg"
                      layout="fill"
                      objectFit="contain"
                      alt="kataldo-cl"
                      quality={100}
                    />
                  </NavImageBox>
                </NavSlider>
              </SliderNavContainer>
            </Swiper>
          </SliderContainer>
        </Col>
        <Col
          as={motion.div}
          initial={{ x: "50%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", duration: 4 }}
        >
          <h2 className="c-black text-max-width mb-20 mt-50">
            El <span className="h2-highlight"> Proceso</span>
          </h2>

          <ParrafoContent>
            <p>{proceso}</p>
          </ParrafoContent>
          <h2 className="c-black text-max-width mb-20 mt-50">
            La <span className="h2-highlight">entrega final</span>
          </h2>

          <ParrafoContent>
            <p>{entrega}</p>
          </ParrafoContent>
        </Col>
      </Content>
    </Container>
  );
};

export default Proceso;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  position: relative;
  background: var(--white);
  max-width: 1800px;
  margin: 0 auto;
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
  justify-content: flex-start;
  align-items: center;
  padding:2%;
  @media (max-width: 980px) {
    width: 100%;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;


const ParrafoContent = styled.div`
  max-width: 600px;
  margin-bottom: 5%;
  & h3 {
    margin-bottom: 10px;
  }
`;


const SliderContainer = styled.div`
width:90%;
@media (max-width: 780px) {
  width:100%;

  }
`
const ImageBox = styled.div`
width:100%;
height:500px;
position:relative;
@media (max-width: 780px) {
   height: 400px;

  }
`
const SliderNavContainer = styled.div`
width:100%;
position:absolute;
bottom:0px;
right:0;
z-index:2;
display:flex;
justify-content: flex-end;
align-items: center;
`
const NavSlider = styled.div`
width:60px;
height:60px;
background:var(--pink);
position:relative;
display: flex;
justify-content: center;
align-items:center;
&:hover{
    cursor: pointer;
    background:var(--black);
}
`

const NavImageBox = styled.div`
width:30px;
position:relative;
height: 30px;
`