import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          <div id="box-wrapper">
            <div id="box">
              <div class="river river--1"></div>
              <div class="river river--2"></div>
            </div>
            <svg>
              <filter id="turbulence" x="0" y="0">
                <feTurbulence baseFrequency="0.02 0.01"></feTurbulence>
                <feDisplacementMap
                  scale="45"
                  in="SourceGraphic"
                ></feDisplacementMap>
              </filter>
            </svg>
          </div>

          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}
