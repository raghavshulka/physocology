import Image from "next/image";
import a from "../assets/a.jpg";

export default function Home() {
  return (
    <main className="h-screen">
      <header className="mx-4 md:mx-[80px] py-4 md:py-[60px] flex flex-col md:flex-row justify-between items-center">
        <button>
          <h1>LOGO</h1>
        </button>
        <div className="flex justify-center items-center gap-4 md:gap-12 mt-4 md:mt-0">
          <button>
            <p>HOME</p>
          </button>
          <button>
            <p>ABOUT ME</p>
          </button>
          <button>
            <p>SEMINARS</p>
          </button>
          <button>
            <p>TESTS</p>
          </button>
        </div>
      </header>

      <section className="flex justify-center items-center mt-32 md:mt-[500px] text-xl md:text-3xl font-[200] px-4 text-center">
        <h1>WANT TO KNOW ABOUT PSYCHOLOGY?</h1>
      </section>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2 p-4">
        <section className="border-hidden relative mb-4 mt-2 flex flex-col border items-center">
          <div className="flex w-full justify-end">
            <div className="flex flex-col items-center">
              <div className="font-extralight text-lg md:text-[25px] my-10 md:my-20">
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br className="hidden md:block" /> adipiscing elit.
                </p>
              </div>
              <div className="h-[200px] md:h-[400px] rounded-br-[50px] md:rounded-br-[100px] overflow-hidden">
                <Image
                  className="object-cover h-full w-full"
                  src={a}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col mt-10 md:mt-[200px]">
          <section className="flex justify-center items-center">
            <div className="p-4 md:p-8 font-extralight text-lg md:text-[25px] text-center">
              <p>
                Lorem ipsum dolor sit amet,
                <br className="hidden md:block" /> consectetur adipiscing elit.
              </p>
            </div>
          </section>
          <section className="border-hidden relative mb-4 mt-2 flex flex-col border items-center">
            <div className="flex w-full justify-center">
              <div className="flex flex-col items-center">
                <div className="pr-4 md:pr-8 font-extralight text-lg md:text-[25px] mt-10 md:mt-20">
                  <p className="pr-[50px] md:pr-[250px]">
                    Lorem ipsum dolor sit
                    <br className="hidden md:block" /> amet, consectetur
                    <br className="hidden md:block" /> adipiscing elit.
                  </p>
                </div>
                <div className="h-[100px] md:h-[300px] ml-[50px] md:ml-[300px] flex justify-end rounded-br-[50px] md:rounded-br-[100px] overflow-hidden">
                  <Image
                    className="object-cover h-full w-[100px] md:w-[200px]"
                    src={a}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className=" grid  md:col-span-1 grid-cols-1 md:grid-cols-2 gap-4 md:gap-0  md:mb-0 mb-4 ">
        <div className="  ml-6">
          <h1 className="  pb-4 font-[400] md:text-[25px] text-2xl  ">
            Services
          </h1>
          <p className=" underline ">more</p>
        </div>

        <div>
          <div className="  md:grid-cols-2  ">
            <div className=" flex flex-col ">
              <div className=" flex  justify-end">
                <div className=" flex flex-col gap-1  justify-center w-[300px] ">
                  <div className=" flex flex-row items-center justify-between">
                    <p className=" font-extralight ">Services</p>
                    <p className=" font-extralight text-[15px] ">1</p>
                  </div>
                  <div className=" flex justify-end ">
                    <Image className="object-cover h-full " src={a} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col ">
            <div className=" flex  justify-start">
              <div className=" flex flex-col gap-1  justify-center w-[300px] ">
                <div className=" flex flex-row items-center justify-between">
                  <p className=" font-extralight ">Services</p>
                  <p className=" font-extralight text-[15px] ">1</p>
                </div>
                <div className=" flex justify-start ">
                  <Image className="object-cover h-full " src={a} alt="img" />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col ">
            <div className=" flex  justify-end">
              <div className=" flex flex-col gap-1  justify-center w-[300px] ">
                <div className=" flex flex-row items-center justify-between">
                  <p className=" font-extralight ">Services</p>
                  <p className=" font-extralight text-[15px] ">1</p>
                </div>
                <div className=" flex justify-end ">
                  <Image className="object-cover h-full " src={a} alt="img" />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col ">
            <div className=" flex  justify-start">
              <div className=" flex flex-col gap-1  justify-center w-[300px] ">
                <div className=" flex flex-row items-center justify-between">
                  <p className=" font-extralight ">Services</p>
                  <p className=" font-extralight text-[15px] ">1</p>
                </div>
                <div className=" flex justify-start ">
                  <Image className="object-cover h-full " src={a} alt="img" />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col ">
            <div className=" flex  justify-end">
              <div className=" flex flex-col gap-1  justify-center w-[300px] ">
                <div className=" flex flex-row items-center justify-between">
                  <p className=" font-extralight ">Services</p>
                  <p className=" font-extralight text-[15px] ">1</p>
                </div>
                <div className=" flex justify-end ">
                  <Image className="object-cover h-full " src={a} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  justify-between ">
        <div className=" pl-6">
          <h1 className="  pb-4 font-[400] md:text-[25px] text-2xl  ">TESTS</h1>
          <p className=" underline ">more</p>
        </div>

        <div className=" flex md:flex-row flex-col items-center justify-center">
          <div className=" mx-3 flex flex-col p-3 ">
            <div className="border rounded-lg p-5  ">
              <div className=" h-[200px] ">
                <div className=" flex justify-start ">
                  <Image
                    className="object-cover h-[50px] w-[50px] "
                    src={a}
                    alt="img"
                  />
                </div>
              </div>
              <h2 className=" text-lg font-normal">
                Lorem ipsum dolor sit amet?
              </h2>
              <p className=" font-extralight ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                nibh et augue maximus vestibulum.
              </p>
            </div>
          </div>

          <div className=" mx-3 flex  flex-col p-3 ">
            <div className="border rounded-lg p-5  ">
              <div className=" h-[200px] ">
                <div className=" flex justify-start ">
                  <Image
                    className="object-cover h-[50px] w-[50px] "
                    src={a}
                    alt="img"
                  />
                </div>
              </div>
              <h2 className=" text-lg font-normal">
                Lorem ipsum dolor sit amet?
              </h2>
              <p className=" font-extralight ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                nibh et augue maximus vestibulum.
              </p>
            </div>
          </div>

          <div className=" mx-3 flex flex-col p-3 ">
            <div className="border rounded-lg p-5  ">
              <div className=" h-[200px] ">
                <div className=" flex justify-start ">
                  <Image
                    className="object-cover h-[50px] w-[50px] "
                    src={a}
                    alt="img"
                  />
                </div>
              </div>
              <h2 className=" text-lg font-normal">
                Lorem ipsum dolor sit amet?
              </h2>
              <p className=" font-extralight ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                nibh et augue maximus vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pl-6 mb-[100px]">
        <h1 className="md:text-center md:font-[300] text-[40px] font-extralight">
          How people feel after therapy?
        </h1>
      </div>

      <section className="flex flex-col  justify-center">
        <div className="flex md:flex-row  flex-col items-center">
          <div className="md:ml-[100px] md:w-[573px] md:-rotate-6 my-3 mx-3 border shadow-2xl rounded-lg">
            <div className="flex flex-col p-6">
              <h3 className="py-3">Veronika Limonova</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                nibh et augue maximus vestibulum.
              </p>
              <span className="text-sm pt-6 font-thin">18 December</span>
            </div>
          </div>

          <div className="my-3 mx-3 md:mx-0 border shadow-2xl md:rotate-6 md:ml-[100px] md:w-[573px] rounded-lg">
            <div className="flex flex-col p-6">
              <h3 className="py-3">Veronika Limonova</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                nibh et augue maximus vestibulum.
              </p>
              <span className="text-sm pt-6 font-thin">18 December</span>
            </div>
          </div>

        </div>
            <div className=" md:mb-[80px] md:ml-[30%] my-3 mx-3 md:w-[573px]  border shadow-2xl rounded-lg">
              <div className="flex flex-col  p-6">
                <h3 className="py-3">Veronika Limonova</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                  nibh et augue maximus vestibulum.
                </p>
                <span className="text-sm pt-6 font-thin">18 December</span>
              </div>
          </div>
      </section>
    </main>
  );
}
