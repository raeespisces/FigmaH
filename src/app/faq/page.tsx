import Image from 'next/image'
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa'
import { ChevronLeft, ChevronRight, Link, Search, UserRound } from 'lucide-react'
import { PiHandbag } from 'react-icons/pi'
import bgPic from '/public/images/menutop.png'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className='w-[1920px] h-[2126px]' >
      {/* Header */}
      <div className="w-[1920px] min-h-[90px] flex items-center bg-stone-950 " >
        <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
          <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

            <span className="text-white">Food</span>

            <span className="text-amber-500">tuck</span>
          </div>
          <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
            <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/check-out">Chekcout</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="flex gap-4 self-stretch my-auto" aria-label="Social media links">
            <Search className=" absolute left-[1216px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            <UserRound className=" absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            <PiHandbag className=" absolute left-[1296px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
          </div>
        </div>
      </div>

      <div className="w-[1920px] h-[410px]">
        <Image
          src={bgPic}
          className="object-contain w-full aspect-[4.67] -z-10"
          alt="Decorative banner image"
        />
        <div className='w-[225px] h-[104px] z-100'>
          <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>FAQ Page</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[897px]'>
            <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
            <ChevronRight className='w-4 h-4 text-white' />
            <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>FAQ</Link>
          </div>

        </div>

      </div>


      {/* Mid Section */}

      <div className="w-[1320px] h-[702px] absolute top-[530px] left-[305px] flex flex-col">
  <h2 className="self-center text-5xl font-bold leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl">
    Questions Looks Here
  </h2>
  <p className="self-center mt-2 text-base text-center text-neutral-600 max-md:max-w-full">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  </p>
  <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow max-md:mt-6 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full rounded-lg bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-lg font-bold leading-none text-zinc-800 max-md:max-w-full">
              <div>How we serve food?</div>
              <FaPlus className="object-contain shrink-0 self-start w-6 aspect-square" />
            </div>
            <div className="mt-6 text-base leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow max-md:mt-6 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full rounded-lg bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-lg font-bold leading-none text-zinc-800 max-md:max-w-full">
              <div>How can we get in touch with you?</div>
              <FaMinus  className="object-contain shrink-0 self-start w-6 aspect-square" />
            </div>
            <div className="mt-6 text-base leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-6 w-full max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow max-md:mt-6 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full rounded-lg bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-lg font-bold leading-none text-zinc-800 max-md:max-w-full">
              <div>How is our food quality?</div>
              <FaPlus className="object-contain shrink-0 self-start w-6 aspect-square" />
            </div>
            <div className="mt-6 text-base leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow max-md:mt-6 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full rounded-lg bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-lg font-bold leading-none text-zinc-800 max-md:max-w-full">
              <div>What will be delivered? And When?</div>
              <FaPlus className="object-contain shrink-0 self-start w-6 aspect-square" />
            </div>
            <div className="mt-6 text-base leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-6 w-full max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow max-md:mt-6 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full rounded-lg bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-lg font-bold leading-none text-zinc-800 max-md:max-w-full">
              <div>How do we give home delivery?</div>
              <FaPlus className="object-contain shrink-0 self-start w-6 aspect-square" />
            </div>
            <div className="mt-6 text-base leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col grow max-md:mt-6 max-md:max-w-full">
          <div className="flex flex-col p-6 w-full rounded-lg bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-lg font-bold leading-none text-zinc-800 max-md:max-w-full">
              <div>Is this restaurant 24 hours open?</div>
              <FaPlus className="object-contain shrink-0 self-start w-6 aspect-square" />
            </div>
            <div className="mt-6 text-base leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Footer */}
      <div className="footer absolute top-[1373px]">
        <Footer />
      </div>

    </main>
  )
}

export default page