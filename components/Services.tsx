import React, { useEffect, useRef } from "react";
import { SERVICES } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const partnershipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Service cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      // CTA section animation
      gsap.fromTo(
        partnershipRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnershipRef.current,
            start: "top 85%",
          },
        }
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={servicesRef}
      id="services"
      className="
        relative pt-40 pb-24
        bg-transparent
        overflow-hidden
      "
    >
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
            Core Services
          </h2>
          <h3 className="text-4xl font-extrabold text-white mb-6">
            Comprehensive Support for Academic & Career Excellence
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            We provide structured, industry-aligned services that empower
            students, institutions, and professionals to succeed in today’s
            competitive environment.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {SERVICES.map((service, index) => {
            const colorSchemes = [
              { bg: "bg-blue-900/30", text: "text-blue-400", hoverBg: "group-hover:bg-blue-600" },
              { bg: "bg-purple-900/30", text: "text-purple-400", hoverBg: "group-hover:bg-purple-600" },
              { bg: "bg-emerald-900/30", text: "text-emerald-400", hoverBg: "group-hover:bg-emerald-600" },
              { bg: "bg-amber-900/30", text: "text-amber-400", hoverBg: "group-hover:bg-amber-600" },
              { bg: "bg-rose-900/30", text: "text-rose-400", hoverBg: "group-hover:bg-rose-600" },
              { bg: "bg-cyan-900/30", text: "text-cyan-400", hoverBg: "group-hover:bg-cyan-600" },
            ];
            const colors = colorSchemes[index % colorSchemes.length];
            
            return (
            <div
              key={index}
              className="
                bg-slate-900/50 backdrop-blur
                p-8
                rounded-2xl
                border border-slate-700
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
                group cursor-pointer
              "
            >
              <div
                className={`
                  ${colors.bg}
                  ${colors.text}
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  mb-6
                  ${colors.hoverBg}
                  group-hover:text-white
                  transition-colors
                `}
              >
                {service.icon}
              </div>

              <h4 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h4>

              <p className="text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          )})}
        </div>

        {/* RESEARCH CTA */}
        <div
          ref={partnershipRef}
          className="
            mt-20
            p-12
            bg-slate-900/50 backdrop-blur
            border border-slate-700
            rounded-3xl
            flex flex-col md:flex-row
            items-center justify-between gap-10
            shadow-sm hover:shadow-md
            transition-all
          "
        >
          <div className="max-w-xl">
            <h4 className="text-2xl font-bold text-white mb-3">
              Research Paper Writing & Publication Support
            </h4>
            <p className="text-slate-300 leading-relaxed">
              We assist students and faculty with research idea formulation,
              paper drafting, plagiarism correction, formatting, and submission
              guidance for IEEE, Scopus, and UGC-approved journals.
            </p>
          </div>

          <a
            href="/contact"
            className="
              px-8 py-3
              bg-blue-600
              text-white
              font-semibold
              rounded-xl
              hover:bg-blue-700
              hover:scale-105
              transition-all
              whitespace-nowrap
            "
          >
            Get Publication Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
