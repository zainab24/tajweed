import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import meem from "../assets/audio/meem.mp3";
import img33 from "../assets/1/33.jpeg";

export default function Meem() {
  return (
    <div className="meem">
     <Accordion.Item eventKey="23">
        <Accordion.Header>م</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={meem} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Lips come together
          </p>
          <p>Hold lips for longer than{" "}<span className="arabic">ب</span></p>
          <p>
            Sound comes from the lip makhraj, for the{" "}<span className="arabic">م</span>{" "}sound also comes from
            the nose
          </p>
          <p>Tongue relaxed as normal</p>
          <p>
            <Link href="ghunna"><span className="arabic">الغنھ</span> Al Ghunna</Link> 
          </p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="tawassut"><span className="arabic">التوسط</span> Al Tawassut / البينية Al Bayniyyah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img33} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
