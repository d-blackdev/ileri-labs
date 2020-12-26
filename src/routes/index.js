import Home_Page from '../pages/Home_Page/Home'
import Products_Page from '../pages/Products/Products'
import Blog_Page from '../pages/Blog/Blog'
import Faq_Page from '../pages/FAQs/FAQs'
import Sample_Product_Page from '../pages/SampleProducts/SampleProducts'
import Haircare_Page from '../pages/HaircareProducts/HaircareProducts'
import What_We_Do_Page from '../pages/What_We_Do/What_We_Do'
import Get_Kit_Page from '../pages/Get_A_Kit/GetKit'


const routes = [
  { path: "/", component: Home_Page, title: "Ileri Labs" },
  { path: "/products", component: Products_Page, title: "Products" },
  { path: "/products/sample-products", component: Sample_Product_Page, title: "Sample Products" },
  { path: "/blog", component: Blog_Page, title: "Blog" },
  { path: "/faq", component: Faq_Page, title: "FAQs" },
  { path: "/products/haircare-products", component: Haircare_Page, title: "Haircare Products" },
  { path: "/what-we-do", component: What_We_Do_Page, title: "What We Do" },
  { path: "/get-a-kit", component: Get_Kit_Page, title: "Get-A-Test-Kit" },
];
export default routes