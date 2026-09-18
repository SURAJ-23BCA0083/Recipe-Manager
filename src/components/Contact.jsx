import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-light to-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-primary mb-6">
                        Get in <span className="text-accent">Touch</span>
                    </h1>
                    <p className="text-xl text-neutral">
                        Have a question or suggestion? We'd love to hear from you. Reach out to us today!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Email */}
                    <div className="bg-white rounded-xl p-6 shadow-card text-center">
                        <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-mail-line text-2xl text-accent"></i>
                        </div>
                        <h3 className="font-bold text-primary mb-2">Email</h3>
                        <a href="mailto:hello@recipehub.com" className="text-neutral hover:text-accent transition">
                            hello@recipehub.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="bg-white rounded-xl p-6 shadow-card text-center">
                        <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-phone-line text-2xl text-accent"></i>
                        </div>
                        <h3 className="font-bold text-primary mb-2">Phone</h3>
                        <a href="tel:+1234567890" className="text-neutral hover:text-accent transition">
                            +1 (234) 567-890
                        </a>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-xl p-6 shadow-card text-center">
                        <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="ri-map-pin-line text-2xl text-accent"></i>
                        </div>
                        <h3 className="font-bold text-primary mb-2">Address</h3>
                        <p className="text-neutral">123 Culinary Lane<br/>Food City, FC 12345</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl p-8 shadow-card">
                    <h2 className="text-2xl font-bold text-primary mb-8">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            className="input-field resize-none"
                            required
                        ></textarea>
                        <button type="submit" className="btn-primary w-full">
                            Send Message <i className="ri-send-plane-line ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
