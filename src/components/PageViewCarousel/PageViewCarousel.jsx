import './PageViewCarousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle'

export function PageViewCarousel() {
    return (
        <div className='product-view-container'>
            <Swiper
                className='product-view-swiper-container'
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
                keyboard={{ clickable: true }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500
                }}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <figure>
                        <img src="/public/IMG/White-Sneaker.png" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img src="/public/IMG/White-Sneaker.png" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img src="/public/IMG/White-Sneaker.png" />
                    </figure>
                </SwiperSlide>
            </Swiper>

            <div className='thumb-images-container'>
                <figure className='active'  >
                    <img src="/public/IMG/White-Sneaker.png" />
                </figure>
                <figure>
                    <img src="/public/IMG/White-Sneaker.png" />
                </figure>
                <figure>
                    <img src="/public/IMG/White-Sneaker.png" />
                </figure>
                <figure>
                    <img src="/public/IMG/White-Sneaker.png" />
                </figure>
            </div>
        </div>

    )
}