import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopPicks from '../components/TopPicks';
import Deals from '../components/Deals';
import Trends from '../components/Trends';
import BankOffer from '../components/BankOffer';
import DealsSecond from '../components/DealsSecond';
import BestOffers from '../components/BestOffers';
import SkinCare from '../components/SkinCare';
import ZudioBanner from '../components/ZudioBanner';
import WhoWeAre from '../components/WhoWeAre';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <TopPicks />
            <Deals />
            <Trends />
            <BankOffer />
            <DealsSecond />
            <BestOffers />
            <SkinCare />
            <ZudioBanner />
            <WhoWeAre />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;
