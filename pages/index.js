
import SiteHead from '../components/global/SiteHead';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import ProjectList from '../components/global/ProjectList';
import Loading from '../components/global/Loading';
import React, { useState, useEffect, useRef } from "react";




export default function Home({ page, projects }) {

  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, []);

  const pageData = {
    title: page[0].attributes.title,
    slug: page[0].attributes.slug,

    hero_title: page[0].attributes.hero[0].hero_title,
    hero_image: page[0].attributes.hero[0].hero_image.data.attributes.url,

    intro_title: page[0].attributes.intro[0].intro_title,
    intro_detail: page[0].attributes.intro[0].intro_detail,
    intro_button: page[0].attributes.intro[0].intro_button,
    intro_image: page[0].attributes.intro[0].intro_image.data[0],
  };
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


  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500);
  // }, []);

  return (
    <div className="app-container" ref={containerRef}>
      <SiteHead
        meta_title={meta.title}
        meta_canonical={meta.canonical}
        meta_description={meta.description}
        og_type={og.type}
        og_description={og.description}
        og_image={og.image}
      />

      {loading === true ? (
        <>
          <Hero title={pageData.hero_title} image={pageData.hero_image} />
          <Intro
            title={pageData.intro_title}
            detail={pageData.intro_detail}
            button={pageData.intro_button}
            images={pageData.intro_image}
          />
          <ProjectList projects={projects} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}



export async function getServerSideProps({ query: { slug } }) {
  const urlProjects = `${process.env.API_URL}/projects?&populate=img_front`;
  const urlPage = `${process.env.API_URL}/pages?filters[slug][$eq]=home&populate=hero.hero_image&populate=intro.intro_image.intro_button&populate=intro.intro_button&populate=meta_tags.og_image`;

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
