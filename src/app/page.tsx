import Landing from "components/landing";
import AuthenticationMethods from "components/authentication-methods";
import Applications from "components/applications";
import Pricing from "components/pricing";
import Faq from "components/faq";
import WhyChooseUs from "components/why-choose-us";
import LatestResources from "components/latest-resources";
import Footer from "components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Landing />

      <AuthenticationMethods />

      <Applications />

      <Pricing />

      <Faq />

      <WhyChooseUs />

      <LatestResources />

      <Footer />
    </main>
  );
}
