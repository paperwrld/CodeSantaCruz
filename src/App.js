import { React, useRef } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function enhanceText(text) {
  return text.split('').map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));
}

function App() {
  const ref = useRef();

  return (
    <main>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer offset={0} speed={1}>
          <section className=" h-screen px-6 md:px-20 items-center flex flex-col  justify-center gap-4" >
            <div className="card ">
              <div id="text" className="flex gap-4  h-fit lg:scale-100 md:scale-75 scale-50">
                <h1 className="fancy text-green-300 flex justify-center text-center text-6xl">
                  { enhanceText("CODE") }
                </h1>
                <h1 className="flex gap-4 justify-center text-center text-6xl">
                  SANTA CRUZ
                </h1>
              </div>
              <div>
                <p className="text-lg md:text-2xl lg:text-2xl text-center">Creating future developers one line at a time.</p>
              </div>
            </div>
            <br/>
            <div className="text-center opacity-30">
              <h1 className="text-base md:text-lg lg:text-xl">SCROLL DOWN TO ACCESS CONTENT</h1>
              <span className="text-xl flex justify-center w-full text-center">
                <BsChevronDoubleDown/>
              </span>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.5}>
          <section className="flex flex-col gap-4">
            <h1 className="text-center py-12 text-5xl md:text-6xl lg:text-8xl text-green-300">OUR COMPANY</h1>
            <div className="card">
              <div className="w-full md:w-3/4 px-6 flex flex-col justify-center">
                <h1 className="text-green-300">About us:</h1>
                <p className="text-base">
                  Welcome to CodeBrew, where we aim to empower students for a promising future through engaging and beginner-friendly programming lessons. We encourage students to think outside the box, offering a supportive environment to explore coding as a healthy outlet for creativity. Our comprehensive curriculum teaches programming concepts and delves into real-world applications and general computer science topics. To ensure accessibility, we provide free software programs, except for artistic tools. Join us at CodeBrew to unlock your potential in the exciting world of software development and embark on a transformative educational journey.
                </p>
              </div>
              <div className="w-full md:w-3/4 px-6 flex flex-col justify-center">
                <h1 className="text-green-300">About me:</h1>
                <p className="text-base">
                  I'm Ethan Okamura, a computer science major pursuing a master's degree and an experienced software developer. As the founder of CodeBrew, I aim to be a mentor and teacher, providing affordable resources for students in Santa Cruz County. With a decade of programming expertise and a background in teaching, my goal is to instill a love for programming in my students while they have fun creating their dream projects. I am committed to continuous learning and strive to offer my students comprehensive knowledge and support. Join me at CodeBrew to ignite your passion for programming and embark on an exciting educational journey.
                </p>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} factor={1.5} speed={0.25}>
          <section className="flex flex-col gap-8">
            <h1 className="text-center py-12 text-5xl md:text-6xl lg:text-8xl text-green-300">OUR PROCESS</h1>
            <div className="card">

              <div className="">
                <div className="flex md:flex-row lg:flex-row flex-col">
                  <div className="w-full md:w-1/4 lg:w-1/4 md:pl-6 lg:pl-6 md:py-6 lg:py-6  flex justify-center">
                    <h1 className="md:leading-[10rem] lg:leading-[10rem] text-green-300 text-[50px] md:text-[150px] lg:text-[200px]">00</h1>
                  </div>
                  <div className="w-full md:w-3/4 lg:w-3/4 px-6 flex flex-col justify-center">
                    <h1 className="text-green-300">Our Goal:</h1>
                    <div className="flex flex-col gap-4">
                      <p>
                      By progressing through these three steps, students will acquire a comprehensive skill set in software development. Starting with the fundamentals of programming in C++, transitioning to game development with Unity and C#, and culminating in web development with JavaScript, HTML, and CSS, our online teaching service offers a seamless and rewarding learning journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex md:flex-row lg:flex-row flex-col">
                  <div className="w-full md:w-1/4 lg:w-1/4 md:pl-6 lg:pl-6 md:py-6 lg:py-6 flex justify-center">
                    <h1 className="md:leading-[10rem] lg:leading-[10rem] text-green-300 text-[50px] md:text-[150px] lg:text-[200px]">01</h1>
                  </div>
                  <div className="w-full md:w-3/4 lg:w-3/4 px-6 flex flex-col justify-center">
                    <h1 className="text-green-300">Introduction to programming: C++</h1>
                    <div className="flex flex-col gap-4">
                      <p>
                        In this first step of our online teaching service, we provide students with a solid foundation in programming through an introductory course in C++. C++ is a widely used language that is applicable to most programs and is highly sought after in the job market. Despite its initial reputation as a daunting language, when taught effectively, it can lead to excellent long-term results.
                      </p>
                      <p>
                        During this step, I draw on my experiences in college with C++ to guide students through the basics of general programming using C++. By acquiring fundamental knowledge of variables and algorithms in C++, students can seamlessly transition into game design, specifically utilizing the Unity engine.
                      </p>
                      <p>
                        Throughout our time together, I assign challenge problems with C++ for students to work on outside the lessons, allowing them to practice and reinforce their programming skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row lg:flex-row flex-col">
                <div className="w-full md:w-1/4 lg:w-1/4 md:pl-6 lg:pl-6 md:py-6 lg:py-6">
                  <h1 className="md:leading-[10rem] lg:leading-[10rem] text-green-300 text-[50px] md:text-[150px] lg:text-[200px] flex justify-center">02</h1>
                </div>
                <div className="w-full md:w-3/4 lg:w-3/4 px-6 flex flex-col justify-center">
                  <h1 className="text-green-300">Game developement with C# and Unity2D</h1>
                  <div className="flex flex-col gap-4">
                      <p>
                        Building upon the students' understanding of C++ from Step 1, we delve into the exciting world of game development using C# in conjunction with the Unity game engine. As the instructor, this section is my favorite due to its interactive nature and immediate results.
                      </p>
                      <p>
                        Game design empowers students to express themselves through programming, graphic design, and sound design, creating a highly engaging learning experience. Unity's exceptional error report system facilitates the identification and resolution of errors, enabling students to learn from their mistakes and refine their games.
                      </p>
                      <p>
                        This step represents the most intensive part of the lessons, as we dedicate ample time to exploring Unity and C# concepts. Furthermore, Unity allows for the conversion of games to WebGL, which facilitates the embedding of games in websites. This opens the door to exploring topics such as JavaScript, CSS, and HTML, creating a seamless transition to web development.
                      </p>
                    </div>
                </div>
              </div>
              <div className="flex md:flex-row lg:flex-row flex-col">
                <div className="w-full md:w-1/4 lg:w-1/4 md:pl-6 lg:pl-6">
                  <h1 className="md:leading-[10rem] lg:leading-[10rem] text-green-300 text-[50px] md:text-[150px] lg:text-[200px] flex justify-center">03</h1>
                </div>
                <div className="w-full md:w-3/4 lg:w-3/4 px-6 flex flex-col justify-center">
                  <h1 className="text-green-300">Web developement with JavaScript, HTML and CSS</h1>
                  <div className="flex flex-col gap-4">
                    <p>
                      In the final step of our online teaching service, we guide students through the realm of web development, focusing on JavaScript, HTML, and CSS. Students will actively work on creating and enhancing their own websites, including a dedicated page where they can showcase their games and overall progress.                
                    </p>
                    <p>
                      By using HTML and CSS, students will learn to create visually appealing and interactive web pages. JavaScript further enriches the web development experience by enabling students to make their websites more dynamic and responsive.
                    </p>
                    <p>
                      This step serves as an excellent opportunity for students to demonstrate their accomplishments to both their peers and parents through the personalized pages they design and create. Additionally, it equips students with essential skills in creating modern-day web applications and websites, as JavaScript is a sought-after programming language for software engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={3.25} speed={0.2} onClick={() => ref.current.scrollTo(0)}>
          <section className="pb-36 text-center flex flex-col gap-4">
            <div className="card">
              <h1 className="text-center text-xl md:text-2xl lg:text-4xl text-green-300">CONTACT US VIA EMAIL OR JOIN OUR DISCORD!</h1>
              <div className="flex flex-col">
                <p className="text-xl">ethan@codesantacruz.com</p>
                <a href="https://discord.gg/MM9CeTqWE3" className="text-xl hover:text-opacity-20">Discord Link</a>
              </div>
            </div>
            <div className="text-center opacity-30">
              <h1 className="text-base md:text-lg lg:text-xl">(Click here to go back to top)</h1>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}

export default App;
