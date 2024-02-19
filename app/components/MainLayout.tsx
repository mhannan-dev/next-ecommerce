// components/MainLayout.tsx
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className="text-center ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
