import { AuthProvider } from './contexts/AuthenticationProvider'
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProtectedRoute from './components/ProtectedRoute';
import CheckoutPage from './pages/CheckoutPage';
import SummaryPage from './pages/SummaryPage';

const App = () => {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product" element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            } />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          } />
          <Route path="/summary" element={
            <ProtectedRoute>
              <SummaryPage />
            </ProtectedRoute>
          } />
      </Routes>
    </AuthProvider>
  );
};

export default App;