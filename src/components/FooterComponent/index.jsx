import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer className="bg-[#F5F5F5] text-gray-800 py-16 px-8 sm:px-16 lg:px-32 font-popins">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Explore Auto Cloud</h2>
                        <ul className="space-y-3">
                            <li><Link to="/available" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Pure</Link></li>
                            <li><Link to="/about" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Touring</Link></li>
                            <li><Link to="/available" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Sapphire</Link></li>
                            <li><Link to="/available" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Available Cars</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Test Drive</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">More</h2>
                        <ul className="space-y-3">
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Ownership</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Referral Program</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Accessories & Lifestyle</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Contact Us</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Locations</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Events</Link></li>
                        </ul>
                    </div>

                    <div className="lg:ml-auto">
                        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-6">
                            <Link to="#" className="hover:text-gray-600 transition duration-300 ease-in-out">
                                <FaFacebookF size={24} />
                            </Link>
                            <Link to="#" className="hover:text-gray-600 transition duration-300 ease-in-out">
                                <FaTwitter size={24} />
                            </Link>
                            <Link to="#" className="hover:text-gray-600 transition duration-300 ease-in-out">
                                <FaInstagram size={24} />
                            </Link>
                            <Link to="#" className="hover:text-gray-600 transition duration-300 ease-in-out">
                                <FaLinkedinIn size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-300" />

                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    <p className="text-sm text-gray-600">©2024 Auto Cloud. All rights reserved</p>
                    <div className="flex space-x-6 text-sm">
                        <Link to="#" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Legal</Link>
                        <Link to="#" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Privacy Policy</Link>
                        <Link to="#" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Cookie Settings</Link>
                        <Link to="#" className="hover:underline hover:text-gray-600 transition duration-300 ease-in-out">Do Not Sell or Share My Personal Information</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
