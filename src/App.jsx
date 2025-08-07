import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";
import { MdOutlineCopyright } from "react-icons/md";
import avatar from './assets/avatar.png'
import avocado from './assets/avocado.png'
import { useState } from "react";

function App() {

  const [budget, setBudget] = useState("");
  const [errorBudget, setErrorBudget] = useState("");


const handleBudgetChange = (e) => {
  const raw = e.target.value.replace(/\D/g, ""); // hanya angka
  const formatted = Number(raw).toLocaleString("id-ID"); // separator ribuan
  setBudget(formatted);
  if (raw.length >= 12) {
    setErrorBudget("Project besar bisa kita diskusikan nanti ya");
    return;
  } else {
    setErrorBudget("");
  }
};

  return (
    <>
    <div className=' flex flex-col'>
      <nav className='flex items-center w-full justify-between h-20 bg-amber-100 px-16'>
        <div className='flex items-center gap-2'>
          <div className='flex justify-center items-center h-12 w-12 rounded-full text-white bg-purple-600'>
            <span className="font-semibold text-2xl">S</span>
          </div>
          <div className='font-semibold text-xl'>Syarif</div>
        </div>
        <div className='flex'>
          <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Home</button>
          <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>About</button>
          <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Process</button>
          <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Blog</button>
          <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Services</button>
          <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Contact</button>
        </div>
      </nav>
      <section className='flex gap-8 p-16 w-full'>
        <div className='flex flex-col gap-2 pr-8 w-2/3'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-5xl'>Hello, I'm Syarif Khalid Attamimi</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil labore aut eligendi incidunt. Deserunt, error sit totam nihil in distinctio voluptatum sint corporis animi tempora fugit nesciunt quasi recusandae placeat?</p>
            <button className='bg-purple-600 px-4 py-2 w-1/6 rounded-lg text-white'>Say Hello!</button>
          </div>
          <div className='flex gap-2 justify-center mt-20'>
            <div className='flex flex-col items-center bg-purple-200 px-16 py-4'>
              <div className='text-3xl font-medium'>15 Y.</div>
              <div>Experience</div>
            </div>
            <div className='flex flex-col items-center bg-purple-200 px-16 py-4'>
              <div className='text-3xl font-medium'>250+</div>
              <div>Project Completed</div>
            </div>
            <div className='flex flex-col items-center bg-purple-200 px-16 py-4'>
              <div className='text-3xl font-medium'>58</div>
              <div>Happy Client</div>
            </div>
          </div>
        </div>
        <div className='flex justify-end w-1/3 bg-amber-400 rounded-xl'>
          <img src={avatar} alt="avatar" />
        </div>
      </section>
      <section className='flex gap-20 px-16 py-16 w-full m-10 max-w-[calc(100%-5rem)] bg-white drop-shadow-xl rounded-xl'>
        <div className="flex flex-col items-center w-1/3">
          <div className="bg-orange-200 rounded-xl">
            <img src={avatar} alt="" />
          </div>
          <div className="flex gap-8 -mt-8 bg-white text-purple-700 text-3xl px-8 py-4 drop-shadow-xl">
            <div className="hover:text-white hover:bg-purple-700 p-2">
              <ImFacebook/>
            </div>
            <div className="hover:text-white hover:bg-purple-700 p-2">
              <BsInstagram />
            </div>
            <div className="hover:text-white hover:bg-purple-700 p-2">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 gap-4 justify-center text-xl">
          <h1 className="text-3xl font-semibold">I am Fullstack Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsa! Praesentium aspernatur debitis fuga esse, ad voluptatibus at enim animi, cumque doloremque corporis modi ipsam laboriosam velit nulla minus maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic labore nihil nemo magni incidunt, aliquid sit rem dicta qui quisquam?</p>
          <div className="flex gap-4 text-purple-600">
            <button className="bg-purple-600 text-white px-4 py-2">My Project</button>
            <button className="flex items-center px-4 py-2 gap-2 border border-purple-600">
              <GoDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </section>
      <section className='flex gap-20 pt-36 px-16 py-16 w-full bg-gray-200 -mt-30 rounded-xl'>
        <div className="flex  w-1/2 flex-col justify-center gap-4 text-xl">
          <h1 className="font-semibold text-5xl">Work Process</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic necessitatibus, impedit dicta illum suscipit, beatae nisi repellat corrupti quo a obcaecati inventore deserunt? Qui dolore, dignissimos est reiciendis minus nobis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae expedita fugit. Explicabo recusandae magnam harum consequuntur molestias pariatur aperiam?</p>
        </div>
        <div className="flex w-1/2 gap-4 drop-shadow-xl">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white">
              <div className="flex justify-center items-center rounded-lg bg-purple-500 p-4 w-1/4 text-2xl text-white">
                <FaCalendarDays />
              </div>
              <div className="font-semibold text-2xl">
                <span>1. Research</span>
              </div>
              <div className="text-md">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias adipisci, eaque quis commodi aperiam.</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white">
              <div className="flex justify-center items-center rounded-lg bg-purple-500 p-4 w-1/4 text-2xl text-white">
                <FaCalendarDays />
              </div>
              <div className="font-semibold text-2xl">
                <span>1. Research</span>
              </div>
              <div className="text-md">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias adipisci, eaque quis commodi aperiam.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-8 gap-4 w-1/2">
            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white">
              <div className="flex justify-center items-center rounded-lg bg-purple-500 p-4 w-1/4 text-2xl text-white">
                <FaCalendarDays />
              </div>
              <div className="font-semibold text-2xl">
                <span>1. Research</span>
              </div>
              <div className="text-md">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias adipisci, eaque quis commodi aperiam.</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-lg bg-white">
              <div className="flex justify-center items-center rounded-lg bg-purple-500 p-4 w-1/4 text-2xl text-white">
                <FaCalendarDays />
              </div>
              <div className="font-semibold text-2xl">
                <span>1. Research</span>
              </div>
              <div className="text-md">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias adipisci, eaque quis commodi aperiam.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col p-16 w-full gap-8'> 
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-semibold">Portofolio</h1>
          <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit obcaecati eum, ullam amet alias incidunt nobis consequuntur reprehenderit ad!</p>
        </div>
        <div className="grid grid-cols-3 w-full drop-shadow-2xl gap-4">
          <div className="flex flex-col w-full bg-white">
            <div className="">
              <img src={avocado} alt="" />
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm">
              <span className="">UI-UX DESIGN</span>
              <span className="text-xl font-medium">Product Admin Dashboard</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolorum iste dolor explicabo qui accusamus!</p>
              <div>
                <button className="flex justify-center items-center gap-2 border px-4 py-2 text-purple-500 rounded-lg border-purple-500">
                  <span>Case Study</span>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white">
            <div className="">
              <img src={avocado} alt="" />
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm">
              <span className="">UI-UX DESIGN</span>
              <span className="text-xl font-medium">Product Admin Dashboard</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolorum iste dolor explicabo qui accusamus!</p>
              <div>
                <button className="flex justify-center items-center gap-2 border px-4 py-2 text-purple-500 rounded-lg border-purple-500">
                  <span>Case Study</span>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white">
            <div className="">
              <img src={avocado} alt="" />
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm">
              <span className="">UI-UX DESIGN</span>
              <span className="text-xl font-medium">Product Admin Dashboard</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolorum iste dolor explicabo qui accusamus!</p>
              <div>
                <button className="flex justify-center items-center gap-2 border px-4 py-2 text-purple-500 rounded-lg border-purple-500">
                  <span>Case Study</span>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white">
            <div className="">
              <img src={avocado} alt="" />
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm">
              <span className="">UI-UX DESIGN</span>
              <span className="text-xl font-medium">Product Admin Dashboard</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolorum iste dolor explicabo qui accusamus!</p>
              <div>
                <button className="flex justify-center items-center gap-2 border px-4 py-2 text-purple-500 rounded-lg border-purple-500">
                  <span>Case Study</span>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white">
            <div className="">
              <img src={avocado} alt="" />
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm">
              <span className="">UI-UX DESIGN</span>
              <span className="text-xl font-medium">Product Admin Dashboard</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolorum iste dolor explicabo qui accusamus!</p>
              <div>
                <button className="flex justify-center items-center gap-2 border px-4 py-2 text-purple-500 rounded-lg border-purple-500">
                  <span>Case Study</span>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white">
            <div className="">
              <img src={avocado} alt="" />
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm">
              <span className="">UI-UX DESIGN</span>
              <span className="text-xl font-medium">Product Admin Dashboard</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolorum iste dolor explicabo qui accusamus!</p>
              <div>
                <button className="flex justify-center items-center gap-2 border px-4 py-2 text-purple-500 rounded-lg border-purple-500">
                  <span>Case Study</span>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="text-white bg-purple-600 px-4 py-2 rounded-md font-medium">More Project</button>
        </div>
      </section>
      <section className="flex flex-col gap-8 items-center py-16 text-white bg-gray-900">
        <div className="flex flex-col text-4xl font-semibold">
          <h1>Do you have project idia?</h1>
          <h1>Let's discuss your project!</h1>
        </div>
        <div className="flex text-center w-1/2 font-medium">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facere? Sapiente aperiam magnam voluptatibus corporis neque enim dicta nesciunt sit?</span>
        </div>
        <div>
          <button className="flex items-center gap-2 text-lg justify-center rounded-sm font-semibold px-4 py-2 text-white bg-purple-600">
            <span>Let's Work Together</span>
            <IoIosArrowRoundForward className="text-3xl"/>
          </button>
        </div>
      </section>
      <section className="flex gap-8 p-16 bg-gray-200 items-center">
        <div className="flex flex-col w-1/2 gap-4">
          <div className="text-4xl font-semibold">
            <h1>What I do?</h1>
          </div>
          <div className="flex flex-col gap-4">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, totam aliquid possimus eos necessitatibus soluta enim, maiores architecto iure, facere dolor labore a dolores repellat fuga vel quibusdam sequi! At!</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis in accusantium ullam, velit sit distinctio?</span>
          </div>
          <div className="flex text-white font-medium">
            <button className="px-4 py-2 bg-purple-600 rounded-sm">Say Hello!</button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col bg-white p-8 gap-2 rounded-md hover:drop-shadow-xl hover:border-l-8 hover:border-purple-600">
            <h1 className="text-2xl font-semibold">User Experience (UX)</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem enim qui sunt placeat atque iste, modi minima ex consectetur!</p>
          </div>
          <div className="flex flex-col bg-white p-8 gap-2 rounded-md hover:drop-shadow-xl hover:border-l-8 hover:border-purple-600">
            <h1 className="text-2xl font-semibold">User Experience (UX)</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem enim qui sunt placeat atque iste, modi minima ex consectetur!</p>
          </div>
          <div className="flex flex-col bg-white p-8 gap-2 rounded-md hover:drop-shadow-xl hover:border-l-8 hover:border-purple-600">
            <h1 className="text-2xl font-semibold">User Experience (UX)</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem enim qui sunt placeat atque iste, modi minima ex consectetur!</p>
          </div>
        </div>
      </section>
      <section className="flex p-16 m-10 max-w-[calc(100%-5rem)] bg-white drop-shadow-xl rounded-xl">
        <div className="flex flex-col w-1/2 gap-4">
          <div className="text-3xl font-semibold">
            <h1>Let's discuss your project</h1>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam, delectus culpa provident voluptatum vitae eveniet eum quidem facilis veniam?</span>
          </div>
          <div className="flex gap-6 w-4/5 bg-white p-6 rounded-md hover:drop-shadow-xl hover:border-r-6 hover:border-purple-600">
            <div className="text-white bg-purple-600 p-4 text-3xl rounded-sm">
              <CiLocationOn />
            </div>
            <div className="flex flex-col gap">
              <span>Address :</span>
              <span className="text-xl font-semibold">New Mexico 31134</span>
            </div>
          </div>
          <div className="flex gap-6 w-4/5 bg-white p-6 rounded-md hover:drop-shadow-xl hover:border-r-6 hover:border-purple-600">
            <div className="text-white bg-purple-600 p-4 text-3xl rounded-sm">
              <CiLocationOn />
            </div>
            <div className="flex flex-col gap">
              <span>Address :</span>
              <span className="text-xl font-semibold">New Mexico 31134</span>
            </div>
          </div>
          <div className="flex gap-6 w-4/5 bg-white p-6 rounded-md hover:drop-shadow-xl hover:border-r-6 hover:border-purple-600">
            <div className="text-white bg-purple-600 p-4 text-3xl rounded-sm">
              <CiLocationOn />
            </div>
            <div className="flex flex-col gap">
              <span>Address :</span>
              <span className="text-xl font-semibold">New Mexico 31134</span>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col gap-6 w-1/2">
          <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum nemo maiores unde ipsa tenetur quibusdam alias doloribus et accusamus.</span>
          </div>
          <div className="flex flex-col gap-6">
            <input type="text" placeholder="Name*" className="px-4 py-2 text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"/>
            <input type="email" placeholder="Email*" className="px-4 py-2 text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"/>
            <input type="text" placeholder="Location" className="px-4 py-2 text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"/>
            <div className="flex">
              <div className="flex flex-col">
              <input type="text" value={budget} onChange={handleBudgetChange} placeholder="Budget*" className="px-4 py-2 text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"/>
              {errorBudget && <p className="text-red-500 text-sm">{errorBudget}</p>}
              </div>
              <input type="text" placeholder="Subject*" className="px-4 py-2 text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"/>
            </div>
            <input type="text" placeholder="Message*" className="px-4 py-2 text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"/>
          </div>
          <div>
            <button className="flex text-lg gap-2 items-center px-4 py-2 text-white rounded-md bg-purple-600">
              <span>Submit</span>
              <VscSend />
            </button>
          </div>
        </form>
      </section>
      <footer className="flex px-10 pb-20 pt-40 -mt-30 justify-between bg-gray-900 text-white">
        <div className='flex items-center gap-2'>
          <div className='flex justify-center items-center h-12 w-12 rounded-full text-white bg-purple-600'>
            <span className="font-semibold text-2xl">S</span>
          </div>
          <div className='font-semibold text-xl'>Syarif</div>
        </div>
        <div className="flex gap-4">
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Process</button>
          <button>Portfolio</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
        <div className="flex items-center gap-2">
          <span>Copyright</span>
          <MdOutlineCopyright />
          <span>2025</span>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
