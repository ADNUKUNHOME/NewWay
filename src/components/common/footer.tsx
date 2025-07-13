const Footer = () => {
    return (
        <footer className="relative bg-black/90 border-t border-yellow-300/30 text-white/80 min-h-20 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} NewWay. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <a href="/terms" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;