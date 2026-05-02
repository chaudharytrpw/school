import Link from "next/link";

export default function Footers() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Text */}
        <p className="text-sm text-center md:text-left">
          Copyright All Right Reserved 2026, Goodlayers
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          
          {/* Facebook */}
          <Link href="#" className="hover:text-green-400 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.6v-2.9h2.6V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link href="#" className="hover:text-green-400 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.6v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6v10h-4v-8.8c0-2.1 0-4.8-2.9-4.8s-3.3 2.3-3.3 4.6V24h-4V8z" />
            </svg>
          </Link>

          {/* Skype */}
          <Link href="#" className="hover:text-green-400 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0a9 9 0 0 0-7.5 13.9A6.5 6.5 0 0 0 12 24a6.5 6.5 0 0 0 6.5-6.5 9 9 0 0 0-6.5-17.5zm1.2 16.6c-1.5 0-2.7-.6-3.4-1.7l1.3-1.3c.5.7 1.2 1.1 2.1 1.1.8 0 1.3-.3 1.3-.9 0-.6-.5-.8-1.6-1.1-1.5-.4-2.7-.9-2.7-2.5 0-1.5 1.3-2.5 3-2.5 1.3 0 2.3.5 3 1.4l-1.2 1.2c-.4-.6-1-.9-1.7-.9-.7 0-1.1.3-1.1.8 0 .6.6.8 1.7 1.1 1.6.4 2.6 1 2.6 2.6 0 1.6-1.3 2.7-3.3 2.7z" />
            </svg>
          </Link>

          {/* X (Twitter) */}
          <Link href="#" className="hover:text-green-400 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.35-6.58L4.5 22H2l7.03-8.04L2 2h6.828l4.88 6.02L18.244 2zm-2.4 18h1.88L7.1 4H5.16l10.684 16z"/>
            </svg>
          </Link>

          {/* Instagram */}
          <Link href="#" className="hover:text-green-400 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 7.5A3 3 0 1 0 9 12a3 3 0 0 0 3 3zm4.8-7.7a1.05 1.05 0 1 1-1.05-1.05 1.05 1.05 0 0 1 1.05 1.05z"/>
            </svg>
          </Link>

        </div>
      </div>
    </footer>
  );
}