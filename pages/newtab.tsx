import { Container, Link, Typography, useTheme } from "@mui/material";
// import { useQuery } from "react-query";

import { BackgroundImage } from "components/BackgroundImage";
import Background from "public/images/background.jpg";

// const latitude = "-33.7715";
// const longitude = "150.8438";

export default function NewTabPage(): JSX.Element {
  const theme = useTheme();

  // const query = useQuery("weather", () => {
  //   return fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.OWM_API_KEY}`
  //   ).then((res) => res.json());
  // });

  return (
    <>
      <BackgroundImage
        backgroundColor={theme.palette.grey[800]}
        src={Background}
      />
      <Container>
        <Typography variant="h1">Hello</Typography>
        <Link href="/">Home</Link>
      </Container>
    </>
  );
}
