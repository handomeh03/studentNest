export default function Footer() {
  const primaryColor = "#3f51b5";

  return (
    <footer style={{ backgroundColor: primaryColor }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tight">
              StudentNest
            </h3>
            <p className="text-blue-100/80 max-w-xs mx-auto md:mx-0 leading-relaxed">
              The smartest way for students to find safe housing and the perfect roommates
            </p>
          </div>

          
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-blue-200">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors cursor-pointer group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                info@studentnest.cloud
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors cursor-pointer group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +962 78 258 4258
              </li>
            </ul>
          </div>

          
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-blue-200">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              {['About Us', 'How it works', 'Privacy Policy'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit mx-auto md:mx-0"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/60 text-sm font-light">
            © {new Date().getFullYear()} <span className="font-semibold text-white">StudentNest</span>. All rights reserved.
          </p>
          
      
        </div>
      </div>
    </footer>
  );
}