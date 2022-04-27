
import Image from 'next/image';
import Link from 'next/link';
import styled  from 'styled-components';



const Button = ({title, url}) => {
  return (
    <ButtonBox>
      <Content>
        <ImageBox className="animate-3s">
          <Image
            src="/img/arrow-button.svg"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt="kataldo-cl"
            quality={100}
          />
        </ImageBox>
        <Link href={url}>
          <a className="btn animate-3s">{title}</a>
        </Link>
      </Content>
    </ButtonBox>
  );
}

export default Button;


const ImageBox = styled.div`
  width: 55px;
  padding-right: 5%;
`;


const ButtonBox = styled.div`
  background: transparent;
  margin-top: 30px;

  &:hover {
    cursor: pointer;
  }
  &:hover ${ImageBox} {
    transform: translate(20%, 0);
  }
  &:hover a {
    color:var(--black);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
max-width:400px;
text-decoration:none;
color:var(--pink);
  &:hover {
    cursor: pointer;
  }
`;
