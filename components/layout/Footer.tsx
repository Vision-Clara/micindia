// import logos and social icons
import niti from "../../assets/logo/niti_logo.png";
import mp from "../../assets/logo/mp_logo.png";
import insta from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import whatsapp from "../../assets/social/whatsapp.png";

//import next components
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-8 bg-indigo-500 text-white flex flex-wrap justify-between">
      <section>
        <div className="font-bold">Follow MIC</div>
        <div className="w-64 mt-2 flex justify-between mb-8 md:mb-0">
          <div>
            <Link
              href="https://www.instagram.com/mic_organisation_india/"
              target="_blank"
            >
              <Image
                src={insta}
                alt="@mic_organisation_india"
                className="w-8"
              />
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/micorganisation" target="_blank">
              <Image src={twitter} alt="@micorganisation" className="w-8" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.facebook.com/MICOrganisation/"
              target="_blank"
            >
              <Image src={facebook} alt="@MICOrganisation" className="w-8" />
            </Link>
          </div>
          <div>
            <Link
              href="https://in.linkedin.com/in/mic-organisation-india-20035219b"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="@mic-organisation-india-20035219b"
                className="w-8"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://wa.me/918104744738?text=Hello I want to connect with MIC."
              target="_blank"
            >
              <Image src={whatsapp} alt="@whatsapp" className="w-8" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="font-bold" >Quick Links</div>
        <div className="mb-8 mt-2 md:mb-0">
          <ul>
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
        </div>
      </section>

      <section>
        <div className="font-bold">Contact Us</div>
        <div className="mb-8 mt-2 md:mb-0 md:mt-2">
          MIC 354 Ring Road, Piplya Rao Indore, <br />
          +91 8104744738, +91 9993987710, <br />
          micorganisationindia@gmail.com
        </div>
      </section>

      <section>
        <div className="font-bold">Registered Under</div>
        <div className="w-64 mt-2 flex justify-between">
          <div>
            <Link href="http://mp.gov.in/">
              <Image src={mp} alt="collab" className="w-24" />
            </Link>
          </div>
          <div>
            <Link href="https://www.niti.gov.in/">
              <Image src={niti} alt="collab" className="w-24" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
