import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import suad from "../assets/audio/suad.mp3";
import img26a from "../assets/1/26a.jpeg"

export default function Suad() {
  return (
    <div className="suad">
      <Accordion.Item eventKey="13">
        <Accordion.Header>ص</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={suad} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth.
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
         <p>
            <Link href="safeer">الصفیر As Safeer</Link></p>
          <hr />
         <p>
            <Link href="hams">الحمص Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila">الإستــعلاء Al Isti’la</Link></p>
        <p>
            <Link href="itbaq">الاطباق Al Itbaq</Link></p>
          <img className="d-block mx-auto" src={img26a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
