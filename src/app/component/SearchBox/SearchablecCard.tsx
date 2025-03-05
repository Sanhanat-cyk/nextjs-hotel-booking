import Image from "next/image";
interface CardProps {
  key: number | string;
  name: string;
  introduction: string;
  imageUrl: string;
  shaName: string | undefined;
  shaIcon: string | undefined;
  viewer: number;
  tags: string[] | []
}
export default function Card({ name, introduction, imageUrl, shaName, shaIcon, viewer, tags }: CardProps) {
  return (

    <div className="container mx-auto">

      <article className="bg-white p-6 mx-6 mt-6 border rounded-xl shadow-md">
        <div className="flex items-center justify-between">
          
          <div className="w-full">
            <div className="flex items-center">
              <div className="w-52 h-48">
                <img src={imageUrl}
                  alt={name}
                  width={176}
                  height={176}
                  className="object-none rounded-lg w-full h-full " />
              </div>

              <div className="ml-6 h-40 flex flex-col justify-between w-3/6">
                
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 overflow-hidden display-webkit-box webkit-box-orient-vertical">{introduction}</p>
                </div>

                <div className="flex flex-row">
                  {shaName === 'SHA' ? (
                    <h4 className="ml-2 border-green-500 text-green-500 border py-1 px-6 rounded-3xl text-xs">
                      #{shaName}
                    </h4>
                  ) : shaName && (
                    <h4 className="ml-2 border-blue-500 text-blue-500 border py-1 px-6 rounded-3xl text-xs">
                      #{shaName}
                    </h4>
                  )}
                  {Array.isArray(tags)
                    ? tags.map((tag, index) => (
                      <h4
                        key={index}
                        className=" ml-2 border-gray-500 text-gray-500 border py-1 px-6 rounded-3xl text-xs"
                      >
                        #{tag}
                      </h4>
                    ))
                    : tags && (
                      null
                    )}
                </div>



              </div>

            </div>
          </div>

          <div className="text-right h-48  flex flex-col justify-between w-64">
            <div className="flex flex-col items-end justify-end mx-1 ">
              <div className="bg-green-200 font-bold text-xl text-green-500 border py-2 px-4 rounded-3xl">
                {viewer}
              </div>
              <div className="flex flex-col ">
                {/*<h4 className="text-green-500 font-bold text-sm">rate</h4>*/}
                <p className="text-xs text-gray-600">views</p>
              </div>

            </div>
            {shaName === 'SHA' ? (
              // แสดงผลเมื่อ shaName เท่ากับ 'sha'
              <div className="flex flex-row justify-end ">
                <div className="w-20 h-20">
                  <img src={shaIcon}
                    alt={shaName}
                    className="object-contain rounded-lg w-full h-full " />
                </div>
              </div>
            ) : shaName && (
              // แสดงผลเมื่อ shaName ไม่เท่ากับ 'sha' และไม่เป็นค่าว่าง
              <div className="flex flex-row justify-end">
                <div className="w-30 h-20">
                  <img src={shaIcon}
                    alt={shaName}
                    className="object-contain rounded-lg w-full h-full " />
                </div>
              </div>
            )}


            <button className="bg-blue-600 text-white py-2 px-8 rounded-3xl mt-2">
              See Booking options
            </button>
          </div>
        </div>
      </article>
    </div>



  );
}