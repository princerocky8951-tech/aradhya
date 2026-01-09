export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'image' | 'video';
  uploadedBy: string; // User ID
  createdAt: string;
}

export enum BookingStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export interface Booking {
  id: string;
  userId: string;
  userName: string;
  city: 'Hyderabad' | 'Bangalore' | 'Vizag';
  preferredDate: string;
  message: string;
  status: BookingStatus;
  createdAt: string;
}