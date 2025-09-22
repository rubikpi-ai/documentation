import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
      {/* 内联样式：隐藏首页导航栏按钮 */}
      <style>{`
        #__docusaurus > nav > div.navbar__inner > div.theme-layout-navbar-left.navbar__items > a:nth-child(3){display:none;}
        #__docusaurus > nav > div.navbar__inner > div.theme-layout-navbar-left.navbar__items > a:nth-child(4){display:none;}
        #__docusaurus > nav > div.navbar__inner > div.theme-layout-navbar-left.navbar__items > a:nth-child(5){display:none;}
        #__docusaurus > nav > div.navbar__inner > div.theme-layout-navbar-right.navbar__items.navbar__items--right{display:none;}
        #__docusaurus > nav{display:none;}
        #__docusaurus > footer{position: absolute;bottom: 0;width: 100%;background: rgba(0, 0, 0, 0.2);}
      `}</style>
      {/* <HomepageHeader /> */}
      <main>
        <div className="custom-homepage">
          {/* Hero Section */}
          <section
            className="hero hero--primary"
            style={{
              padding: "64px 0 32px",
              textAlign: "center",
              background:
                "linear-gradient(135deg, #0f1419 0%, #1e3c72 50%, #2a5298 100%)",
              color: "none",
              position: "relative",
              overflow: "hidden",
              // height removed, use full viewport height instead
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
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
                  0%, 100% { transform: translate(0rem, 0rem) rotate(0deg) scale(1); }
                  25% { transform: translate(1.875rem, -1.875rem) rotate(90deg) scale(1.1); }
                  50% { transform: translate(3.75rem, 1.25rem) rotate(180deg) scale(0.9); }
                  75% { transform: translate(-1.25rem, 2.5rem) rotate(270deg) scale(1.05); }
                }
                @keyframes pulse {
                  0%, 100% { opacity: 0.05; transform: scale(1); }
                  50% { opacity: 0.15; transform: scale(1.1); }
                }
                @keyframes slideVertical {
                  0%, 100% { transform: translateY(0rem) translateX(0rem) scale(1); }
                  33% { transform: translateY(-1.875rem) translateX(.625rem) scale(1.2); }
                  66% { transform: translateY(1.25rem) translateX(-0.9375rem) scale(0.8); }
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
                    box-shadow: 0 0 .3125rem rgba(64, 224, 255, 0.5), 0 0 .625rem rgba(64, 224, 255, 0.3); 
                  }
                  50% { 
                    box-shadow: 0 0 1.25rem rgba(64, 224, 255, 0.8), 0 0 1.875rem rgba(64, 224, 255, 0.5); 
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
                    width: ".125rem",
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
                    boxShadow: "0 0 .625rem currentColor",
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
                linear-gradient(rgba(0,255,255,0.05) .0625rem, transparent .0625rem),
                linear-gradient(90deg, rgba(0,255,255,0.05) .0625rem, transparent .0625rem)
              `,
                backgroundSize: "2.5rem 2.5rem",
                animation: "wave 10s ease-in-out infinite",
              }}
            ></div>

            {/* Rotating geometric shapes */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                width: "6.25rem",
                height: "6.25rem",
                border: ".125rem solid rgba(64, 224, 255, 0.2)",
                borderRadius: "50%",
                animation: "rotate360 20s linear infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "3.75rem",
                  height: "3.75rem",
                  border: ".0625rem solid rgba(255, 64, 224, 0.3)",
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
                width: "5rem",
                height: "5rem",
                border: ".125rem solid rgba(255, 200, 64, 0.25)",
                transform: "rotate(45deg)",
                animation: "rotate360 18s linear infinite reverse",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "2.5rem",
                  height: "2.5rem",
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
                    width: ".125rem",
                    height: "1.25rem",
                    backgroundColor: "rgba(0, 255, 127, 0.8)",
                    margin: ".125rem 0",
                    animation: `pulse ${1 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* RUBIK's Cube Elements */}
            {/* 3D Cube in top right */}
            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "5%",
                perspective: "62.5rem",
              }}
            >
              <div
                style={{
                  width: "5rem",
                  height: "5rem",
                  transformStyle: "preserve-3d",
                  animation: "rotate360 12s linear infinite",
                  opacity: 0.6,
                }}
              >
                {/* Cube faces */}
                <div
                  style={{
                    position: "absolute",
                    width: "5rem",
                    height: "5rem",
                    background: "linear-gradient(45deg, #ff4444, #ff6666)",
                    border: ".125rem solid rgba(255,255,255,0.3)",
                    transform: "translateZ(2.5rem)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "5rem",
                    height: "5rem",
                    background: "linear-gradient(45deg, #44ff44, #66ff66)",
                    border: ".125rem solid rgba(255,255,255,0.3)",
                    transform: "rotateY(90deg) translateZ(2.5rem)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "5rem",
                    height: "5rem",
                    background: "linear-gradient(45deg, #4444ff, #6666ff)",
                    border: ".125rem solid rgba(255,255,255,0.3)",
                    transform: "rotateX(90deg) translateZ(2.5rem)",
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
                  width: ".75rem",
                  height: ".75rem",
                  backgroundColor: [
                    "rgba(255, 68, 68, 0.7)", // Red
                    "rgba(68, 255, 68, 0.7)", // Green
                    "rgba(68, 68, 255, 0.7)", // Blue
                    "rgba(255, 255, 68, 0.7)", // Yellow
                    "rgba(255, 165, 0, 0.7)", // Orange
                    "rgba(255, 255, 255, 0.7)", // none
                  ][i % 6],
                  border: ".0625rem solid rgba(255,255,255,0.4)",
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `slideVertical ${
                    4 + Math.random() * 3
                  }s ease-in-out infinite, rotate360 ${
                    8 + Math.random() * 6
                  }s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                  boxShadow: "0 0 .5rem currentColor",
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
                width: "6.25rem",
                height: "6.25rem",
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
                  {/* 3x3 grid representing RUBIK's cube face */}
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

            {/* RUBIK's cube solving animation pattern */}
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
                      width: ".875rem",
                      height: ".875rem",
                      backgroundColor: [
                        "rgba(255, 68, 68, 0.8)",
                        "rgba(68, 255, 68, 0.8)",
                        "rgba(68, 68, 255, 0.8)",
                        "rgba(255, 255, 68, 0.8)",
                        "rgba(255, 165, 0, 0.8)",
                        "rgba(255, 255, 255, 0.8)",
                      ][(row * 3 + col) % 6],
                      border: ".0625rem solid rgba(255,255,255,0.3)",
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
                  maxWidth: "100%",
                  margin: "0 auto 0px",
                  padding: "0",
                }}
              >
                {/* 在这里添加logo，并跳转到https://rubikpi.ai */}
                <img
                  src={useBaseUrl("img/rubik-pi-logo-white.png")}
                  alt="RUBIK Logo"
                  style={{ cursor: "pointer", width: "18.75rem", marginBottom: "32px" }} 
                  onClick={() => window.open("https://rubikpi.ai", "_blank")}
                />

                <Heading
                  as="h1"
                  className="hero-title"
                  style={{
                    fontSize: "40px",
                    marginBottom: "16px",
                    fontWeight: "bold",
                  }}
                >
                  魔方派文档中心
                </Heading>
                <p
                  className="hero-subtitle"
                  style={{
                    fontSize: "24px",
                    marginBottom: "32px",
                    opacity: 0.9,
                  }}
                >
                 边缘人工智能的未来之选
                </p>
                <p
                  className="hero-description"
                  style={{
                    fontSize: "17.6px",
                    marginBottom: "48px",
                    opacity: 0.8,
                  }}
                >
                 魔方派3（RUBIK Pi 3） 为边缘端提供高达12 TOPS的实时AI算力。其支持多操作系统（如Linux/Android/Windows），深度兼容Edge Impulse嵌入式机器学习框架，实现无缝边缘AI部署。产品兼具小巧体积与强劲性能，专为机器人开发、计算机视觉及物联网（IoT）创新项目量身打造，助力原型开发与量产落地一步到位。
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    className="button button--secondary button--lg glass-button"
                    to="https://www.thundercomm.com/rubik-pi-3/cn/docs/about-rubikpi"
                    style={{ fontWeight: "600", letterSpacing: '.0313rem' }}
                  >
                    🚀 即刻探索
                  </Link>
                </div>
              </div>

              {/* Resources Section moved inside hero */}
              <div
                className="resources-section"
                // style={{
                //   background: "rgba(255,255,255,0.08)",
                //   backdropFilter: "blur(.25rem)",
                //   borderRadius: "1.5rem",
                //   padding: "32px 16px 24px",
                //   boxShadow: "0 .5rem 2rem rgba(0,0,0,0.2)",
                //   border: ".0625rem solid rgba(255,255,255,0.15)",
                // }}
              >
                <div className="row" style={{ justifyContent: "center" }}>
                  {/* Community Card */}
                  {/* <div className="col col--2">
                    <Link
                      to="https://community.rubikpi.ai/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="card resource-card"
                        style={{
                          height: "11.25rem",
                          padding: "24px 16px",
                          textAlign: "center",
                          border: "none",
                          boxShadow: "0 .25rem .75rem rgba(0,0,0,0.1)",
                          backgroundColor: "none",
                          borderRadius: "1rem",
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
                            "translateY(-0.625rem) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 1.25rem 2.5rem rgba(0,0,0,0.2)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                          e.currentTarget.style.color = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 .25rem .75rem rgba(0,0,0,0.1)";
                          e.currentTarget.style.background = "none";
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
                            marginBottom: "16px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Heading
                          as="h3"
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            noneSpace: "nowrap",
                          }}
                        >
                          Community
                        </Heading>
                      </div>
                    </Link>
                  </div> */}

                  {/* User Manual Card */}
                  <div className="col col--2">
                    <Link
                      to="https://www.thundercomm.com/rubik-pi-3/cn/docs/about-rubikpi"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="card resource-card"
                        style={{
                          height: "11.25rem",
                          padding: "24px 16px",
                          textAlign: "center",
                          border: "none",
                          boxShadow: "0 .25rem .75rem rgba(0,0,0,0.1)",
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(.875rem) saturate(160%)',
                          WebkitBackdropFilter: 'blur(.875rem) saturate(160%)',
                          border: '.0625rem solid rgba(255,255,255,0.18)',
                          borderRadius: "1rem",
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
                            "translateY(-0.625rem) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 1.25rem 2.5rem rgba(0,0,0,0.2)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
                          e.currentTarget.style.color = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 .25rem .75rem rgba(0,0,0,0.1)";
                          e.currentTarget.style.background = 'var(--glass-bg)';
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
                            marginBottom: "16px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Heading
                          as="h3"
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            noneSpace: "nowrap",
                          }}
                        >
                          用户手册
                        </Heading>
                      </div>
                    </Link>
                  </div>

                  {/* Hardware Resources Card */}
                  <div className="col col--2">
                    <Link
                      to="https://www.thundercomm.com/rubik-pi-3/cn/docs/hardware-resources"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="card resource-card"
                        style={{
                          height: "11.25rem",
                          padding: "24px 16px",
                          textAlign: "center",
                          border: "none",
                          boxShadow: "0 .25rem .75rem rgba(0,0,0,0.1)",
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(.875rem) saturate(160%)',
                          WebkitBackdropFilter: 'blur(.875rem) saturate(160%)',
                          border: '.0625rem solid rgba(255,255,255,0.18)',
                          borderRadius: "1rem",
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
                            "translateY(-0.625rem) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 1.25rem 2.5rem rgba(0,0,0,0.2)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
                          e.currentTarget.style.color = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 .25rem .75rem rgba(0,0,0,0.1)";
                          e.currentTarget.style.background = 'var(--glass-bg)';
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
                            marginBottom: "16px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Heading
                          as="h3"
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            noneSpace: "nowrap",
                          }}
                        >
                          硬件资料
                        </Heading>
                      </div>
                    </Link>
                  </div>

                  {/* System Image Card */}
                  <div className="col col--2">
                    <Link
                      to="https://www.thundercomm.com/rubik-pi-3/cn/docs/peripheral-compatibility-list"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="card resource-card"
                        style={{
                          height: "11.25rem",
                          padding: "24px 16px",
                          textAlign: "center",
                          border: "none",
                          boxShadow: "0 .25rem .75rem rgba(0,0,0,0.1)",
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(.875rem) saturate(160%)',
                          WebkitBackdropFilter: 'blur(.875rem) saturate(160%)',
                          border: '.0625rem solid rgba(255,255,255,0.18)',
                          borderRadius: "1rem",
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
                            "translateY(-0.625rem) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 1.25rem 2.5rem rgba(0,0,0,0.2)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
                          e.currentTarget.style.color = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 .25rem .75rem rgba(0,0,0,0.1)";
                          e.currentTarget.style.background = 'var(--glass-bg)';
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
                            marginBottom: "16px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Heading
                          as="h3"
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            noneSpace: "nowrap",
                          }}
                        >
                          外设兼容列表
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
                          height: "11.25rem",
                          padding: "24px 16px",
                          textAlign: "center",
                          border: "none",
                          boxShadow: "0 .25rem .75rem rgba(0,0,0,0.1)",
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(.875rem) saturate(160%)',
                          WebkitBackdropFilter: 'blur(.875rem) saturate(160%)',
                          border: '.0625rem solid rgba(255,255,255,0.18)',
                          borderRadius: "1rem",
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
                            "translateY(-0.625rem) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 1.25rem 2.5rem rgba(0,0,0,0.2)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)";
                          e.currentTarget.style.color = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 .25rem .75rem rgba(0,0,0,0.1)";
                          e.currentTarget.style.background = 'var(--glass-bg)';
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
                            marginBottom: "16px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Heading
                          as="h3"
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            noneSpace: "nowrap",
                          }}
                        >
                          Github
                        </Heading>
                      </div>
                    </Link>
                  </div>

                  {/* AI Hub Card */}
                  <div className="col col--2">
                    <Link
                      href="https://aihub.qualcomm.com/models?chipsets=qualcomm-qcs6490-proxy"
                      target="_blank"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="card resource-card"
                        style={{
                          height: "11.25rem",
                          padding: "24px 16px",
                          textAlign: "center",
                          border: "none",
                          boxShadow: "0 .25rem .75rem rgba(0,0,0,0.1)",
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(.875rem) saturate(160%)',
                          WebkitBackdropFilter: 'blur(.875rem) saturate(160%)',
                          border: '.0625rem solid rgba(255,255,255,0.18)',
                          borderRadius: "1rem",
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
                            "translateY(-0.625rem) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 1.25rem 2.5rem rgba(0,0,0,0.2)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, #42e695 0%, #3bb2b8 100%)";
                          e.currentTarget.style.color = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 .25rem .75rem rgba(0,0,0,0.1)";
                          e.currentTarget.style.background = 'var(--glass-bg)';
                          e.currentTarget.style.color = "inherit";
                        }}
                      >
                        <img
                          src={useBaseUrl('/img/ai-hub.png')}
                          alt="AI Hub"
                          style={{
                            width: "60%",
                            height: "auto",
                            objectFit: "contain",
                            marginBottom: "16px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Heading
                          as="h3"
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            noneSpace: "nowrap",
                          }}
                        >
                          AI Hub
                        </Heading>
                      </div>
                    </Link>
                  </div>

                  {/* Edge Impulse Card */}
                  <div className="col col--2">
                    <Link
                      href="https://docs.edgeimpulse.com/docs/edge-ai-hardware/cpu-+-ai-accelerators/thundercomm-rubikpi3"
                      target="_blank"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="card resource-card"
                        style={{
                          height: "11.25rem",
                          padding: "24px 16px",
                          textAlign: "center",
                          border: "none",
                          boxShadow: "0 .25rem .75rem rgba(0,0,0,0.1)",
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(.875rem) saturate(160%)',
                          WebkitBackdropFilter: 'blur(.875rem) saturate(160%)',
                          border: '.0625rem solid rgba(255,255,255,0.18)',
                          borderRadius: "1rem",
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
                            "translateY(-0.625rem) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 1.25rem 2.5rem rgba(0,0,0,0.2)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)";
                          e.currentTarget.style.color = "none";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 .25rem .75rem rgba(0,0,0,0.1)";
                          e.currentTarget.style.background = 'var(--glass-bg)';
                          e.currentTarget.style.color = "inherit";
                        }}
                      >
                        <img
                          src={useBaseUrl('/img/edge-impulse.png')}
                          alt="Edge Impulse"
                          style={{
                            width: "60%",
                            height: "auto",
                            objectFit: "contain",
                            marginBottom: "16px",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Heading
                          as="h3"
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                            noneSpace: "nowrap",
                          }}
                        >
                          Edge Impulse
                        </Heading>
                      </div>
                    </Link>
                  </div>
                </div>

                <style>{`
                  /* Card effects */
                  .resources-section .resource-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transition: left 0.5s ease;
                  }
                  .resources-section .resource-card:hover::before { left: 100%; }
                  .resources-section .resource-card:hover { animation: cardPulse 0.6s ease-in-out; }
                  @keyframes cardPulse {
                    0% { box-shadow: 0 .25rem .75rem rgba(0,0,0,0.1); }
                    50% { box-shadow: 0 1.25rem 2.5rem rgba(0,0,0,0.35); }
                    100% { box-shadow: 0 1.25rem 2.5rem rgba(0,0,0,0.2); }
                  }

                  /* Glassmorphism base */
                  :root { --glass-bg: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 60%); }
                  .resource-card {
                    background: var(--glass-bg) !important;
                    backdrop-filter: blur(.875rem) saturate(160%) !important;
                    -webkit-backdrop-filter: blur(.875rem) saturate(160%) !important;
                    border: .0625rem solid rgba(255,255,255,0.18) !important;
                    box-shadow: 0 .25rem 1.25rem -0.125rem rgba(0,0,0,0.35), 0 0 0 .0625rem rgba(255,255,255,0.05) inset !important;
                    position: relative;
                    overflow: hidden;
                  }
                  .resource-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background:
                      radial-gradient(at 30% 20%, rgba(255,255,255,0.35), transparent 60%),
                      radial-gradient(at 70% 80%, rgba(255,255,255,0.25), transparent 65%),
                      linear-gradient(125deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
                    mix-blend-mode: overlay;
                    opacity: 0.85;
                    filter: blur(.5rem);
                    animation: liquidShift 8s ease-in-out infinite;
                    pointer-events: none;
                    z-index:0;
                  }
                  .resource-card > * { position: relative; z-index:2; }
                  @keyframes liquidShift { 0% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(4%, -4%, 0) scale(1.03); } 100% { transform: translate3d(0,0,0) scale(1); } }

                  /* ================= Glass Button (Get Started) ================= */
                  .glass-button {
                    --glass-btn-bg: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 60%);
                    position: relative;
                    background: var(--glass-btn-bg) !important;
                    backdrop-filter: blur(1.125rem) saturate(180%) !important;
                    -webkit-backdrop-filter: blur(1.125rem) saturate(180%) !important;
                    border: .0625rem solid rgba(255,255,255,0.28) !important;
                    color: #fff !important;
                    box-shadow: 0 .375rem 1.5rem -0.375rem rgba(0,0,0,0.55), 0 0 0 .0625rem rgba(255,255,255,0.1) inset;
                    overflow: hidden;
                    transition: all .5s cubic-bezier(.4,.2,.2,1);
                    text-shadow: 0 .125rem .375rem rgba(0,0,0,0.35);
                  }
                  .glass-button::before {
                    content: '';
                    position: absolute;
                    top: -160%;
                    left: -60%;
                    width: 220%;
                    height: 320%;
                    background:
                      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(255,255,255,0) 55%),
                      radial-gradient(circle at 70% 75%, rgba(255,255,255,0.35), rgba(255,255,255,0) 65%);
                    mix-blend-mode: overlay;
                    opacity: .42;
                    transform: rotate(18deg) translate3d(0,0,0);
                    transition: transform 1.1s ease, opacity 1.1s ease;
                    pointer-events: none;
                  }
                  .glass-button::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0) 80%);
                    transform: translateX(-120%) skewX(-20deg);
                    animation: glassShine 5.5s ease-in-out infinite;
                    mix-blend-mode: screen;
                    opacity: .55;
                    pointer-events: none;
                  }
                  @keyframes glassShine {
                    0%, 12% { transform: translateX(-120%) skewX(-20deg); }
                    30% { transform: translateX(110%) skewX(-20deg); }
                    45%,100% { transform: translateX(110%) skewX(-20deg); }
                  }
                  .glass-button:hover {
                    transform: translateY(-0.25rem) scale(1.035);
                    box-shadow: 0 .875rem 2.625rem -0.625rem rgba(0,0,0,0.65), 0 0 0 .0625rem rgba(255,255,255,0.16) inset;
                    border-color: rgba(255,255,255,0.4) !important;
                  }
                  .glass-button:hover::before { transform: rotate(23deg) translate3d(4%,6%,0); opacity: .58; }
                  .glass-button:active { transform: translateY(0) scale(.97); transition-duration: .25s; }
                  .glass-button:focus-visible {
                    outline: none;
                    box-shadow: 0 0 0 .1875rem rgba(255,255,255,0.55), 0 0 0 .375rem rgba(64,224,255,0.45), 0 .5rem 1.75rem -0.375rem rgba(0,0,0,0.6);
                  }
                  @media (max-width: 48rem) {
                    .glass-button { padding: 13.6px 25.6px !important; font-size: 14.4px !important; }
                  }

                  /* Keep all 7 cards in one row on desktop */
                  @media (min-width: 64.0625rem) {
                    .resources-section .row { flex-wrap: nowrap !important; }
                    .resources-section .row > .col { flex: 0 0 14.2857% !important; max-width: 14.2857% !important; }
                  }
                  .resources-section .col--2 { padding: 0 .3125rem !important; }
                  .resources-section .col--2 h3 { font-size:.875rem !important; }

                  /* Adjust spacing when inside hero */
                  @media (max-width: 64rem) {
                    .resources-section { padding: 24px 12px 16px !important; }
                  }
                    .resources-section { padding: 80px 12px 16px !important; }
                    .hero-description{max-width:56.25rem;margin:0 auto;}
                  @media (max-width: 48rem) {
                  .row{padding:0 .9375rem;}
                  .resource-card img {
                width: 4.375rem !important;
                height: 4.375rem !important;
              }
                .resource-card {
                height: 7.5rem !important;
                padding: 8px !important;
                margin: 0 auto !important;
                max-width: 17.5rem !important;
              }
                #__docusaurus > footer{
                padding:0rem;
                }
                .hero-subtitle{
                margin-bottom:.9375rem !important;}
                  }
                `}</style>
            </div> {/* end resources-section */}
            </div> {/* added missing container closing div */}
          </section>

          {/* Responsive Styles */}
          <style>{`
            /* Hero Section Responsive Design (fullscreen) */
            @media (max-width: 64rem) {
              .hero.hero--primary {
                min-height: 100vh !important;
                padding: 48px 0 !important;
              }
              .hero-title { font-size: 32px !important; }
              .col--2 { --ifm-col-width: 15% !important; }
              .hero-subtitle { font-size: 20.8px !important; }
              .hero-description { fontSize: 16px !important; padding: 0 16px !important; }
              .col { padding: 0 .625rem !important; }
            }
            @media (max-width: 48rem) {
              .hero.hero--primary {
                min-height: 100vh !important;
                padding: 32px 0 40px !important;
              }
              .hero-title { font-size: 32px !important; padding: 0 16px !important; }
              .hero-subtitle { font-size: 17.6px !important; }
              .hero-description { font-size: 14.4px !important; padding: 0 24px !important; margin-bottom: 32px !important; }
              .button--lg { font-size: 14.4px !important; padding: 12px 24px !important; }
              
              /* Cards Responsive */
              .col--2 {
                flex: 0 0 50% !important;
                max-width: 50% !important;
                margin-bottom: 16px !important;
              }
              .resource-card {
                height: 10rem !important;
                padding: 16px 8px !important;
              }
              .resource-card img {
                width: 6.25rem !important;
                height: 6.25rem !important;
              }
              .resource-card h3 {
                font-size: 14.4px !important;
              }
              #__docusaurus_skipToContent_fallback > main > div > section > div.container > div:nth-child(1) > img{width:12.5rem !important;height:auto;margin-top:1.875rem;}
            }
            
            @media (max-width: 30rem) {
              .hero.hero--primary { min-height: 100vh !important; padding: 24px 0 40px !important; }
              .hero-title { font-size: 19.2px !important; line-height: 1.3 !important; }
              .hero-subtitle { font-size: 16px !important; }
              .hero-description { font-size: 12.8px !important; padding: 0 16px !important; margin-bottom: 24px !important; }
              
              /* Mobile Cards - Full Width */
              .container row{
              justify-content: flex-end !important;
              }
              .col--2 {
                flex: 0 0 100% !important;
                max-width: 50% !important;
                margin-bottom: 16px !important;
                padding: 0 .625rem !important;
              }
              .resource-card {
                height: 7.5rem !important;
                padding: 8px !important;
                margin: 0 auto !important;
                max-width: 17.5rem !important;
              }
              .resource-card img {
                width: 70% !important;
                height: 70% !important;
              }
              .resource-card h3 {
                font-size: 13.6px !important;
              }
              
              /* Resources Section Mobile */
              .resources-section {
                padding: 32px 0 !important;
              }
            }
          `}</style>
        </div>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}


