import React from 'react';
import Footer from '../components/Footer';

const Sponsors = () => {
  return (
    <div className="sponsors-page">
      <section className="py-20 bg-rsBack">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Sponsors</h2>
          
          {/* Sponsor Tiers */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Platinum Sponsors</h3>
            <div className="flex justify-center mt-4 space-x-4">
              <img src="platinum-sponsor1.png" alt="Platinum Sponsor 1" className="w-32 h-auto" />
              <img src="platinum-sponsor2.png" alt="Platinum Sponsor 2" className="w-32 h-auto" />
              {/* Add more platinum sponsors */}
            </div>

            <h3 className="text-2xl font-semibold mt-10">Gold Sponsors</h3>
            <div className="flex justify-center mt-4 space-x-4">
              <img src="gold-sponsor1.png" alt="Gold Sponsor 1" className="w-32 h-auto" />
              <img src="gold-sponsor2.png" alt="Gold Sponsor 2" className="w-32 h-auto" />
              {/* Add more gold sponsors */}
            </div>

            <h3 className="text-2xl font-semibold mt-10">Silver Sponsors</h3>
            <div className="flex justify-center mt-4 space-x-4">
              <img src="silver-sponsor1.png" alt="Silver Sponsor 1" className="w-32 h-auto" />
              <img src="silver-sponsor2.png" alt="Silver Sponsor 2" className="w-32 h-auto" />
              {/* Add more silver sponsors */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Sponsors;

