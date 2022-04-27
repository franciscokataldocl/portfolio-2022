
import styled from 'styled-components';
import Form from './Form';
import parse from "html-react-parser";

const ContactContainer = ({detail}) => {
  return (
    <Container>
      <Content>
        <Col>
          <h2 className="c-black text-max-width mb-20 mt-50">
            {parse(detail)}
          </h2>
        </Col>
        <Col>
          <Form />
        </Col>
      </Content>
    </Container>
  );
}

export default ContactContainer;
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
  justify-content: center;
  align-items: center;
  padding: 0 2%;

  @media (max-width: 980px) {
    width: 100%;
  }
  &:nth-child(2) {

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;