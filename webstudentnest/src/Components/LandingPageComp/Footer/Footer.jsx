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
              The smartest way for students to find safe housing and the perfect roommates.
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
                support@studentnest.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors cursor-pointer group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +962 78 000 0000
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
          
          
          <div className="flex gap-4">
            {[
              { name: 'FB', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z' },
              { name: 'TW', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { name: 'IG', icon: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z' }
            ].map((soc) => (
              <a 
                key={soc.name}
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-[#3f51b5] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={soc.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}