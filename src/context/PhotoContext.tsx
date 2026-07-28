import React, { createContext, useContext, useState } from 'react';
import { PhotoMapping } from '../types';
import { DEFAULT_PHOTO_MAPPING } from '../data/portfolioData';

interface PhotoContextType {
  photoMapping: PhotoMapping;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoMapping] = useState<PhotoMapping>(DEFAULT_PHOTO_MAPPING);

  return (
    <PhotoContext.Provider value={{ photoMapping }}>
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

