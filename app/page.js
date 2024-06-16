import Image from 'next/image';
import Button from './components/Button';

export default function Home() {
  return (
    <main className="flex flex-col justify-evenly items-center w-full h-full pb-8">
      <p className="text-4xl font-bold">Aero-Prophesy</p>

      <div className=" w-5/6">
        <Image src='/assets/icons/warn.png' width={500} height={500} alt='Warning Sign Img' layout='responsive' className='object-contain'/>
      </div>

      <p className="text-2xl text-wrap w-4/6 text-center">Realtime Weather Prediction System</p>

      <Button className="" route={'predictor'}>Get Started</Button>
    </main>
  );
}
