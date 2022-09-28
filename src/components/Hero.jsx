import { discount, robot } from "../assets"
import GetStartedButton from "./GetStartedButton"

export default function Hero() {
  return (
    <section id="hero" className="mt-12 flex flex-1 items-start flex-col ss:flex-row justify-evenly">
        <div className="relative">
            <div className="absolute w-72 h-72 rounded-full bg-dimWhite/30 -left-1/2 blur-3xl"></div>
            <div className="flex items-center bg-gray-gradient max-w-fit px-3 py-1 rounded-md">
                <img src={discount} alt="discount" />
                <span className="text-dimWhite ml-2 text-[11px] tracking-wide">20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
            </div>
            <div className="text-white mt-5 text-6xl leading-[72px]">
                <span className="flex space-x-7">
                    <div className="mr-5">
                        <h1 className="">The Next</h1>
                        <span className="text-gradient">Generation</span>
                    </div>
                    <div className="hidden md:block">
                        <GetStartedButton />
                    </div>
                </span>
                <h1>Payment Method</h1>
            </div>
            <div className="mt-5 block md:hidden"><GetStartedButton /></div>
            <div className="mt-7">
                <p className="text-dimWhite leading-7 w-full md:w-[430px] text-sm">
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.
                </p>
            </div>
        </div>

        <div className="relative mt-10 ss:mt-0">
            <img src={robot} alt="Robot Hand" className="w-[500px]" />
            <div className="absolute w-[500px] h-[500px] bg-pink-400/20 -top-10  left-28 rounded-full blur-3xl"></div>
            <div className="absolute w-[400px] h-[400px] bg-sky-400/20 -bottom-20 left-0 rounded-full blur-3xl"></div>            
        </div>
    </section>
  )
}
