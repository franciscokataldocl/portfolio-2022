
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';



const Footer = () => {

const currentTime = new Date();
const year = currentTime.getFullYear();



  return (
    <Container className="bg-black">
      <FooterContent>
        <p className="c-white">Diseño & desarrollo Francisco kataldo {year}</p>
        <ListSocial>
          <li>
            <Link href="https://instagram.com/kataldocl">
              <a className="c-white">Instagram</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/cataldofrancisco/">
              <a className="c-white">Linkedin</a>
            </Link>
          </li>
          <li>
            <Link href="https://codesandbox.io/u/Francisco_Kataldo_Q">
              <a className="c-white">Codesandbox</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/franciscokataldocl">
              <a className="c-white">Github</a>
            </Link>
          </li>
        </ListSocial>
        <ImageCircle className="rotate">
          <Image
            priority
            src="https://res.cloudinary.com/kataldo/image/upload/v1648099044/circle_pink_bd9289bf24.svg"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt="kataldo-cl"
            quality={100}
          />
        </ImageCircle>
      </FooterContent>
    </Container>
  );
}

export default Footer;


const Container = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 5%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    height:100%;
  }
`;


const FooterContent = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 980px) {
    padding:3%;
  }
`;

const ImageCircle = styled.div`
  width: 100px;
  overflow: hidden;
  position: absolute;
  left: 5%;
  top: -60%;
  z-index: 0;
  @media (max-width: 980px) {
    width: 120px;
  }
`
const ListSocial = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & li {
    margin: 0 3%;
    @media (max-width: 980px) {
      padding: 5% 0;
    }
  }
  @media (max-width: 980px) {
    padding: 3%;
  }
`;