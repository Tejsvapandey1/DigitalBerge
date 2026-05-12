import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import logo from './assets/digitallogo.png';

const colors = {
  bg: '#F7F5F0',
  surface: '#FFFFFF',
  surface2: '#F0EDE6',
  ink: '#0F0E0C',
  ink2: '#4A4740',
  ink3: '#8A877F',
  accent: '#1A3A6B',
  accent2: '#2E5FA3',
  gold: '#C8960C',
  goldLight: '#FDF3D6',
  teal: '#0B5C52',
  tealLight: '#E1F5EE',
  border: 'rgba(15,14,12,0.1)',
  border2: 'rgba(15,14,12,0.06)',
};

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ background: colors.bg, color: colors.ink, fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        h1, h2, h3, h4 { font-family: 'Syne', sans-serif; line-height: 1.15; }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }
        .reveal-delay-6 { transition-delay: 0.6s; }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes gridFade {
          from { opacity: 0; }
          to { opacity: 0.6; }
        }
        @keyframes blobPulse {
          from { transform: scale(1) translate(0, 0); }
          to { transform: scale(1.15) translate(30px, -20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes scrollAnim {
          0%, 100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          50% { opacity: 0.4; transform: scaleY(0.5); }
        }

        @media (max-width: 900px) {
          .why-grid, .faq-grid { grid-template-columns: 1fr !important; gap: 3rem; }
          .process-steps { grid-template-columns: repeat(2, 1fr) !important; }
          .step:nth-child(5n) { border-right: 1px solid rgba(255,255,255,0.1); }
          .step:nth-child(2n) { border-right: none !important; }
          .hero-stats { gap: 2rem; }
          .nav-links { display: none !important; }
        }
        @media (max-width: 600px) {
          .process-steps { grid-template-columns: 1fr !important; }
          .step { border-right: none !important; }
          .why-right { grid-template-columns: 1fr !important; }
        }

        a { text-decoration: none; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.1rem 5%',
        background: 'rgba(247,245,240,0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${colors.border2}`,
        animation: 'slideDown 0.6s ease both',
      }}>
        <img src={logo} alt="DigitalBerge" style={{ height: '40px', width: 'auto' }} />
        <ul className="nav-links" style={{ display: 'flex', gap: '2.2rem', listStyle: 'none' }}>
          {['Services', 'Process', 'Why Us', 'FAQ'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '0.875rem', color: colors.ink2, fontWeight: 500, transition: 'color 0.2s' }}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#cta" style={{
              background: colors.accent, color: '#fff',
              padding: '0.5rem 1.2rem', borderRadius: '100px',
              fontSize: '0.875rem', fontWeight: 500,
              transition: 'background 0.2s, transform 0.15s',
            }}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '8rem 5% 5rem', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(${colors.border2} 1px, transparent 1px), linear-gradient(90deg, ${colors.border2} 1px, transparent 1px)`,
          backgroundSize: '60px 60px', opacity: 0.6,
          animation: 'gridFade 1.2s ease both',
        }} />

        {/* Blobs */}
        <div style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          filter: 'blur(80px)', opacity: 0.18, background: 'radial-gradient(circle, #1A3A6B, transparent)',
          top: '-10%', left: '-15%', animation: 'blobPulse 8s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
          filter: 'blur(80px)', opacity: 0.18, background: 'radial-gradient(circle, #C8960C, transparent)',
          bottom: '-5%', right: '-10%', animation: 'blobPulse 8s ease-in-out infinite alternate 2s',
        }} />
        <div style={{
          position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
          filter: 'blur(80px)', opacity: 0.18, background: 'radial-gradient(circle, #0B5C52, transparent)',
          top: '40%', left: '55%', animation: 'blobPulse 8s ease-in-out infinite alternate 4s',
        }} />

        {/* Hero Content - Centered Layout */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          maxWidth: '900px', width: '100%', position: 'relative', zIndex: 2,
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: colors.goldLight, color: colors.gold,
            border: `1px solid rgba(200,150,12,0.25)`,
            padding: '0.35rem 1rem', borderRadius: '100px',
            fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.04em', textTransform: 'uppercase',
            marginBottom: '1.8rem', opacity: 0,
            animation: 'fadeUp 0.7s 0.3s ease forwards',
          }}>
            <span style={{ width: 6, height: 6, background: colors.gold, borderRadius: '50%', animation: 'pulse 2s ease infinite', display: 'block' }} />
            Digital Transformation Agency
          </div>

          {/* Headline - Two Line Layout */}
          <h1 style={{
            fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800,
            color: colors.ink, maxWidth: '800px',
            letterSpacing: '-0.03em', opacity: 0,
            animation: 'fadeUp 0.8s 0.5s ease forwards',
            lineHeight: 1.1, textAlign: 'center', marginBottom: '1.5rem',
          }}>
            Empowering Brands with{' '}
            <span style={{ color: colors.accent, position: 'relative', display: 'inline-block' }}>
              End-to-End
              <span style={{
                content: '', position: 'absolute', bottom: -4, left: 0, right: 0,
                height: 4, background: colors.gold, borderRadius: 2,
                transform: 'scaleX(0)', transformOrigin: 'left',
                animation: 'lineExpand 0.8s 1.4s ease forwards', display: 'block',
              }} />
            </span>
          </h1>

          {/* Centered Transformation Text */}
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800,
            letterSpacing: '-0.025em', textAlign: 'center',
            color: colors.teal,
            marginBottom: '1.5rem',
            opacity: 0,
            animation: 'fadeUp 0.8s 0.65s ease forwards',
            width: '100%',
          }}>
            Digital Transformation
          </h2>

          <p style={{
            fontSize: '1.1rem', color: colors.ink2, maxWidth: '560px',
            margin: '0 auto 2.5rem', lineHeight: 1.75,
            opacity: 0, animation: 'fadeUp 0.8s 0.75s ease forwards',
            fontWeight: 300, textAlign: 'center',
          }}>
            We strengthen the digital presence of businesses through innovative services, enabling them to thrive and stay ahead in the digital-first era.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center',
            opacity: 0, animation: 'fadeUp 0.8s 1s ease forwards',
          }}>
            <a href="#cta" style={{
              background: colors.accent, color: '#fff',
              padding: '0.9rem 2rem', borderRadius: '100px', border: 'none',
              fontFamily: "'Syne', sans-serif", fontSize: '0.95rem', fontWeight: 600,
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(26,58,107,0.3)',
            }}>
              Start Your Project <ArrowRight size={16} />
            </a>
            <a href="#services" style={{
              background: 'transparent', color: colors.ink,
              padding: '0.9rem 2rem', borderRadius: '100px',
              border: `1.5px solid ${colors.border}`, fontFamily: "'Syne', sans-serif",
              fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Explore Services
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{
          display: 'flex', gap: '3rem', marginTop: '4rem',
          opacity: 0, animation: 'fadeUp 0.8s 1.3s ease forwards',
          position: 'relative', zIndex: 2,
        }}>
          {[['150+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['6+', 'Expert Services']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '2rem', fontWeight: 800, color: colors.accent, display: 'block' }}>{num}</span>
              <span style={{ fontSize: '0.8rem', color: colors.ink3 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          opacity: 0, animation: 'fadeUp 1s 1.8s ease forwards', zIndex: 2,
        }}>
          <span style={{ fontSize: '0.7rem', color: colors.ink3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <span style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${colors.ink3}, transparent)`, animation: 'scrollAnim 1.5s ease-in-out infinite' }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '6rem 5%', background: colors.surface }}>
        <div className="services-header">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.75rem', color: colors.ink }}>
            Complete Digital Solutions<br />Under One Roof
          </h2>
          <p style={{ fontSize: '1rem', color: colors.ink2, maxWidth: '520px', lineHeight: 1.7, fontWeight: 300 }}>
            From design to deployment, we cover every layer of your digital presence with precision and care.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3.5rem' }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i + 1} />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: '6rem 5%', background: colors.accent, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        <div className="reveal" style={{ position: 'relative', zIndex: 1 }}>
          <SectionLabel light>How We Work</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff', marginBottom: '0.75rem' }}>
            A Proven 10-Step Process<br />for Flawless Delivery
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', lineHeight: 1.7, fontWeight: 300 }}>
            Every project runs through a structured workflow that keeps things transparent, on-time, and on-budget.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: '3.5rem', position: 'relative', zIndex: 1 }}>
          {processSteps.map((step, i) => (
            <div key={step.num} className={`step reveal reveal-delay-${(i % 5) + 1}`} style={{
              padding: '1.5rem 1.25rem',
              borderRight: `1px solid rgba(255,255,255,0.1)`,
              borderBottom: `1px solid rgba(255,255,255,0.1)`,
              transition: 'background 0.25s',
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: colors.gold, marginBottom: '0.75rem' }}>
                {step.num}
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.875rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '0.4rem' }}>
                {step.title}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why" style={{ padding: '6rem 5%', background: colors.bg }}>
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', marginTop: '3.5rem' }}>
          <div className="why-left">
            <div className="reveal">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.025em', color: colors.ink }}>
                Embrace Digital Transformation with Confidence
              </h2>
              <p style={{ fontSize: '1rem', color: colors.ink2, marginTop: '0.75rem', lineHeight: 1.7, fontWeight: 300 }}>
                We combine data-driven services, a user-centric approach, and quality-focused execution to drive real digital growth.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              {whyPoints.map((point, i) => (
                <div key={point.title} className={`why-point reveal reveal-delay-${i + 1}`} style={{
                  display: 'flex', gap: '1rem', padding: '1.25rem',
                  background: colors.surface, borderRadius: 8,
                  border: `1px solid ${colors.border2}`, transition: 'transform 0.25s, box-shadow 0.25s',
                }}>
                  <div style={{
                    flexShrink: 0, width: 40, height: 40, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                    background: point.bg,
                  }}>
                    {point.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                      {point.title}
                    </div>
                    <div style={{ fontSize: '0.83rem', color: colors.ink2, lineHeight: 1.55 }}>
                      {point.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {trustCards.map((card, i) => (
              <div key={card.title} className={`trust-card reveal reveal-delay-${i + 1}`} style={{
                background: colors.surface, border: `1px solid ${colors.border2}`,
                borderRadius: 16, padding: '1.75rem 1.5rem', textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                gridColumn: card.full ? '1 / -1' : undefined,
              }}>
                <span style={{ fontSize: '2rem', marginBottom: '0.75rem', display: 'block' }}>{card.icon}</span>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: colors.ink }}>
                  {card.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: colors.ink2, lineHeight: 1.55 }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '6rem 5%', background: colors.surface }}>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginTop: '3.5rem' }}>
          <div className="faq-left reveal">
            <SectionLabel>FAQ</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.025em', color: colors.ink }}>
              Common Questions, Answered
            </h2>
            <p style={{ fontSize: '1rem', color: colors.ink2, marginTop: '0.75rem', lineHeight: 1.7, fontWeight: 300 }}>
              Everything you need to know before we get started — straight answers, no jargon.
            </p>
          </div>

          <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${colors.border2}` }}>
                <button
                  onClick={() => toggleFaq(i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', textAlign: 'left',
                    padding: '1.25rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    fontFamily: "'Syne', sans-serif", fontSize: '0.95rem', fontWeight: 600,
                    color: colors.ink, cursor: 'pointer', gap: '1rem',
                  }}
                >
                  {faq.q}
                  <span style={{
                    flexShrink: 0, width: 22, height: 22, border: `1.5px solid ${colors.border}`,
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', transition: 'all 0.3s', color: colors.ink2,
                    background: openFaq === i ? colors.accent : 'transparent',
                    borderColor: openFaq === i ? colors.accent : colors.border,
                    color: openFaq === i ? '#fff' : colors.ink2,
                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  fontSize: '0.875rem', color: colors.ink2, lineHeight: 1.7,
                  maxHeight: openFaq === i ? '200px' : 0, overflow: 'hidden',
                  transition: 'max-height 0.4s ease, padding 0.3s ease',
                  paddingBottom: openFaq === i ? '1.25rem' : 0,
                }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{ background: colors.bg, padding: '6rem 5%', textAlign: 'center' }}>
        <div className="reveal" style={{
          background: colors.accent, borderRadius: 24, padding: '5rem 3rem',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 20% 50%, rgba(200,150,12,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(11,92,82,0.3) 0%, transparent 50%)`,
          }} />
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff', fontWeight: 800,
            letterSpacing: '-0.025em', position: 'relative', zIndex: 1, marginBottom: '0.75rem',
          }}>
            Have a digital project?
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '480px',
            margin: '0 auto 2rem', position: 'relative', zIndex: 1, fontWeight: 300,
          }}>
            Partner with us and experience hassle-free transformation — from first idea to full launch.
          </p>
          <a href="mailto:hello@digitalberge.com" style={{
            background: '#fff', color: colors.accent, padding: '0.95rem 2.5rem',
            borderRadius: '100px', border: 'none', fontFamily: "'Syne', sans-serif",
            fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            transition: 'transform 0.15s, box-shadow 0.2s',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)', position: 'relative', zIndex: 1,
          }}>
            Start the Conversation <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: colors.ink, color: 'rgba(255,255,255,0.55)', padding: '3rem 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: '0.8rem', flexWrap: 'wrap', gap: '1rem',
      }}>
        <img src={logo} alt="DigitalBerge" style={{ height: '32px', width: 'auto' }} />
        <span>© 2025 DigitalBerge. All rights reserved.</span>
        <span>hello@digitalberge.com</span>
      </footer>
    </div>
  );
}

