import React from 'react';
import styled from 'styled-components';
import CardServicio from './CardServicio';
import parse from "html-react-parser";


const ServiciosContainer = ({ servicios }) => {



  return (
    <Container>
      <TitleContainer>
        <h2 className="c-black text-max-width mb-20 mt-50">
          {parse("Mis <span>servicios</span>")}
        </h2>
      </TitleContainer>
      <Content>
        {servicios &&
          servicios.map((servicio, i) => (
            <CardServicio
              key={servicio.attributes.createdAt}
              title={servicio.attributes.title}
              description={servicio.attributes.description}
              index={i}
            />
          ))}
      </Content>
    </Container>
  );
}

export default ServiciosContainer;
const Container = styled.div`
  width: 100%;
  height: 100%;
  /* margin-top: 90px; */
  padding: 0;
  background: var(--white);
  position: relative;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

`;
const Content = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    justify-content: center;
    flex-direction: column;
  }
`;


const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  @media (max-width: 980px){
    margin-bottom:15%;
  }
`;