"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../Sidebar.js";

export default function Contact() {
  const [activeWindow, setActiveWindow] = useState("contact");
  const [windowStates, setWindowStates] = useState({
    contact: { minimized: false, position: { top: 100, left: 100 } },
    social: { minimized: false, position: { top: 120, left: 620 } },
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
        <h1>Contact</h1>

        {/* Contact Window */}
        <div
          className={`window ${activeWindow === "contact" ? "active" : ""}`}
          style={{
            top: windowStates.contact.position.top,
            left: windowStates.contact.position.left,
          }}
          onClick={() => handleWindowClick("contact")}
        >
          <div
            className="window-header"
            onMouseDown={(e) => handleDragStart(e, "contact")}
          >
            <div className="window-title">Contact me</div>
            <div className="window-controls">
              <div className="window-control" onClick={() => handleMinimize("contact")}>
                -
              </div>
              <div className="window-control">□</div>
            </div>
          </div>
          {!windowStates.contact.minimized && (
            <div className="window-content">
              <p>
              Fill in all the required information. The system will send  resume to your email automatically.
              </p>

              <div className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="subject" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" className="form-input form-textarea" rows="5"></textarea>
                </div>

                <button className="send-button">Request Resume</button>
              </div>

              <p style={{ marginTop: '20px' }}>
                You can also email me directly at: <a href="mailto:dev@0xmrjane.com">dev@0xmrjane.com</a>
              </p>
            </div>
          )}
        </div>

        {/* Social Window */}
        <div
          className={`window ${activeWindow === "social" ? "active" : ""}`}
          style={{
            top: windowStates.social.position.top,
            left: windowStates.social.position.left,
          }}
          onClick={() => handleWindowClick("social")}
        >
          <div
            className="window-header"
            onMouseDown={(e) => handleDragStart(e, "social")}
          >
            <div className="window-title">Social media</div>
            <div className="window-controls">
              <div className="window-control" onClick={() => handleMinimize("social")}>
                -
              </div>
              <div className="window-control">□</div>
            </div>
          </div>
          {!windowStates.social.minimized && (
            <div className="window-content">
              <p>You can also find me on these platforms:</p>

              <div className="social-links">
                <a href="https://github.com/anatsrii" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">GitHub</span>
                </a>

                <a href="https://x.com/mrjane888" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">Twitter</span>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100012548802833" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">Facebook</span>
                </a>

                <a href="https://codepen.io/niceitan" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">Line</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="footer">
        <div className="window-list">
          <div className="window-button" onClick={() => handleWindowClick("contact")}>
            Contact me
          </div>
          <div className="window-button" onClick={() => handleWindowClick("social")}>
            Social media
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
