import React from 'react';

const ContactFormComponent = () => {
  return (
    <div className="border border-[whitesmoke] p-4 sm:p-6 rounded-md w-full max-w-lg mx-auto mt-24">
      <h2 className="text-left font-popins text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Contact Form</h2>

      <form className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[#D7BE96] uppercase mb-1 font-popins">First Name</label>
            <input type="text" className="w-full p-2 border rounded-md bg-white" />
          </div>

          <div>
            <label className="block text-xs text-[#D7BE96] uppercase mb-1 font-popins">Last Name</label>
            <input type="text" className="w-full p-2 border rounded-md bg-white" />
          </div>
        </div>

        <div>
          <label className="block text-xs text-[#D7BE96] uppercase mb-1 font-popins">Email</label>
          <input type="email" className="w-full p-2 border rounded-md bg-white" />
        </div>

        <div>
          <label className="block text-xs text-[#D7BE96] uppercase mb-1 font-popins">Phone</label>
          <input type="tel" className="w-full p-2 border rounded-md bg-white" />
        </div>

        <div>
          <label className="block text-xs text-[#D7BE96] uppercase mb-1 font-popins">Country</label>
          <input type="text" className="w-full p-2 border rounded-md bg-white" />
        </div>

        <div>
          <label className="block text-xs text-[#D7BE96] uppercase mb-1 font-popins">Message</label>
          <textarea className="w-full h-24 sm:h-32 p-2 border rounded-md bg-white"></textarea>
        </div>

        <div>
          <label className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span className="text-xs text-white font-popins tracking-wide">
              Join our mailing list for all Lucid Motors announcements.
            </span>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span className="text-xs text-white font-popins tracking-wide">
              By checking this box, I consent to receiving telemarketing calls or texts at the number entered above by, or on behalf of, Lucid Motors and its affiliates. Consent is not a condition of purchase. Carrier charges may apply.
            </span>
          </label>
        </div>

        <p className="text-xs text-white tracking-wide">
          By submitting this form, you understand that Lucid will process your information according to its Privacy Policy and you agree to the website Terms of Use.
        </p>

        <button className="w-full bg-[#D7BE96] text-black p-3 rounded-md hover:bg-[#C5AD84] transition-colors">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactFormComponent;