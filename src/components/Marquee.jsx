import React from 'react';

const Marquee = () => {
  const skills = ['Python', 'JavaScript', 'HTML', 'CSS', 'C++', 'Java', 'PHP', 'MySQL', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'];

  return (
    <div className="w-full overflow-hidden py-8 bg-white border-y border-black/10 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-20 pointer-events-none w-full"></div>
      
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {/* Render 2 identical groups to allow 50% translation for a seamless loop */}
        {[1, 2].map((group) => (
          <div key={group} className="flex items-center shrink-0 whitespace-nowrap" aria-hidden={group > 1}>
            {skills.map((skill, index) => (
              <React.Fragment key={`${group}-${index}`}>
                <span className="inline-flex items-center font-body text-xl font-medium text-text-secondary px-12 cursor-default hover:text-black transition-colors">
                  {skill}
                </span>
                <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-60"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
