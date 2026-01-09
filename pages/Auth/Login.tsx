import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-serif text-center mb-8 text-white">Enter the Sanctum</h2>
        <form onSubmit={handleLogin} className="space-y-6 bg-neutral-900/50 p-8 border border-white/5 shadow-2xl rounded-lg">
          {error && <div className="bg-red-900/30 text-red-500 p-3 rounded text-sm text-center">{error}</div>}
          <Input 
            type="email" 
            label="Email Address" 
            placeholder="devotee@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input 
            type="password" 
            label="Password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <Button type="submit" fullWidth>Login</Button>
          
          <div className="text-center text-sm text-neutral-500">
            Not yet registered? <Link to="/register" className="text-crimson-500 hover:underline">Join here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;