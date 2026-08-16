import * as React from "react";

export function WhatsAppButton() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=9779744412331"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 group h-14 w-14 md:hover:w-40 gap-0 md:hover:gap-2 overflow-hidden"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulse Ring Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping md:group-hover:animate-none" />
            
            {/* WhatsApp SVG Icon */}
            <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-12 shrink-0"
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437 0 9.862-4.424 9.866-9.864.002-2.637-1.023-5.115-2.887-6.979C16.378 1.898 13.9 1.848 11.26 1.848c-5.44 0-9.865 4.424-9.869 9.864-.001 1.745.466 3.447 1.353 4.96L1.73 21.082l4.917-1.928zM17.447 14.9c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.15-.688.15-.203.3-.787.983-.965 1.185-.178.203-.356.228-.656.078-1.033-.518-1.879-1.127-2.635-1.78-.622-.537-1.042-1.2-1.164-1.403-.122-.203-.013-.312.087-.413.09-.09.203-.229.304-.343.1-.115.134-.191.203-.318.069-.127.034-.24-.017-.34-.051-.1-.485-1.17-.665-1.6-.175-.42-.367-.362-.505-.369-.13-.007-.28-.009-.43-.009-.15 0-.394.056-.6.282-.206.226-.787.77-0.787 1.878 0 1.11.807 2.18.919 2.333.112.153 1.587 2.424 3.844 3.4.536.232.955.372 1.28.476.54.172 1.03.148 1.417.09.431-.064 1.782-.729 2.03-1.432.248-.703.248-1.306.173-1.432-.075-.126-.28-.203-.58-.353z" />
            </svg>
            
            {/* Sliding text label */}
            <span className="max-w-0 opacity-0 md:group-hover:max-w-xs md:group-hover:opacity-100 transition-all duration-300 ease-in-out text-sm font-semibold whitespace-nowrap relative z-10 shrink-0">
                Chat with us
            </span>
        </a>
    );
}
