import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styled from "styled-components";
import MenuItems from './MenuItems';
import { motion } from 'framer-motion';









const Header = () => {

  return (
    <>
      <Nav >
        <NavCol className="bg-white col-logo">
          <Link href="/" passHref>
            <LinkLogo className="animate-3s">
              <ImageBox
                as={motion.div}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, type: "spring", duration: 3 }}
              >
                <Image
                  priority
                  src="/img/logo.svg"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="logo-kataldo-cl"
                  quality={100}
                />
              </ImageBox>
            </LinkLogo>
          </Link>
        </NavCol>
        <NavCol
          className="bg-black"
          as={motion.div}
          initial={{ y: "-100", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", duration: 3 }}
        >
          <MenuItems />
        </NavCol>
      </Nav>
      <Script src="/js/hamburger-animation.js"></Script>
    </>
  );
};

export default Header;

const Nav = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  z-index: 10;

  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  @media (max-width: 760px) {
    padding-left: 0px;
  }
`;

const NavCol = styled.div`
  width: 20%;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  z-index: 1000;
  @media (max-width: 760px) {
    width: 80%;
    padding-left: 0px;
    background: white;
  }
  &:nth-child(2) {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 760px) {
      width: 20%;
    }
  }
`;

// logo
const LinkLogo = styled.a`
  position: relative;
  width: 100%;
  max-width: 50px;
  top: 0;
  &:hover{
    transform:scale(.9);
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 50px;
  top: 0;
  margin-left:30%;
`;