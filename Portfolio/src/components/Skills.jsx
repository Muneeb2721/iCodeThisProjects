function Skill() {
    return (
        <div className="bg-[#f8fafc] flex flex-col gap-16 pb-16">
            
            <div className=" text-center w-fit mx-auto mt-20">
                <h1 className="skill-head text-[2.5rem] font-[700] text-[#1e293b]">
                    Skills & Expertise
                </h1>
                <div className="hr w-[60px] h-[4px] mx-auto mt-3"></div>
            </div>

            <div className="skill-container flex items-baseline gap-8 
            xl:px-20
            lg:px-12 lg:flex-nowrap
            md:flex-wrap md:px-40">
                
                <div className="skill-category rounded-[16px] bg-white p-[2rem]">

                    <div className="skill-div flex items-center mb-[1.5rem]">
                        <div className="skill-icon text-[#d97706] text-[1.5rem] mr-[1rem]
                            w-[50px] h-[50px] rounded-[12px]
                            flex items-center justify-center
                            bg-[linear-gradient(135deg,_#fef3c7,_#fed7aa)]">🎨</div>
                        <h2 className="skill-subhead font-[700] text-[1.3rem]">Frontend Development</h2>
                    </div>

                    <div className="languages flex flex-wrap gap-3">
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">React</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Next.js</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Angular</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">TypeScript</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">TailwindCSS</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Vue.js</span>
                    </div>
                </div>

                <div className="skill-category rounded-[16px] bg-white p-[2rem]">

                    <div className="skill-div flex items-center mb-[1.5rem]">
                        <div className="skill-icon text-[#7c3aed] text-[1.5rem] mr-[1rem]
                            w-[50px] h-[50px] rounded-[12px]
                            flex items-center justify-center
                            bg-[linear-gradient(135deg,_#ddd6fe,_#c4b5fd)]">⚙️</div>
                        <h2 className="skill-subhead font-[700] text-[1.3rem]">Backend Development</h2>
                    </div>

                    <div className="languages flex flex-wrap gap-3">
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Node.js</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Python</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Express.js</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">PostgreSQL</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">MongoDB</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Redis</span>
                    </div>
                </div>

                <div className="skill-category rounded-[16px] bg-white p-[2rem]">

                    <div className="skill-div flex items-center mb-[1.5rem]">
                        <div className="skill-icon text-[#059669] text-[1.5rem] mr-[1rem]
                            w-[50px] h-[50px] rounded-[12px]
                            flex items-center justify-center
                            bg-[linear-gradient(135deg,_#dcfce7,_#bbf7d0)]">🛠️</div>
                        <h2 className="skill-subhead font-[700] text-[1.3rem]">Tools & DevOps</h2>
                    </div>

                    <div className="languages flex flex-wrap gap-3">
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">AWS</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Docker</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Git</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">CI/CD</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Figma</span>
                        <span className="bg-[#f1f5f9] text-[#475569] py-[0.4rem] px-[0.8rem]
                            rounded-[20px] text-[0.85rem] font-[500] w-fit">Linux</span>
                    </div>
                </div>
                

            </div> 
        </div>
    );
}

export default Skill;