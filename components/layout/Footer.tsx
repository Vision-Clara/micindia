import niti from "../../assets/niti.png"
import mp from "../../assets/mp.png";
import insta from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import whatsapp from "../../assets/social/whatsapp.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-8 bg-indigo-500 text-white flex justify-between">
      <div>
        <div className="font-bold">Follow MIC</div>
        <div className="w-64 mt-4 flex justify-between">
          <div>
            <a href="https://www.instagram.com/mic_organisation_india/">
              <Image src={insta} alt="micindia" className="w-8"/>
            </a>
          </div>
          <div >
            <a href="https://twitter.com/micorganisation">
              <Image src={twitter} alt="micindia" className="w-8"/>
            </a>
          </div>
          <div >
            <a href="https://www.facebook.com/MICOrganisation/">
              <Image src={facebook} alt="micindia" className="w-8"/>
            </a>
          </div>
          <div >
            <a href="https://in.linkedin.com/in/mic-organisation-india-20035219b">
              <Image src={linkedin} alt="micindia" className="w-8"/>
            </a>
          </div>
          <div >
            <a href="https://wa.me/918104744738?text=Hello I want to connect with MIC.">
              <Image src={whatsapp} alt="micindia" className="w-8"/>
            </a>
          </div>
        </div>
      </div>

      <div >
        <div className="font-bold">Quick Links</div>
        <div className="mt-4">
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
      </div>

      <div>
        <div className="font-bold">Contact Us</div>
        <div className="mt-4">
        MIC 354 Ring Road, Piplya Rao Indore,
        <br /> +91 8104744738, +91 9993987710,
        <br /> micorganisationindia@gmail.com
        </div>
      </div>

      <div>
        <div className="font-bold">Registered Under</div>
        <div className="w-56 mt-4 flex justify-between">
          <div>
            <a href="http://mp.gov.in/">
              <Image src={mp} alt="collab" className="w-24"/>
            </a>
          </div>
          <div>
            <a href="https://www.niti.gov.in/">
              <Image src={niti}  alt="collab" className="w-24"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
