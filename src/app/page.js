"use client"
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import profileIcon from "../assets/profile.png";
import Sidebar from "./Sidebar.js";



export default function Home() {
  const [activeWindow, setActiveWindow] = useState("intro");
  const [windowStates, setWindowStates] = useState({
    intro: { minimized: false, position: { top: 100, left: 100 } },
    clients: { minimized: false, position: { top: 120, left: 620 } },
    posts: { minimized: false, position: { top: 400, left: 400 } },
  });



  const handleWindowClick = (windowName) => {
    setActiveWindow(windowName);
  };

  const handleMinimize = (windowName) => {
    setWindowStates({
      ...windowStates,
      [windowName]: {
        ...windowStates[windowName],
        minimized: !windowStates[windowName].minimized,
      },
    });
  };

  const handleDragStart = (e, windowName) => {
    const windowElement = e.currentTarget.parentElement;
    if (!windowElement) return;

    setActiveWindow(windowName);

    const startX = e.clientX;
    const startY = e.clientY;
    const startTop = windowElement.offsetTop;
    const startLeft = windowElement.offsetLeft;

    const handleMouseMove = (moveEvent) => {
      const newTop = startTop + (moveEvent.clientY - startY);
      const newLeft = startLeft + (moveEvent.clientX - startX);

      setWindowStates({
        ...windowStates,
        [windowName]: {
          ...windowStates[windowName],
          position: { top: newTop, left: newLeft },
        },
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="desktop">
     
     <Sidebar />
      <div className="content">
        <h1>Home</h1>

        {/* Introduction Window */}
        <div
          className={`window ${activeWindow === "intro" ? "active" : ""}`}
          style={{
            top: windowStates.intro.position.top,
            left: windowStates.intro.position.left,
          }}
          onClick={() => handleWindowClick("intro")}
        >
          <div
            className="window-header"
            onMouseDown={(e) => handleDragStart(e, "intro")}
          >
            <div className="window-title">Introduction</div>
            <div className="window-controls">
              <div className="window-control" onClick={() => handleMinimize("intro")}>
                -
              </div>
              <div className="window-control">□</div>
            </div>
          </div>
          {!windowStates.intro.minimized && (
            <div className="window-content">
              <p>Hi, I'm Mr.Jane and I am interest in web development,AI, LLM, devOps and more.</p>
              <Image
                src={profileIcon}
                alt="Mr.Jane profile 8bit image"
                style={{ float: "right", marginLeft: "15px", width: "100px" }}
              />
              <p>
                I have over 7 years in IT Support.
              </p>
              <Link href="/services">
                <button>Find out more about what I do -&gt;</button>
              </Link>
            </div>
          )}
        </div>

        {/* Clients Window */}
        <div
          className={`window ${activeWindow === "clients" ? "active" : ""}`}
          style={{
            top: windowStates.clients.position.top,
            left: windowStates.clients.position.left,
          }}
          onClick={() => handleWindowClick("clients")}
        >
          <div
            className="window-header"
            onMouseDown={(e) => handleDragStart(e, "clients")}
          >
            <div className="window-title">Clients</div>
            <div className="window-controls">
              <div className="window-control" onClick={() => handleMinimize("clients")}>
                -
              </div>
              <div className="window-control">□</div>
            </div>
          </div>
          {!windowStates.clients.minimized && (
            <div className="window-content">
              <p>
                This blogs is inspired by Devahoy.com and Nicchan.me
              </p>
              <div className="client-logos">
                <img
                  src="https://ext.same-assets.com/570341714/1443062993.png"
                  alt="Boston Scientific"
                />
                <img
                  src="https://ext.same-assets.com/1331918814/2415095432.png"
                  alt="Catchpoint"
                />
                <img
                  src="https://ext.same-assets.com/40412258/2491670944.png"
                  alt="Hinge"
                />
                <img
                  src="https://ext.same-assets.com/1019997059/3061313745.png"
                  alt="Mplus"
                />
                <img
                  src="https://ext.same-assets.com/3724791299/894511051.jpeg"
                  alt="Set Studio"
                />
                <img
                  src="https://ext.same-assets.com/1149531573/1078477870.png"
                  alt="Smashing Magazine"
                />
              </div>
            </div>
          )}
        </div>

        {/* Recent Posts Window */}
        <div
          className={`window ${activeWindow === "posts" ? "active" : ""}`}
          style={{
            top: windowStates.posts.position.top,
            left: windowStates.posts.position.left,
          }}
          onClick={() => handleWindowClick("posts")}
        >
          <div
            className="window-header"
            onMouseDown={(e) => handleDragStart(e, "posts")}
          >
            <div className="window-title">Recent Posts</div>
            <div className="window-controls">
              <div className="window-control" onClick={() => handleMinimize("posts")}>
                -
              </div>
              <div className="window-control">□</div>
            </div>
          </div>
          {!windowStates.posts.minimized && (
            <div className="window-content">
              <div className="blog-posts">
                <div className="blog-post">
                  <div className="blog-date">March 18, 2025</div>
                  <a href="#">Blog 1</a>
                </div>
                <div className="blog-post">
                  <div className="blog-date">March 18, 2025</div>
                  <a href="#">
                    Blog 2
                  </a>
                </div>
                <div className="blog-post">
                  <div className="blog-date">March 18, 2025</div>
                  <a href="#">Blog 3</a>
                </div>
                <div className="blog-post">
                  <div className="blog-date">March 18, 2025</div>
                  <a href="#">
                    Blog 4
                  </a>
                </div>
                <div className="blog-post">
                  <div className="blog-date">March 18, 2025</div>
                  <a href="#">
                    Blog 6
                  </a>
                </div>
              </div>
              <Link href="/blog">
                <button>Read more blog posts -&gt;</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="footer">
        <div className="window-list">
          <div className="window-button" onClick={() => handleWindowClick("intro")}>
            Introduction
          </div>
          <div className="window-button" onClick={() => handleWindowClick("clients")}>
            Clients
          </div>
          <div className="window-button" onClick={() => handleWindowClick("posts")}>
            Recent Posts
          </div>
        </div>
        <div className="settings-button">
          <span>⚙</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}
