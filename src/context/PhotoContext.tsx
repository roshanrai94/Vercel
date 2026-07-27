import React, { createContext, useContext, useState, useEffect } from 'react';
import { PhotoMapping } from '../types';
import { DEFAULT_PHOTO_MAPPING } from '../data/portfolioData';

interface PhotoContextType {
  photoMapping: PhotoMapping;
  setPhotoPath: (key: string, path: string) => void;
  setPhotoDataUrl: (key: string, dataUrl: string) => void;
  resetPhoto: (key: string) => void;
  resetAllPhotos: () => void;
  isManagerOpen: boolean;
  openManager: () => void;
  closeManager: () => void;
  activeSlotToEdit: string | null;
  setActiveSlotToEdit: (key: string | null) => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const STORAGE_KEY = 'raishova_photo_config';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoMapping, setPhotoMapping] = useState<PhotoMapping>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge saved with defaults so new keys or default paths are preserved if empty
        const merged = { ...DEFAULT_PHOTO_MAPPING };
        Object.keys(parsed).forEach((key) => {
          merged[key] = {
            ...DEFAULT_PHOTO_MAPPING[key],
            ...parsed[key],
            path: parsed[key]?.path || DEFAULT_PHOTO_MAPPING[key]?.path || '',
          };
        });
        return merged;
      }
    } catch (e) {
      console.error('Failed to parse photo config from storage', e);
    }
    return DEFAULT_PHOTO_MAPPING;
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [activeSlotToEdit, setActiveSlotToEdit] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photoMapping));
    } catch (e) {
      console.error('Failed to save photo config', e);
    }
  }, [photoMapping]);

  const setPhotoPath = (key: string, path: string) => {
    setPhotoMapping((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || DEFAULT_PHOTO_MAPPING[key] || { alt: key, label: key, recommendedSize: 'Standard' }),
        path: path.trim(),
        dataUrl: undefined, // Path overrides dataUrl if set
      },
    }));
  };

  const setPhotoDataUrl = (key: string, dataUrl: string) => {
    setPhotoMapping((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || DEFAULT_PHOTO_MAPPING[key] || { alt: key, label: key, recommendedSize: 'Standard' }),
        dataUrl,
      },
    }));
  };

  const resetPhoto = (key: string) => {
    setPhotoMapping((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || DEFAULT_PHOTO_MAPPING[key]),
        path: '',
        dataUrl: undefined,
      },
    }));
  };

  const resetAllPhotos = () => {
    setPhotoMapping(DEFAULT_PHOTO_MAPPING);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // Ignore error
    }
  };

  const openManager = () => setIsManagerOpen(true);
  const closeManager = () => {
    setIsManagerOpen(false);
    setActiveSlotToEdit(null);
  };

  return (
    <PhotoContext.Provider
      value={{
        photoMapping,
        setPhotoPath,
        setPhotoDataUrl,
        resetPhoto,
        resetAllPhotos,
        isManagerOpen,
        openManager,
        closeManager,
        activeSlotToEdit,
        setActiveSlotToEdit,
      }}
    >
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
