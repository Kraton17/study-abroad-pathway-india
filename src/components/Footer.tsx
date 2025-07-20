import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">VisionAbroad</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for studying abroad. We provide comprehensive guidance from education loans to packing essentials, helping Indian students achieve their global education dreams.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-11-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@visionabroad.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Delhi, Mumbai, Bangalore</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/loans" className="text-primary-foreground/80 hover:text-accent transition-colors">Education Loans</Link></li>
              <li><Link to="/consultancies" className="text-primary-foreground/80 hover:text-accent transition-colors">Consultancies</Link></li>
              <li><Link to="/packing-guide" className="text-primary-foreground/80 hover:text-accent transition-colors">Packing Guide</Link></li>
              <li><Link to="/countries" className="text-primary-foreground/80 hover:text-accent transition-colors">Country Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
               <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">University Search</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Scholarship Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Visa Information</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 VisionAbroad. All rights reserved. Empowering Indian students to achieve global education dreams.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
