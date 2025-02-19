import Image from 'next/image';
import logo from '../../assets/logo-nlw.svg'
import medalGold from '../../assets/Medal-gold.svg'
import medalSilver from '../../assets/Medal-silver.svg'
import medalCooper from '../../assets/Medal-cooper.svg'
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react';
import { IconButton } from '@/components/Icon-button';

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col
     md:flex-row">
      <div className='flex flex-col gap-10 w-full max-w-[550px]'>
        <Image src={logo} alt='devstage' width={108.5} height={30} />

        <div className='space-y-2'>
          <h1 className='text-4xl font-semibold font-heading text-gray-100 leading-none'>
            Incrição confirmada!
          </h1>
          <p className=''>
             Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className='space-y-6'>
          <div className='space-y-3'> 
              <h2 
                className='text-gray-200 text-xl font-semibold font-heading 
                 eading-none'>
                Indique e ganhe
              </h2>
              <p>
                Convide mais pessoas para o evento e concorra a premios exclusivos! 
                É só compartilhar o link abaixo e acompanhar as inscrições:
              </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className='size-5'/>
            </InputIcon>
            <InputField 
              readOnly 
              defaultValue="http://localhost:3000/invite/iajrfuisngujsn"
            />

            <IconButton className='ml-2'>
              <Copy className='size-5'/>
            </IconButton>
          </InputRoot>

          <div className='grid gap-3 md:grid-cols-3'>
            <div 
             className='bg-gray-700 border border-gray-600 px-4 py-7 flex 
             flex-col items-center justify-center gap-1 rounded-xl relative'
            >
              <span
                className='font-heading text-2xl fonnt-semibold text-gray-200
                leading-none'>
                 1042
               </span>
              <span className='text-sm text-gray-300 leading-none text-center'>
                Acessos ao link
              </span>

              <MousePointerClick className='size-5 text-purple absolute top-3 left-3'/>
            </div>

            <div 
             className='bg-gray-700 border border-gray-600 px-4 py-7 flex 
             flex-col items-center justify-center gap-1 rounded-xl relative'
            >
              <span
                className='font-heading text-2xl fonnt-semibold text-gray-200
                leading-none'>
                 1042
               </span>
              <span className='text-sm text-gray-300 leading-none text-center'>
                Acessos ao link
              </span>
              <BadgeCheck className='size-5 text-purple absolute top-3 left-3'/>
            </div>


            <div 
             className='bg-gray-700 border border-gray-600 px-4 py-7 flex 
             flex-col items-center justify-center gap-1 rounded-xl relative'
            >
              <span
                className='font-heading text-2xl fonnt-semibold text-gray-200
                leading-none'>
                 1042
               </span>
              <span className='text-sm text-gray-300 leading-none text-center'>
                Acessos ao link
              </span>
              <Medal className='size-5 text-purple absolute top-3 left-3'/>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full max-w-[440px] space-y-5'>
        <h2
          className='texxt-gray-200 text-xl font-leading font-semibold leading-none'>
          Ranking de indicações
        </h2>

        <div className='space-y-4'>
          <div className='rounded-xl bg-gray-700 border-gray-600 p-6 flex 
           flex-col justify-center gap-3 relative'
          >
            <span className='text-sm text-gray-300 leading-none'>
              <span className='font-semibold'>1°</span> |
              Victor Alves
            </span>

            <span 
             className='font-heading font-semibold text-2xl text-gray-200 
             leading-none'
            >
              1030
            </span>
            <Image className='absolute top-0 right-8' src={medalGold} alt='medalha de ouro'/>
          </div>

          <div className='rounded-xl bg-gray-700 border-gray-600 p-6 flex 
           flex-col justify-center gap-3 relative'
          >
            <span className='text-sm text-gray-300 leading-none'>
              <span className='font-semibold' >2°</span> |
              Victor Alves
            </span>

            <span 
             className='font-heading font-semibold text-2xl text-gray-200 
             leading-none'
            >
              1030
            </span>
            <Image className='absolute top-0 right-8' src={medalSilver} alt='medalha de prata'/>
          </div>

          <div className='rounded-xl bg-gray-700 border-gray-600 p-6 flex 
           flex-col justify-center gap-3 relative'
          >
            <span className='text-sm text-gray-300 leading-none'>
              <span className='font-semibold'>3°</span> |
              Victor Alves
            </span>

            <span 
             className='font-heading font-semibold text-2xl text-gray-200 
             leading-none'
            >
              1030
            </span>
            <Image className='absolute top-0 right-8' src={medalCooper} alt='medalha de bronze'/>
          </div>
        </div>
      </div>
    </div>
  );
}
