import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { ProductViewPage } from "../pages/ProductViewPage/ProductViewPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Products } from "../pages/Products/Products";
import { ScrollToTop } from './../../helper/ScrollToTop';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/produto" element={<ProductViewPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
