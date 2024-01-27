"use client";

import useDarkMode from "hooks/useDarkMode";

import image_01_light from "assets/images/auth-methods/01-light.png";
import image_02_light from "assets/images/auth-methods/02-light.png";
import image_03_light from "assets/images/auth-methods/03-light.png";

import image_01_dark from "assets/images/auth-methods/01-dark.png";
import image_02_dark from "assets/images/auth-methods/02-dark.png";
import image_03_dark from "assets/images/auth-methods/03-dark.png";
import SectionHead from "./section-head";

const backgroundImage = "/assets/images/backgrounds/auth-methods-dark.png";

export default function AuthenticationMethods() {
  const { mode, isDarkMode } = useDarkMode();

  return (
    <div
      className="py-10 lg:py-32"
      style={{
        ...(isDarkMode && {
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "center",
        }),
      }}
    >
      <div className="container mx-auto">
        <div className="text-center font-sans font-semibold">
          <SectionHead
            title={
              <>
                Authentication Tools out of the box <br />
                <span className="text-5xl text-primary-500 dark:text-primary_light">
                  Easy to Use, Easy to Deploy.
                </span>
              </>
            }
            description="Several simple authentication methods to suit your needs"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 mt-10 px-4">
          {ITEMS.map((item) => {
            const backgroundImage = `url(${item.bg[mode].src})`;

            return (
              <div
                className="pt-10 p-10 rounded-md"
                style={{
                  backgroundImage,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                suppressHydrationWarning
                key={item.title}
              >
                <p className="sm:text-2xl lg:text-4xl font-sans font-semibold text-white">
                  {item.title}
                </p>

                <p className="mt-10 font-sans font-regular text-gray-100 text-lg">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-32 hidden lg:block"></div>
    </div>
  );
}

const ITEMS = [
  {
    title: "AuthArmor Authenticator",
    description:
      "The easy-to-use Auth Authenticator is based on proven security technologies and integrates easily with mobile and web apps. Make it easy for your users to secure their accounts with authenticator codes",
    bg: {
      light: image_01_light,
      dark: image_01_dark,
    },
  },
  {
    title: "PassKeys",
    description:
      "Based on WebAuthn technology, our passkeys allow users to authenticate themselves using PIN codes, fingerprints or other simple security methods. No more fussing with password resets",
    bg: {
      light: image_02_light,
      dark: image_02_dark,
    },
  },
  {
    title: "Magic link emails",
    description:
      "Give your users freedom from passcodes by adding Magic Link emails for authentication. Let your users log in simply by clicking a one-time-use link sent to their email account",
    bg: {
      light: image_03_light,
      dark: image_03_dark,
    },
  },
];
