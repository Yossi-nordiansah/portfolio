
const Footer = () => {
    return(
        <footer className='bg-slate-700 w-full py-6 px-2' id="contact" >
        <div className="flex sm:justify-center justify-between items-center">
            <div className="md:w-3/5 sm:w-[80%] w-[100%] xs:pl-0 pl-5 flex-col xs:flex-row flex justify-center lg:gap-48 md:gap-32 sm:gap-20 xs:gap-5 mb-3">
                <div>
                    <ul>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://wa.me/6285655230897" title="klik untuk kirim pesan" target="_blank" className="sm:text-base text-sm"><img src="/images/icons8-whatsapp-48.png" className="inline sm:w-9 w-6" alt="" /> 0856-5523-0897</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://www.instagram.com/yossi_nordiansah" title="klik untuk lihat instagram" target="_blank" className="sm:text-base text-sm"><img src="/images/icons8-instagram-48.png" className="inline sm:w-9 w-6 " alt="" /> @yossi_n</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="mailto:yossi.nordiansah99@gmail.com" className="sm:text-base text-[10px]"><img src="/icons/gmail.svg" className="inline sm:w-9 w-6 " alt="" /> yossi.nordiansah99@gmail.com</a></li>
                    </ul>   
                </div>
                <div>
                    <ul>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://github.com/Yossi-nordiansah" className="sm:text-base text-sm" title="klik untuk lihat Github" target="_blank"><img src="/images/icons8-github-30.png" className="inline sm:w-9 w-7 " alt="" /> Yossi-nordiansah</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://t.me/Yossi_nordiansah" className="sm:text-base text-sm" title="klik untuk lihat Telegram" target="_blank"><img src="/images/icons8-telegram-48.png" className="inline sm:w-9 w-6 " alt="" /> Yossi_nordiansah</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://www.linkedin.com/in/yossi-nordiansah-702ab628a/" title="klik untuk lihat Linkedin" className="sm:text-base text-sm" target="_blank"><img src="/icons/icons8-linkedin.svg" className="inline sm:w-9 w-6" alt="" /> Yossi Nordiansah</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center text-white font-poppins font-bold">
            </div>
    </footer>
    )
}

export default Footer;