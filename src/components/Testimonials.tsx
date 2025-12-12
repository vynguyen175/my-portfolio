'use client';

import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Corp',
    content: 'Working with Vy was an absolute pleasure. The attention to detail and technical expertise brought our vision to life perfectly.',
    image: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    content: 'Exceptional work! The project was delivered on time and exceeded all expectations. Highly recommend for any web development needs.',
    image: '👨‍💼',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'Creative Agency',
    content: 'A rare combination of technical skill and design sensibility. The final product was both beautiful and performant.',
    image: '👩‍🎨',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-white uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Clients Say</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={carouselRef}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/50 to-black border border-white/10 backdrop-blur-sm p-12 md:p-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute inset-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 text-6xl">{testimonial.image}</div>
                  
                  <blockquote className="mb-8">
                    <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light italic">
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                  
                  <div>
                    <div className="font-display text-xl font-bold text-white mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative quotes */}
          <div className="absolute -top-4 -left-4 text-6xl text-purple-500/20 font-serif">"</div>
          <div className="absolute -bottom-4 -right-4 text-6xl text-pink-500/20 font-serif rotate-180">"</div>
        </div>
      </div>
    </section>
  );
}
