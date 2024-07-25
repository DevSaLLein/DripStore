import { Section } from "../../components/Section/Section";
import { ProductListening } from "../../components/ProductListing/ProductListing";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Layout } from "../../components/Layout/Layout";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";

import "./ProductViewPage.css";

export function ProductViewPage() {
    const produtos = [
        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-1.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-2.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-3.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-4.jpeg",
            price: 200,
            priceDiscount: 149.9,
        },
    ];

    return (
        <Layout>
            <div className="product-view-page-container">
                <h1 className="product-nav-container">
                    <span> Home </span> / Produtos / Tênis / Nike / Tênis Nike Revolution 6
                    Next Nature Masculino
                </h1>
                <Section>
                    <ProductDetails />
                </Section>

                <Section title="Produtos Relacionados" link="ver todos">
                    <ProductListening>
                        {produtos.map((produto, key) => (
                            <ProductCard key={key} produto={produto} />
                        ))}
                    </ProductListening>
                </Section>
            </div>
        </Layout>
    );
}
