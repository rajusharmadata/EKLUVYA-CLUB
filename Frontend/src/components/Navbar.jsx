import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  Cpu,
  Mic,
  Palette,
  Calendar,
  Camera,
  Users,
  Mail,
  Sparkles,
  Home,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clubs = [
    {
      name: "Coding",
      path: "/coding",
      icon: Code,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      name: "Robotics",
      path: "/robotics",
      icon: Cpu,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      name: "Speakers",
      path: "/speakers",
      icon: Mic,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      name: "Hobbies",
      path: "/hobbies",
      icon: Palette,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Gallery", path: "/gallery", icon: Camera },
    { name: "About", path: "/about", icon: Users },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-50/90 backdrop-blur-lg shadow-md border-b border-gray-200"
            : "bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="group flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text ">
                  EKLAVYA
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="group relative px-4 py-2 text-gray-900 hover:text-indigo-600 transition-all duration-200 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </a>
              ))}

              {/* Clubs Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("clubs")}
                  className="group relative px-4 py-2 text-gray-900 hover:text-indigo-600 transition-all duration-200 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 flex items-center space-x-2"
                >
                  <span>Clubs</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition-transform duration-200 ${
                      activeDropdown === "clubs" ? "rotate-180" : ""
                    }`}
                  />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </button>

                {activeDropdown === "clubs" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      {clubs.map((club) => (
                        <a
                          key={club.name}
                          href={club.path}
                          className={`group flex items-center space-x-3 px-4 py-3 rounded-xl hover:${club.bgColor} transition-all duration-200`}
                        >
                          <div
                            className={`p-2 rounded-lg ${club.bgColor} group-hover:scale-110 transition-transform duration-200`}
                          >
                            <club.icon className={`w-5 h-5 ${club.color}`} />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-gray-900 group-hover:text-gray-800">
                              {club.name} Club
                            </span>
                            <p className="text-sm text-gray-600">
                              Join our community
                            </p>
                          </div>
                          <ChevronDown className="w-4 h-4 text-gray-500 rotate-[-90deg] group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 p-3 bg-gradient-to-r from-indigo-50 to-violet-50">
                      <a
                        href="/clubs"
                        className="block text-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        View All Clubs →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="ml-4">
                <a
                  href="/join"
                  className="group relative px-6 py-2 bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:from-purple-600 hover:to-violet-500 hover:shadow-xl hover:scale-105 hover:brightness-110"
                >
                  <span className="relative z-10 text-black hover:text-indigo-600 transition-all duration-200 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105">Join Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-violet-600 group-hover:brightness-125 transition-all duration-300"></div>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-900 hover:text-indigo-600 transition-colors duration-200 rounded-lg hover:bg-indigo-50"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-50/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-gray-500" />
                  <span className="font-semibold">{item.name}</span>
                </a>
              ))}

              {/* Mobile Clubs Section */}
              <div className="pt-2 border-t border-gray-200">
                <div className="px-4 py-2">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Clubs
                  </span>
                </div>
                {clubs.map((club) => (
                  <a
                    key={club.name}
                    href={club.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-gray-900 hover:text-indigo-600 hover:${club.bgColor} rounded-xl transition-all duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${club.bgColor}`}>
                      <club.icon className={`w-4 h-4 ${club.color}`} />
                    </div>
                    <span className="font-semibold">{club.name} Club</span>
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/join"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Join EKLUVYA Club
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
