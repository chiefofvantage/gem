// primary :#1363df
// sec: #082a5e
// text: #39557e

import Cta1 from "@/components/sections/Cta1";
import Link from "next/link";
const SpellBee = () => {
  return (
    <main className="">
      {/* hero section */}
      <section className="flex flex-col gap-2 p-5">
        <h1 className="text-center text-2xl sm:text-5xl md:text-7xl font-semibold mt-10">
          SpellBee: Unleash Your <br /> Word Power
        </h1>
        <p className="text-center max-w-sm text-xs sm:text-sm md:text-lg mx-auto">
          Embark on a journey of language mastery and competitive excellence
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500/90 max-w-[350px] w-full mx-auto">
          Register
        </button>
      </section>

      {/* What is spell bee */}
      <section className="flex flex-col gap-5 bg-slate-100 p-5 py-10  relative">
        {/* section heading */}
        <h2 className="text-2xl sm:text-4xl font-semibold">
          What is
          <img
            src="/spell-bee-1.png"
            height={45}
            width={45}
            alt="spell-bee"
            className="inline-block translate-y-3"
          />
          <span className="text-[#1363df]">Spell bee?</span>
        </h2>
        {/* section content */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:justify-center">
          <div className="relative ">
            <img
              src="/students.jpg"
              alt="student"
              className="rounded object-cover object-center h-80"
              fill
            />
          </div>
          <div className="flex flex-col gap-6 pl-5 sm:pl-0">
            <div className="max-w-lg space-y-2">
              <h3 className="font-semibold list-disc list-item text-[#082a5e]">
                Enhancement of Language Skills
              </h3>

              <p className="text-sm text-[#39557e]">
                The Spelling Bee competition helps enhance several aspects of
                students English language skills, such as vocabulary, spelling,
                comprehension, listening, and writing abilities.
              </p>
            </div>

            <div className="max-w-lg space-y-2">
              <h3 className="font-semibold list-disc list-item text-[#082a5e]">
                Confidence Building
              </h3>

              <p className="text-sm text-[#39557e]">
                The Spelling Bee competition helps enhance several aspects of
                students English language skills, such as vocabulary, spelling,
                comprehension, listening, and writing abilities.
              </p>
            </div>

            <div className="max-w-lg space-y-2">
              <h3 className="font-semibold list-disc list-item text-[#082a5e]">
                Motivation and Self-Based Learning
              </h3>

              <p className="text-sm text-[#39557e]">
                The Spelling Bee competition helps enhance several aspects of
                students English language skills, such as vocabulary, spelling,
                comprehension, listening, and writing abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benifits of spell bee */}
      <section className="flex flex-col gap-5 p-5 py-10 relative">
        {/* section heading */}
        <h2 className="text-4xl font-semibold">
          <span className="text-[#1363df]">Benifits of</span> Spell bee
          <img
            src="/spell-bee-1.png"
            height={45}
            width={45}
            alt="spell-bee"
            className="inline-block translate-y-3"
          />
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="blog__post-item-two shine__animate-item">
              <div className="blog__post-thumb-two">
                <img src="/assets/img/blog/blog_thumb04.jpg" alt="img" />
              </div>
              <div className="blog__post-content-two">
                <Link href="#" className="cat">
                  Builds Confidence
                </Link>
                <h4 className="title">
                  <Link href="/blog-details">
                    Boosts confidence through public speaking and applause for
                    efforts.{" "}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog__post-item-three shine__animate-item">
              <div className="blog__post-thumb-three">
                <Link href="/blog-details" className="shine__animate-link">
                  <img src="/assets/img/blog/blog_thumb06.jpg" alt="img" />
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="bg-[#e7effc] text-[#1363df] text-sm rounded px-2.5 py-1.5 uppercase font-thin w-fit">
                  Enhanced Vocabulary
                </h3>

                <p className="text-[#39557e] ">
                  Spelling bee participation helps children gain competency over
                  vocabulary, improving their reading and writing skills.{" "}
                </p>
              </div>
            </div>
            <div className="blog__post-item-three shine__animate-item">
              <div className="blog__post-thumb-three">
                <Link href="/blog-details" className="shine__animate-link">
                  <img src="/assets/img/blog/blog_thumb06.jpg" alt="img" />
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="bg-[#e7effc] text-[#1363df] text-sm rounded px-2.5 py-1.5 uppercase font-thin w-fit">
                  Improves Cognitive Skills
                </h3>

                <p className="text-[#39557e] ">
                  It helps develop cognitive skills, memory, and better learning
                  abilities, beneficial for higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <Cta1 />
    </main>
  );
};
export default SpellBee;
