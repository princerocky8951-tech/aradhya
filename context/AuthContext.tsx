
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, name: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simulated "database" in localStorage
const STORAGE_KEY_USERS = 'aradhya_users_db';
const STORAGE_KEY_TOKEN = 'aradhya_token';
const STORAGE_KEY_CURRENT_USER = 'aradhya_current_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem(STORAGE_KEY_TOKEN));

  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, [token]);

  const getUsers = (): any[] => {
    const data = localStorage.getItem(STORAGE_KEY_USERS);
    return data ? JSON.parse(data) : [];
  };

  const login = async (email: string, password: string) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const users = getUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    const userObj: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role as UserRole
    };

    const mockToken = 'mock_token_' + Math.random().toString(36).substr(2);
    setToken(mockToken);
    setUser(userObj);
    localStorage.setItem(STORAGE_KEY_TOKEN, mockToken);
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(userObj));
  };

  const register = async (email: string, name: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    const users = getUsers();
    if (users.find(u => u.email === email)) {
      throw new Error('User with this email already exists');
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password,
      role: 'user'
    };

    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify([...users, newUser]));

    const userObj: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: UserRole.USER
    };

    const mockToken = 'mock_token_' + Math.random().toString(36).substr(2);
    setToken(mockToken);
    setUser(userObj);
    localStorage.setItem(STORAGE_KEY_TOKEN, mockToken);
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
