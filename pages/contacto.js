
import { useEffect, useRef } from "react";
import Hero from "../components/global/Hero";
import Intro from "../components/global/Intro";
import ContactContainer from "../components/contact/ContactContainer";
import PageTransition from "../components/global/PageTransition";

const Contacto = ({ page }) => {

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
    intro_image: page[0].attributes.intro[0].intro_image,
  };


  return (
    <div ref={containerRef}>
      <PageTransition />
      <Hero title={pageData.hero_title} img={pageData.hero_image} />

      <Intro
        title={pageData.intro_title}
        detail={null}
        button={null}
        images={pageData.intro_image}
      />
      <ContactContainer detail={pageData.intro_detail} />
    </div>
  );
};

export default Contacto;

export async function getServerSideProps({ query: { slug } }) {
  const urlPage = `${process.env.API_URL}/pages?filters[slug][$eq]=contacto&populate=hero.hero_image&populate=intro.intro_image&populate=intro&populate=meta_tags.og_image`;

  const [resPage] = await Promise.all([fetch(urlPage)]);

  const [pageData] = await Promise.all([resPage.json()]);

  const page = pageData.data;

  return {
    props: {
      page,
    },
  };
}
