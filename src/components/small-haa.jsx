import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import smallHaa from "../assets/audio/small-haa.mp3";
import img1 from "../assets/1/1.jpeg";
import img3 from "../assets/1/3.jpeg";
import img4 from "../assets/1/4.jpeg";

export default function SmallHaa() {
  return (
    <div className="small-haa">
     <Accordion.Item eventKey="26">
        <Accordion.Header>ه</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={smallHaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Furthest part, from the vocal
            chords.
          </p>
         <p>
            <Link href="hams">الحمص Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal">الاستفال Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah">الانفتاح Al Infitah</Link>
          </p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img3} />
              <Carousel.Caption>
                <p>When ء is sakinah, the vocal chords are closed.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img4} />
              <Carousel.Caption>
                <p>When ء and ه are mutharrikah, vocal chords are all open.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
