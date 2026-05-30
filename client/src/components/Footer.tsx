import { SiFacebook, SiInsta360, SiX } from "@icons-pack/react-simple-icons";
import { BikeIcon, MailIcon, MapPin, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { footerData } from "../assets/assets";

const Footer = () => {
  const { bottom, brand, contact, sections } = footerData;
  return (
    <footer className="bg-app-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BikeIcon className="size-4 text-white" />
              <span className="text-xl font-semibold">{brand.name}</span>
            </Link>
            <p className="text-sm text-white/70">{brand.description}</p>
            <div className="flex items-center gap-3">
              {brand.socials.map((social, i) => (
                <Link
                  to={`/${social.link}`}
                  className="size-9 rounded-lg bg-white/10 flex-center hover:bg-white/2"
                  key={i}
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamics Sections */}
          {sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to as string}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">contact us</h3>
            <ul className="space-y-2.5">
              {contact.map((contact, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="text-sm text-white/70 hover:text-white flex items-center gap-3"
                  >
                    <contact.icon className="size-5 text-white" />
                    {contact.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">{bottom.copyright}</p>
          <div className="space-x-4">
            {bottom.links.map((link, i) => (
              <Link to={link.href} className="text-xs text-white/40" key={i}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
