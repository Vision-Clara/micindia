import niti from "../../assets/niti.png"
import mp from "../../assets/mp.png";
import insta from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import whatsapp from "../../assets/social/whatsapp.png";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.follow}>
        <div className={styles.heading}>Follow MIC</div>
        <div className={styles.socialicons}>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/mic_organisation_india/">
              <Image src={insta} alt="micindia" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://twitter.com/micorganisation">
              <Image src={twitter} alt="micindia" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://www.facebook.com/MICOrganisation/">
              <Image src={facebook} alt="micindia" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://in.linkedin.com/in/mic-organisation-india-20035219b">
              <Image src={linkedin} alt="micindia" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://wa.me/918104744738?text=Hello I want to connect with MIC.">
              <Image src={whatsapp} alt="micindia" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.quick_links}>
        <div className={styles.heading}>Quick Links</div>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/join" className={styles.link}>
          Join Us
        </Link>
        <Link href="/feedback" className={styles.link}>
          Feedback
        </Link>
      </div>
      <div className={styles.address}>
        <div className={styles.heading}>Contact Us</div>
        MIC 354 Ring Road, Piplya Rao Indore,
        <br /> +91 8104744738, +91 9993987710,
        <br /> micorganisationindia@gmail.com
      </div>
      <div className={styles.registered}>
        <div className={styles.heading}>Registered Under</div>
        <div className={styles.reg_list}>
          <div className={styles.reg_logo}>
            <a href="http://mp.gov.in/">
              <Image src={mp} alt="collab" />
            </a>
          </div>
          <div className="reg_logo">
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
