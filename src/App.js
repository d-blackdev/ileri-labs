import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home_Page from "./pages/Home_Page/Home";
import Products_Page from "./pages/Products/Products";
import Blog_Page from "./pages/Blog/Blog";
import Faq_Page from "./pages/FAQs/FAQs";
import Sample_Product_Page from "./pages/SampleProducts/SampleProducts";
import Haircare_Page from "./pages/HaircareProducts/HaircareProducts";
import What_We_Do_Page from "./pages/What_We_Do/What_We_Do";
import Get_Kit_Page from "./pages/Get_A_Kit/GetKit";
import Skincare_Page from "./pages/Skincare_Products/Skincare_Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home_Page} />
        <Route exact path="/products" component={Products_Page} />
        <Route exact path="/get-a-kit" component={Get_Kit_Page} />
        <Route exact path="/blog" component={Blog_Page} />
        <Route exact path="/what-we-do" component={What_We_Do_Page} />
        <Route exact path="/faq" component={Faq_Page} />
        <Route
          exact
          path="/products/sample-products"
          component={Sample_Product_Page}
        />
        <Route
          exact
          path="/products/haircare-products"
          component={Haircare_Page}
        />
        <Route
          exact
          path="/products/skincare-products"
          component={Skincare_Page}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
