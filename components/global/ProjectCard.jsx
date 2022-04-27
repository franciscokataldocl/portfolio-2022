import Image from "next/image"
import Link from "next/link";
import styled from 'styled-components';



const ProjectCard = ({index, id, titulo,slug ,short_description ,image }) => {

  return (
    <>
      <Card>
        <Number className="h2-outline">.0{index}</Number>
        <Link scroll={false} href={`/proyectos/${slug}`}>
          <a>
            <ImageBox className="animate-3s">
              <Image
                src={image}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                alt={slug}
                quality={100}
              />
            </ImageBox>

            <TextContent className="animate-3s">
              <ImageArrow className="animate-3s">
                <Image
                  src="/img/arrow-button.svg"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="kataldo-cl"
                  quality={100}
                />
              </ImageArrow>
              <Text>
                <h3 className="c-pink">{titulo}</h3>
                <p className="c-grey">{short_description}</p>
              </Text>
            </TextContent>
          </a>
        </Link>
      </Card>
    </>
  );
}

export default ProjectCard;


const ImageBox = styled.div`
  width: 500px;
  height: 400px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  filter: grayscale(1%) brightness(62%) saturate(0%) contrast(59%);
  -webkit-filter: grayscale(1%) brightness(62%) saturate(0%) contrast(59%);
  -moz-filter: grayscale(1%) brightness(62%) saturate(0%) contrast(59%);

  @media (max-width: 980px) {
    width: 100%;
    height: 350px;
  }
`;

const ImageArrow = styled.div`
width:40px;
opacity: 0;
margin-right:10px;

`


const TextContent = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 20px;
  width: 100%;
  left: -40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 980px) {
    bottom: 30px;
  }
`;
const Card = styled.div`
  width: 100%;
  max-width:500px;
  height: 500px;
  position: relative;
  margin-bottom: 100px;
  &:hover ${ImageBox} {
    filter: grayscale(0%) brightness(100%) saturate(100%) contrast(100%);
    -webkit-filter: grayscale(0%) brightness(100%) saturate(100%) contrast(100%);
    -moz-filter: grayscale(0%) brightness(100%) saturate(100%) contrast(100%);
  }
  &:hover ${TextContent} {
    left: 0;
  }
  &:hover ${ImageArrow} {
      opacity: 1;
  }
  &:hover {
    cursor: pointer;
  }
  &:nth-child(even) {
    margin-top: 15%;
    @media (max-width: 980px) {
      margin-top: 0%;
    }
  }
  @media (max-width: 980px) {
    width: 100%;
    height: 450px;
    margin-bottom: 100px;
  }
`;


const Number = styled.h2`
  position: absolute;
  z-index: 1;
  right: -10%;
  top: -10%;
  @media (max-width: 980px) {
    right: -5%;
    top: -12%;
  }
`;


const Text = styled.div`

`