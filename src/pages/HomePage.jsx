import { Section } from "../components/Section/Section";
import { ProductListening } from "./../components/ProductListing/ProductListing";
import { ProductCard } from "./../components/ProductCard/ProductCard";
import { FeaturedCollections } from "./../components/FeaturedCollections/FeaturedCollections";
import { Layout } from './../components/Layout/Layout';
import { HomePageCarousel } from "../components/HomePageCarousel/HomePageCarousel";

import { Article } from './../components/Article/Article';
import { FeaturedCollectionsIcons } from './../components/FeaturedCollectionsIcons/FeaturedCollectionIcons';

export function HomePage() {

    const produtos = [
        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-1.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-2.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-3.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-4.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-5.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-1.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-2.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

        {
            name: "Nome do produto",
            image: "/public/IMG/product-images/produc-image-3.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
    ]

    return (
        <Layout>

            <HomePageCarousel />

            <Section title="Coleções em destaque">
                <FeaturedCollections />
            </Section>

            <Section title="Coleções em destaque" titleAlign="center"> 
                <FeaturedCollectionsIcons/>
            </Section>

            <Section title="Produtos em alta" link="ver todos">
                <ProductListening>
                    {produtos.map((produto, key) => <ProductCard key={key} produto={produto} />)}
                </ProductListening>
            </Section>

            <Article />
        </Layout>
    );
}
