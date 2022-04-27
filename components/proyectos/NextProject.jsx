
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const NextProject = () => {
  return (
    <Container>
      <Content>
        <p>Siguiente Proyecto</p>
        <Link href="/" passHref>
          <a>
            <h2 className="h2-big c-pink animate-3s">Website Ballerina</h2>
          </a>
        </Link>

        <ImageBox
          className="multiply"
          as={motion.div}
          initial={{ y: "-50", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0, type: "spring", duration: 2 }}
        >
          <Image
            src="/img/project/hero-project.jpg"
            layout="fill"
            objectFit="cover"
            alt="kataldo-cl"
            quality={100}
          />
        </ImageBox>
        <Link href="/" passHref>
          <a>
            <ArrowBox>
              <ImageBoxArrow
                className="multiply"
                as={motion.div}
                initial={{ x: "-100", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", duration: 2 }}
              >
                <Image
                  src="/img/next.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="kataldo-cl"
                  quality={100}
                />
              </ImageBoxArrow>
            </ArrowBox>
          </a>
        </Link>
      </Content>
    </Container>
  );
}

export default NextProject;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  position: relative;
  max-width: 1800px;
  display:flex;
  justify-content: center;
  align-items:center;

`;


const ImageBox = styled.div`
  width: 60%;
  height: 300px;
  position: relative;
  overflow: hidden;
  opacity: 0.3;
  margin-left: 30px;
   @media (max-width: 780px){
     width: 100%;
     margin-top:10%;
     padding:0;
     margin-left:0;
     height:300px;
   }
`;

const Content = styled.div`
  width: 100%;
  max-width: 600px;
margin:0 auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  @media (max-width: 980px) {
    justify-content: center;
  }
  @media (max-width: 780px) {
    width: 90%;
  }
  & img {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  &:hover {
    & h2 {
      transform: translate(5%, 0);


    }
    & img {
      transform: translate(-5%, 0);

      @media (max-width: 780px) {
     transform: translate(0%, 0);
  }
    }
  }
  & p {
    transform: rotate(-90deg);
    width: 100%;
    height: 10px;
    position: absolute;
    z-index: 1000;
    right: 50%;
    top: 100%;
    text-align: right;
     @media (max-width: 780px) {
     transform: rotate(0deg);
     top:0;
     right:0;
     text-align:center;

  }
  }
  & h2 {
    position: absolute;
    max-width: 400px;
    right: -10%;
    z-index: 2;
    top: 40%;
     @media (max-width: 780px){
       left:0;
       right:0;
       text-align:center;

     }
  }
`;


const ImageBoxArrow = styled.div`
  position:relative;
  width:50px;
  height:50px;
   @media (max-width: 780px) {
    display:none;
  }
`;

const ArrowBox = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 20%;
  top: 0;
  @media (max-width: 780px) {
    display: none;
  }
`;