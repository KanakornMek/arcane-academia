import React from 'react';
  import BottomNavBar from '@/app/components/BottomNavBar'; // Adjust import path if needed

  export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col min-h-screen"> {/* Or your preferred layout structure */}
        <main className="flex-grow"> {/* Ensures content takes up space */}
          {children} {/* Page content will be rendered here */}
        </main>
        <BottomNavBar />
      </div>
    );
  }