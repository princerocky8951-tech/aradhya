
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Booking, MediaItem, BookingStatus } from '../types';
import { useAuth } from './AuthContext';
import { SACRED_GALLERY } from '../mediaData';

interface DataContextType {
  media: MediaItem[];
  bookings: Booking[];
  addBooking: (booking: Partial<Booking>) => Promise<void>;
  updateBookingStatus: (id: string, status: BookingStatus) => Promise<void>;
  loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEY_BOOKINGS = 'aradhya_bookings_v1';

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [media] = useState<MediaItem[]>(SACRED_GALLERY);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      loadLocalBookings();
    } else {
      setBookings([]);
    }
  }, [isAuthenticated, user?.id]);

  const loadLocalBookings = () => {
    const saved = localStorage.getItem(STORAGE_KEY_BOOKINGS);
    const allBookings: Booking[] = saved ? JSON.parse(saved) : [];
    
    if (user?.role === 'admin') {
      setBookings(allBookings);
    } else {
      setBookings(allBookings.filter(b => b.userId === user?.id));
    }
  };

  const addBooking = async (bookingData: Partial<Booking>) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    const saved = localStorage.getItem(STORAGE_KEY_BOOKINGS);
    const allBookings: Booking[] = saved ? JSON.parse(saved) : [];
    
    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user?.id || 'guest',
      userName: user?.name || 'Anonymous Devotee',
      city: (bookingData.city as any) || 'Bangalore',
      preferredDate: bookingData.preferredDate || '',
      message: bookingData.message || '',
      status: BookingStatus.PENDING,
      createdAt: new Date().toISOString(),
      ...bookingData
    };

    const updated = [newBooking, ...allBookings];
    localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(updated));
    
    loadLocalBookings();
    setLoading(false);
  };

  const updateBookingStatus = async (id: string, status: BookingStatus) => {
    const saved = localStorage.getItem(STORAGE_KEY_BOOKINGS);
    const allBookings: Booking[] = saved ? JSON.parse(saved) : [];
    
    const updated = allBookings.map(b => b.id === id ? { ...b, status } : b);
    localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(updated));
    
    loadLocalBookings();
  };

  return (
    <DataContext.Provider value={{ media, bookings, addBooking, updateBookingStatus, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
