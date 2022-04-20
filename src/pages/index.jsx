import Script from "next/script";
import { attributes } from "@/content/home.md";
import Seo from "@/components/Seo/Seo";
import Banner from "@/components/Banner/Banner";
import SectionHero from "@/components/SectionHero/SectionHero";
import SectionHowToBuy from "@/components/SectionHowToBuy/SectionHowToBuy";
import SectionTokenomics from "@/components/SectionTokenomics/SectionTokenomics";
import SectionTestimonials from "@/components/SectionTestimonials/SectionTestimonials";
import SectionCommunity from "@/components/SectionCommunity/SectionCommunity";
import SectionProject from "@/components/SectionProject/SectionProject";

export default function Home() {
  return (
    <>
      <Seo />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <main>
        <SectionHero attributes={attributes} />

        <Banner
          address={attributes.banner.address}
          link={attributes.banner.link}
        />
        <SectionProject attributes={attributes} />

        <SectionTokenomics attributes={attributes} />

        <SectionHowToBuy attributes={attributes} />

        <SectionTestimonials attributes={attributes} />

        <SectionCommunity attributes={attributes} />
      </main>
    </>
  );
}
