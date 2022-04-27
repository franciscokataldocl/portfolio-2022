import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from 'react';




const Stack = ({ skills }) => {

    const [skill,setSkill] = useState([])


    const skilldata = skills.skills;

    useEffect(() => {

        skilldata.map((item,i) => {
          setSkill((prev) => [
            ...prev,
            { title: item.title, imgs: item.images.data },
          ]);
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




  return (
    <Container>
      <Content>
        <Col>
          <h2 className="c-black">
            Mi <span>Stack</span> de trabajo diario
          </h2>
        </Col>
        <Col>
          {skill &&
            skill.map((item, i) => (
              <ListSkills key={i}>
                <li>
                  <h3 className="c-pink">{item.title}</h3>
                  <ul>
                    <li>
                      {[item.imgs].map((img, i) => (
                        //   console.log(img[i].attributes.url)
                        <ImagesBoxList key={i}>

                          <ImageBox>
                            <Image

                              src={img[0].attributes.url}
                              width="100%"
                              height="100%"
                              layout="responsive"
                              objectFit="contain"
                              alt="kataldo-cl"
                              quality={100}
                            />
                          </ImageBox>
                          <ImageBox>
                            <Image
                              src={img[1].attributes.url}
                              width="100%"
                              height="100%"
                              layout="responsive"
                              objectFit="contain"
                              alt="kataldo-cl"
                              quality={100}
                            />
                          </ImageBox>
                        </ImagesBoxList>
                      ))}
                    </li>
                    <li></li>
                  </ul>
                </li>
              </ListSkills>
            ))}
        </Col>
      </Content>
    </Container>
  );
};

export default Stack;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--white);
  max-width: 1800px;
  margin: 0 auto;
  padding: 10% 0;
  @media (max-width: 980px){
    max-width:80%;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media (max-width: 980px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  flex-direction: column;
  /* @media (max-width: 980px) {
    width: 100%;
  } */
  &:nth-child(2){
      margin-top:5%;
  }

`;


const ImageBox = styled.div`
position:relative;
width:100%;
max-width:40px;
height: 40px;
padding:5px;
`

const ListSkills = styled.ul`
padding-bottom:10px;
  width: 100%;
  max-width: 400px;
  margin-bottom:2%;
border-bottom:red solid 1px;
  & li {

    display: flex;
    justify-content: space-between;
    align-items: center;
    & ul{
        width:30%;
    }
  }
`;

const ImagesBoxList = styled.div`
width:100%;
display:flex;
justify-content: center;
align-items:center;

`