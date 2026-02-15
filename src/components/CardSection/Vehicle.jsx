import Image from "next/image";
import Link from "next/link";

export default function StaticCarCard() {
  return (
    <div className="bg-[rgb(var(--bg-primary))] p-6 flex justify-around">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-[rgb(var(--bg-secondary))]  hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src="https://hips.hearstapps.com/hmg-prod/images/2020-supra-launchedition-01-1547310229.jpg?crop=0.918xw:0.919xh;0.0391xw,0.0696xh&auto=webp"
            alt="Toyota Supra 2025 White"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <h2 className="font-bold text-2xl mb-1 text-[rgb(var(--text-primary))]">
            Toyota Supra
          </h2>
          <p className="text-gray-600 text-sm mb-3">2025 • New</p>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-extrabold text-[rgb(var(--accent-primary))]">
                ৳ ৮৫,০০,০০০
              </p>
              <p className="text-xs text-gray-500">BDT (Ex-Showroom)</p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              In Stock
            </span>
          </div>

          {/* Short Specs */}
          <div className="grid grid-cols-3 gap-2 text-center text-sm mb-5">
            <div>
              <p className="font-semibold">3200 CC</p>
              <p className="text-gray-500">Engine</p>
            </div>
            <div>
              <p className="font-semibold">382 HP</p>
              <p className="text-gray-500">Power</p>
            </div>
            <div>
              <p className="font-semibold">Auto</p>
              <p className="text-gray-500">Transmission</p>
            </div>
          </div>

          {/* Button */}
          <Link
            href="#"
            className="block w-full bg-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-hover))] text-white font-bold py-3 px-4 rounded-xl text-center transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-[rgb(var(--bg-secondary))]  hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src="https://hips.hearstapps.com/hmg-prod/images/2020-supra-launchedition-01-1547310229.jpg?crop=0.918xw:0.919xh;0.0391xw,0.0696xh&auto=webp"
            alt="Toyota Supra 2025 White"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <h2 className="font-bold text-2xl mb-1 text-[rgb(var(--text-primary))]">
            Toyota Supra
          </h2>
          <p className="text-gray-600 text-sm mb-3">2025 • New</p>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-extrabold text-[rgb(var(--accent-primary))]">
                ৳ ৮৫,০০,০০০
              </p>
              <p className="text-xs text-gray-500">BDT (Ex-Showroom)</p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              In Stock
            </span>
          </div>

          {/* Short Specs */}
          <div className="grid grid-cols-3 gap-2 text-center text-sm mb-5">
            <div>
              <p className="font-semibold">3200 CC</p>
              <p className="text-gray-500">Engine</p>
            </div>
            <div>
              <p className="font-semibold">382 HP</p>
              <p className="text-gray-500">Power</p>
            </div>
            <div>
              <p className="font-semibold">Auto</p>
              <p className="text-gray-500">Transmission</p>
            </div>
          </div>

          {/* Button */}
          <Link
            href="#"
            className="block w-full bg-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-hover))] text-white font-bold py-3 px-4 rounded-xl text-center transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-[rgb(var(--bg-secondary))]  hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src="https://hips.hearstapps.com/hmg-prod/images/2020-supra-launchedition-01-1547310229.jpg?crop=0.918xw:0.919xh;0.0391xw,0.0696xh&auto=webp"
            alt="Toyota Supra 2025 White"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <h2 className="font-bold text-2xl mb-1 text-[rgb(var(--text-primary))]">
            Toyota Supra
          </h2>
          <p className="text-gray-600 text-sm mb-3">2025 • New</p>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-extrabold text-[rgb(var(--accent-primary))]">
                ৳ ৮৫,০০,০০০
              </p>
              <p className="text-xs text-gray-500">BDT (Ex-Showroom)</p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              In Stock
            </span>
          </div>

          {/* Short Specs */}
          <div className="grid grid-cols-3 gap-2 text-center text-sm mb-5">
            <div>
              <p className="font-semibold">3200 CC</p>
              <p className="text-gray-500">Engine</p>
            </div>
            <div>
              <p className="font-semibold">382 HP</p>
              <p className="text-gray-500">Power</p>
            </div>
            <div>
              <p className="font-semibold">Auto</p>
              <p className="text-gray-500">Transmission</p>
            </div>
          </div>

          {/* Button */}
          <Link
            href="#"
            className="block w-full bg-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-hover))] text-white font-bold py-3 px-4 rounded-xl text-center transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
