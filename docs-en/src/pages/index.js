import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main>
        <div className="custom-homepage">
          {/* Hero Section */}
          <section
            className="hero hero--primary"
            style={{
              padding: "4rem 0",
              textAlign: "center",
              background:
                "linear-gradient(135deg, #0f1419 0%, #1e3c72 50%, #2a5298 100%)",
              color: "white",
              position: "relative",
              overflow: "hidden",
              height: "600px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Animated Background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.15,
                background: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 60% 80%, rgba(255, 200, 120, 0.3) 0%, transparent 50%)
              `,
                animation: "float 8s ease-in-out infinite",
              }}
            >
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                  25% { transform: translate(30px, -30px) rotate(90deg) scale(1.1); }
                  50% { transform: translate(60px, 20px) rotate(180deg) scale(0.9); }
                  75% { transform: translate(-20px, 40px) rotate(270deg) scale(1.05); }
                }
                @keyframes pulse {
                  0%, 100% { opacity: 0.05; transform: scale(1); }
                  50% { opacity: 0.15; transform: scale(1.1); }
                }
                @keyframes slideVertical {
                  0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
                  33% { transform: translateY(-30px) translateX(10px) scale(1.2); }
                  66% { transform: translateY(20px) translateX(-15px) scale(0.8); }
                }
                @keyframes rotate360 {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes wave {
                  0%, 100% { transform: translateX(-100%); }
                  50% { transform: translateX(100%); }
                }
                @keyframes matrix {
                  0% { transform: translateY(-100%); opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { transform: translateY(100vh); opacity: 0; }
                }
                @keyframes glow {
                  0%, 100% { 
                    box-shadow: 0 0 5px rgba(64, 224, 255, 0.5), 0 0 10px rgba(64, 224, 255, 0.3); 
                  }
                  50% { 
                    box-shadow: 0 0 20px rgba(64, 224, 255, 0.8), 0 0 30px rgba(64, 224, 255, 0.5); 
                  }
                }
              `}</style>
            </div>

            {/* Matrix Rain Effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                overflow: "hidden",
              }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `${12.5 * i}%`,
                    width: "2px",
                    height: "100%",
                    background:
                      "linear-gradient(transparent, rgba(0, 255, 127, 0.8), transparent)",
                    animation: `matrix ${3 + i * 0.5}s linear infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>

            {/* Geometric Patterns */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.08,
              }}
            >
              {/* Enhanced Circuit-like lines */}
              <svg width="100%" height="100%" style={{ position: "absolute" }}>
                <defs>
                  <pattern
                    id="circuit"
                    patternUnits="userSpaceOnUse"
                    width="120"
                    height="120"
                  >
                    <path
                      d="M10,10 L110,10 L110,35 L85,35 L85,60 L35,60 L35,85 L110,85 L110,110 L10,110 Z"
                      fill="none"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M60,10 L60,35 M35,35 L85,35 M60,60 L60,85"
                      stroke="rgba(0,255,255,0.3)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="3"
                      fill="rgba(64, 224, 255, 0.6)"
                      style={{ animation: "glow 2s ease-in-out infinite" }}
                    />
                    <circle
                      cx="110"
                      cy="35"
                      r="3"
                      fill="rgba(255, 64, 224, 0.6)"
                      style={{ animation: "glow 2.5s ease-in-out infinite" }}
                    />
                    <circle
                      cx="85"
                      cy="60"
                      r="3"
                      fill="rgba(64, 255, 64, 0.6)"
                      style={{ animation: "glow 3s ease-in-out infinite" }}
                    />
                    <circle
                      cx="35"
                      cy="85"
                      r="3"
                      fill="rgba(255, 200, 64, 0.6)"
                      style={{ animation: "glow 2.2s ease-in-out infinite" }}
                    />
                  </pattern>
                  <linearGradient
                    id="scanline"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(0,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(0,255,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(0,255,255,0)" />
                  </linearGradient>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#circuit)"
                  style={{ animation: "pulse 6s ease-in-out infinite" }}
                />

                {/* Scanning line effect */}
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="2"
                  fill="url(#scanline)"
                  style={{ animation: "wave 4s linear infinite" }}
                />
              </svg>

              {/* Floating 3D-like particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    width: `${4 + Math.random() * 6}px`,
                    height: `${4 + Math.random() * 6}px`,
                    backgroundColor: [
                      "rgba(64, 224, 255, 0.7)",
                      "rgba(255, 64, 224, 0.7)",
                      "rgba(64, 255, 64, 0.7)",
                      "rgba(255, 200, 64, 0.7)",
                      "rgba(128, 64, 255, 0.7)",
                    ][i % 5],
                    borderRadius: "50%",
                    animation: `slideVertical ${
                      3 + Math.random() * 4
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    boxShadow: "0 0 10px currentColor",
                  }}
                />
              ))}
            </div>

            {/* Hexagonal Grid Pattern */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.04,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                animation: "float 12s ease-in-out infinite reverse",
              }}
            ></div>

            {/* Enhanced Grid overlay with movement */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)
              `,
                backgroundSize: "40px 40px",
                animation: "wave 10s ease-in-out infinite",
              }}
            ></div>

            {/* Rotating geometric shapes */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                width: "100px",
                height: "100px",
                border: "2px solid rgba(64, 224, 255, 0.2)",
                borderRadius: "50%",
                animation: "rotate360 20s linear infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "60px",
                  height: "60px",
                  border: "1px solid rgba(255, 64, 224, 0.3)",
                  transform: "translate(-50%, -50%) rotate(45deg)",
                  animation: "rotate360 15s linear infinite reverse",
                }}
              ></div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "15%",
                right: "8%",
                width: "80px",
                height: "80px",
                border: "2px solid rgba(255, 200, 64, 0.25)",
                transform: "rotate(45deg)",
                animation: "rotate360 18s linear infinite reverse",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(64, 255, 64, 0.1)",
                  transform: "translate(-50%, -50%)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              ></div>
            </div>

            {/* Data stream effect */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                right: "10%",
                opacity: 0.3,
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "2px",
                    height: "20px",
                    backgroundColor: "rgba(0, 255, 127, 0.8)",
                    margin: "2px 0",
                    animation: `pulse ${1 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Rubik's Cube Elements */}
            {/* 3D Cube in top right */}
            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "5%",
                perspective: "1000px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  transformStyle: "preserve-3d",
                  animation: "rotate360 12s linear infinite",
                  opacity: 0.6,
                }}
              >
                {/* Cube faces */}
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(45deg, #ff4444, #ff6666)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    transform: "translateZ(40px)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(45deg, #44ff44, #66ff66)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    transform: "rotateY(90deg) translateZ(40px)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(45deg, #4444ff, #6666ff)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    transform: "rotateX(90deg) translateZ(40px)",
                  }}
                ></div>
              </div>
            </div>

            {/* Mini cubes floating around */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`cube-${i}`}
                style={{
                  position: "absolute",
                  top: `${15 + Math.random() * 70}%`,
                  left: `${5 + Math.random() * 90}%`,
                  width: "12px",
                  height: "12px",
                  backgroundColor: [
                    "rgba(255, 68, 68, 0.7)", // Red
                    "rgba(68, 255, 68, 0.7)", // Green
                    "rgba(68, 68, 255, 0.7)", // Blue
                    "rgba(255, 255, 68, 0.7)", // Yellow
                    "rgba(255, 165, 0, 0.7)", // Orange
                    "rgba(255, 255, 255, 0.7)", // White
                  ][i % 6],
                  border: "1px solid rgba(255,255,255,0.4)",
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `slideVertical ${
                    4 + Math.random() * 3
                  }s ease-in-out infinite, rotate360 ${
                    8 + Math.random() * 6
                  }s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                  boxShadow: "0 0 8px currentColor",
                  opacity: 0.8,
                }}
              />
            ))}

            {/* Cube pattern overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "8%",
                width: "100px",
                height: "100px",
                opacity: 0.15,
              }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <defs>
                  <style>{`
                    @keyframes cubeRotate {
                      0% { transform: rotateY(0deg) rotateX(0deg); }
                      25% { transform: rotateY(90deg) rotateX(0deg); }
                      50% { transform: rotateY(90deg) rotateX(90deg); }
                      75% { transform: rotateY(180deg) rotateX(90deg); }
                      100% { transform: rotateY(180deg) rotateX(180deg); }
                    }
                  `}</style>
                </defs>
                <g style={{ animation: "cubeRotate 8s ease-in-out infinite" }}>
                  {/* 3x3 grid representing Rubik's cube face */}
                  {[...Array(9)].map((_, i) => {
                    const row = Math.floor(i / 3);
                    const col = i % 3;
                    const colors = [
                      "#ff4444",
                      "#44ff44",
                      "#4444ff",
                      "#ffff44",
                      "#ff8844",
                      "#ffffff",
                    ];
                    return (
                      <rect
                        key={i}
                        x={col * 30 + 10}
                        y={row * 30 + 10}
                        width="25"
                        height="25"
                        fill={colors[i % colors.length]}
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                        opacity="0.8"
                      />
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Rubik's cube solving animation pattern */}
            <div
              style={{
                position: "absolute",
                bottom: "20%",
                right: "15%",
                opacity: 0.2,
              }}
            >
              {[...Array(3)].map((_, row) =>
                [...Array(3)].map((_, col) => (
                  <div
                    key={`${row}-${col}`}
                    style={{
                      position: "absolute",
                      left: `${col * 16}px`,
                      top: `${row * 16}px`,
                      width: "14px",
                      height: "14px",
                      backgroundColor: [
                        "rgba(255, 68, 68, 0.8)",
                        "rgba(68, 255, 68, 0.8)",
                        "rgba(68, 68, 255, 0.8)",
                        "rgba(255, 255, 68, 0.8)",
                        "rgba(255, 165, 0, 0.8)",
                        "rgba(255, 255, 255, 0.8)",
                      ][(row * 3 + col) % 6],
                      border: "1px solid rgba(255,255,255,0.3)",
                      animation: `pulse ${
                        2 + (row * 3 + col) * 0.3
                      }s ease-in-out infinite`,
                      animationDelay: `${(row * 3 + col) * 0.2}s`,
                    }}
                  />
                ))
              )}
            </div>

            {/* Cube wireframe in center left */}
            <div
              style={{
                position: "absolute",
                left: "3%",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0.1,
              }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120">
                <g style={{ animation: "rotate360 15s linear infinite" }}>
                  {/* Wireframe cube outline */}
                  <path
                    d="M20,20 L80,20 L100,40 L100,100 L40,100 L20,80 Z M20,20 L40,40 M80,20 L100,40 M80,20 L80,80 M100,100 L80,80 M40,100 L40,40 M20,80 L40,100"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                  />
                  {/* Cube grid lines */}
                  <path
                    d="M35,20 L90,20 M50,20 L70,40 M65,20 L85,40 M20,35 L80,35 M20,50 L80,50 M20,65 L80,65"
                    stroke="rgba(0,255,255,0.4)"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>

            <div
              className="container"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  padding: "0 1rem",
                }}
              >
                <Heading
                  as="h1"
                  className="hero-title"
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  RUBIK Pi Documentation Center
                </Heading>
                <p
                  className="hero-subtitle"
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "2rem",
                    opacity: 0.9,
                  }}
                >
                  Build the Future of Edge AI
                </p>
                <p
                  className="hero-description"
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "3rem",
                    opacity: 0.8,
                  }}
                >
                  RUBIK Pi 3 delivers 12 TOPS of performance for real-time AI at
                  the edge. With Multiple OS, Edge Impulse support, and seamless
                  Edge AI, it’s ideal for robotics, computer vision, and IoT
                  development. Compact, powerful, and ready for your next
                  project and product.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    className="button button--secondary button--lg"
                    to="https://www.thundercomm.com/rubik-pi-3/en/docs/about-rubikpi"
                    style={{ fontWeight: "bold" }}
                  >
                    🚀 Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Styles */}
          <style>{`
            /* Hero Section Responsive Design */
            @media (max-width: 1024px) {
              .hero.hero--primary {
                height: 500px !important;
                padding: 3rem 0 !important;
              }
              .hero-title {
                font-size: 2rem !important;
              }
                .col--2{
                --ifm-col-width: 20% !important;
                }
              .hero-subtitle {
                font-size: 1.3rem !important;
              }
              .hero-description {
                font-size: 1rem !important;
                padding: 0 1rem !important;
              }
                .col{
                padding: 0 10px !important;
                }
            }
            
            @media (max-width: 768px) {
              .hero.hero--primary {
                height: 450px !important;
                padding: 2rem 0 !important;
              }
              .hero-title {
                font-size: 2rem !important;
                padding: 0 1rem !important;
              }
              .hero-subtitle {
                font-size: 1.1rem !important;
              }
              .hero-description {
                font-size: 0.9rem !important;
                padding: 0 1.5rem !important;
                margin-bottom: 2rem !important;
              }
              .button--lg {
                font-size: 0.9rem !important;
                padding: 0.75rem 1.5rem !important;
              }
              
              /* Cards Responsive */
              .col--2 {
                flex: 0 0 50% !important;
                max-width: 50% !important;
                margin-bottom: 1rem !important;
              }
              .resource-card {
                height: 160px !important;
                padding: 1rem 0.5rem !important;
              }
              .resource-card img {
                width: 50px !important;
                height: 50px !important;
              }
              .resource-card h3 {
                font-size: 0.9rem !important;
              }
            }
            
            @media (max-width: 480px) {
              .hero.hero--primary {
                // height: 350px !important;
                padding: 1.5rem 0 !important;
              }
              .hero-title {
                font-size: 1.2rem !important;
                line-height: 1.3 !important;
              }
              .hero-subtitle {
                font-size: 1rem !important;
              }
              .hero-description {
                font-size: 0.8rem !important;
                padding: 0 1rem !important;
                margin-bottom: 1.5rem !important;
              }
              
              /* Mobile Cards - Full Width */
              .container row{
              justify-content: flex-end !important;
              }
              .col--2 {
                flex: 0 0 100% !important;
                max-width: 50% !important;
                margin-bottom: 1rem !important;
                padding: 0 10px !important;
              }
              .resource-card {
                height: 140px !important;
                padding: 1rem !important;
                margin: 0 auto !important;
                max-width: 280px !important;
              }
              .resource-card img {
                width: 70% !important;
                height: 70% !important;
              }
              .resource-card h3 {
                font-size: 0.85rem !important;
              }
              
              /* Resources Section Mobile */
              .resources-section {
                padding: 2rem 0 !important;
              }
            }
          `}</style>

          {/* Resources Section */}
          <section
            className="resources-section"
            style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}
          >
            <div className="container">
              <div className="row" style={{ justifyContent: "center" }}>
                {/* Community Card */}
                <div className="col col--2">
                  <Link
                    to="https://community.rubikpi.ai/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="card resource-card"
                      style={{
                        height: "180px",
                        padding: "1.5rem 1rem",
                        textAlign: "center",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        backgroundColor: "white",
                        borderRadius: "16px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-10px) scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0,0,0,0.2)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.1)";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <img
                        src="https://www.thundercomm.com/wp-content/uploads/2024/09/community-2.png"
                        alt="Community"
                        style={{
                          width: "60%",
                          height: "auto",
                          objectFit: "contain",
                          marginBottom: "1rem",
                          transition: "all 0.3s ease",
                        }}
                      />
                      <Heading
                        as="h3"
                        style={{
                          marginBottom: "0.5rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Community
                      </Heading>
                    </div>
                  </Link>
                </div>

                {/* User Manual Card */}
                <div className="col col--2">
                  <Link
                    to="http://localhost:3000/rubik-pi-3/en/docs/about-rubikpi"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="card resource-card"
                      style={{
                        height: "180px",
                        padding: "1.5rem 1rem",
                        textAlign: "center",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        backgroundColor: "white",
                        borderRadius: "16px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-10px) scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0,0,0,0.2)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.1)";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <img
                        src="https://www.thundercomm.com/wp-content/uploads/2024/09/rubik-pi-3-user-manual-icon-1.png"
                        alt="User Manual"
                        style={{
                          width: "60%",
                          height: "auto",
                          objectFit: "contain",
                          marginBottom: "1rem",
                          transition: "all 0.3s ease",
                        }}
                      />
                      <Heading
                        as="h3"
                        style={{
                          marginBottom: "0.5rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        User Manual
                      </Heading>
                    </div>
                  </Link>
                </div>

                {/* Hardware Resources Card */}
                <div className="col col--2">
                  <Link
                    to="https://www.thundercomm.com/rubik-pi-3/en/docs/hardware-resources"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="card resource-card"
                      style={{
                        height: "180px",
                        padding: "1.5rem 1rem",
                        textAlign: "center",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        backgroundColor: "white",
                        borderRadius: "16px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-10px) scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0,0,0,0.2)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.1)";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <img
                        src="https://www.thundercomm.com/wp-content/uploads/2024/09/rubik-pi-3-datasheet-icon-1.png"
                        alt="Hardware Resources"
                        style={{
                          width: "60%",
                          height: "auto",
                          objectFit: "contain",
                          marginBottom: "1rem",
                          transition: "all 0.3s ease",
                        }}
                      />
                      <Heading
                        as="h3"
                        style={{
                          marginBottom: "0.5rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Hardware Resources
                      </Heading>
                    </div>
                  </Link>
                </div>

                {/* System Image Card */}
                <div className="col col--2">
                  <Link
                    to="https://www.thundercomm.com/rubik-pi-3/en/docs/image"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="card resource-card"
                      style={{
                        height: "180px",
                        padding: "1.5rem 1rem",
                        textAlign: "center",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        backgroundColor: "white",
                        borderRadius: "16px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-10px) scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0,0,0,0.2)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.1)";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <img
                        src="https://www.thundercomm.com/wp-content/uploads/2024/09/rubik-pi-3-image-iconpng-1.png"
                        alt="System Image"
                        style={{
                          width: "60%",
                          height: "auto",
                          objectFit: "contain",
                          marginBottom: "1rem",
                          transition: "all 0.3s ease",
                        }}
                      />
                      <Heading
                        as="h3"
                        style={{
                          marginBottom: "0.5rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        System Image
                      </Heading>
                    </div>
                  </Link>
                </div>

                {/* Github Card */}
                <div className="col col--2">
                  <Link
                    href="https://github.com/rubikpi-ai"
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="card resource-card"
                      style={{
                        height: "180px",
                        padding: "1.5rem 1rem",
                        textAlign: "center",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        backgroundColor: "white",
                        borderRadius: "16px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-10px) scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0,0,0,0.2)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.1)";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "inherit";
                      }}
                    >
                      <img
                        src="https://www.thundercomm.com/wp-content/uploads/2024/09/github-1.png"
                        alt="Github"
                        style={{
                          width: "60%",
                          height: "auto",
                          objectFit: "contain",
                          marginBottom: "1rem",
                          transition: "all 0.3s ease",
                        }}
                      />
                      <Heading
                        as="h3"
                        style={{
                          marginBottom: "0.5rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Github
                      </Heading>
                    </div>
                  </Link>
                </div>
              </div>

              <style>{`
                .resource-card::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                  transition: left 0.5s ease;
                }
                .resource-card:hover::before {
                  left: 100%;
                }
                .resource-card:hover {
                  animation: cardPulse 0.6s ease-in-out;
                }
                @keyframes cardPulse {
                  0% { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
                  50% { box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
                  100% { box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
                }
              `}</style>
            </div>
          </section>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
