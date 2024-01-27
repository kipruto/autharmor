import image01 from "assets/images/latest-resources/01.png";
import image02 from "assets/images/latest-resources/02.png";
import image03 from "assets/images/latest-resources/03.png";

import SectionHead from "components/section-head";
import ResourceCard from "./card";

export default function LatestResources() {
  return (
    <div className="py-32">
      <div className="container mx-auto">
        <SectionHead
          title={
            <>
              Latest{" "}
              <span className="text-primary-500 text-primary_light">
                Resources
              </span>
            </>
          }
          description="Get insights, tips and tricks from our posts"
        />

        <div className="flex flex-col lg:flex-row mt-24">
          <ResourceCard
            fill
            image={image01}
            title="WebAuth: Unveiling The Future of Web Authentication"
            date="July 14, 2022"
          />
          <div className="flex flex-1 flex-col">
            <ResourceCard
              row
              image={image02}
              date="July 14, 2022"
              title="GDPR Compliance Made Simple"
            />
            <ResourceCard
              row
              image={image03}
              date="July 14, 2022"
              title="Rise of Phishing Attacks and how to keep your data safe"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
