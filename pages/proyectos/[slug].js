import Details from "../../components/proyectos/Details"
import Hero from "../../components/proyectos/Hero"
import Intro from "../../components/proyectos/Intro";
import { motion } from "framer-motion";
// import Marca from "../../components/proyectos/Marca";
import Desafio from '../../components/proyectos/Desafio';
import Proceso from "../../components/proyectos/Proceso";
import Gallery from '../../components/proyectos/Gallery';
import NextProject from "../../components/proyectos/NextProject";
import { useEffect, useRef } from 'react';
import SiteHead from '../../components/global/SiteHead';
import PageTransition from '../../components/global/PageTransition';
import Button from "../../components/global/Button";





const Single = ({ project }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, []);

  // console.log(project.data[0].attributes.meta_tags[0]);

  const proyecto_data = project.data[0].attributes;
  const meta_data = project.data[0].attributes.meta_tags[0];

  const dataProject = {
    title: proyecto_data.titulo,
    slug: proyecto_data.slug,
    img_destacada: proyecto_data.img_destacada.data[0].attributes.url,
    year: proyecto_data.year,
    client: proyecto_data.client,
    tools: proyecto_data.tools.data,
    desafio: proyecto_data.desafio,
    img_desafio: proyecto_data.img_desafio.data[0].attributes.url,
    perspectiva: proyecto_data.perspectiva,
    acciones: proyecto_data.acciones,
    proceso: proyecto_data.proceso,
    imgs_proceso: proyecto_data.img_proceso.data,
    entrega: proyecto_data.entrega,
    imgs_galeria: proyecto_data.img_galeria.data,
  };

  const meta = {
    canonical_url: meta_data.meta_canonical_url,
    description: meta_data.meta_description,
    title: meta_data.title,
  };

  const og = {
    title: meta_data.og_title,
    type: meta_data.type,
    description: meta_data.og_description,
    image: meta_data.og_image.data.attributes.url
  };



  return (
    <div ref={containerRef}>
      <PageTransition />
      <SiteHead
        meta_title={dataProject.title}
        meta_canonical={meta.canonical}
        meta_description={meta.description}
        og_type={og.type}
        og_description={og.description}
        og_image={og.image}
      />
      <Hero title={dataProject.title} />
      <Intro image={dataProject.img_destacada} year={dataProject.year} />
      <Details
        name={dataProject.title}
        client={dataProject.client}
        tools={dataProject.tools}
      />
      <Desafio
        detail={dataProject.desafio}
        perspectivas={dataProject.perspectiva}
        acciones={dataProject.acciones}
        img={dataProject.img_desafio}
      />
      <Proceso
        imgs={dataProject.imgs_proceso}
        proceso={dataProject.proceso}
        entrega={dataProject.entrega}
      />
      <Gallery imgs={dataProject.imgs_galeria} />
      {/* <NextProject /> */}
    </div>
  );
}

export default Single;





export async function getStaticPaths() {
  const url = `${process.env.API_URL}/projects`;
  const respuesta = await fetch(url);
  const proyectos = await respuesta.json();

  const projectList = proyectos.data;
  const paths = projectList.map((proyecto) => ({
    params: {
      slug: proyecto.attributes.slug
    }
  }));

  //console.log(paths);
  return {
    paths,
    fallback:false
  };
}


export async function getStaticProps({ params: { slug } }) {
  const url = `${process.env.API_URL}/projects?filters[slug][$eq]=${slug}&populate=tools&populate=perspectiva&populate=acciones&populate=img_front&populate=img_destacada&populate=img_desafio&populate=img_proceso&populate=img_galeria&populate=meta_tags.og_image`;
  const respuesta = await fetch(url);
  const project = await respuesta.json();
  return {
    props: {
      project,
    },
  };
}