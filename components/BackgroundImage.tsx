import { Box, Fade } from "@mui/material";
import { keyframes } from "@mui/styled-engine";
import NextImage, { ImageProps } from "next/image";
import { useState } from "react";

const unblur = keyframes`
  from {
    filter: blur(20px);
  }
  to {
    filter: blur(0);
  }
`;

interface IBackgroundImageProps extends Omit<ImageProps, "layout"> {
  backgroundColor?: string;
}

export function BackgroundImage({
  backgroundColor,
  ...props
}: IBackgroundImageProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <Fade appear in timeout={2000}>
      <Box
        sx={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: "-1",
          backgroundColor,
        }}
      >
        <Box
          component={NextImage}
          sx={{
            animation: isLoaded ? `${unblur} 1s linear` : undefined,
          }}
          {...props}
          layout="fill"
          placeholder="blur"
          lazyBoundary="0px"
          onLoadingComplete={() => setIsLoaded(true)}
          quality={80}
          alt=""
          role="presentation"
        />
      </Box>
    </Fade>
  );
}
