'use client';

import { useEffect, useState, useRef } from 'react';
import GalleryUploader from '@/components/admin/GalleryUploader';
import ServicesEditor from '@/components/admin/ServicesEditor';
import PromoBannerEditor from '@/components/admin/PromoBannerEditor';
import GalleryManager from '@/components/admin/GalleryManager';
import Throbber from '@/components/Throbber';
import AppointmentsViewer from '@/components/admin/AppointmentViewer';
import CategoryEditor from '@/components/admin/CategoryEditor';
import { ChevronDown } from 'lucide-react';

type AdminTab = 'gallery' | 'services' | 'promo' | 'appointments';
type ServicesSubTab = 'services' | 'categories';

const tabs: { key: AdminTab; label: string }[] = [
  { key: 'gallery', label: 'Gallery' },
  { key: 'services', label: 'Services' },
  { key: 'promo', label: 'Promo Banner' },
  { key: 'appointments', label: 'Appointments' },
];


export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('gallery');
  const [servicesSubTab, setServicesSubTab] = useState<ServicesSubTab>('services');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      window.location.href = '/login';
    } else {
      setLoggedIn(true);

      const savedTab = localStorage.getItem('adminTab') as AdminTab;
      if (savedTab && tabs.some((tab) => tab.key === savedTab)) {
        setActiveTab(savedTab);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminTab');
    window.location.href = '/login';
  };

  const handleTabChange = (tabKey: AdminTab) => {
    setActiveTab(tabKey);
    localStorage.setItem('adminTab', tabKey);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Throbber size={48} />
      </div>
    );
  }


  return (
    <main className="min-h-screen pt-20 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b gap-4">
        {tabs.map((tab) =>
          tab.key === 'services' ? (
            <div key="services" ref={dropdownRef} className="relative">
              <button
                onClick={() => {
                  setActiveTab('services');
                  setServicesDropdownOpen((prev) => !prev);
                }}
                className={`flex items-center gap-1 px-4 py-2 font-medium border-b-2 transition-colors duration-200 ${activeTab === 'services'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-red-500'
                  }`}
              >
                {tab.label}
                <ChevronDown size={16} />
              </button>

              {servicesDropdownOpen && activeTab === 'services' && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${servicesSubTab === 'services' ? 'bg-gray-100 font-medium' : ''
                      }`}
                    onClick={() => {
                      setServicesSubTab('services');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Edit Services
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${servicesSubTab === 'categories' ? 'bg-gray-100 font-medium' : ''
                      }`}
                    onClick={() => {
                      setServicesSubTab('categories');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Edit Categories
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setServicesDropdownOpen(false);
              }}
              className={`px-4 py-2 font-medium border-b-2 transition-colors duration-200 ${activeTab === tab.key
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-red-500'
                }`}
            >
              {tab.label}
            </button>
          )
        )}
      </div>

      {/* Tab Panels */}
      <div className="space-y-12">
        {activeTab === 'gallery' && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-red-600">Upload Gallery Images</h2>
            <GalleryUploader />
            <GalleryManager />
          </section>
        )}

        {activeTab === 'services' && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-red-600">Manage Services</h2>
            {servicesSubTab === 'services' && <ServicesEditor />}
            {servicesSubTab === 'categories' && <CategoryEditor />}
          </section>
        )}


        {activeTab === 'promo' && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-red-600">Edit Promo Banner</h2>
            <PromoBannerEditor />
          </section>
        )}

        {activeTab === 'appointments' && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-red-600">View Appointments</h2>
            <AppointmentsViewer />
          </section>
        )}
      </div>
    </main>
  );
}
