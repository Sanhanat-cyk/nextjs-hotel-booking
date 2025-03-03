import Image from "next/image";

export default function Card() {
  return (
   
      <div className="container mx-auto">
      <article className="bg-white p-6 mx-6 mt-6 border rounded-xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/hotel-image.jpg"
              alt="Hotel"
              width={176} // กำหนดความกว้าง
              height={176} // กำหนดความสูง
              className="object-cover rounded-lg"
            />
            <div className="ml-6">
              <h3 className="text-lg font-semibold">Hotel Name</h3>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-sm text-gray-600">Amenities</p>
              <div className="my-2">
                <h6 className="text-sm font-semibold">room</h6>
                <p className="text-sm text-gray-600">1x bed</p>
                <p className="text-sm text-gray-600">1x bathroom</p>
              </div>
              <div className="flex flex-row space-x-2">
                <h4 className="border-blue-500 text-blue-500 border py-1 px-6 rounded-3xl text-xs">
                  #hot Deal
                </h4>
                <h4 className="border-blue-500 text-blue-500 border py-1 px-6 rounded-3xl text-xs">
                  #Popular
                </h4>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end mb-2">
              <div className="flex flex-col mx-1">
                <h4 className="text-green-500 font-bold text-sm">rate</h4>
                <p className="text-xs text-gray-600">reviews</p>
              </div>
              <div className="bg-green-200 font-bold text-xl text-green-500 border py-2 px-4 rounded-3xl">
                <p>8.8</p>
              </div>
            </div>
            <p className="text-xl font-bold">฿1,500</p>
            <p className="text-sm text-gray-600">3 nights, 2 guest</p>
            <button className="bg-blue-600 text-white py-2 px-8 rounded-3xl mt-2">
              See Booking options
            </button>
          </div>
        </div>
      </article>
      </div>

  );
}