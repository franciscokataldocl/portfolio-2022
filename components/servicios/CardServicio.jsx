import React from 'react';
import styled from 'styled-components';


const CardServicio = ({title, description, index}) => {
  return (
    <Card>
      <Content>
              <Number className="h2-outline">.0{index + 1}</Number>
              <Title>{title}</Title>
        <Parrafo>
                  {description}
        </Parrafo>
      </Content>
    </Card>
  );
}

export default CardServicio;

const Card = styled.div`
  max-width: 40%;
  margin: 0 5%;
  @media (max-width: 980px) {
    margin-top: 0%;
    max-width: 80% !important;
    margin-bottom:20%;
  }
  &:nth-child(even) {
    margin-top: 20%;
    @media (max-width: 980px) {
      margin-top: 0%;

    }
  }
`;


const Content = styled.div`
position:relative;`;

const Number = styled.h2`
  font-size: 5rem !important;
  line-height: 5rem !important;
  position: absolute;
  top: -15%;
  left: -10%;
  @media (max-width: 980px) {
    top: -10%;
    left: 0%;
  }
`;
const Title = styled.h3`
  margin-bottom: 1rem;

`;
const Parrafo = styled.p``;