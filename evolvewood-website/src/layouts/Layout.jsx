import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-evolve-cream text-evolve-text font-sans">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow overflow-x-clip">
                <Suspense fallback={
                    <div className="h-screen flex items-center justify-center text-evolve-brown">
                        <div className="animate-pulse text-xl font-display">Loading EvolveWood...</div>
                    </div>
                }>
                    <Outlet />
                </Suspense>
            </main>
            <WhatsAppWidget />
            <Footer />
        </div>
    );
}
