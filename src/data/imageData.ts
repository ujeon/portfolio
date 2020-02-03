import uritube1 from "../assets/images/uritube/uritube-screenshot-min1.png";
import uritube2 from "../assets/images/uritube/uritube-screenshot-min2.png";
import uritube3 from "../assets/images/uritube/uritube-screenshot-min3.png";
import uritubeRelated from "../assets/images/uritube/photo-1565870100382-f0a510db3cd1-min.jpeg";

import secondhand1 from "../assets/images/secondhand/secondhand-screenshot-min1.png";
import secondhand2 from "../assets/images/secondhand/secondhand-screenshot-min2.png";
import secondhand3 from "../assets/images/secondhand/secondhand-screenshot-min3.png";
import secondhand4 from "../assets/images/secondhand/secondhand-screenshot-min4.png";
import secondhandRelated from "../assets/images/secondhand/photo-1516382686263-779707ed2896-min.jpeg";

import gdflower1 from "../assets/images/gdflower/geumhwafood-screenshot-min1.png";
import gdflower2 from "../assets/images/gdflower/geumhwafood-screenshot-min2.png";
import gdflower3 from "../assets/images/gdflower/geumhwafood-screenshot-min3.png";
import gdflowerRelated from "../assets/images/gdflower/photo-1509440159596-0249088772ff-min.jpeg";

import misinterpreter1 from "../assets/images/misinterpreter/misinterpreter-screenshot-min1.png";
import misinterpreter2 from "../assets/images/misinterpreter/misinterpreter-screenshot-min2.png";
import misinterpreterRelated from "../assets/images/misinterpreter/photo-1453748866136-b1dd97284f49-min.jpeg";

interface imageDataType {
  [uritube: string]: {
    [projectImg: string]: string[];
    relatedImg: string[];
  };
  secondhand: { projectImg: string[]; relatedImg: string[] };
  gdflower: { projectImg: string[]; relatedImg: string[] };
  misinterpreter: { projectImg: string[]; relatedImg: string[] };
}

export const imageData: imageDataType = {
  uritube: {
    projectImg: [uritube1, uritube2, uritube3],
    relatedImg: [uritubeRelated]
  },
  secondhand: {
    projectImg: [secondhand1, secondhand2, secondhand3, secondhand4],
    relatedImg: [secondhandRelated]
  },
  gdflower: {
    projectImg: [gdflower1, gdflower2, gdflower3],
    relatedImg: [gdflowerRelated]
  },
  misinterpreter: {
    projectImg: [misinterpreter1, misinterpreter2],
    relatedImg: [misinterpreterRelated]
  }
};
