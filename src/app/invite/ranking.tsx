import Image from 'next/image';

import medalCooper from '../../assets/Medal-cooper.svg';
import medalGold from '../../assets/Medal-gold.svg';
import medalSilver from '../../assets/Medal-silver.svg';

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="texxt-gray-200 text-xl font-leading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div
          className="rounded-xl bg-gray-700 border-gray-600 p-6 flex 
       flex-col justify-center gap-3 relative"
        >
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Victor Alves
          </span>

          <span
            className="font-heading font-semibold text-2xl text-gray-200 
         leading-none"
          >
            1030
          </span>
          <Image
            className="absolute top-0 right-8"
            src={medalGold}
            alt="medalha de ouro"
          />
        </div>

        <div
          className="rounded-xl bg-gray-700 border-gray-600 p-6 flex 
       flex-col justify-center gap-3 relative"
        >
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Victor Alves
          </span>

          <span
            className="font-heading font-semibold text-2xl text-gray-200 
         leading-none"
          >
            1030
          </span>
          <Image
            className="absolute top-0 right-8"
            src={medalSilver}
            alt="medalha de prata"
          />
        </div>

        <div
          className="rounded-xl bg-gray-700 border-gray-600 p-6 flex 
       flex-col justify-center gap-3 relative"
        >
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Victor Alves
          </span>

          <span
            className="font-heading font-semibold text-2xl text-gray-200 
         leading-none"
          >
            1030
          </span>
          <Image
            className="absolute top-0 right-8"
            src={medalCooper}
            alt="medalha de bronze"
          />
        </div>
      </div>
    </div>
  );
}
