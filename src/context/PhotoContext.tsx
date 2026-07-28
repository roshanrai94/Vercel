import React, { createContext, useContext, useState } from 'react';
import { PhotoMapping } from '../types';
import { DEFAULT_PHOTO_MAPPING } from '../data/portfolioData';

interface PhotoContextType {
  photoMapping: PhotoMapping;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Clear any old stored data
  React.useEffect(() => {
    localStorage.removeItem('raishova_photo_config');
  }, []);

  return (
    <PhotoContext.Provider value={{ photoMapping: DEFAULT_PHOTO_MAPPING }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};

