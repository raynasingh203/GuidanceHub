import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Formonboard'); 
    }, 1500);

    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen rounded-full bg-gray-100">
    <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default LoadingPage;