function SectionLabel({ children, light }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: light ? colors.gold : colors.accent,
      marginBottom: '1rem',
    }}>
      <span style={{ width: 20, height: 2, background: colors.gold, borderRadius: 1, display: 'block' }} />
      {children}
    </div>
  );
}

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`service-card reveal reveal-delay-${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: colors.bg, border: `1px solid ${colors.border2}`,
        borderRadius: 16, padding: '2rem', position: 'relative', overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 48px rgba(15,14,12,0.12)' : 'none',
        borderColor: hovered ? 'rgba(26,58,107,0.15)' : colors.border2,
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${colors.accent}, ${colors.gold})`,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left',
        transition: 'transform 0.4s ease',
      }} />
      <div style={{
        width: 52, height: 52, borderRadius: 12, display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
        marginBottom: '1.25rem', background: service.iconBg,
      }}>
        {service.icon}
      </div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: colors.ink }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: colors.ink2, lineHeight: 1.65, marginBottom: '1.2rem' }}>
        {service.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {service.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: '0.72rem', padding: '0.25rem 0.7rem', borderRadius: '100px',
            border: `1px solid ${colors.border}`, color: colors.ink2, fontWeight: 500,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  { icon: '🎨', iconBg: '#EEF2FF', title: 'UI/UX Design', desc: 'Visually stunning, high-performing interfaces engineered to improve engagement and drive conversions across platforms.', tags: ['Requirement Analysis', 'UI/UX Consulting', 'Prototyping'] },
  { icon: '📱', iconBg: '#E1F5EE', title: 'Mobile App Development', desc: 'Secure, scalable, feature-rich mobile applications built for Android, iOS, and cross-platform environments.', tags: ['Android', 'iOS', 'Cross-Platform'] },
  { icon: '🌐', iconBg: '#FDF3D6', title: 'Website Development', desc: 'Secure, user-friendly websites built for global reach — from business portals to full-scale e-commerce platforms.', tags: ['Web Design', 'Full-Stack', 'E-Commerce'] },
  { icon: '📈', iconBg: '#FCF0EE', title: 'Digital Marketing', desc: 'Accelerate online visibility and fuel business growth with data-backed strategies across every digital channel.', tags: ['SEO', 'Social Media', 'Paid Marketing'] },
  { icon: '⛓', iconBg: '#F0EDF8', title: 'Blockchain Development', desc: 'Improve data integrity and reduce operational risk through smart contracts, DApps, and blockchain consulting.', tags: ['Smart Contracts', 'Blockchain Consulting', 'DApps'] },
  { icon: '🛠', iconBg: '#E6F1FB', title: 'Support & Maintenance', desc: 'Ongoing care, updates, and optimization to keep your digital assets performing at their peak, always.', tags: ['Security Updates', 'Bug Fixing', 'Performance'] },
];

const processSteps = [
  { num: 'STEP 01', title: 'You Share Your Need', desc: 'Share your development or marketing requirements with our team.' },
  { num: 'STEP 02', title: 'Meet the Experts', desc: 'Discuss your vision with industry professionals to align expectations.' },
  { num: 'STEP 03', title: 'Create Wireframes', desc: 'Blueprint and wireframe creation based on your requirements.' },
  { num: 'STEP 04', title: 'Define Every Element', desc: 'Clarify scope, features, and project elements in detail.' },
  { num: 'STEP 05', title: 'Roll-Out Functional Design', desc: 'Plan and design the solution architecture and structure.' },
  { num: 'STEP 06', title: 'Develop', desc: 'Build using modern, production-grade technologies.' },
  { num: 'STEP 07', title: 'Test & Optimize', desc: 'Rigorous testing, bug fixing, and performance optimization.' },
  { num: 'STEP 08', title: 'Launch', desc: 'Smooth deployment of your fully validated digital solution.' },
  { num: 'STEP 09', title: 'Marketing Support', desc: 'Post-launch digital marketing to grow your audience and traffic.' },
  { num: 'STEP 10', title: 'Maintenance & Support', desc: 'Continuous care to keep your platform running at its best.' },
];

const whyPoints = [
  { icon: '📊', bg: '#E1F5EE', title: 'Data-Driven Services', desc: 'Every decision is backed by real analytics and market intelligence to maximize ROI.' },
  { icon: '🎯', bg: '#EEF2FF', title: 'User-Centric Approach', desc: 'Design and development always starts — and ends — with your end-user in mind.' },
  { icon: '⭐', bg: '#FDF3D6', title: 'Quality-Focused Execution', desc: 'Relentless attention to detail at every stage of the build — no shortcuts, ever.' },
];

const trustCards = [
  { icon: '🔒', title: 'NDA-Protected Contracts', desc: 'Your ideas stay yours. Every engagement is backed by a legally binding confidentiality agreement from day one.' },
  { icon: '🏆', title: 'Industry Experts', desc: 'Seasoned professionals with deep domain expertise deliver exceptional, measurable outcomes.' },
  { icon: '⏱', title: 'On-Time Delivery, Every Time', desc: 'Projects delivered within the agreed timeline and budget — predictability is a feature, not a luxury.', full: true },
];

const faqs = [
  { q: 'How do you approach SEO?', a: 'We follow a systematic process: requirement analysis, clear communication, milestone setting, and regular progress updates. Our SEO strategy is built on technical foundations, quality content, and authoritative link building — all transparently tracked.' },
  { q: 'How long does app development take?', a: 'Timelines depend on complexity, features, and app size. A simple MVP typically takes 6–10 weeks. A feature-rich app with custom integrations can range from 3–6 months. We\'ll give you an honest estimate after reviewing your requirements.' },
  { q: 'How is pricing structured?', a: 'Pricing varies by service — blockchain development, website builds, and app projects each have their own scope and cost drivers. We provide transparent, itemized quotes tailored to your specific requirements. No hidden fees.' },
  { q: 'Can you handle data migration and system integration?', a: 'Absolutely. We provide seamless data migration, third-party system integration, and API connectivity — all with minimal disruption to your ongoing operations. Your data stays secure throughout the entire process.' },
];
