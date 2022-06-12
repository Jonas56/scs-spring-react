import React from "react";
import CategoryFilter from "./pages/CategoryFilter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CategoryFilter />
      <Footer />
    </div>
  );
};

export default App;
