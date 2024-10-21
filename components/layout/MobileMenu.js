  import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
  export default function MobileMenu({ isbgBlue }) {
    const [isActive, setIsActive] = useState({
      status: false,
      key: "",
    });

    const handleToggle = (key) => {
      if (isActive.key === key) {
        setIsActive({
          status: false,
        });
      } else {
        setIsActive({
          status: true,
          key,
        });
      }
    };
    const [isdrop, setIsDrop] = useState(false);
    const onclickmenu = () =>{
      setIsDrop(!isdrop);
    }
    const [ismbbs, setIsMbbs] = useState(false);
    const onclickmenu1 = () =>{
      setIsMbbs(!ismbbs);
    }
    const [istalent, setIsTalent] = useState(false);
    const onclickmen2 = () =>{
      setIsTalent(!istalent);
    }
    
    const [isfield, setIsField] = useState(false);
    const onclickmenu3 = () =>{
      setIsField(!isfield);
    }

    return (
      < >
        <ul className="navigation flex  ">
          <li className= {`relative  ${isdrop ? "h-[310px]" :"h-10"}`}>
            <div className="flex flex-row h-10 items-center relative " >
            <Link
              href="/spell-bee"
              className="px-3  rounded"
            >
              Spell Bee
            </Link>
            <RiArrowDropDownLine className="absolute top-2 right-2 text-2xl" onClick={onclickmenu}/>
            </div>
            <div className={`${isdrop ? "block" :"hidden"}`}>
            <ul >
                            <li>
                              <Link href="/spell-bee#what-is-spell-bee">
                                What is Spell Bee
                              </Link>
                            </li>
                            <li className=" ">
                              <Link href="/spell-bee#benefits">
                                Benefits of Spell bee
                              </Link>
                            </li>
                            <li>
                              <Link href="/spell-bee#categories">
                                Categories
                              </Link>
                            </li>
                            <li>
                              <Link href="/spell-bee#exam-schedule">
                                Exam Schedule
                              </Link>
                            </li>
                            <li>
                              <a
                                // href="/spell-bee-brochure.pdf"
                                // download
                                className="w-full"
                              >
                                Download Brochure
                              </a>
                            </li>
                            <li>
                             <Link href="/spell-bee/results">
                             View result
                              </Link>
                              
                              
                              
                            </li>
                          </ul>
            </div>
            
            
           
          </li>
          <li className= {`relative  ${ismbbs ? "h-[265px]" :"h-10"}`}>
            <div className="flex flex-row h-10 items-center">
            <Link
              className="px-3  py-2 rounded"
              href="/mbbs"
            >
              Overseas MBBS
            </Link>
            <RiArrowDropDownLine className="absolute top-2 right-2 text-2xl" onClick={onclickmenu1}/>
            </div>
            <div>
            <ul className={`${ismbbs ? "block" :"hidden"}`}>
                            <li>
                              <Link href="/mbbs#why-dmsf">Why Choose DMSF</Link>
                            </li>
                            <li>
                              <Link href="/mbbs#mbbs-in-philippines">
                                MBBS in Philippines
                              </Link>
                            </li>
                            <li>
                              <Link href="/mbbs#features">Features</Link>
                            </li>
                            <li>
                              <Link href="/mbbs#additional-features">
                                Additional Features
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/mbbs-brochure.pdf"
                                download
                                className="w-full"
                              >
                                Download Brochure
                              </a>
                            </li>
                          </ul>
            </div>
            
          </li>
          <li className= {`relative  ${istalent ? "h-[175px]" :"h-10"}`}>
            <div className="flex flex-row h-10 items-center">
            <Link
              className="px-3  py-2 rounded"  
              href="/talent-exam"
            >
              Talent Exam
            </Link>
            <RiArrowDropDownLine className="absolute top-2 right-2 text-2xl" onClick={onclickmen2}/>
            </div>
            <div >
            <ul className={`${istalent ? "block" :"hidden"}`}>
                            <li>
                              <Link href="/talent-exam#about-fktt">
                                About FKTT
                              </Link>
                            </li>
                            <li>
                              <Link href="/talent-exam#subjects">
                                Test Subjects
                              </Link>
                            </li>
                            <li className="w-full">
                          <a>
                          Download Brochure
                          </a>
                        </li>
                          </ul>
            </div>
            
          </li>
          <li className= {`relative  ${isfield ? "h-[220px]" :"h-10"}`}>
            <div className="flex flex-row h-10 items-center">
            <Link
              className="pl-3 pr-3  py-2 rounded "
              href="/farm-guru"
            >
              Field Trip
            </Link>
            <RiArrowDropDownLine className="absolute top-2 right-2 text-2xl" onClick={onclickmenu3}/>
            </div>
            <div>
            <ul className={`${isfield ? "block" :"hidden"}`}>
                            <li>
                              <Link href="/farm-guru#about-us">About Us</Link>
                            </li>
                            <li>
                              <Link href="/farm-guru#what-we-do">
                                What we do
                              </Link>
                            </li>
                            <li>
                              <Link href="/farm-guru#gallery">Gallery</Link>
                            </li>
                            <li className="">
                              <a
                                href="/spell-bee-brochure.pdf"
                                download
                                className="w-full"
                              >
                                Download Brochure
                              </a>
                            </li>
                          </ul>
            </div>
            
            <div>

            </div>
          </li>
        </ul>
      </>
    );
  }
