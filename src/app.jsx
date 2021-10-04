import React from "react";
import { Router, Link } from "wouter";

import home from "./assets/1/home.png";
import useRecorder from './components/use-recorder';

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
import { registerSW } from 'virtual:pwa-register'

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

// Home function that is reflected across the site
export default function Home() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  const playAudio = (url) => {
    new Audio(audioURL).play();
  };

  const updateSW = registerSW({
    onOfflineReady() {},
  })

  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
      <div className="return"><div className="recorder">
      <button onClick={startRecording} disabled={isRecording}>
      <span className="except">●</span> record
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
      ❚❚ stop
      </button>
      <button onClick={playAudio}>🔊 play</button>
      </div>
      <Link href="/"><a><img src={home} alt="home"/></a></Link></div>
      <div className="content"><PageRouter /></div>
      </main>
    </Router>
  );
}
