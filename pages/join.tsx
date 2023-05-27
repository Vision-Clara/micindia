import { AspectRatio } from "@chakra-ui/react";

const REG_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1gnvqUkXquADmOM2uxPTxAGXxNpVIt9I7nPQkwPNeJC3_5w/formResponse?embedded=true";

const Join = () => {
  return (
    <AspectRatio ratio={10 / 14}>
      <iframe
        src={REG_URL}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </AspectRatio>
  );
};

export default Join;
