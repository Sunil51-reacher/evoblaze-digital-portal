
import React from 'react';

const LocationsSection = () => {
  return (
    <section className="bg-evoblaze-gray section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategically positioned to serve businesses across South Asia and Southeast Asia 
            with offices in two vibrant cities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="India Office" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">India</h3>
              <p className="text-gray-600 mb-4">
                Our headquarters is located in the heart of India's business district, 
                serving clients across India and coordinating our South Asian operations.
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 56/21, Ground Floor, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301<br />
                <strong>Phone:</strong> +919058346379<br />
                <strong>Email:</strong> creative@evoblazebyhands.com
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518988936704-8b816bbb185e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1337&q=80" alt="Dili Office" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dili, Timor Leste</h3>
              <p className="text-gray-600 mb-4">
                Our Dili office serves as our Southeast Asian hub, specializing in 
                marketing solutions tailored for emerging markets in the region.
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> Green Damond Villa, Dili, Timor Leste<br />
                <strong>Phone:</strong> +67077870992<br />
                <strong>Email:</strong> admin@evoblaze.net
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
