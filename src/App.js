import TopBar from "./scenes/global/TopBar";
import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <TopBar/>
          </main>
          App
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
