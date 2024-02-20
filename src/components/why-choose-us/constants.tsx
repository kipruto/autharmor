import BiometricsIcon from "svg-icons/why-choose-us/biometrics";
import SecureOrgIcon from "svg-icons/why-choose-us/secure-org";
import ShieldIcon from "svg-icons/why-choose-us/shield";
import TimerIcon from "svg-icons/why-choose-us/timer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEnvelope,
  faQrcode,
  faDollarSign,
  faLock,
  faFingerprint,
  faUnlockAlt,
  faPaperPlane,
  faMagic,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faNodeJs,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export const WHY_CHOOSE_TOP_ITEM = {
  title: "Multiple passwordless login options",
  icon: <BiometricsIcon />,
  description: <p>Our Authentication Options Include but not limited to:</p>,
  items: [
    {
      title: "WebAuthn Support",
      description: "Ensuring robust passwordless authentication.",
      icon: <FontAwesomeIcon icon={faGlobe} />,
    },
    {
      title: "Magiclink Emails",
      description: "Seamless login experiences across all devices.",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      title: "Proprietary Authenticator App",
      description: "FIDO-backed support for added security.",
      icon: <FontAwesomeIcon icon={faQrcode} />,
    },
    {
      title: "QR Code Login",
      description: "Effortless one-touch login functionality",
      icon: <FontAwesomeIcon icon={faLock} className="text-primary-200 mr-2" />,
    },
    {
      title: "Out-of-Band Authentication",
      description: "Diverse options for enhanced security.",
      icon: <FontAwesomeIcon icon={faLock} />,
    },
    {
      title: "Transparent and Fair Pricing",
      description: "Clear and equitable cost structures.",
      icon: <FontAwesomeIcon icon={faDollarSign} />,
    },
  ],
} as const;

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Secure Authentication for Every Size of Organization",
    icon: <SecureOrgIcon />,
    description:
      "We're passionate about security and want to make our tools accessible to as many people as possible. That's why we offer tiered pricing with special offers for startups and non-profits. Whether your app has hundreds of monthly active users, or millions, we have a package that will suit your needs.",
  },

  {
    title: "Security Built-in to Your User's Devices",
    icon: <ShieldIcon />,
    description: (
      <>
        With Auth Armor, you don't need to worry about what type of device the
        user has. You can deliver passkeys that "just work" with no set-up
        required from the user's point of view. We support multiple
        authentication options, including.
        <ul className="mt-4 pl-12 list-none">
          <li>
            {" "}
            faTag,
            <FontAwesomeIcon
              icon={faFingerprint}
              className="text-primary-200 mr-2"
            />{" "}
            Biometrics: Fingerprint and Face-ID for smartphone users.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUnlockAlt}
              className="text-primary-200 mr-2"
            />{" "}
            PIN Unlock: Backwards-compatible with more basic feature phones or
            older smartphones.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-primary-200 mr-2"
            />{" "}
            Push Messaging: As a second authentication factor.
          </li>
          <li>
            <FontAwesomeIcon icon={faMagic} className="text-primary-200 mr-2" />{" "}
            Magiclink emails: A truly device-agnostic passwordless login option.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="text-primary-200 mr-2"
            />
            Authenticators: Support for physical authenticator keys and other
            third-party authenticator options.
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faQrcode}
              className="text-primary-200 mr-2"
            />
            QR Codes: Authenticate a second device by scanning a QR code on an
            already logged-in device.
          </li>
        </ul>
        <p className="mt-8">
          Offering multiple authentication options ensures your users will
          always have some way of proving their identity, even if they've lost
          their authenticator or their smartphone battery has run out. Auth
          Armor removes the friction from the login process, reduces the need
          for password resets, and reduces the risk of your users falling for
          social engineering-based attacks.
        </p>
      </>
    ),
  },

  {
    title: "Fast & Easy to Add to Your Apps",
    icon: <TimerIcon />,
    description: (
      <>
        Auth Armor's APIs are easy to implement. API calls are authenticated
        using the OAuth 2.0 standard, and we provide detailed developer
        documentation for a variety of languages and frameworks. Support for
        Your Workflow. Get started with our drop-in APIs and SDKs for:
        <ul className="pl-12 mt-4 list-none">
          <li>
            <FontAwesomeIcon icon={faJs} className="text-primary-200 mr-2" />{" "}
            JavaScript
          </li>
          <li>
            <FontAwesomeIcon
              icon={faNodeJs}
              className="text-primary-200 mr-2"
            />{" "}
            Node.JS
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} className="text-primary-200 mr-2" />{" "}
            React
          </li>
          <li>.NET</li>
          <li>
            <FontAwesomeIcon
              icon={faPython}
              className="text-primary-200 mr-2"
            />{" "}
            Python
          </li>
        </ul>
        <p className="mt-4">
          To get started, simply register for a developer account and create an
          API key. Our{" "}
          <a className="underline" href="https://api.autharmor.com">
            well-documented REST API{" "}
          </a>
          covers everything you need to properly authenticate your users. If
          your application is already live and you're looking to upgrade your
          security features, take advantage of our migration guides to introduce
          your users to passwordless and help them make the switch.
        </p>
      </>
    ),
  },
];

export type WhyChooseUsItem = (typeof WHY_CHOOSE_US_ITEMS)[number];
