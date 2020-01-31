import uritube1 from "../assets/images/uritube/uritube-screenshot-min1.png";
import uritube2 from "../assets/images/uritube/uritube-screenshot-min2.png";
import uritube3 from "../assets/images/uritube/uritube-screenshot-min3.png";

import secondhand1 from "../assets/images/secondhand/secondhand-screenshot-min1.png";
import secondhand2 from "../assets/images/secondhand/secondhand-screenshot-min4.png";
import secondhand3 from "../assets/images/secondhand/secondhand-screenshot-min5.png";
import secondhand4 from "../assets/images/secondhand/secondhand-screenshot-min6.png";

import gdflower1 from "../assets/images/gdflower/geumhwafood-screenshot-min1.png";

import misinterpreter1 from "../assets/images/misinterpreter/misinterpreter-screenshot-min1.png";

interface imageDataType {
  [uritube: string]: string[];
  secondhand: string[];
  gdflower: string[];
  misinterpreter: string[];
}

export const imageData: imageDataType = {
  uritube: [uritube1, uritube2, uritube3],
  secondhand: [secondhand1, secondhand2, secondhand3, secondhand4],
  gdflower: [gdflower1],
  misinterpreter: [misinterpreter1]
};
