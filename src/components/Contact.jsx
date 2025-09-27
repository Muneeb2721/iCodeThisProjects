function Contact() {
    return (
        <div id="contact" className="contact-section flex flex-col gap-8">

            <div className="text-center w-fit mx-auto mt-20">
                <h1 className="contact-head text-[2.5rem] font-[700]">
                    Let's Connect
                </h1>
                <div className="hr w-[60px] h-[4px] mx-auto mt-3"></div>
            </div>

            <div className="max-w-[610px] mx-auto text-center">
                <p className="contact-head-line text-[1.2rem] mb-[2rem] opacity-90 font-semibold">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
            </div>

            <div className="contact-list">
                <div className="contact-link flex items-center gap-[1rem] py-[1.5rem] px-[2rem] rounded-[50px] backdrop-blur-[10px] transition-transform duration-300 ease-in-out hover:scale-105 w-fit mx-auto mb-8">
                    <div className="w-[50px] h-[50px] rounded-[50%] bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[1.6rem]">📧</div>
                    <p className="contact-link-para text-[1.2rem]">
                        <a href="">muneebnadeem1870@gmail.com</a>
                    </p>
                </div>
                <div className="contact-link flex items-center gap-[1rem] py-[1.5rem] px-[2rem] rounded-[50px] backdrop-blur-[10px] transition-transform duration-300 ease-in-out hover:scale-105 w-fit mx-auto mb-8">
                    <div className="w-[50px] h-[50px] rounded-[50%] bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[1.6rem]">💼</div>
                    <p className="contact-link-para text-[1.2rem]">
                       <a href="https://www.linkedin.com/in/muneebnadeem/">linkedin.com/in/muneebnadeem</a>
                    </p>
                </div>
                <div className="contact-link flex items-center gap-[1rem] py-[1.5rem] px-[2rem] rounded-[50px] backdrop-blur-[10px] transition-transform duration-300 ease-in-out hover:scale-105 w-fit mx-auto mb-8">
                    <div className="w-[50px] h-[50px] rounded-[50%] bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[1.6rem]">🐙</div>
                    <p className="contact-link-para text-[1.2rem]">
                        <a href="https://github.com/Muneeb2721">github.com/MuneebNadeem2721</a>
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Contact;