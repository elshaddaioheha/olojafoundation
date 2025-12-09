export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-20">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-8">
                <div>
                    <h4 className="font-bold text-2xl mb-6">The Oloja Foundation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A home for everyone. We participate in providing homes and empowering communities globally.
                    </p>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-6 text-amber-500">Links</h5>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/about" className="hover:text-white">Our Mission</a></li>
                        <li><a href="#" className="hover:text-white">Events</a></li>
                        <li><a href="/members" className="hover:text-white">Member Stats</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-6 text-amber-500">Contact</h5>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>Abuja, Nigeria ; Jos, Nigeria</li>
                        <li>theolojafoundation@gmail.com</li>
                        <li>+234 907 617 4344</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-6 text-amber-500">Newsletter</h5>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email Address" className="bg-gray-800 border-none px-4 py-2 text-sm w-full text-white focus:outline-none focus:ring-1 focus:ring-amber-500" />
                        <button className="bg-amber-500 px-4 py-2 font-bold text-black text-sm">OK</button>
                    </div>
                </div>
            </div>
            <div className="container mt-20 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs px-4 md:px-8">
                &copy; {new Date().getFullYear()} The Oloja Foundation. All rights reserved.
            </div>
        </footer>
    );
}
