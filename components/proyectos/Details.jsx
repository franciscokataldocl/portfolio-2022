import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from 'next/link';

// comentario
const Details = ({name, client, tools}) => {

console.log(name, client, tools)

  return (
    <Container>
      <Content className="section-spaces">
        <List
          as={motion.ul}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", duration: 2 }}
        >
          <ListItem>
            <h3 className="c-black">Nombre</h3>
            <p>{name}</p>
          </ListItem>
          <ListItem>
            <h3 className="c-black">Cliente</h3>
            <p>{client}</p>
          </ListItem>
          <ListItem>
            <h3 className="c-black">Herramientas</h3>
            <ListHerramientas>
              {tools &&
                tools.map((tool) => (
                  <ListItemHerramienta key={tool.attributes.titulo}>
                    <Link href="/" passHref>
                      <a className="animate-3s">{tool.attributes.titulo}</a>
                    </Link>
                  </ListItemHerramienta>
                ))}
            </ListHerramientas>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 0;
  background: var(--white);
  position: relative;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:30px;
  margin-top:30px;
`;
const Content = styled.div`
  width: auto;
  height: 100%;
  padding:2% 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 980px) {
    justify-content: center;
  }
`;


const List = styled.ul`
width:100%;
display:flex;
justify-content: center;
align-items: flex-start;
width:auto;
 @media (max-width: 980px) {
    flex-direction:column;
  }
`;

const ListItem = styled.ul`
width:100%;
min-width:250px;
min-height: 70px;
margin:10px;
border-bottom:var(--grey) solid 1px;
`

const ListHerramientas = styled.ul`
display:flex;
justify-content: flex-start;
flex-wrap: wrap;
`

const ListItemHerramienta = styled.ul`
  margin-right: 10px;
  & a {

    color: var(--grey);
    &:hover {
      color: var(--pink);
      text-decoration:line-through;
    }
  }
`;
