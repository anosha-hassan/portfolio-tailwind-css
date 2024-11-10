import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in">
            <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
            <p className='text-gray-500 pt-2'>
            I am passionate about creating intuitive and dynamic user interfaces. Proficient in HTML, CSS, and JavaScript, I strive to deliver high-quality, responsive websites. I enjoy learning new technologies and improving my skills to provide exceptional user experiences.
            </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in">Typescript</h2>
                    <h2 data-aos="zoom-in">React.js</h2>
                    <h2 data-aos="zoom-in">Next.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in">Tailwind</h2>
                    <h2 data-aos="zoom-in">CSS</h2>
                    <h2 data-aos="zoom-in">Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
