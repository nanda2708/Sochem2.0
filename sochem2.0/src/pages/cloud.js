
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from '@/components/footer.js'

 const Cloud=()=>{
  return (
    <div>
      <div className="bg-[#040D21]">
      <Navbar/>
        <div>
        <div className='font-medium flex text-[#F7FAFF] justify-center text-2xl sm:text-3xl lg:text-5xl'><div className='mt-12 mb-12'>Resources Vault</div></div>
          
        </div>

        <div className=" ml-12 pl-10 flex flex-row  ">
          <div className=" h-96 mt-8 ml-10 shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300   ">
            <Link href="https://drive.google.com/drive/folders/1TOxyPEmb8l9VvNAa1IycT7rBHIp2x_Wd?usp=sharing">
              <div className="w-full h-full">
                <img className="object-scale-down h-48 w-96" src="/img/Books.png" />
                <div className="py-10">
                  <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                    Books/Novels/Research Papers
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className=" h-96 mb-10 ml-12 mr-12  shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <Link  href="https://drive.google.com/drive/folders/15pTBbGVUdA0dTGFQI7QpfQWaXDQsr6cy?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/Core_courses.png"
                />
                <div className="py-10">
                  <div className=" font-bold text-xl mb-2 card-text text-center text-slate-300 ">
                    Core Courses
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className=" h-96 mt-8  shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <Link href="https://drive.google.com/drive/folders/1R34YagE19rLI31yMRQo4G-UnvHRRBmgn?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/Gate_preparation.png"
                />
                <div className="py-10">
                  <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                    Gate Preparation
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="  ml-12 pl-10 flex flex-row  ">
          <div className=" h-96 mt-8 ml-10 shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300   ">
            <Link href="https://drive.google.com/drive/folders/1mZSAyhN7BNX51g9V4if-6P1NWyFqtCmm?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/Gre_preparation.png"
                />
                <div className="py-10">
                  <div className="font-bold text-ml  card-text text-center text-slate-300">
                    GRE Preparation
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="h-96 mb-10 ml-12 mr-12    shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <Link href="https://drive.google.com/drive/folders/18u9EqfPqZ7t9z9RL49WL1ebeW51t_eF-?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/Data_analyst.png"
                />
                <div className="py-10">
                  <div className="font-bold text-xl  card-text text-center text-slate-300 ">
                    HU/LM/OE Courses
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="h-96 mt-8 shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <Link href="https://drive.google.com/drive/folders/1ZGKENtgtA8UTCHcWIlSveJxg9_uX44vt?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/Online_courses.png"
                />
                <div className="py-10">
                  <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                    Online Courses
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className=" ml-12 pl-10 flex flex-row  ">
          <div className=" h-96 mt-8 ml-10 shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300   ">
            <Link href="https://drive.google.com/drive/folders/1-FPXGNsfx7jcpLksfqqyo_7KA0KeOBi9?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/Books.png"
                />
                <div className="py-10">
                  <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                    Open Electives
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="h-96 mb-10 ml-12 mr-12 shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300   ">
            <Link href="https://drive.google.com/drive/folders/1VYASsgV_Ods_EyHiKd_Sm7qjE1gyNpnU?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/programming.png"
                />
                <div className="py-10">
                  <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                    Programming
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="h-96 mt-8 shadow-2xl bg-slate-900 rounded border-2 border-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300   ">
            <Link href="https://drive.google.com/drive/folders/1VYASsgV_Ods_EyHiKd_Sm7qjE1gyNpnU?usp=sharing">
              <div className="w-full h-full">
                <img
                  className="object-scale-down h-48 w-96 "
                  src="/img/Data_analyst.png"
                />
                <div className="py-10">
                  <div className="font-bold text-xl mb-10 card-text text-center text-slate-300">
                    Data Analyst
                  </div>
                </div>
              </div>
            </Link>
          </div>

          
        </div>
      </div>



      <div>  <Footer/></div>
    </div>
  );
}

export default Cloud

