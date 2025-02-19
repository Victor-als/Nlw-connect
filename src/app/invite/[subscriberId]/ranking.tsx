import Image from 'next/image';

import { getRanking } from '@/http/api';
import medalCooper from '../../../assets/Medal-cooper.svg';
import medalGold from '../../../assets/Medal-gold.svg';
import medalSilver from '../../../assets/Medal-silver.svg';

export default async function Ranking() {
  const { ranking } = await getRanking();
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="texxt-gray-200 text-xl font-leading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1;
          return (
            <div
              key={item.id}
              className="rounded-xl bg-gray-700 border-gray-600 
              p-6 flex flex-col justify-center gap-3 relative"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {item.name}
              </span>

              <span
                className="font-heading font-semibold text-2xl text-gray-200 
                  leading-none"
              >
                {item.score}
              </span>
              {rankingPosition === 1 && (
                <Image
                  className="absolute top-0 right-8"
                  src={medalGold}
                  alt="medalha de ouro"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  className="absolute top-0 right-8"
                  src={medalSilver}
                  alt="medalha de ouro"
                />
              )}

               {rankingPosition === 3 && (
                <Image
                  className="absolute top-0 right-8"
                  src={medalCooper}
                  alt="medalha de ouro"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
