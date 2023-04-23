// import logos and social icons
import niti from "../../assets/logo/nitiayog-logo.png";
import mp from "../../assets/logo/mp_logo.png";
import insta from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import whatsapp from "../../assets/social/whatsapp.png";

//import next components
import Image from "next/image";
import Link from "next/link";

//Declare constants
const MIC_INSTA_URL = "https://www.instagram.com/mic_organisation_india/";
const MIC_FB_URL = "https://www.facebook.com/MICOrganisation/";
const MIC_TWITTER_URL = "https://twitter.com/micorganisation";
const MIC_LINKEDIN_URL =
  "https://in.linkedin.com/in/mic-organisation-india-20035219b";
const MIC_WHATSAPP_URL =
  "https://wa.me/918104744738?text=Hello I want to connect with MIC.";
const NITI_URL = "https://www.niti.gov.in/";
const MP_URL = "http://mp.gov.in/";

const Footer = () => {
  return (
    <footer className="p-6 bg-indigo-500 text-white flex flex-wrap justify-between gap-y-5">
      <section>
        <div className="font-bold">Follow MIC</div>
        <ul className="mt-2 flex gap-x-5">
          <li>
            <Link href={MIC_INSTA_URL} target="_blank">
              <Image
                src={insta}
                alt="@mic_organisation_india"
                className="w-8"
              />
            </Link>
          </li>
          <li>
            <Link href={MIC_TWITTER_URL} target="_blank">
              <Image src={twitter} alt="@micorganisation" className="w-8" />
            </Link>
          </li>
          <li>
            <Link href={MIC_FB_URL} target="_blank">
              <Image src={facebook} alt="@MICOrganisation" className="w-8" />
            </Link>
          </li>
          <li>
            <Link href={MIC_LINKEDIN_URL} target="_blank">
              <Image
                src={linkedin}
                alt="@mic-organisation-india-20035219b"
                className="w-8"
              />
            </Link>
          </li>
          <li>
            <Link href={MIC_WHATSAPP_URL} target="_blank">
              <Image src={whatsapp} alt="@whatsapp" className="w-8" />
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <div className="font-bold">Quick Links</div>
        <ul className="mt-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/join">Join Us</Link>
          </li>
          <li>
            <Link href="/feedback">Feedback</Link>
          </li>
        </ul>
      </section>

      <section>
        <div className="font-bold">Contact Us</div>
        <div className="mt-2">
          MIC 354 Ring Road, Piplya Rao Indore, <br /> +91 8104744738, +91
          9993987710, <br />
          micorganisationindia@gmail.com
        </div>
      </section>

      <section>
        <div className="font-bold">Registered Under</div>
        <div className="mt-2 flex justify-between gap-x-4">
          <div>
            <Link href={MP_URL}>
              <Image src={mp} alt="collab" className="w-24" />
            </Link>
          </div>
          <div>
            <Link href={NITI_URL}>
              <Image
                src={niti}
                alt="collab"
                className="w-24 bg-white rounded"
              />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
