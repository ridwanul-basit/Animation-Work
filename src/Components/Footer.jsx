import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FDF35E] text-[#5E362C] px-7 py-12">
      {/* Top Row */}
      <div className="grid grid-cols-2 gap-8 mb-80">
        {/* Left: Brand */}
        <div>
          <h1 className="text-7xl font-bold">Buenas Ondas</h1>
        </div>

        {/* Right: Contact Info */}
        <div className="">
          <h2 className="text-7xl font-bold">info@mysite.com</h2>
          <h3 className="text-7xl font-bold mt-2">123-456-7890</h3>
          <p className="mt-4 text-lg">
            500 Terry Francine Street, San Francisco, CA 94158
          </p>
        </div>
      </div>

      

      {/* Bottom Row */}
      <div className="grid grid-cols-4 gap-6 text-sm pt-14">
        {/* Column 1 */}
        <div className="space-y-2">
          <p>About</p>
          <p>Blog</p>
          <p>Events</p>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
        </div>

        {/* Column 3 */}
        <div className="space-y-2">
          <p>Instagram</p>
          <p>Facebook</p>
        </div>

        {/* Column 4 */}
        <div className="">
          <p>© 2035 by Buenas Ondas.</p>
          <p>
            Made with <span className="underline">Wix Studio™</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
