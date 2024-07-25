import Link from "next/link";
import { useState } from "react";
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

  return (
    <>
      <ul className="navigation flex gap-2">
        <li className="menu-item">
          <Link
            href="/spell-bee"
            className={`px-3  py-2 rounded  ${
              isbgBlue
                ? "text-[#1363df] md:text-white hover:bg-transparent md:hover:bg-[#1363df] md:hover:text-white "
                : "hover:bg-[#1363df] hover:text-white"
            } `}
          >
            Spell Bee
          </Link>
        </li>
        <li>
          <Link
            className={`px-3  py-2 rounded  ${
              isbgBlue
                ? "text-[#1363df] md:text-white hover:bg-transparent md:hover:bg-[#1363df] md:hover:text-white "
                : "hover:bg-[#1363df] hover:text-white"
            } `}
            href="/mbbs"
          >
            Overseas MBBS
          </Link>
        </li>
        <li>
          <Link
            className={`px-3  py-2 rounded  ${
              isbgBlue
                ? "text-[#1363df] md:text-white hover:bg-transparent md:hover:bg-[#1363df] md:hover:text-white "
                : "hover:bg-[#1363df] hover:text-white"
            } `}
            href="/talent-exam"
          >
            Talent Exam
          </Link>
        </li>
        <li>
          <Link
            className={`px-3  py-2 rounded  ${
              isbgBlue
                ? "text-[#1363df] md:text-white hover:bg-transparent md:hover:bg-[#1363df] md:hover:text-white "
                : "hover:bg-[#1363df] hover:text-white"
            } `}
            href="/farm-guru"
          >
            Field Trip
          </Link>
        </li>
      </ul>
    </>
  );
}
