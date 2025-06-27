import { useEffect, useState, useRef } from "react";
import BigBentoCard from "../components/BigBentoCard";
import { works } from "../data/workData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FadersHorizontalIcon } from "@phosphor-icons/react";
import { RefreshCw } from "lucide-react";
import { FaX } from "react-icons/fa6";
import { Suspense, lazy } from "react";

const container: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 50, stiffness: 50 },
  },
};

// Front-end icons
const frontendIcons: Record<string, React.ReactNode> = {
  HTML: <i className='devicon-html5-plain colored'></i>,
  CSS: <i className='devicon-css3-plain colored'></i>,
  Java: <i className='devicon-java-plain colored'></i>,
  PHP: <i className='devicon-php-plain colored'></i>,
  TypeScript: <i className='devicon-typescript-plain colored'></i>,
  JavaScript: <i className='devicon-javascript-plain colored'></i>,
  "C#": <i className='devicon-csharp-plain colored'></i>,
  Laravel: <i className='devicon-laravel-plain colored'></i>,
  React: <i className='devicon-react-original colored'></i>,
  Tailwind: <i className='devicon-tailwindcss-plain colored'></i>,
  Bootstrap: <i className='devicon-bootstrap-plain colored'></i>,
};
// Database icons
const databaseIcons: Record<string, React.ReactNode> = {
  SQL: <i className='devicon-sql-plain colored'></i>,
  MongoDB: <i className='devicon-mongodb-plain colored'></i>,
  PostgreSQL: <i className='devicon-postgresql-plain colored'></i>,
  MySQL: <i className='devicon-mysql-plain colored'></i>,
  SQLite: <i className='devicon-sqlite-plain colored'></i>,
};

