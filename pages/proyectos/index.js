
import Hero from '../../components/global/Hero';
import ProjectList from '../../components/global/ProjectList';
import { useEffect, useRef } from "react";
import SiteHead from '../../components/global/SiteHead';
import PageTransition from '../../components/global/PageTransition';



const index = ({ page, projects }) => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const containerRef = useRef(null);

   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
     setTimeout(() => {
       containerRef.current.scrollIntoView({ behavior: "smooth" });
     }, 0);
   }, []);

  const pageData = {
    title: page[0].attributes.title,
    slug: page[0].attributes.slug,
  }
  const meta = {
    canonical: page[0].attributes.meta_tags[0].meta_canonical_url,
    description: page[0].attributes.meta_tags[0].meta_description,
    title: page[0].attributes.meta_tags[0].meta_title,
  };
  const og = {
    type: page[0].attributes.meta_tags[0].og_type,
    description: page[0].attributes.meta_tags[0].og_description,
    image: page[0].attributes.meta_tags[0].og_image.data.attributes.url,
  };




  return (
    <div ref={containerRef}>
      <PageTransition />
      <SiteHead
        meta_title={meta.title}
        meta_canonical={meta.canonical}
        meta_description={meta.description}
        og_type={og.type}
        og_description={og.description}
        og_image={og.image}
      />

      <Hero title={pageData.title} img={""} />
      <ProjectList projects={projects} />
      {/*
       */}
    </div>
  );
};

export default index;





export async function getServerSideProps({ query: { slug } }) {
  const urlProjects = `${process.env.API_URL}/projects?&populate=img_front`;
  const urlPage = `${process.env.API_URL}/pages?filters[slug][$eq]=proyectos&populate=meta_tags.og_image`;

  const [resPage, resProjects] = await Promise.all([
    fetch(urlPage),
    fetch(urlProjects),
  ]);

  const [pageData, projectsData] = await Promise.all([
    resPage.json(),
    resProjects.json(),
  ]);

  const page = pageData.data;
  const projects = projectsData.data;
  //const respuesta = await fetch(urlProjects);
  // const proyectos = await respuesta.json();

  return {
    props: {
      page,
      projects,
    },
  };
}