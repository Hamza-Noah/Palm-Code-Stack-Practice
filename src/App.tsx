import Form from "./Form";
import Sidebar from "./Sidebar";
import { IconSun, IconMoon } from "@tabler/icons-react";
import {
  useMantineColorScheme,
  ActionIcon,
  useComputedColorScheme,
} from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



export default function App() {
  const computedColorScheme = useComputedColorScheme();
  const { setColorScheme } = useMantineColorScheme();

  return (
    <>
    <BrowserRouter>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div style={{ flex: 3 }}>
          <ActionIcon
            variant="outline"
            color={computedColorScheme === "dark" ? "yellow" : "blue"}
            onClick={() =>
              setColorScheme(computedColorScheme === "dark" ? "light" : "dark")
            }
            title="Toggle color scheme"
          >
            {computedColorScheme === "dark" ? (
              <IconSun size={18} />
            ) : (
              <IconMoon size={18} />
            )}
          </ActionIcon>


    <Routes>
      <Route path="/" element={<h1>404</h1>} />
      <Route path="/form" element={<Form />} />
    </Routes>

        </div>
      </div>
        </BrowserRouter>
    </>
  );
}
