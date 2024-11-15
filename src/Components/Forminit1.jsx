import React from 'react';
import { useNavigate } from 'react-router-dom';

const Forminit1 = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
   
    navigate('/LoadingPage');
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold font-pixeloidmono text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to GuidanceHub 💁
              </h1>
              <p className="mt-4 leading-relaxed font-pixeloidmono text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-pixeloidmono text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full h-10 rounded-xl border-gray-200 bg-white text-sm text-gray-700 shadow-xl"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-pixeloidmono text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full h-10 rounded-xl border-gray-200 bg-white text-sm font-pixeloidmono text-gray-700 shadow-xl"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-pixeloidmono text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-xl h-10 border-gray-200 bg-white font-pixeloidmono text-sm text-gray-700 shadow-xl"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-pixeloidmono text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-xl border-gray-200 h-10 bg-white text-xl text-gray-700 shadow-xl"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-pixeloidmono text-gray-700">
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-xl border-gray-200 bg-white text-sm h-10 text-gray-700 shadow-xl"
                  />
                </div>
                <div className="col-span-6">
                  <p className="text-sm text-gray-500 font-pixeloidmono">almost there...</p>
                </div>
               
               
                <div className="col-span-6 sm:flex ml-[6rem] sm:items-center sm:gap-4">
                  <button
                    onClick={handleCreateAccount}
                    type="button"
                    className="inline-block shrink-0 rounded-md border border-lime-600 bg-lime-200 px-12 py-3 text-sm font-pixeloidmono text-black transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-200"
                  >
                    Create an account
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Forminit1;
