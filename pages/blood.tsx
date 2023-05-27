import { AspectRatio } from "@chakra-ui/react";

const BLOOD_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeBF5EnpXQWVHKW2KNbiVLKjp68CCrClL3HSDNzVbKRgeNngg/formResponse?embedded=true";

const Blood = () => {
  return (
    <AspectRatio ratio={10 / 14}>
      <iframe
        src={BLOOD_URL}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </AspectRatio>
  );
};

export default Blood;
