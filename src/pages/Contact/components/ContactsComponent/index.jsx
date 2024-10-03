import React from 'react';
import ContactFormComponent from "../ContactFormComponent";

const ContactsComponent = () => {
    return (
        <div className="relative  p-4 sm:p-8 md:p-14 w-full min-h-screen bg-black">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-evenly h-full">
                <div className="mt-8 lg:mt-32 lg:w-1/2">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-popins">Cloud Auto</h1>
                    <div className="mt-10 lg:mt-20 space-y-10 lg:space-y-14">
                        {[1, 2, 3].map((index) => (
                            <div key={index}>
                                <p className="text-white text-xl font-popins">Customer Care</p>
                                <p className="text-slate-400 mt-1 font-railway text-sm">Monday - Sunday</p>
                                <p className="text-slate-400 mt-1 font-railway text-sm">Email, text or call.</p>
                                <p className="text-[#D7BE96] font-railway text-base">customercare@cloudauto.com</p>
                                <p className="text-[#D7BE96] font-railway text-base">+1 (888) 995-8243</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:w-1/2">
                    <ContactFormComponent />
                </div>
            </div>
        </div>
    );
}

export default ContactsComponent;