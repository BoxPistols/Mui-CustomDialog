import * as React from "react";
import { Button } from "@mui/material";

interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default ThemeToggle;
