import axios, { AxiosResponse } from 'axios';
import { NextResponse, NextRequest } from 'next/server';;

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
  thumbnailUrl: string[];
  tags: string[];
  distance: number;
  createdAt: string;
  updatedAt: string;
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
  query: Query;
  pagination: Pagination;
}

export async function GET(request: NextRequest) {
  const keyword = '%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81';
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1');
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(
    
      `https://tatdataapi.io/api/v2/places?page=${page}`, // encode keyword
     
      {
        headers: {
          'accept': 'application/json',
          'accept-language': 'th',
          'x-api-key': process.env.API_KEY,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    console.log('โอ๊ยย', error);
    return NextResponse.json({ message: 'เกิดข้อผิดพลาดในการเรียก API' }, { status: 500 });
  }
}

  {/*'https://tatdataapi.io/api/v2/places?keyword=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81',*/}
  {/* 'https://tatdataapi.io/api/v2/places' \ */}
  {/* https://tatdataapi.io/api/v2/places?keyword=${keyword}&page=${page}`, // encode keyword */}