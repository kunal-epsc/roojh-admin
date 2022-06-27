import { Box, createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Auth from "./pages/auth/Auth-Router";
import Shell from "./pages/shell/Shell-Router";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} height="100vh">
        <Switch>
          {/* <Route path="/splash" component={SplashScreen} /> */}
          <Route path="/" exact component={Shell} />
          <Route path="/auth" component={Auth} />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Box>
    </ThemeProvider>
  );
}

export default App;
