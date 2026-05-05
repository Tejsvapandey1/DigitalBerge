import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import digitalLogo from './assets/digitallogo.png';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

const FadeIn = ({ children, delay = '', className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''} ${delay} ${className}`}>
      {children}
    </div>
  );
};

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Obtain top ranks on the search engine result pages organically and ensure that your brand remains visible to the target audience.",
    features: ["On-page SEO", "Off-page SEO", "Technical SEO"],
    icon: "search"
  },
  {
    title: "Social Media Marketing",
    description: "Make your brand trend on the social media platforms with the services of the top digital marketing agency in India and drive meaningful engagements.",
    features: ["Content Creation", "Platform Optimization", "Brand Sentiment", "Analytics Reporting"],
    icon: "thumb_up"
  },
  {
    title: "Email Marketing",
    description: "Keep your brand at the top of the mind of customers with personalized email marketing campaigns designed by the best digital marketing agency in India.",
    features: ["Personalized Content", "Email Automation", "Precise Targeting", "Campaign Management"],
    icon: "mail"
  },
  {
    title: "Pay-Per-Click (PPC) Management",
    description: "Leverage data-driven PPC campaigns of the top digital marketing company in India to reach highly targeted audience segments.",
    features: ["Ads A/B Testing", "Keyword Research", "Paid Search Ads", "Remarketing"],
    icon: "ads_click"
  }
];

const workSteps = [
  { title: "Discovery Phase", desc: "Work with our experts to clearly define your goals and objectives." },
  { title: "Strategy Development", desc: "As the best digital marketing company in India, we curate strategies tailored to your target audience and unique objectives." },
  { title: "Execution & Optimization", desc: "Implement data-driven strategies and continuously optimize them for the best results." },
  { title: "Performance Tracking", desc: "Keep a tab on the key metrics to maximize ROI and ensure optimum success." }
];

const highlights = [
  { title: "Strong Online Visibility", desc: "Level up the digital presence of your brand with the best digital marketing company services.", icon: "visibility" },
  { title: "Greater Social Media Engagement", desc: "Make the most of trending social media platforms to connect with more of your target audience across the globe.", icon: "groups" },
  { title: "Data-driven Campaigns", desc: "Forget guesswork and build digital marketing campaigns based on real data and insights.", icon: "bar_chart" }
];

const reasons = [
  { title: "Industry Experts", desc: "Collaborate with the seasoned professionals having vast experience in the industry and committed to delivering top digital marketing services.", icon: "workspace_premium" },
  { title: "Data-driven Approach", desc: "Say goodbye to the cookie-cutter approaches and count on our data-driven digital marketing strategies to expand your reach online.", icon: "monitoring" },
  { title: "Tailored Strategies", desc: "Every business is unique and deserves undivided attention. Obtain services specifically tailored to your business needs and goals.", icon: "tune" },
  { title: "Complete Transparency", desc: "Keep track of the progress of your digital marketing campaigns with our transparent clarifications, consistent reports, and regular updates.", icon: "policy" },
  { title: "Competitive Pricing", desc: "Get the best digital marketing company services at affordable prices and prepare your brand to remain ahead in the competitive landscape.", icon: "payments" }
];

const faqs = [
  { q: "Which is the best digital marketing agency in India?", a: "DigitalBerge takes pride in being the best digital marketing company in India. Our tailored strategies, comprehensive solutions, and competitive pricing make us a renowned firm in the industry." },
  { q: "How to choose the top digital marketing agency in India?", a: "When it comes to selecting the top digital marketing company in India, you need to factor in various aspects. It includes your digital marketing goal, industry-relevant experience and expertise of the company, services offered, transparency, communication approach, and pricing. Be sure to compare the offerings of the leading companies and choose the one that best suits your requirements and budget." },
  { q: "What are the key services offered by the best digital marketing companies in India?", a: "At DigitalBerge, one of the best digital marketing firms in India, we deliver an extensive range of services, including search engine optimization (SEO), social media marketing, PPC management, and email marketing." },
  { q: "How much do the services of a digital marketing agency in India cost?", a: "The cost of the top digital marketing services will differ. It depends on various factors like the type of services your business requires, the complexity of the project, and the desired outcomes." },
  { q: "Which is the best digital marketing company in India for startups?", a: "DigitalBerge is the best digital marketing agency in India. We offer comprehensive services to businesses and help them strengthen their presence online." },
  { q: "Do top digital marketing agencies provide personalized services?", a: "Yes, indeed! As a top digital marketing agency in India, we offer custom services tailored to the objectives and needs of businesses." },
  { q: "Can digital marketing companies assist small businesses to grow in India?", a: "Absolutely! DigitalBerge, as the best digital marketing company in India, delivers a wide range of services to small businesses and helps them elevate their online presence, grow their reach, and drive conversions." },
  { q: "Are digital marketing agencies in India ideal for international clients?", a: "Yes, the best digital marketing firms are indeed suitable for international clients. Through tailored strategies, the experts help them expand their reach and acquire more qualified leads." }
];

const AccordionItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{q}</h3>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{a}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="app">
      {/* Header / Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">
            <img src={digitalLogo} alt="DigitalBerge Logo" style={{ height: '40px', display: 'block' }} />
          </a>
          <div className="navbar-links">
            <a href="#" className="active">Home</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Gallery</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="navbar-btn-container">
            <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>
              Get Started
            </button>
          </div>
          <button className="mobile-menu-btn">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <FadeIn>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(28,25,73,0.5)', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>local_fire_department</span>
                <span style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>Best Digital Marketing Agency</span>
              </div>
              <h1>
                Best Digital Marketing Agency for <br/>
                <span className="text-gradient">Top-notch Online Marketing Services</span>
              </h1>
            </FadeIn>
            <FadeIn delay="delay-100">
              <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                As a top digital marketing agency in India, we design result-driven strategies to attract qualified leads and boost revenues. From SEO to social media marketing, we offer everything to grow your business online and expand your reach.
              </p>
            </FadeIn>
            <FadeIn delay="delay-200">
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary">
                  Partner With Us
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="btn btn-secondary">
                  Explore Services
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section section-surface">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div>
              <FadeIn>
                <h2>Renowned Digital Marketing Agency in India</h2>
                <p style={{ fontSize: '1.125rem' }}>
                  DigitalBerge is a top digital marketing company in India committed to helping businesses thrive in the competitive online marketplace and achieve sustainable, long-term growth. We bring rich years of experience in the industry and empower brands to drive great ROI with our custom strategies.
                </p>
                <p style={{ fontSize: '1.125rem' }}>
                  We are dedicated to transforming your online presence and driving more traffic to your website. Team up with our passionate digital marketing specialists and get measurable results. Leverage our top digital marketing services and boost your conversion rates beyond expectations.
                </p>
              </FadeIn>
            </div>
            <div>
              <div className="grid" style={{ gap: '16px' }}>
                {highlights.map((item, idx) => (
                  <FadeIn key={idx} delay={`delay-${(idx + 1) * 100}`}>
                    <div className="choose-us-feature" style={{ marginBottom: 0 }}>
                      <h4><span className="material-symbols-outlined">{item.icon}</span> {item.title}</h4>
                      <p style={{ marginBottom: 0 }}>{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn>
              <h2>Our Full Range of Digital Marketing Services</h2>
              <p>As the best digital marketing agency in India, we offer comprehensive solutions to skyrocket your online success. From content creation to search engine optimization (SEO), we specialize in everything. Partner with us to revamp your digital presence and grow your customer base by leveraging our targeted strategies.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-2">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={`delay-${(idx % 2) * 100}`}>
                <div className="card">
                  <div className="card-icon">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="feature-list" style={{ marginTop: 'auto' }}>
                    {service.features.map((feature, fidx) => (
                      <li key={fidx}>
                        <div className="feature-icon"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check_circle</span></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Need Expert Services (Info Banner) */}
      <section className="section section-surface">
        <div className="container">
          <div className="cta-box" style={{ background: 'var(--color-surface-container)', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left', padding: '3rem 4rem' }}>
            <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
              <div>
                <FadeIn>
                  <h2 style={{ color: 'var(--color-primary)' }}>Why Your Business Needs Expert Digital Marketing Services?</h2>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay="delay-100">
                  <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                    In this digital-first era, making a position online and differentiating your brand isn’t easy. That’s where the top digital marketing services become essential. Firstly, digital marketing allows for precise targeting, ensuring all your efforts reach the right people at the right time. Secondly, with thoughtfully crafted strategies, businesses can take their online visibility a notch higher and attract more audience.
                  </p>
                  <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '1.125rem', marginBottom: 0 }}>
                    Moreover, with the best digital marketing company services like content marketing and social media marketing, brands will be able to build trust and authority online. Compared to traditional media, digital marketing is cost-effective, providing you with better tracking capabilities and higher ROI.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn>
              <h2>How We Work?</h2>
            </FadeIn>
          </div>
          <div className="timeline">
            {workSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx % 2 === 0 ? "" : "delay-100"}>
                <div className="timeline-item">
                  <div className="timeline-number">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn>
              <h2>Why Partner with DigitalBerge for Digital Marketing Services?</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-3">
            {reasons.map((item, idx) => (
              <FadeIn key={idx} delay={`delay-${(idx % 3) * 100}`} className={idx === 3 || idx === 4 ? "col-span-full md:col-span-1" : ""}>
                <div className="card" style={{ padding: '2rem' }}>
                  <div className="card-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{item.icon}</span>
                  </div>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ marginBottom: 0 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn>
              <h2>FAQs</h2>
            </FadeIn>
          </div>
          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={`delay-${(idx % 3) * 100}`}>
                <AccordionItem q={faq.q} a={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={digitalLogo} alt="DigitalBerge Logo" style={{ height: '48px', display: 'block' }} />
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
          <div className="footer-copyright">
            © 2026 DigitalBerge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
