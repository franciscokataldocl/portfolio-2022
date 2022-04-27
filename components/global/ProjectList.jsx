
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { motion } from 'framer-motion';


const ProjectList = ({ projects }) => {



  return (
    <Container>
      <ImageCircle
        className="rotate"
        as={motion.div}
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", duration: 4 }}
      >
        <Image
          priority={true}
          src="/img/circle_project.svg"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="kataldo-cl"
          quality={100}
        />
      </ImageCircle>
      <Content
        className="section-spaces"
        as={motion.div}
        initial={{ y: "20%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0, type: "spring", duration: 4 }}
      >
        {projects &&
          projects.map((project, i) => (
            <ProjectCard
              key={i}
              index={i}
              id={project.id}
              titulo={project.attributes.titulo}
              slug={project.attributes.slug}
              short_description={project.attributes.short_description}
              image={project.attributes.img_front.data.attributes.url}
            />
          ))}
      </Content>
    </Container>
  );
}

export default ProjectList;


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 90px;
  padding: 0;
  background: var(--white);
  position: relative;
  max-width: 1500px;
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
  }
`;


const ImageCircle = styled.div`
  width: 150px;
  overflow: hidden;
  position: absolute;
  left:50%;
  top: 0%;
  z-index: 1;
  @media (max-width: 980px) {
    width: 120px;
    left:-5%;
    top:-3%;
  }
`;
