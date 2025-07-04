import BigBentoCard from "../components/BigBentoCard";
import { achieves } from "../data/achievesData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ScrollVelocity from "../components/ScrollVelocity";
import { Suspense, useState } from "react";
import { Trophy, Star, Medal, Building2, Calendar, Award, Filter } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0, x: 5 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 100, stiffness: 100 },
  },
};

export default function Achievement() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const allSkills = [...new Set(achieves.flatMap((ach) => ach.skills))];
  const years = [...new Set(achieves.map((ach) => ach.year))].sort((a, b) => b - a);

  const filteredAchievements =
    selectedFilter === "all"
      ? achieves
      : achieves.filter((ach) => ach.skills.includes(selectedFilter) || ach.year.toString() === selectedFilter);

  return (
    <motion.div className='bg-background flex overflow-hidden' variants={container} initial='hidden' animate='show'>
      <div className='h-full w-svw overflow-y-auto p-2 grid gap-2'>
        {/* Top Section */}
        <BigBentoCard className='relative overflow-hidden space-y-6'>
          <div className='absolute inset-0' />
          <div className='absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl' />
          <div className='relative flex flex-col justify-center items-center py-6 lg:py-12 space-y-2'>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className='mb-0'>
              <div className='relative'>
                <Trophy className='w-16 h-16 text-white drop-shadow-lg' />
                <div className='absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'>
                  <Star className='w-3 h-3 text-white' />
                </div>
              </div>
            </motion.div>

            <div className='scroll-velocity-vignette flex flex-col justify-center items-center w-full'>
              <Suspense fallback={<div className='text-ptext/20 font-inter'>Loading...</div>}>
                <ScrollVelocity
                  texts={["fundamental—intermediate—professional — certifications — "]}
                  velocity={80}
                  className='font-inter text-[clamp(2.5rem,5vw,3.5rem)] leading-none'
                />
              </Suspense>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-ptext text-base max-w-2xl text-center leading-relaxed font-sf px-4'>
              A showcase of professional certifications, skills, and accomplishments that demonstrate continuous
              learning and expertise in technology.
            </motion.p>
            <span className='py-2' />
            {/* Achievement Stats */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:px-12'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-1'>{achieves.length}</div>
                <div className='text-xs lg:text-sm text-ptext/60'>Total Achievements</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-1'>{allSkills.length}</div>
                <div className='text-xs lg:text-sm text-ptext/60'>Skills Certified</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-1'>{years.length}</div>
                <div className='text-xs lg:text-sm text-ptext/60'>Years Active</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-1'>100%</div>
                <div className='text-xs lg:text-sm text-ptext/60'>Completion Rate</div>
              </div>
            </div>
          </div>
        </BigBentoCard>

        {/* Achievements Grid */}
        <BigBentoCard className='p-6'>
          {/* Filter Section */}
          <div className='flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-12'>
            <div className='flex items-center gap-3'>
              <Filter className='w-5 h-5 text-white' />
              <h3 className='text-white font-semibold text-lg'>Filter by Years</h3>
            </div>

            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedFilter === "all" ? "bg-background text-white" : "bg-bgoutline text-ptext hover:bg-background"
                }`}>
                All ({achieves.length})
              </button>

              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedFilter(year.toString())}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedFilter === year.toString()
                      ? "bg-background text-white"
                      : "bg-bgoutline text-ptext hover:bg-background"
                  }`}>
                  {year}
                </button>
              ))}
            </div>
          </div>

          <motion.div className='grid grid-cols-1 lg:grid-cols-2 gap-6' variants={container}>
            {filteredAchievements.map((ach) => (
              <motion.div
                key={ach.id}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className='group relative'>
                <BigBentoCard className='p-4 transition-all duration-300 backdrop-blur-sm overflow-hidden'>
                  {/* Animated Background */}
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-600/5 via-gray-600/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  {/* Floating Particles Effect */}
                  <div className='absolute inset-0 pointer-events-none'>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className='absolute w-2 h-2 bg-white rounded-full'
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: Math.random() * 100 + "%",
                          scale: 0,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          y: [100, -20],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  <div className='relative z-10'>
                    {/* Header with image and info */}
                    <div className='flex items-start gap-4 mb-6'>
                      <div className='relative'>
                        <div className='w-20 h-20 rounded-2xl overflow-hidden border-2 border-bgoutline group-hover:border-bghover transition-colors'>
                          <img
                            src={ach.image}
                            alt={ach.title}
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 bg-white'
                          />
                        </div>
                        <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg'>
                          <Medal className='w-3 h-3 text-white' />
                        </div>
                      </div>

                      <div className='flex-1 min-w-0'>
                        <h3 className='text-white font-bold text-lg leading-tight mb-2'>{ach.title}</h3>

                        <div className='flex items-center gap-4 text-sm text-ptext mb-3 flex-wrap'>
                          <div className='flex items-center gap-1 leading-none'>
                            <Building2 className='w-4 h-4' />
                            <span>{ach.issuer}</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Calendar className='w-4 h-4' />
                            <span>{ach.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Skills Section */}
                    <div className='space-y-3'>
                      <div className='flex items-center gap-2'>
                        <Award className='w-4 h-4 text-ptext' />
                        <span className='text-sm font-medium text-ptext'>Skills & Competencies</span>
                      </div>

                      <div className='flex flex-wrap gap-2'>
                        {ach.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className='inline-flex items-center
                                      rounded-full text-xs font-medium text-ptext/70
                                     transition-all duration-200 cursor-default'>
                            <span className='w-1 h-1 bg-ptext/70 rounded-full'></span>
                            <span className='pl-1'>{skill}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BigBentoCard>
              </motion.div>
            ))}
          </motion.div>
        </BigBentoCard>
      </div>
    </motion.div>
  );
}