export default function Works() {
  // Load from localStorage on first render
  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedSort = localStorage.getItem("selectedSort");

    if (storedCategory) setSelectedCategory(storedCategory);
    if (storedSort) setSelectedSort(JSON.parse(storedSort));
  }, []);

  const [selectedSort, setSelectedSort] = useState<{
    year?: number;
    language?: string;
  }>({});
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Save to localStorage whenever filters change
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory || "");
    localStorage.setItem("selectedSort", JSON.stringify(selectedSort));
  }, [selectedCategory, selectedSort]);

  const uniqueYears = [...new Set(works.map((w) => w.year))];
  const uniqueFrontend = [...new Set(works.flatMap((w) => w.frontend))];
  const uniqueCategories = [...new Set(works.map((w) => w.category))];

  const filteredWorks = works.filter((w) => {
    const categoryMatch = !selectedCategory || w.category === selectedCategory;
    const yearMatch = !selectedSort.year || w.year === selectedSort.year;
    const languageMatch = !selectedSort.language || w.frontend.includes(selectedSort.language);
    return categoryMatch && yearMatch && languageMatch;
  });

  const resetFilters = () => {
    setSelectedCategory(undefined);
    setSelectedSort({});
    localStorage.removeItem("selectedCategory");
    localStorage.removeItem("selectedSort");
  };

  // Close dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setTimeout(() => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setSortDropdownOpen(false);
        }
      }, 0);
    };
    if (sortDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortDropdownOpen]);

  // Handle lazy loading for components
  const ScrollVelocity = lazy(() => import("../designs/ScrollVelocity"));

  return (
    <motion.div
      className='bg-background flex overflow-hidden scroll-smooth'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <BigBentoCard className='h-full flex lg:overflow-hidden justify-center items-center'>
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[300px] sm:w-[430px] md:w-[430px] h-[100px] lg:h-[100px] lg:w-full'>
            <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
              <ScrollVelocity
                texts={["`works` — projects —"]}
                velocity={70}
                className='font-inter text-[clamp(2.5rem,4vw,3.5rem)] leading-none'
              />
            </Suspense>
          </div>
        </BigBentoCard>

        <BigBentoCard className='grid grid-cols-1 lg:grid-cols-2 p-2'>
          {/* Sort button */}
          <div className='flex justify-start mt-2 lg:mt-0 order-2 lg:order-1'>
            <button
              onClick={() => setSortDropdownOpen((prev) => !prev)}
              className='w-full lg:w-32 text-base rounded-lg transition-all duration-200 text-ptext'>
              <span
                className={`flex flex-row lg:justify-center items-center rounded-lg w-full px-2 py-2 transition-colors duration-200 ${
                  sortDropdownOpen ? "bg-background text-white font-semibold" : "hover:bg-background text-ptext"
                }`}>
                <FadersHorizontalIcon
                  size={20}
                  className={`${sortDropdownOpen ? "rotate-90 transition-transform" : "rotate-0 transition-transform"}`}
                />
                <p className='pl-2 text-base'>Filter</p>
              </span>
            </button>
          </div>

          {/* Categories / Filter Navigation */}
          <div className='flex gap-2 order-1 lg:order-2'>
            <button
              onClick={() => setSelectedCategory(undefined)}
              className={`w-full text-base rounded-lg transition-all duration-200 ${
                selectedCategory === undefined
                  ? "bg-background text-white font-semibold"
                  : "text-ptext hover:bg-background transition-all duration-200"
              }`}>
              All
            </button>

            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory((prev) => (prev === cat ? undefined : cat))}
                className={`w-full py-2 text-base rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-background text-white font-semibold"
                    : "text-ptext hover:bg-background transition-all duration-200"
                }`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </BigBentoCard>

        {/* Sort Dropdown Below */}
        <div className='absolute max-w-full'>
          {sortDropdownOpen && (
            <div
              ref={dropdownRef}
              className='relative top-52 lg:top-44 left-0 w-full lg:w-80 z-20 bg-bgcards border border-bgoutline rounded-2xl p-6 shadow-lg'>
              <div className='flex items-center justify-between mb-4 font-sf'>
                {/* Header */}
                <h3 className='text-lg font-semibold text-ptext'>Filter Projects</h3>
                {/* Close button */}
                <button
                  onClick={() => setSortDropdownOpen(false)}
                  className='p-2 rounded-full hover:bg-background transition'>
                  <FaX size={12} className='text-ptext' />
                </button>
              </div>

              {/* Filter Sections */}
              <div className='grid grid-cols-1 gap-4 font-sf'>
                {/* Year Section */}
                <div>
                  <p className='font-semibold text-sm mb-2'>By Year</p>
                  <div className='grid grid-cols-3 gap-2'>
                    {uniqueYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedSort((prev) => ({
                            ...prev,
                            year: prev.year === year ? undefined : year,
                          }));
                          setSortDropdownOpen(true);
                        }}
                        className={`text-sm py-1 rounded-full transition ${
                          selectedSort.year === year
                            ? "bg-background text-white font-medium"
                            : "bg-bgoutline text-ptext hover:bg-background/50"
                        }`}>
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* frontend Section */}
                <div>
                  <p className='font-semibold text-sm mb-2'>By Parts of Application</p>
                  <div className='grid grid-cols-3 gap-2 max-h-28 overflow-y-auto pr-1'>
                    {uniqueFrontend.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedSort((prev) => ({
                            ...prev,
                            language: prev.language === lang ? undefined : lang,
                          }));
                          setSortDropdownOpen(true);
                        }}
                        className={`flex justify-center items-center gap-1 text-sm py-1 px-2 rounded-full transition ${
                          selectedSort.language === lang
                            ? "bg-background text-white font-medium"
                            : "bg-bgoutline text-ptext hover:bg-background/50"
                        }`}>
                        <span>{lang}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset All */}
                <button
                  onClick={() => {
                    resetFilters();
                    setSortDropdownOpen(true);
                  }}
                  className='w-full flex items-center justify-center gap-2 py-2 border border-ptext
                  rounded-full text-xs text-ptext hover:bg-background/30 transition'>
                  <RefreshCw size={12} />
                  Reset All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results: Filtered Cards */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          {filteredWorks.map((work) => (
            <a href={work.url} key={work.id} className='h-full'>
              <BigBentoCard className='h-full flex flex-col justify-between group overflow-hidden hover:bg-bgoutline transition-all duration-200'>
                {/* Top: Image content */}
                <div className='p-2 overflow-hidden'>
                  <span className='bg-background rounded-xl block'>
                    <img
                      src={work.image}
                      loading="lazy"
                      alt={work.title}
                      className='w-full aspect-video p-6 rounded-lg object-cover scale-90
              transition-transform duration-500 ease-in-out group-hover:scale-100'
                    />
                  </span>
                </div>

                {/* Bottom: Text content */}
                <div className='flex flex-col p-2 space-y-1'>
                  {/* Tag Icons */}
                  <div className='flex flex-wrap items-center gap-1 font-sf'>
                    {[...(work.frontend || []), ...(work.databases || [])].slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className='flex items-center gap-1 px-2 py-1 bg-background border border-ptext text-xs text-ptext rounded-full'>
                        <span>{tag.trim()}</span>
                        <span>{frontendIcons[tag.trim()] || databaseIcons[tag.trim()] || ""}</span>
                      </span>
                    ))}

                    {work.frontend.length + work.databases.length > 4 && (
                      <span className='px-2 border border-ptext text-xs text-ptext rounded-full'>
                        +{work.frontend.length + work.databases.length - 4}
                      </span>
                    )}
                  </div>
                  <span className='flex justify-between items-center'>
                    <p className='font-semibold text-xl lg:text-2xl'>{work.title}</p>
                    {/* Title and Description */}
                    <p className='text-center text-xs bg-background text-ptext rounded-full px-2 py-1'>{work.year}</p>
                  </span>
                  <p className='text-pretty text-ptext text-base font-sf'>{work.description}</p>
                </div>
              </BigBentoCard>
            </a>
          ))}
        </section>
      </div>
    </motion.div>
  );
}
