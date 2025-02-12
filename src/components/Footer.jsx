import { useState } from "react";
import images from "./assets";

const Footer = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, message } = formData;
        const subject = 'New Message from Contact Form';
        const body = `You have received a new message from:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

        const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: images.facebook, name: 'Facebook', url: '#' },
        { icon: images.insta, name: 'Instagram', url: '#' },
        { icon: images.twitter, name: 'Twitter', url: '#' },
        { icon: images.yt, name: 'YouTube', url: '#' }
    ];

    const navigationLinks = [
        'Home', 'About Us', 'Products', 'Career', 'Contact Us'
    ];

    return (
        <footer id="contact" className="w-full">
            <div className="bg-black text-white py-3 px-4 md:px-14">
                <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="text-3xl font-light">Logo</div>

                    <div className="flex flex-wrap gap-8 items-center max-sm:justify-center">
                        <div className="flex items-center gap-4">
                            <span className="text-lg">Follow us</span>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="hover:opacity-80 transition-opacity"
                                    aria-label={social.name}
                                >
                                    <img src={social.icon} alt={social.name} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 hover:opacity-80 transition-colors"
                            aria-label="Back to top"
                        >
                            Back to Top
                            <img src={images.arrowup} alt="arrowup" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-4 max-sm:px-4 px-14">
                <div className="grid md:grid-cols-3 gap-8 grid-cols-2 max-sm:items-center ">
                    <div>
                        <div className="text-xl font-bold mb-4">Logo</div>
                        <address className="not-italic">
                            Company Address<br />
                            Street Name, City<br />
                            State, Country
                        </address>
                    </div>

                    <nav className="space-y-2 ">
                        {navigationLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block w-fit font-bold hover:translate-x-2 hover:text-primary-100 transition-transform"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    <form className="space-y-4  max-sm:col-span-2">
                        <div className="space-y-2 ">
                            <label htmlFor="name" className="block font-bold">Name</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="name"
                                className=" w-full px-3 py-2 border rounded focus:ring-2 outline-0 focus:ring-primary-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-bold">Email</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded focus:ring-2 outline-0 focus:ring-primary-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block font-bold">Phone Number</label>
                            <input
                                onChange={handleChange}
                                type="tel"
                                id="phone"
                                className="w-full px-3 py-2 border rounded focus:ring-2 outline-0 focus:ring-primary-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="block font-bold">Message</label>
                            <textarea
                                onChange={handleChange}
                                id="message"
                                rows={4}
                                className="w-full px-3 py-2 border rounded focus:ring-2 outline-0 focus:ring-primary-100"
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="bg-primary-100 text-white px-6 py-2 rounded  transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="text-center mt-8 text-sm font-black">
                    &copy; {new Date().getFullYear()} Pharma - All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;