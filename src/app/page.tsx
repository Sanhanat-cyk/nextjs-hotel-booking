'use client';
import Link from 'next/link';
import HeaderBanner from './component/Home/bannerHeader';
import PoppularBanner from './component/Home/bannerPopular';
import LovedBanner from './component/Home/bannerLoved';
import SuggestBanner from './component/Home/bannerSuggest';
export default function Home() {
  return (
    <main className="w-full bg-white py-2">
      <div > {/* เพิ่ม Flexbox และ items-center */}
        <HeaderBanner />
        <h3 className='px-10 my-2 font-semibold'>Poppular destinetion</h3>
        <PoppularBanner />
        <h3 className='px-10 my-2 font-semibold'>Hotels loved by guests</h3>
        <LovedBanner />
       
        <SuggestBanner />
      </div>
    </main>
  );
}