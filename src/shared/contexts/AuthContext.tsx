import React, { createContext, useState, useEffect, useContext } from 'react';

interface User {
  userId: string;
  email?: string;
  userCode: number; // Obrigatório para o futuro (ex: buscar avatar)
}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (token: string, userData: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('owlc_token');
    const storedUser = localStorage.getItem('owlc_user');

    if (storedToken && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Erro ao carregar usuário do localStorage", error);
        signOut();
      }
    }
  }, []);

  const signIn = (token: string, userData: User) => {
    localStorage.setItem('owlc_token', token);
    localStorage.setItem('owlc_user', JSON.stringify(userData));
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem('owlc_token');
    localStorage.removeItem('owlc_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};