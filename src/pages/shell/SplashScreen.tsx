import { Stack } from "@mui/material";

import { SplashAnimation } from "../../components/shared/Splash.styled";

export default function SplashScreen() {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      <SplashAnimation>
        <img src="/assets/Roojh-icon.png" alt="" />
      </SplashAnimation>
    </Stack>
  );
}
