import React from "react";
import { AcademicCapIcon, UsersIcon } from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <div className="h-auto py-12 bg-gray-50">
      <div className="container mx-auto pb-20 px-4">
        <h1 className="text-center text-4xl font-bold mb-12">OUR SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kartu Sunday Services */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-gray-600 mr-3" />
              <h2 className="text-2xl font-bold">Sunday Services</h2>
            </div>
            <ul className="text-gray-700 space-y-4">
              <li>
                <span className="text-lg font-semibold">Kebaktian Umum 1</span>
                <div>(07.00 WIB)</div>
                <div>Lantai 3</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Kebaktian Umum 2</span>
                <div>(09.00 WIB)</div>
                <div>Lantai 3</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Kebaktian Umum 3</span>
                <div>(16.00 WIB)</div>
                <div>Lantai 3</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Ibadh Sekolah Minggu</span>
                <div>(09.00 WIB)</div>
                <div>Lantai 1</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Ibadah Remaja (JIC)</span>
                <div>(09.00 WIB)</div>
                <div>Lantai 4</div>
              </li>
            </ul>
          </div>

          {/* Kartu Fellowship */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <UsersIcon className="h-8 w-8 text-gray-600 mr-3" />
              <h2 className="text-2xl font-bold">Fellowship</h2>
            </div>
            <ul className="text-gray-700 space-y-4">
              <li>
                <span className="text-lg font-semibold">Life Sharing</span>
                <div>Selasa (Pkl 19.00)</div>
                <div>Online</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Mezbah Doa</span>
                <div>Rabu (Pkl 18.30)</div>
                <div>Lantai 1</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Persekutuan Wanita Lois</span>
                <div>Kamis (18.00)</div>
                <div>Lantai 1</div>
              </li>
              <li>
                <span className="text-lg font-semibold">
                  Persekutuan Wanita Eunike (Minggu 1 & Minggu 3)
                </span>
                <div>Jumat (Pkl 18.00)</div>
                <div>Lantai 1</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Persekutuan Pria</span>
                <div>Jumat (Pkl 19.00)</div>
                <div>Lantai 1</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Doa Pagi</span>
                <div>Sabtu (Pkl 06.00)</div>
                <div>Lantai 1</div>
              </li>
              <li>
                <span className="text-lg font-semibold">Persekutuan New Generation</span>
                <div>Sabtu (Pkl 18.00)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
