import Hero from "../components/global/Hero";
import Intro from "../components/global/Intro";
import SiteHead from '../components/global/SiteHead';
import PageTransition from '../components/global/PageTransition';



const Sobremi = ({ page }) => {


const pageData = {
  title: page[0].attributes.title,
  slug: page[0].attributes.slug,

  hero_title: page[0].attributes.hero[0].hero_title,
  hero_image: page[0].attributes.hero[0].hero_image.data.attributes.url,

  intro_title: page[0].attributes.intro[0].intro_title,
  intro_detail: page[0].attributes.intro[0].intro_detail,
  intro_button: page[0].attributes.intro[0].intro_button,
  intro_image: page[0].attributes.intro[0].intro_image,
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




  return (
    <div >
      <PageTransition />
      <SiteHead
        meta_title={meta.title}
        meta_canonical={meta.canonical}
        meta_description={meta.description}
        og_type={og.type}
        og_description={og.description}
        og_image={og.image}
      />
      <Hero title={pageData.hero_title} img={pageData.hero_image} />
      <Intro
        title={pageData.intro_title}
        detail={pageData.intro_detail}
        button={pageData.intro_button}
        images={pageData.intro_image}
      />
    </div>
  );
}

export default Sobremi;







export async function getServerSideProps({ query: { slug } }) {
  const urlPage = `${process.env.API_URL}/pages?filters[slug][$eq]=sobre-mi&populate=hero.hero_image&populate=intro.intro_image.intro_button&populate=intro.intro_button&populate=meta_tags.og_image`;

  const [resPage] = await Promise.all([
    fetch(urlPage)
  ]);

  const [pageData] = await Promise.all([
    resPage.json(),
  ]);

  const page = pageData.data;


  return {
    props: {
      page
    },
  };
}
