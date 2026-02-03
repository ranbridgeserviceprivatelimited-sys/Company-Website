import React, { useEffect, useRef } from 'react';
import { Clock, Monitor, UserCheck, Award, FileCheck, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Internship: React.FC = () => {
  const internshipRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftContentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(rightContentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, internshipRef);

    return () => ctx.revert();
  }, []);

  const modelSpecs = [
    { icon: <Calendar className="text-blue-600" />, label: "Duration", value: "4–8 Weeks", detail: "Flexible based on academic calendar" },
    { icon: <Monitor className="text-blue-600" />, label: "Mode", value: "Hybrid / Online / Offline", detail: "Tailored to student convenience" },
    { icon: <Clock className="text-blue-600" />, label: "Time Commitment", value: "1–2 Hours Daily", detail: "Designed not to hinder regular classes" },
    { icon: <UserCheck className="text-blue-600" />, label: "Mentorship", value: "Industry-Guided", detail: "Direct interaction with experts" },
    { icon: <FileCheck className="text-blue-600" />, label: "Projects", value: "Mini + Final Project", detail: "Real-world application based" },
    { icon: <Award className="text-blue-600" />, label: "Certification", value: "Standardized Certificate", detail: "Valued Internship Completion Certificate" }
  ];

  return (
    <section ref={internshipRef} className="pt-40 pb-24 bg-transparent page-break">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Internship Program</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Structured Learning Experience
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our internship model is carefully crafted to ensure maximum learning with minimum disruption to regular academic schedules. We focus on ethical engagement and practical output.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={leftContentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">A Structured Approach to Real-World Learning</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our internship model is carefully crafted to ensure maximum learning with minimum disruption to regular academic schedules. We focus on ethical engagement and practical output.
              </p>

              <ul className="space-y-4">
                {[
                  "No exploitation of student resources",
                  "Clear learning outcomes for every week",
                  "Structured assessment and feedback loops",
                  "Industry-relevant tech stack focus"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-8 rounded-2xl border border-blue-900/50">
              <h4 className="text-2xl font-bold text-white mb-4">Why Choose Our Internship Program?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <UserCheck className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <FileCheck className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Real Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <Award className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-lg">
                    <Monitor className="text-blue-400 w-5 h-5" />
                  </div>
                  <span className="text-slate-300">Flexible Mode</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightContentRef} className="space-y-6">
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Program Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modelSpecs.map((spec, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                    <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {spec.icon}
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{spec.label}</p>
                    <h4 className="text-white font-bold text-lg mb-2">{spec.value}</h4>
                    <p className="text-slate-400 text-sm">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Join our internship program and gain the practical experience that employers are looking for. Transform your academic knowledge into professional skills.
              </p>

              <a
                href="https://ranbidge-intern-4djb.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;