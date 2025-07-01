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
  hidden: { opacity: 0, x: 5 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 100, stiffness: 100 },
  },
};

// Front-end icons
const techIcons: Record<string, React.ReactNode> = {
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
  const uniquetech = [...new Set(works.flatMap((w) => w.tech))];
  const uniqueCategories = [...new Set(works.map((w) => w.category))];

  const filteredWorks = works.filter((w) => {
    const categoryMatch = !selectedCategory || w.category === selectedCategory;
    const yearMatch = !selectedSort.year || w.year === selectedSort.year;
    const languageMatch = !selectedSort.language || w.tech.includes(selectedSort.language);
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    };
    if (sortDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when dropdown is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [sortDropdownOpen]);

  // Handle lazy loading for components
  const ScrollVelocity = lazy(() => import("../components/ScrollVelocity"));

  return (
    <motion.div
      className='bg-background flex overflow-hidden scroll-smooth relative z-0'
      variants={container}
      initial='hidden'
      animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <BigBentoCard className='h-full flex overflow-hidden justify-center items-center'>
          <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-[400px] sm:w-[430px] md:w-[500px] lg:w-full h-[80px] sm:h-[120px] lg:h-[120px]'>
            <Suspense fallback={<div className='text-ptext font-inter'>Loading...</div>}>
              <ScrollVelocity
                texts={["`works` — Projects —"]}
                velocity={70}
                className='font-inter text-[clamp(2rem,5vw,4rem)] leading-none'
              />
            </Suspense>
          </div>
        </BigBentoCard>

        {/* Filter Section with higher z-index */}
        <BigBentoCard className='relative grid gap-4 grid-cols-1 lg:grid-cols-2 p-4 z-50'>
          {/* Sort Button */}
          <div className='relative w-full max-w-[200px] order-2 lg:order-1'>
            <button
              onClick={() => setSortDropdownOpen((prev) => !prev)}
              className='flex items-center justify-center w-full gap-2 px-4 py-3 text-sm text-ptext bg-bgoutline rounded-lg hover:bg-background transition-all duration-200 active:scale-95'>
              <FadersHorizontalIcon
                size={20}
                className={`transition-transform duration-200 ${sortDropdownOpen ? "rotate-90" : "rotate-0"}`}
              />
              Filter & Sort
            </button>

            {/* Overlay for mobile */}
            {sortDropdownOpen && <div className='fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] lg:hidden' />}

            {/* Filter Dropdown */}
            {sortDropdownOpen && (
              <div
                ref={dropdownRef}
                className='lg:absolute fixed top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                lg:top-full lg:left-0 lg:transform-none lg:translate-x-0 lg:translate-y-0
                mt-0 lg:mt-2 z-[101] w-[calc(100vw-2rem)] max-w-sm lg:w-80
                bg-bgcards border border-bgoutline rounded-2xl p-6 shadow-2xl
                animate-in fade-in-0 zoom-in-95 duration-200'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-lg font-semibold text-ptext'>Filter Projects</h3>
                  <button
                    onClick={() => setSortDropdownOpen(false)}
                    className='p-2 rounded-full hover:bg-background transition-colors duration-200 active:scale-95'>
                    <FaX size={14} className='text-ptext' />
                  </button>
                </div>

                {/* Year Filter */}
                <div className='mb-6'>
                  <p className='font-semibold text-sm mb-3 text-ptext/70'>Filter by Year</p>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
                    {uniqueYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedSort((prev) => ({
                            ...prev,
                            year: prev.year === year ? undefined : year,
                          }));
                          setSortDropdownOpen(false);
                        }}
                        className={`text-xs py-2 px-3 rounded-xl transition-all duration-200 ${
                          selectedSort.year === year
                            ? "bg-background text-white font-medium shadow-sm"
                            : "bg-bgoutline text-ptext hover:bg-background/50"
                        }`}>
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language Filter */}
                <div className='mb-6'>
                  <p className='font-semibold text-sm mb-3 text-ptext/70'>Filter by Technology</p>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-32 overflow-y-auto pr-1 scrollbar-thin'>
                    {uniquetech.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedSort((prev) => ({
                            ...prev,
                            language: prev.language === lang ? undefined : lang,
                          }));
                          setSortDropdownOpen(false);
                        }}
                        className={`text-[0.66rem] px-3 py-2 rounded-xl transition-all duration-200 truncate ${
                          selectedSort.language === lang
                            ? "bg-background text-white font-medium shadow-sm"
                            : "bg-bgoutline text-ptext hover:bg-background/50"
                        }`}>
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    resetFilters();
                    setSortDropdownOpen(false);
                  }}
                  className='w-full flex items-center justify-center gap-2 py-3 border border-ptext rounded-xl text-sm text-ptext hover:bg-background/30 transition-all duration-200 active:scale-95'>
                  <RefreshCw size={14} />
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

          {/* Category Buttons */}
          <div className='flex flex-wrap items-center gap-2 justify-start lg:justify-end order-1 lg:order-2'>
            <button
              onClick={() => setSelectedCategory(undefined)}
              className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 active:scale-95 ${
                selectedCategory === undefined
                  ? "bg-background text-white font-semibold shadow-sm"
                  : "text-ptext hover:bg-background/50"
              }`}>
              All Projects
            </button>

            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory((prev) => (prev === cat ? undefined : cat))}
                className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 active:scale-95 ${
                  selectedCategory === cat
                    ? "bg-background text-white font-semibold shadow-sm"
                    : "text-ptext hover:bg-background/50"
                }`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </BigBentoCard>

        {/* Results Count */}
        {(selectedCategory || selectedSort.year || selectedSort.language) && (
          <div className='px-2'>
            <p className='text-sm text-ptext text-start'>
              Showing {filteredWorks.length} of {works.length} projects
              {selectedCategory && ` in ${selectedCategory}`}
              {selectedSort.year && ` from ${selectedSort.year}`}
              {selectedSort.language && ` using ${selectedSort.language}`}
            </p>
          </div>
        )}

        {/* Results: Filtered Cards */}
        <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2'>
          {filteredWorks.length > 0 ? (
            filteredWorks.map((work) => (
              <a href={work.url} key={work.id} className='h-full'>
                <BigBentoCard className='h-full flex flex-col justify-between group overflow-hidden hover:bg-bgoutline transition-all duration-300 hover:shadow-lg hover:scale-[1.02]'>
                  {/* Top: Image content */}
                  <div className='p-3 overflow-hidden'>
                    <span className='bg-background rounded-xl block overflow-hidden'>
                      <img
                        src={work.image}
                        loading='lazy'
                        alt={work.title}
                        className='w-full aspect-video p-4 sm:p-6 rounded-lg object-cover scale-90
                        transition-transform duration-500 ease-out group-hover:scale-100'
                      />
                    </span>
                  </div>

                  {/* Bottom: Text content */}
                  <div className='flex flex-col p-3 space-y-3'>
                    {/* Tag Icons */}
                    <div className='flex flex-wrap items-center gap-2 font-sf'>
                      {[...(work.tech || []), ...(work.databases || [])].slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className='flex items-center gap-1 px-3 py-1.5 bg-background border border-ptext text-xs text-ptext rounded-full hover:bg-bgoutline transition-colors duration-200'>
                          <span className='truncate max-w-20'>{tag.trim()}</span>
                          <span>{techIcons[tag.trim()] || databaseIcons[tag.trim()] || ""}</span>
                        </span>
                      ))}

                      {work.tech.length + work.databases.length > 4 && (
                        <span className='px-3 py-1.5 border border-ptext text-xs text-ptext rounded-full bg-background'>
                          +{work.tech.length + work.databases.length - 4}
                        </span>
                      )}
                    </div>

                    <div className='flex justify-between items-start gap-3'>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-semibold text-lg sm:text-xl lg:text-2xl text-white truncate'>
                          {work.title}
                        </h3>
                        <p className='text-pretty text-ptext text-sm sm:text-base font-sf mt-1 line-clamp-2 lg:line-clamp-none'>
                          {work.description}
                        </p>
                      </div>
                      {/* Year badge */}
                      <span className='flex-shrink-0 text-xs bg-background text-ptext rounded-full px-3 py-1.5 font-medium'>
                        {work.year}
                      </span>
                    </div>
                  </div>
                </BigBentoCard>
              </a>
            ))
          ) : (
            <div className='col-span-full flex flex-col items-center justify-center h-[400px] text-center'>
              <p className='text-lg text-ptext mb-2'>No projects found</p>
              <p className='text-sm text-ptext/70 mb-4'>Try adjusting your filters or search criteria</p>
              <button
                onClick={resetFilters}
                className='flex items-center gap-2 px-4 py-2 bg-background text-white rounded-lg hover:bg-bgoutline transition-all duration-200'>
                <RefreshCw size={16} />
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </motion.div>
  );
}
