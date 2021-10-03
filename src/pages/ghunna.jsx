import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Meem from "../components/meem";
import Noon from "../components/noon";

export default function Ghunna() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1><span className="arabic">الغنھ</span> Al Ghunna</h1>
    <p>
    <b>Sound is allowed to flow</b></p><p>All the letters <span className="except">except</span>
            {" "}<span className="inline-block arabic">أَجِدْ قَطٍ بَكَتْ</span>{" "} and {" "}<span className="inline-block arabic">لن عمر</span>
          </p>
    </div>
    <Accordion>
      <Meem/>
      <Noon/>
    </Accordion>
    </>
  );
}
