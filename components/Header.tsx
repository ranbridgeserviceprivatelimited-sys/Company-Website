import React, { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Linkedin, Phone, Twitter, Youtube } from "lucide-react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOnHero, setIsOnHero] = useState(true);

  const iconsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  /* Scroll hide / show */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
      setIsOnHero(currentScrollY < window.innerHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Opening animations */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      iconsRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        navRef.current,
        { scale: 0.9, opacity: 0, filter: "blur(8px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        logoRef.current,
        { scale: 0.85, rotation: -5, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        menuItemsRef.current?.querySelectorAll(".nav-link"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  /* Magnetic + underline hover */
  useEffect(() => {
    const items = menuItemsRef.current?.querySelectorAll(".nav-link");
    if (!items) return;

    items.forEach((item) => {
      const underline = item.querySelector(".underline");

      const move = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(item, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
      };

      const enter = () => {
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power3.out" });
      };

      const leave = () => {
        gsap.to(item, { x: 0, y: 0, duration: 0.3 });
        gsap.to(underline, { scaleX: 0, duration: 0.3 });
      };

      item.addEventListener("mousemove", move);
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });
  }, []);

  const handleIconHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1.15, rotation: 6, duration: 0.3 });
  };

  const handleIconLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1, rotation: 0, duration: 0.3 });
  };

  return (
    <header
      className={`fixed top-6 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔝 SOCIAL + CONTACT */}
        {/* 🔝 SOCIAL + CONTACT */}
        <div ref={iconsRef} className="grid grid-cols-3 items-center px-28 mb-4">
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61578597456959"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Facebook size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://www.instagram.com/rspl_academy?igsh=MXE3NWY3ZmNiNmtucg=="
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://x.com/RanbridgePvtLtd"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Twitter size={16} />
            </a>

            <a
              href="https://www.youtube.com/@RSPL-Academy"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Youtube size={16} />
            </a>
          </div>

          <div />

          <div className="flex justify-end">
            <a
              href="tel:+918247392437"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Phone size={14} />
              <span>+91 82473 92437</span>
            </a>
          </div>
        </div>

        {/* 🔽 NAVBAR */}
        <div ref={navRef} className="bg-slate-900/80 backdrop-blur-md rounded-full shadow-lg shadow-blue-900/10 px-28 py-2 border border-slate-700/50">
          <div ref={menuItemsRef} className="grid grid-cols-3 items-center">

            {/* LEFT */}
            <nav className="flex gap-24 text-sm font-semibold text-slate-200">
              {["/", "/about", "/services"].map((path, i) => {
                const isActive = location.pathname === path;
                return (
                  <Link key={i} to={path} className={`nav-link relative transition-colors ${isActive ? "text-white" : "hover:text-white"}`}>
                    {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
                    <span
                      className={`underline absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 origin-center transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* LOGO */}
            <div className="flex justify-center">
              <img
                ref={logoRef}
                src="https://ik.imagekit.io/lg14qfjkg/RANBIDGE%20SOLUTIONS%20PRIVATE%20LIMITED.png"
                alt="Ranbidge Logo"
                className="h-20 object-contain brightness-0 invert"
              />
            </div>

            {/* RIGHT */}
            <nav className="flex justify-end gap-20 text-sm font-semibold text-slate-200">
              {["/domains", "/internship", "/contact"].map((path, i) => {
                const isActive = location.pathname === path;
                return (
                  <Link key={i} to={path} className={`nav-link relative transition-colors ${isActive ? "text-white" : "hover:text-white"}`}>
                    {path.replace("/", "").toUpperCase()}
                    <span
                      className={`underline absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 origin-center transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                );
              })}
            </nav>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
