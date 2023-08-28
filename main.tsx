import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/globals.css";
import { ThemeProvider } from "@components/theme-provider"; //add this line

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



// for use hooks

export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <div>
       <button onClick={() => setTheme("light")}> light </button>
       <button onClick={() => setTheme("dark")}> dark </button>
       <button onClick={() => setTheme("system")}> system </button>
    </div>
  )
}


