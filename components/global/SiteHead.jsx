import Head from "next/head";

const SiteHead = ({ meta_title,meta_canonical,meta_description,og_type,og_description,og_image }) => {



  return (
    <Head>
      <title>{`KATALDO - ${meta_title}`}</title>
      <meta name="description" content={meta_description} />
      <link rel="canonical" href={meta_canonical} />

      <meta property="og:type" content={og_type} />
      <meta property="og:description" content={og_description} />
      <meta property="og:image" content={og_image} />
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/kataldo/image/upload/v1648778500/favicon_8462e84d0f.ico"
        type="image/x-icon"
      />
      <link
        rel="icon"
        href="https://res.cloudinary.com/kataldo/image/upload/v1648778500/favicon_8462e84d0f.ico"
        type="image/x-icon"
      />
    </Head>
  );
};

export default SiteHead;
