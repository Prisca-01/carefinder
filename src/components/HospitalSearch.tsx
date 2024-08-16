'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const states = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
  'FCT',
];

const cities: { [key: string]: string[] } = {
  Abia: ['Umuahia', 'Aba', 'Arochukwu'],
  Anambra: [
    'Awka',
    'Onitsha',
    'Nnewi',
    'Nimo',
    'Nkpor',
    'Obosi',
    'Ihiala',
    'Adazi Nnukwu',
  ],
  AkwaIbom: ['Uyo', 'Eket', 'Ikot Ekpene'],
  Adamawa: ['Yola', 'Jimeta', 'Numan', 'Mubi', 'Hong'],
  Bauchi: ['Bauchi', 'Azare', 'Misau', 'Katagum'],
  Bayelsa: ['Yenagoa', 'Ogbia', 'Brass', 'Sagbama'],
  Benue: ['Makurdi', 'Gboko', 'Otukpo', 'Katsina-Ala', 'Vandeikya'],
  Borno: ['Maiduguri', 'Biu', 'Gombe', 'Kondugawa', 'Gwoza'],
  CrossRiver: ['Calabar', 'Ogoja', 'Ikom', 'Obudu', 'Akamkpa'],
  Delta: ['Warri', 'Asaba', 'Sapele', 'Agbor', 'Ughelli', 'Oghara'],
  Ebonyi: ['Abakaliki', 'Izzi', 'Ohaozara', 'Ezza'],
  Edo: ['Iyamho', 'Ekpoma', 'Benin City', 'Uromi', 'Auchi'],
  Enugu: ['Enugu', 'Nsukka', 'Ituku-Ozalla', 'Trans-Ekulu'],
  Ekiti: ['Ado-Ekiti', 'Ikere-Ekiti', 'Ikole-Ekiti', 'Ido-Ekiti', 'Oye-Ekiti'],
  Gombe: ['Gombe', 'Kaltungo', 'Billiri', 'Bajoga'],
  Imo: ['Owerri', 'Orlu', 'Okigwe'],
  Jigawa: ['Dutse', 'Hadejia', 'Birnin Kudu', 'Gumel'],
  Kaduna: [
    'Kaduna',
    'Zaria',
    'Kafanchan',
    'Giwa',
    'Saminaka',
    'Birnin Gwari',
    'Zonkwa',
  ],
  Kano: ['Kano', 'Wudil', 'Bichi', 'Gaya', 'Tiga', 'Rano', 'Kunchi'],
  Katsina: [
    'Katsina',
    'Daura',
    'Funtua',
    'Malumfashi',
    'Dutsin-Ma',
    'Kankai',
    'Jibia',
    'Mani',
    'Bakori',
  ],
  Kebbi: [
    'Birnin Kebbi',
    'Koko',
    'Yauri',
    'Argungu',
    'Zuru',
    'Jega',
    'Bunza',
    'Danko Wasagu',
    'Aliero',
  ],
  Kogi: [
    'Lokoja',
    'Okene',
    'Idah',
    'Kabba',
    'Ankpa',
    'Ajaokuta',
    'Dekina',
    'Bassa',
    'Isanlu',
  ],
  Kwara: [
    'Ilorin',
    'Offa',
    'Omu-Aran',
    'Ajase-Ipo',
    'Lafiagi',
    'Patigi',
    'Kaima',
    'Share',
  ],
  Lagos: [
    'Lagos Island',
    'Ikeja',
    'Surulere',
    'Lagos',
    'Apapa',
    'Lekki',
    'Victoria Island',
    'Ajah',
  ],
  Nasarawa: ['Lafia', 'Keffi', 'Akwanga', 'Doma', 'Karu'],
  Niger: ['Minna', 'Bida', 'Suleja', 'Kontagora', 'Lapai'],
  Oyo: ['Ibadan', 'Ogbomosho'],
  Ogun: [
    'Abeokuta',
    'Ilishan-Remo',
    'Ijebu-Ode',
    'Ijebu-Igbo',
    'Sagamu',
    'Ilaro',
    'Ota',
  ],
  Ondo: [
    'Akure',
    'Ondo City',
    'Owo',
    'Ile-Oluji',
    'Ikare-Akoko',
    'Okitipupa',
    'Irele',
    'Igbokoda',
    'Idanre',
  ],
  Osun: ['Osogbo', 'Ilesa', 'Ile-Ife', 'Iwo', 'Ikirun', 'Ede', 'Ipetu-Ijesha'],
  Plateau: ['Jos', 'Bukuru', 'Bassa', 'Barkin Ladi', 'Pankshin', 'Shendam'],
  Rivers: ['Port Harcourt', 'Obio-Akpor', 'Okrika', 'Eleme', 'Ikwerre'],
  Sokoto: ['Sokoto', 'Tambuwal', 'Wamakko', 'Binji', 'Kware'],
  Taraba: ['Jalingo', 'Wukari', 'Bali', 'Takum', 'Serti'],
  Yobe: ['Damaturu', 'Nguru', 'Potiskum', 'Gashua', 'Buni Yadi'],
  Zamfara: ['Gusau', 'Talata Mafara', 'Anka', 'Tsafe', 'Shinkafi'],
  FCT: ['Abuja'],
};

const HospitalSearch: React.FC = () => {
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const router = useRouter();

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setSelectedCities(cities[selectedState] || []);
    setCity('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (state && city) {
      router.push(
        `/search?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`,
      );
    }
  };

  return (
    <div className=" py-8">
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSearch}
          className="flex flex-col items-center justify-center md:flex-row gap-4 mb-6 text-black p-6 rounded-lg mx-auto"
        >
          <select
            value={state}
            onChange={handleStateChange}
            className="p-2 text-gray-600 border border-gray-300 rounded-full outline-none focus:outline-blue-600 w-72 h-14"
          >
            <option value="Select state" defaultChecked>
              Select a state...
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 text-gray-600 border border-gray-300 rounded-full outline-none focus:outline-blue-600 w-72 h-14"
            disabled={!state}
          >
            <option value="Select city" defaultChecked>
              Select a city...
            </option>
            {selectedCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="text-white px-6 py-3 rounded-full text-lg font-semibold bg-blue-600 hover:bg-gray-400 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalSearch;
