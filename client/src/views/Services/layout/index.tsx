import React from "react";
import Navigation from "./components/Navigation";
import Path from "./components/Path";

function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex mb-14 justify-between ml-10 mr-28 gap-6 min-h-screen">
      {/* side bar */}
      <Navigation />
      <main className="flex-grow  p-4">
        <Path />
        {children}
      </main>
    </div>
  );
}

export default Index;
