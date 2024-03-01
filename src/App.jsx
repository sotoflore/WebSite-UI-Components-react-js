import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import Introduction  from "./pages/Introduction";
import AlertPage from "./pages/AlertPage";
import BannerPage from "./pages/BannerPage";
import ButtonPage from "./pages/ButtonPage";
import ButtonGroupPage from "./pages/ButtonGroupPage";
import CardPage from "./pages/CardPage";
import FormPage  from "./pages/FormPage";
import PaginationPage from "./pages/PaginationPage";
import NavbarPage  from "./pages/NavbarPage";
import SpinnerPage from "./pages/SpinnerPage";
import TestimonialPage from "./pages/TestimonialPage";

const App = () => {
  return (
    <>
        <header className="w-full">
            <Navbar/>
        </header>
        <main className="m-auto w-10/12">
            <ScrollToTop/>
            <Routes>
                    <Route index element={ <HomePage/> }/>
                    <Route path="/componentes" element={<ComponentsPage />}>
                        <Route index element={<Introduction />} />
                        <Route path="introduccion" element={<Introduction />} />
                        <Route path="alertas" element={<AlertPage />} />
                        <Route path="banners" element={<BannerPage />} />
                        <Route path="buttons" element={<ButtonPage />} />
                        <Route path="button-group" element={<ButtonGroupPage />} />
                        <Route path="card" element={<CardPage />} />
                        <Route path="forms" element={<FormPage />} />
                        <Route path="pagination" element={<PaginationPage />} />
                        <Route path="navbar" element={<NavbarPage />} />
                        <Route path="spinners" element={<SpinnerPage />} />
                        <Route path="testimonial" element={<TestimonialPage />} />
                    </Route>
            </Routes>
        </main>
        <Footer/>
    </>
  )
}
export default App;
