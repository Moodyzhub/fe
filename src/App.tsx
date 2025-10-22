// import  { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { AppRoutes } from '@/routes/AppRoutes';
// import { loadUserFromStorage } from '@/redux/slices/authSlice';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import type { AppDispatch } from '@/redux/store';

function App() {
    return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;