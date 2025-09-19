import profile from '../assets/profile.png';

function About() {
    return (
        <div className="bg-white flex flex-col gap-16 mb-20">
            
            <div className=" text-center w-fit mx-auto mt-20">
                <h1 className="about-head text-[2.5rem] font-[700] text-[#1e293b]">
                    About Me
                </h1>
                <div className="hr w-[60px] h-[4px] mx-auto mt-3"></div>
            </div>

            <div className="about-container flex items-center
                xl:px-[154px] xl:flex-row 
                lg:px-[54px] lg:flex-row lg:gap-0
                sm:flex-col sm:gap-16">
                
                <div className="image-container rounded-[20px]
                    flex items-center justify-center text-[#4f46e5] mx-auto
                    xl:px-[64px]
                    lg:px-[54px]
                    sm:w-[300px] sm:h-[300px] ">
                    <img src={profile} alt="" />
                </div>
                
                <div className="about-text text-[1.1rem] text-[#475569]
                    xl:pl-[90px]
                    lg:pl-[80px]
                    sm:px-[90px]">
                    <h2 className="text-[#1e293b] text-[1.8rem] font-[700] 
                    lg:mb-4
                    lg:text-left
                    sm:text-center
                    sm:mb-8">Building Digital Experiences</h2>
                    <p className="mb-2">
                        💡 My journey in web development started with a simple curiosity: how do websites become engaging and interactive? Over the past 2+ years, I’ve turned that curiosity into practice by building responsive websites and continuously sharpening my skills.
                    </p> <br />
                    <p className="mb-2">
                        🏢 Currently, I’m an <b>Angular Developer at Axis Coding Solutions,</b>  where I work on live projects to deliver modern and scalable solutions. After office hours, you’ll often find me experimenting with <b>React.js, Next.js, and TypeScript</b> on personal projects. 
                    </p> <br /> 
                    <p className="">
                        🎨 To give my work more creativity, I’m learning <b>UI/UX design,</b> aiming to combine technical skills with design thinking for impactful digital experiences.
                    </p>
                </div>

            </div> 
        </div>
    );
}

export default About;