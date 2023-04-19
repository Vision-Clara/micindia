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
    <div >
      <div >
        <div >Follow MIC</div>
        <div >
          <div >
            <a href="https://www.instagram.com/mic_organisation_india/">
              <Image src={insta} alt="micindia" />
            </a>
          </div>
          <div >
            <a href="https://twitter.com/micorganisation">
              <Image src={twitter} alt="micindia" />
            </a>
          </div>
          <div >
            <a href="https://www.facebook.com/MICOrganisation/">
              <Image src={facebook} alt="micindia" />
            </a>
          </div>
          <div >
            <a href="https://in.linkedin.com/in/mic-organisation-india-20035219b">
              <Image src={linkedin} alt="micindia" />
            </a>
          </div>
          <div >
            <a href="https://wa.me/918104744738?text=Hello I want to connect with MIC.">
              <Image src={whatsapp} alt="micindia" />
            </a>
          </div>
        </div>
      </div>
      <div >
        <div >Quick Links</div>
        <Link href="/" >
          Home
        </Link>
        <Link href="/about" >
          About
        </Link>
        <Link href="/join" >
          Join Us
        </Link>
        <Link href="/feedback" >
          Feedback
        </Link>
      </div>
      <div>
        <div>Contact Us</div>
        MIC 354 Ring Road, Piplya Rao Indore,
        <br /> +91 8104744738, +91 9993987710,
        <br /> micorganisationindia@gmail.com
      </div>
      <div>
        <div>Registered Under</div>
        <div>
          <div>
            <a href="http://mp.gov.in/">
              <Image src={mp} alt="collab" />
            </a>
          </div>
          <div>
            <a href="https://www.niti.gov.in/">
              <Image src={niti} width="80" alt="collab" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
