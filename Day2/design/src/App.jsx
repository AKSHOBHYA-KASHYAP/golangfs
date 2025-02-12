import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CarsView from "./cars/CarsView";
import CarsList from "./cars/CarsList";
import CarsCreate from "./cars/CarsCreate";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        
        {/* Header */}
        <header className="w-full py-4 bg-gray-800 shadow-md">
          <h1 className="text-center text-3xl font-bold text-red-400">Car Management System 🚗</h1>
        </header>

        {/* Navigation Menu */}
        <nav className="flex space-x-4 my-6">
          <Link to="/cars/list" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            View Cars
          </Link>
          <Link to="/cars/create" className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition">
            Add Car
          </Link>
        </nav>

        {/* Main Content */}
        <main className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg">
          <Routes>
            <Route path="/" element={<CarsList />} />
            <Route path="/cars/list" element={<CarsList />} />
            <Route path="/cars/create" element={<CarsCreate />} />
            <Route path="/car/view/:id" element={<CarsView />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
