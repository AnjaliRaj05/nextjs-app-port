import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Make sure to import Swiper's CSS
import './YourStyles.css'; // Import your custom CSS if needed
import RightSection from './RightSection';

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <RightSection/>
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev"><span></span></a>
              <a href="#" className="next"><span></span></a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            className="swiper owl-carousel modal_items"
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            // You may need to add additional Swiper settings based on your requirements
          >
            <SwiperSlide className="item modal_item">
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" style={{ backgroundImage: 'url(img/portfolio/4.jpg)' }}></div>
              </div>
              <div className="title_holder">
                <p>mobile, design</p>
                <h3><a href="#">Yellow Phone</a></h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">mobile, design</p>
                <h3 className="fn__title">Yellow Phone</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" style={{ backgroundImage: 'url(img/portfolio/4.jpg)' }}></div>
                </div>
                <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada...</p>
                {/* Add more description paragraphs as needed */}
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlide components here, following the same structure */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
