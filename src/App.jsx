import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import avatar from './assets/avatar.png'

function App() {

  return (
    <>
    <div className=' flex flex-col gap-12'>
      <nav className='flex items-center w-full justify-between h-20 bg-amber-100 px-16'>
        <div className='flex items-center gap-2'>
          <div className='flex justify-center items-center h-12 w-12 rounded-full text-white bg-purple-600'>
            <span>B</span>
          </div>
          <div className='font-semibold text-xl'>Brooklyn</div>
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
      <section className='flex gap-8 px-16 w-full'>
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
      <section className='flex gap-20 px-16 py-16 w-full m-10 max-w-[calc(100%-5rem)] drop-shadow-xl rounded-xl'>
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
    </div>
    </>
  )
}

export default App
