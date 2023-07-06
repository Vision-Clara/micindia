import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Fade, Stack } from "@chakra-ui/react";

const BannerCrousal = ({ banners }: { banners: ReactNode[] }) => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const totalBanners = useMemo(() => banners.length, [banners]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveBannerIndex((prevIndex) => (prevIndex + 1) % totalBanners);
    }, 2500);

    return () => clearTimeout(interval);
  }, [activeBannerIndex]);

  return (
    <Stack overflow="hidden" scrollBehavior="smooth" direction="row">
      {banners.map((item, index) => {
        return (
          <Fade key={index} in={index === activeBannerIndex} unmountOnExit>
            {item}
          </Fade>
        );
      })}
    </Stack>
  );
};

export default BannerCrousal;
