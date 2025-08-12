import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";
import { MdOutlineCopyright } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { PiTreeStructureBold } from "react-icons/pi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import avatar from './assets/syarif.png'
import jsLogo from './assets/js-logo.png'
import avocado from './assets/avocado.png'
import reactLogo from './assets/react.svg'
import springbootLogo from './assets/springboot-logo.svg'
import goLogo from './assets/go-logo.png'
import javaLogo from './assets/java-logo.png'
import { useState } from "react";
import Marquee from "react-fast-marquee";

function Home() {
  const [budget, setBudget] = useState("");
  const [errorBudget, setErrorBudget] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const [whatsapp, setWhatsapp] = useState('');
  const [errorWA, setErrorWA] = useState('');

  const handleWAChange = (e) => {
    const value = e.target.value;
    // Hanya izinkan input angka
    if (/^[0-9]*$/.test(value)) {
      setWhatsapp(value);
      setErrorWA('');
    } else {
      setErrorWA('Hanya angka yang diperbolehkan');
    }
    if (value.length < 13) {
      setWhatsapp(value);
      setErrorWA('');
    } else {
      setErrorWA('Masukkan nomor yang valid');
    }
  }

  const serviceArr = [
    {
      h1:"Membuat tampilan yang memikat",
      p:"Mendesain antarmuka yang menarik, responsif, dan mudah digunakan."
    },
    {
      h1:"Membangun mesin di balik layar",
      p:"Menyusun logika aplikasi, mengelola database, dan menjaga keamanan data."
    },
    {
      h1:"Menghubungkan dan mengoptimalkan sistem",
      p:"Menyatukan frontend dan backend, menguji performa, dan menjaga aplikasi tetap optimal."
    },
  ]

  const logos = [
    { src: jsLogo, alt: "JavaScript" },
    { src: reactLogo, alt: "React" },
    { src: goLogo, alt: "Golang" },
    { src: springbootLogo, alt: "Springboot" },
    { src: javaLogo, alt: "Java" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className='flex flex-col'>
        {/* Navigation */}
        <nav className='flex items-center w-full justify-between h-20 bg-white z-50 sticky top-0 drop-shadow-xl px-4 md:px-16'>
          <div className='flex items-center gap-2'>
            <div className='flex justify-center items-center h-12 w-12 rounded-full text-white bg-purple-600'>
              <span className="font-semibold text-2xl">S</span>
            </div>
            <div className='font-semibold text-xl'>Syarif</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex'>
            <a href="#home">
              <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Home</button>
            </a>
            <a href="#about">
              <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>About</button>
            </a>
            <a href="#process">
              <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Process</button>
            </a>
            <a href="#service">
              <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Services</button>
            </a>
            <a href="#contact">
              <button className='hover:text-white hover:bg-purple-600 px-4 py-2 rounded-lg'>Contact</button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <IoClose /> : <FiMenu />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white z-40 fixed top-20 left-0 right-0 shadow-lg">
            <div className="flex flex-col w-full">
              <a href="#home"  className='hover:text-white hover:bg-purple-600 px-4 py-2'>
                <button>Home</button>
              </a>
              <a href="#about" className='hover:text-white hover:bg-purple-600 px-4 py-2'>
                <button>About</button>
              </a>
              <a href="#process" className='hover:text-white hover:bg-purple-600 px-4 py-2'>
                <button>Process</button>
              </a>
              <a href="#service" className='hover:text-white hover:bg-purple-600 px-4 py-2'>
                <button>Services</button>
              </a>
              <a href="#contact" className='hover:text-white hover:bg-purple-600 px-4 py-2'>
                <button>Contact</button>
              </a>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className='flex flex-col md:flex-row gap-8 p-4 md:p-16 w-full'>
          <div className='flex flex-col gap-2 md:pr-8 w-full md:w-2/3'>
            <div className='flex flex-col gap-4'>
              <h1 className='font-bold text-3xl md:text-5xl'>Halo, saya Syarif Khalid Attamimi</h1>
              <p className="text-sm md:text-base">
                Saya percaya bahwa teknologi bukan sekadar kode, tetapi sarana untuk memecahkan masalah dan memberikan pengalaman terbaik bagi pengguna. Mulai dari merancang tampilan yang ramah hingga mengoptimalkan performa sistem di balik layar, saya menikmati setiap tahap proses pengembangan.
              </p>
              <button className='bg-purple-600 px-4 py-2 w-full md:w-1/3 lg:w-1/4 rounded-lg text-white'>Say Hello!</button>
            </div>
            <div className='flex flex-col md:flex-row gap-2 justify-center mt-8 md:mt-20'>
              <div className='flex flex-col items-center bg-purple-200 px-4 py-4 md:px-16'>
                <div className='text-2xl md:text-3xl font-medium'>2 Y.</div>
                <div className="text-sm md:text-base">Experience</div>
              </div>
              <div className='flex flex-col items-center bg-purple-200 px-4 py-4 md:px-16'>
                <div className='text-2xl md:text-3xl font-medium'>50+</div>
                <div className="text-sm md:text-base">Project Completed</div>
              </div>
              <div className='flex flex-col items-center bg-purple-200 px-4 py-4 md:px-16'>
                <div className='text-2xl md:text-3xl font-medium'>58</div>
                <div className="text-sm md:text-base">Happy Client</div>
              </div>
            </div>
          </div>
          <div className='md:flex hidden justify-center w-full md:w-1/3 bg-gradient-to-tr from-slate-800 via-indigo-900 to-purple-900 drop-shadow-xl rounded-xl mt-8 md:mt-0'>
            <img src={avatar} alt="avatar" className="object-cover"/>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className='flex flex-col md:flex-row gap-8 md:gap-20 px-4 md:px-16 py-8 md:py-16 w-full m-0 md:m-10 max-w-full md:max-w-[calc(100%-5rem)] bg-white drop-shadow-xl rounded-xl'>
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="bg-orange-200 rounded-xl w-full max-w-xs">
              <img src={avatar} alt="" className="object-cover" />
            </div>
            <div className="flex gap-4 md:gap-8 -mt-8 bg-white text-purple-700 text-2xl md:text-3xl px-4 md:px-8 py-2 md:py-4 drop-shadow-xl">
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
          <div className="flex flex-col w-full md:w-2/3 gap-4 justify-center text-base md:text-xl">
            <h1 className="text-2xl md:text-3xl font-semibold">Fullstack Developer</h1>
            <p>
              Saya adalah seorang Fullstack Developer yang menikmati proses membangun aplikasi dari awal hingga siap digunakan. Bagi saya, kode bukan sekadar rangkaian perintah, tetapi media untuk mewujudkan ide menjadi solusi nyata. Dengan menguasai teknologi modern seperti JavaScript, React.js, Golang, dan PostgreSQL, saya memadukan tampilan yang menarik dengan performa yang optimal, agar setiap aplikasi memberikan pengalaman terbaik bagi penggunanya.
            </p>
            <div className="flex flex-col md:flex-row gap-4 text-purple-600">
              <a href="#project">
                <button className="bg-purple-600 text-white px-4 py-2">Projek saya</button>
              </a>
              <a href="https://drive.google.com/file/d/1MIip2wjsWeBRdo9in7r8M1xhPPLktL2o/view?usp=sharing">
                <button className="flex items-center justify-center px-4 py-2 gap-2 border border-purple-600">
                  <GoDownload />
                  <span>Unduh CV</span>
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        <section id="process" className='flex flex-col md:-mt-24 md:flex-row gap-8 md:gap-20 pt-8 md:pt-36 px-4 md:px-16 py-8 md:py-16 w-full bg-gray-200 rounded-xl'>
          <div className="flex w-full md:w-1/2 flex-col justify-center gap-4 text-base md:text-xl">
            <h1 className="font-semibold text-3xl md:text-5xl">Work Process</h1>
            <p>
              Sebagai seorang Fullstack Developer, saya mengerjakan setiap proyek dengan pendekatan menyeluruh — mulai dari memahami kebutuhan pengguna hingga memastikan hasil akhir bekerja sesuai harapan. Proses kerja saya dirancang untuk menjaga kualitas, efisiensi, dan keberlanjutan sistem dalam jangka panjang.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-4 drop-shadow-xl">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex flex-col gap-4 p-4 md:p-6 rounded-lg bg-white">
                <div className="flex justify-center items-center rounded-lg bg-purple-500 p-2 md:p-4 w-1/4 text-xl md:text-2xl text-white">
                  <IoAnalyticsSharp />
                </div>
                <div className="font-semibold text-xl md:text-2xl">
                  <span>1. Analisis & Perencanaan</span>
                </div>
                <div className="text-sm md:text-md">
                  <span>Memahami tujuan proyek, kebutuhan pengguna, dan ruang lingkup pekerjaan, lalu menyusunnya menjadi rencana pengembangan yang terstruktur.</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 md:p-6 rounded-lg bg-white">
                <div className="flex justify-center items-center rounded-lg bg-purple-500 p-2 md:p-4 w-1/4 text-xl md:text-2xl text-white">
                  <PiTreeStructureBold />
                </div>
                <div className="font-semibold text-xl md:text-2xl">
                  <span>2. Desain & Arsitektur Sistem</span>
                </div>
                <div className="text-sm md:text-md">
                  <span>Membuat rancangan tampilan (UI/UX) yang intuitif serta arsitektur back end yang scalable dan aman.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-0 md:pt-8 gap-4 w-full md:w-1/2">
              <div className="flex flex-col gap-4 p-4 md:p-6 rounded-lg bg-white">
                <div className="flex justify-center items-center rounded-lg bg-purple-500 p-2 md:p-4 w-1/4 text-xl md:text-2xl text-white">
                  <MdOutlineDeveloperMode />
                </div>
                <div className="font-semibold text-xl md:text-2xl">
                  <span>3. Pengembangan & Integrasi</span>
                </div>
                <div className="text-sm md:text-md">
                  <span>Mengimplementasikan fitur pada front end dan back end, lalu menghubungkannya dengan database dan layanan pendukung.</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 md:p-6 rounded-lg bg-white">
                <div className="flex justify-center items-center rounded-lg bg-purple-500 p-2 md:p-4 w-1/4 text-xl md:text-2xl text-white">
                  <SiTestcafe />
                </div>
                <div className="font-semibold text-xl md:text-2xl">
                  <span>4. Pengujian & Rilis</span>
                </div>
                <div className="text-sm md:text-md">
                  <span>Melakukan pengujian menyeluruh untuk memastikan performa, keamanan, dan kompatibilitas sebelum aplikasi digunakan.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="project" className='flex flex-col p-4 md:p-16 w-full gap-8'> 
          <div className="flex flex-col text-center items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold">Portofolio</h1>
            <p className="w-full md:w-2/3 text-sm md:text-base">
              Setiap proyek dalam portofolio ini adalah hasil dari proses kreatif yang memadukan ide, desain, dan teknologi. Dari merancang antarmuka yang nyaman digunakan hingga membangun sistem yang kuat di belakang layar, setiap karya mencerminkan dedikasi saya dalam menciptakan solusi digital yang bermanfaat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full drop-shadow-2xl gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col w-full bg-white">
                <div className="">
                  <img src={avocado} alt="" className="w-full" />
                </div>
                <div className="flex flex-col gap-2 p-4 text-sm">
                  <span className="">UI-UX DESIGN</span>
                  <span className="text-lg md:text-xl font-medium">Product Admin Dashboard</span>
                  <p className="text-xs md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  <div>
                    <button className="flex justify-center items-center gap-2 border px-4 py-2 text-purple-500 rounded-lg border-purple-500 text-sm">
                      <span>Case Study</span>
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="text-white bg-purple-600 px-4 py-2 rounded-md font-medium text-sm md:text-base">More Project</button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col gap-4 md:gap-8 items-center py-8 md:py-16 text-white bg-gray-900 px-4">
          <div className="flex flex-col text-2xl md:text-4xl font-semibold text-center">
            <h1>Apakah Anda memiliki ide project?</h1>
            <h1>Mari diskusikan idemu!</h1>
          </div>
          <div className="flex justify-center text-center w-full md:w-1/2 font-medium text-sm md:text-base">
            <span>Wujudkan ide kreatif Anda menjadi kenyataan. Bagikan gagasan, rencanakan bersama, dan temukan solusi inovatif melalui kolaborasi.</span>
          </div>
          <div>
            <button className="flex items-center gap-2 text-base md:text-lg justify-center rounded-sm font-semibold px-4 py-2 text-white bg-purple-600">
              <span>Mari Bekerja sama</span>
              <IoIosArrowRoundForward className="text-2xl md:text-3xl"/>
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section id="service" className="flex flex-col md:flex-row gap-8 p-4 md:p-16 bg-gray-200 items-center">
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <div className="text-2xl md:text-4xl font-semibold">
              <h1>Apa yang bisa saya lakukan?</h1>
            </div>
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <span>Membuat aplikasi dari nol hingga siap digunakan. Saya merancang tampilan yang enak dilihat, membangun sistem yang kuat di belakang layar, dan memastikan semuanya berjalan tanpa hambatan. Setiap proyek adalah tantangan baru untuk mengubah ide menjadi karya digital yang berguna dan menyenangkan untuk pengguna.</span>
            </div>
            <div className="flex text-white font-medium">
              <button className="px-4 py-2 bg-purple-600 rounded-sm text-sm md:text-base">Say Hello!</button>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {serviceArr.map((item, index) => (
              <div key={index} className="flex flex-col bg-white p-4 md:p-8 gap-2 rounded-md hover:drop-shadow-xl hover:border-l-4 md:hover:border-l-8 hover:border-purple-600">
                <h1 className="text-lg md:text-2xl font-semibold">{item.h1}</h1>
                <p className="text-sm md:text-base">{item.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section id="service" className="flex flex-col gap-12 p-4 md:p-16 bg-white items-center">
          <div className="flex flex-col gap-4 text-center items-center">
            <h1 className="font-semibold text-4xl">Teknologi</h1>
            <p className="md:w-3/5">Saya menguasai berbagai teknologi modern untuk pengembangan aplikasi web, mulai dari sisi front end hingga back end. Saya terbiasa membangun sistem yang efisien, aman, dan mudah dikembangkan, dengan memanfaatkan teknologi yang sesuai kebutuhan proyek.</p>
          </div>
          <div className="relative bg-white drop-shadow-xl max-w-4/5 overflow-hidden">
            <Marquee speed={30} gradient={false} className="flex items-center">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="mx-8 w-30 h-30 flex items-center justify-center flex-shrink-0">
                  <img src={logo.src} alt={logo.alt} className="w-full h-full" />
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex flex-col md:flex-row gap-8 p-4 md:p-16 m-0 md:m-10 max-w-full md:max-w-[calc(100%-5rem)] bg-white drop-shadow-xl rounded-xl">
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <div className="text-2xl md:text-3xl font-semibold">
              <h1>Mari diskusikan project Anda</h1>
            </div>
            <div className="text-sm md:text-base">
              <span>Jika Anda ingin berdiskusi atau bertemu secara langsung, silakan datang ke alamat saya atau hubungi kontak berikut:</span>
            </div>
            <div className="flex gap-4 md:gap-6 w-full bg-white p-4 md:p-6 rounded-md hover:drop-shadow-xl hover:border-r-4 md:hover:border-r-6 hover:border-purple-600">
              <div className="text-white bg-purple-600 p-2 md:p-4 text-xl md:text-3xl rounded-sm">
                <CiLocationOn />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base">Alamat :</span>
                <span className="text-lg md:text-xl font-semibold">Depok, Jawa barat</span>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6 w-full bg-white p-4 md:p-6 rounded-md hover:drop-shadow-xl hover:border-r-4 md:hover:border-r-6 hover:border-purple-600">
              <div className="text-white bg-purple-600 p-2 md:p-4 text-xl md:text-3xl rounded-sm">
                <TfiEmail />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base">Email :</span>
                <span className="text-lg md:text-xl font-semibold">syarif.khalid@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6 w-full bg-white p-4 md:p-6 rounded-md hover:drop-shadow-xl hover:border-r-4 md:hover:border-r-6 hover:border-purple-600">
              <div className="text-white bg-purple-600 p-2 md:p-4 text-xl md:text-3xl rounded-sm">
                <FaWhatsapp />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base">WhatsApp :</span>
                <span className="text-lg md:text-xl font-semibold">+62 851-5092-1837</span>
              </div>
            </div>
          </div>

          <form 
            action={import.meta.env.VITE_FORMSPREE_ENDPOINT} 
            method="POST" 
            className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2"
          >
            <div className="text-sm md:text-base">
              <span>Punya pertanyaan, ide, atau ingin bekerja sama? Tulis saja di form di bawah, dan saya akan segera menghubungi Anda kembali.</span>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Tambahkan name attribute untuk semua input */}
              <input 
                type="text" 
                name="nama"
                placeholder="Nama*" 
                required
                className="px-4 py-2 text-base md:text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"
              />
              
              <input 
                type="text" 
                name="whatsapp"
                placeholder="WhatsApp*"
                value={whatsapp}
                onChange={handleWAChange}
                required
                className="px-4 py-2 text-base md:text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"
              />
              {errorWA && <p className="text-red-500 text-md mt-1">{errorWA}</p>}

              <input 
                type="email" 
                name="email"
                placeholder="Email*" 
                required
                className="px-4 py-2 text-base md:text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"
              />
              
              <input 
                type="text" 
                name="lokasi"
                placeholder="Lokasi" 
                className="px-4 py-2 text-base md:text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"
              />
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full md:w-1/2">
                  <input 
                    type="text" 
                    name="budget"
                    value={budget} 
                    onChange={handleBudgetChange} 
                    placeholder="Budget*" 
                    required
                    className="px-4 py-2 text-base md:text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"
                  />
                  {errorBudget && <p className="text-red-500 text-xs md:text-sm">{errorBudget}</p>}
                </div>
                
                <input 
                  type="text" 
                  name="subyek"
                  placeholder="Subyek*" 
                  required
                  className="px-4 py-2 text-base md:text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600 w-full md:w-1/2"
                />
              </div>
              
              <textarea 
                name="pesan"
                placeholder="Pesan*" 
                required
                className="px-4 py-2 text-base md:text-xl focus:outline-none focus:border-b focus:border-purple-600 focus:placeholder-purple-600"
                rows="4"
              ></textarea>
            </div>
            
            {/* Honeypot field untuk anti-spam */}
            <input type="text" name="_gotcha" className="hidden" />
            
            {/* Redirect setelah submit (opsional) */}
            <input type="hidden" name="_next" value="https://porto-v1-theta.vercel.app/" />

            <input type="hidden" name="_subject" value="Pesan Baru dari Website" />
            
            <div>
              <button 
                type="submit" 
                className="flex text-base md:text-lg gap-2 items-center px-4 py-2 text-white rounded-md bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                <span>Kirim</span>
                <VscSend />
              </button>
            </div>
          </form>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row px-4 md:px-10 pb-8 md:pb-20 pt-8 md:pt-40 -mt-0 md:-mt-30 justify-between bg-gray-900 text-white gap-4 md:gap-0">
          <div className='flex items-center gap-2'>
            <div className='flex justify-center items-center h-10 w-10 md:h-12 md:w-12 rounded-full text-white bg-purple-600'>
              <span className="font-semibold text-xl md:text-2xl">S</span>
            </div>
            <div className='font-semibold text-lg md:text-xl'>Syarif</div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center text-sm md:text-base">
            <button className="px-2 py-1">Home</button>
            <button className="px-2 py-1">About</button>
            <button className="px-2 py-1">Services</button>
            <button className="px-2 py-1">Process</button>
            <button className="px-2 py-1">Portfolio</button>
            <button className="px-2 py-1">Blog</button>
            <button className="px-2 py-1">Contact</button>
          </div>
          <div className="flex items-center gap-2 justify-center text-sm md:text-base">
            <span>Copyright</span>
            <MdOutlineCopyright />
            <span>2025</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home