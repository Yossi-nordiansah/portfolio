'use client';
import React from 'react';

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-cyan-500 to-blue-500",
    badgeColor: "bg-cyan-500",
    skills: [
      {
        name: "HTML 5",
        image: "/icons/html.svg",
        rating: 5,
        description: "Semantic structure, accessibility, SEO-friendly markup."
      },
      {
        name: "CSS 3",
        image: "/icons/css.svg",
        rating: 4,
        description: "Layouting, animations, responsive design with media queries."
      },
      {
        name: "JavaScript",
        image: "/icons/js.svg",
        rating: 3,
        description: "DOM manipulation, ES6+, asynchronous programming."
      },
      {
        name: "Tailwind CSS",
        image: "/icons/tailwind.svg",
        rating: 4,
        description: "Utility-first styling, responsive design, dark mode."
      },
      {
        name: "Bootstrap",
        image: "/icons/bootstrap.svg",
        rating: 3,
        description: "Component-based styling, grid system, responsive utilities."
      },
      {
        name: "React.js",
        image: "/icons/react.svg",
        rating: 4,
        description: "Component lifecycle, hooks, state management, SPA."
      },
      {
        name: "Next.js",
        image: "/images/nextjs.png",
        rating: 4,
        description: "Server-side rendering, App Router, API routes, SEO support."
      },
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-600",
    badgeColor: "bg-green-500",
    skills: [
      {
        name: "Node.js",
        image: "/images/nodejs.png",
        rating: 3,
        description: "Backend development, REST APIs, server-side logic."
      },
      {
        name: "Express.js",
        image: "/icons/express.svg",
        rating: 3,
        description: "Minimalist web framework for Node.js, REST APIs, middleware."
      },
      {
        name: "PHP",
        image: "/icons/php.png",
        rating: 3,
        description: "Server-side scripting, OOP, backend development."
      },
      {
        name: "CodeIgniter",
        image: "/icons/codeigniter.png",
        rating: 3,
        description: "MVC framework, REST API, lightweight PHP development."
      },
      {
        name: "Laravel",
        image: "/icons/laravel.png",
        rating: 4,
        description: "Modern PHP framework, Eloquent ORM, Blade templating, REST API."
      },
    ]
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-purple-500 to-pink-500",
    badgeColor: "bg-purple-500",
    skills: [
      {
        name: "MySQL",
        image: "/icons/mysql.svg",
        rating: 4,
        description: "Database design, CRUD operations, query optimization."
      },
      {
        name: "PostgreSQL",
        image: "/icons/postgresql.png",
        rating: 4,
        description: "Relational database, advanced queries, JSON support, scalability."
      },
    ]
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "from-orange-500 to-red-500",
    badgeColor: "bg-orange-500",
    skills: [
      {
        name: "Git & GitHub",
        image: "/images/Git.png",
        rating: 4,
        description: "Version control, collaboration, branching, pull requests."
      },
    ]
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen pt-24 pb-14 bg-gradient-to-b from-blue-950 to-blue-800">
      <h1 className="text-4xl font-bold text-center text-blue-300 font-poppins mb-4">Skills</h1>
      <div className="w-[90%] lg:w-[85%] mx-auto space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-4">
              <div className={`px-5 py-2 rounded-full bg-gradient-to-r ${category.color} shadow-lg flex items-center gap-3`}>
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-white font-poppins">{category.category}</h2>
              </div>
              <div className="flex-1 h-1 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group relative flex flex-col md:flex-row items-center p-5 rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  {/* Category Badge */}
                  <div className={`absolute top-3 right-3 ${category.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {category.category}
                  </div>

                  {/* Skill Icon */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white/95 p-3 flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow">
                      <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Skill Info */}
                  <div className="flex-1 text-center md:text-left text-white">
                    <h3 className="text-xl font-semibold font-poppins mb-2">{skill.name}</h3>
                    <div className="flex justify-center md:justify-start items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${i < skill.rating ? 'text-yellow-400' : 'text-gray-400/40'}`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="ml-2 text-sm text-blue-200/80">({skill.rating}/5)</span>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
