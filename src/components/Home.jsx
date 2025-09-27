

function Home() {
    return(
        <div className="hero">  
            <h1 className="text-[3.5rem] bg-[linear-gradient(45deg,#ffffff,#e2e8f0)] bg-clip-text 
                text-transparent font-bold mb-4">
                Muneeb Nadeem
            </h1>

            <p className="text-[1.3rem] font-[400] opacity-[0.9] mb-8">Full Stack Developer & UI/UX Enthusiast</p>
            
            <a href="#project" className="inline-block px-[38px] py-[12px] bg-[rgba(255,255,255,0.2)]
            text-white no-underline rounded-[50px] font-semibold 
            border-2 border-[rgba(255,255,255,0.3)] backdrop-blur-[10px] transition-all 
            duration-500 ease-in-out 
            hover:bg-[rgba(255,255,255,0.3)] 
            hover:-translate-y-[2px] 
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">View Work</a>
        </div>
        
    )
}

export default Home;