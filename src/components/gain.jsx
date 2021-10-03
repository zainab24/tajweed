import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import gain from "../assets/audio/gain.wav";
import img6a from "../assets/1/6a.jpeg";

export default function Gain() {
  return (
    <div className="gain">
      <Accordion.Item eventKey="18">
        <Accordion.Header>غ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={gain} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Closest to the mouth
          </p>
          <p>
            Note that the tongue is dipped in the middle so the sound is
            directed up to produce a heavy sound
          </p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img6a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
