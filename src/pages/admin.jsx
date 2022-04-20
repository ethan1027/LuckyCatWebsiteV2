import dynamic from "next/dynamic";
import HomePagePreview from "../previews/HomePagePreview";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init();
      cms.registerPreviewTemplate("home", HomePagePreview);
    }),
  // eslint-disable-next-line react/display-name
  { ssr: false, loading: () => <p>Loading Admin...</p> }
);

const Admin = () => {
  return <CMS />;
};
export default Admin;
