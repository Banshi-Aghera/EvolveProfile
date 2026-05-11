import { motion } from 'framer-motion';

function WhatsAppIcon(props) {
    return (
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M19.11 17.2c-.27-.13-1.57-.78-1.81-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.34-.8-.71-1.34-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.33-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.33-.24.27-.93.91-.93 2.23 0 1.31.96 2.58 1.09 2.76.13.18 1.88 2.87 4.54 4.03.63.27 1.12.43 1.51.55.63.2 1.2.17 1.65.11.5-.07 1.57-.64 1.79-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31Z" />
            <path d="M16.03 3.2c-7.03 0-12.75 5.72-12.75 12.75 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.62-1.73a12.67 12.67 0 0 0 6.21 1.61h.01c7.03 0 12.76-5.72 12.76-12.75 0-3.4-1.32-6.59-3.73-9-2.4-2.4-5.59-3.73-9-3.73Zm0 23.32h-.01a10.53 10.53 0 0 1-5.36-1.47l-.38-.23-3.93 1.03 1.05-3.83-.25-.39a10.56 10.56 0 0 1-1.63-5.65c0-5.83 4.74-10.57 10.58-10.57 2.82 0 5.47 1.1 7.46 3.1 1.99 2 3.09 4.64 3.09 7.46 0 5.83-4.74 10.57-10.58 10.57Z" />
        </svg>
    );
}

export default function WhatsAppWidget() {
    return (
        <motion.a
            href="https://wa.me/919265988217?text=Hello%20EvolveWood%2C%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] flex items-center justify-center cursor-pointer"
            aria-label="Chat with us on WhatsApp"
        >
            <WhatsAppIcon className="h-8 w-8" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20 border border-white"></span>
            </span>
        </motion.a>
    );
}
