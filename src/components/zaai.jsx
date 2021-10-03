import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import zaai from "../assets/audio/zaai.wav";
import img26 from "../assets/1/26.jpeg";

export default function Zaai() {
  return (
    <div className="zaai">
      <Accordion.Item eventKey="10">
        <Accordion.Header>ز</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={zaai} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth
          </p>
          <p>Tongue relaxed as normal</p>
         <p>
            <Link href="safeer"><span className="arabic">الصفیر</span> As Safeer</Link></p>
          <hr />
         <p>
            <Link href="hams"><span className="arabic">الهمس</span> Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img26} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
