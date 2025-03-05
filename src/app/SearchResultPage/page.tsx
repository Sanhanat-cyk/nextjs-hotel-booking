'use client';
import Image from "next/image";
import Card from '../component/SearchBox/SearchablecCard'
import { useState, useEffect, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios'

interface Category {
  categoryId: number;
  name: string;
  icon?: string;
}

interface ShaType {
  typeId: number;
  name: string;
}

interface Sha {
  name: string;
  detail: string;
  thumbnailUrl: string;
  type: ShaType;
  category: Category;
}

interface Location {
  address: string;
  province: {
    provinceId: number;
    name: string;
  };
  district: {
    districtId: number;
    name: string;
  };
  subDistrict: {
    subDistrictId: number;
    name: string;
  };
  postcode: string;
}

interface DataItem {
  status: string;
  placeId: number;
  name: string;
  introduction: string;
  category: Category;
  sha: Sha;
  latitude: number;
  longitude: number;
  location: Location;
  thumbnailUrl: string;
  tags: string[];
  distance: number;
  createdAt: string;
  updatedAt: string;
  migrateId: string;
  viewer: number;
  slug: string;
}

interface Query {
  ids: number[];
  keyword: string;
  type: string;
  provinceId: number;
  shaFlag: boolean;
  shaTypeId: number;
  categoryCode: string;
  categoryId: number;
  hasIntroduction: boolean;
  hasName: boolean;
  hasThumbnail: boolean;
  latitude: number;
  longitude: number;
  radius: number;
  limit: number;
  page: number;
  semantic: string;
}

interface Pagination {
  pageNumber: number;
  pageSize: number;
  total: number;
  totalPage: number;
}

interface ApiResponse {
  data: DataItem[];
  query: Query[];
  pagination: Pagination;
}

export default function Home() {

  const [places, setPlaces] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  async function getPost() {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>('/api/post'
        , {
          params: {
            page: currentPage,

          },
        }
      );
      setPlaces(response.data.data);

      setLoading(false);
      console.log(places)
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
      setLoading(false);
    }
  }
  async function handleFind(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
   
    try {

      const res = await fetch(`/api/post/&page=${currentPage}`, {
        method: 'GET',
        cache: 'no-store',
      });
      if (!res.ok) throw new Error("Failed to search posts");
      const data = await res.json();
      setPlaces(data.posts);

    } catch (error) {
      console.error('Error searching posts:', error);
      getPost();
    }
  }

  useEffect(() => {

    getPost();

  }, [currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  const handleDropdownChange = (value: string) => {
    console.log('Selected value:', value);
  };
  const options = [
    { value: 'account-settings', label: 'Account settings' },
    { value: 'support', label: 'Support' },
    { value: 'license', label: 'License' },
    { value: 'sign-out', label: 'Sign out' },
    { value: 'profile', label: 'Profile' },
    { value: 'settings', label: 'Settings' },
  ];


  return (

    <div className="bg-white py-2">
      <div className="container mx-auto text-start p-6">
        <p>20 filterred resultes for: Copenhagen, 9-12.Dec, 2 gust, 1 room</p>
        <h1 className="text-2xl font-bold">Brakfast in cluded</h1>
      </div>
      {places.map((place) => (
        <Card
          key={place.placeId}
          name={place?.name}
          introduction={place?.introduction}
          imageUrl={place?.thumbnailUrl}
          tags={place?.tags}
          shaName={place?.sha?.category?.name}
          shaIcon={place?.sha?.category?.icon}
          viewer={place?.viewer}
        />

      ))}
      <div>


        <div className="flex justify-center mt-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className='bg-blue-600 text-white border rounded-full h-12 py-1 px-8 flex flex-row justify-center items-center'
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 stroke-6">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
Prev
          </button>
          <span className='bg-white text-blue-500 border rounded-full h-12 py-1 px-8 mx-3 flex flex-col justify-center items-center'>{currentPage}</span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className='bg-blue-600 text-white border rounded-full h-12 py-1 px-8 flex flex-row justify-center items-center'>
Next
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-6'
            >
              <path
                fillRule='evenodd'
                d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>


          </button>
        </div>





      </div>



    </div>
  );
}