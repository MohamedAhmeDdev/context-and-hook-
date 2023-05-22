import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { DataProvider } from "./contexts/DataContext";


function App() {
  return (
    <div className="App">
      <DataProvider>
      <ThemeContextProvider>
      <Navbar/>
      <BookList/>
      <ThemeToggle/>
    </ThemeContextProvider>
    </DataProvider>
    </div>
  );
}

export default App;
