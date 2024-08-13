import React from 'react';
import Header from '../components/Header';
import PromotionsCarousel from '../components/PromotionsCarousel';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import NearbyStores from '../components/NearByStores';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='m-5'>
      <PromotionsCarousel />
      <Categories />
      <FeaturedProducts />
      <NearbyStores />
      </div>
    </div>
  );
};

export default Home;
