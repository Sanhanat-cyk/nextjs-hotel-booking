'use client';
import Image from "next/image";
import Card from "../app/component/card"
import DestinationDropdown from "./component/SearchableDropdownMenu"
export default function Home() {

  
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

    <main className="bg-white py-2">
      <div className="container mx-auto text-start p-6">
        <p>20 filterred resultes for:Copenhagen,9-12.Dec,2 gust,1 room</p>
        <h1 className="text-2xl font-bold">Brakfast in cluded</h1>
        <DestinationDropdown options={options} />
      </div>
      
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
    </main>
  );
}