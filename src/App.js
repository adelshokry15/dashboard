import logo from "./logo.svg";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/index.jsx";
import Sidebar from "./scenes/global/Sidebar.jsx";
import Team from "./scenes/team/Team.jsx";
import Invoices from "./scenes/invoices/Invoices";
import Contacts from "./scenes/contacts/Contacts.jsx";
import Bar from "./scenes/Bar/Bar.jsx";
import Form from "./scenes/form/Form.jsx";
import Line from "./scenes/line/Line.jsx";
import Pie from "./scenes/pie/Pie.jsx";
import FAQ from "./scenes/faq/Faq.jsx";
import Geography from "./scenes/geography/Geography.jsx";
import Calendar from "./scenes/calendar/Calendar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isNonTablet = useMediaQuery("(min-width:768px)");
  useEffect(() => {
    if (!isNonTablet) {
      setIsCollapsed(true);
    }
  }, [isNonTablet]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: "flex", width: "100%" }}>
          <Sidebar
            isSidebar={isSidebar}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          <main
            style={{
              width: isCollapsed ? `calc(100% - 80px)` : `calc(100% - 270px)`,
            }}
          >
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
