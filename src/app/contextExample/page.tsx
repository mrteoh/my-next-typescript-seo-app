import { Metadata } from "next";
import { ThemeProvider } from "../../context/ThemeContext";
import ThemeSwitcher from "../../context/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Context Example | MyApp",
  description: "Example page showing how to use React Context API in Next.js.",
};

export default function ContextExamplePage() {
  return (
    <ThemeProvider>
      <main style={{ padding: "2rem" }}>
        <h1>Context API Example</h1>
        <p>
          This page demonstrates using React Context API in a Next.js App Router project.
        </p>
        <ThemeSwitcher />
      </main>
    </ThemeProvider>
  );
}
