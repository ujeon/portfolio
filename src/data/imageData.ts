import uritube1 from "../assets/images/uritube/uritube-screenshot-min1.png";
import uritube2 from "../assets/images/uritube/uritube-screenshot-min2.png";
import uritube3 from "../assets/images/uritube/uritube-screenshot-min3.png";
import uritubeRelated_large from "../assets/images/uritube/photo-1565870100382-f0a510db3cd1-large.jpeg";
import uritubeRelated_small from "../assets/images/uritube/photo-1565870100382-f0a510db3cd1-small.jpeg";

import secondhand1 from "../assets/images/secondhand/secondhand-screenshot-min1.png";
import secondhand2 from "../assets/images/secondhand/secondhand-screenshot-min2.png";
import secondhand3 from "../assets/images/secondhand/secondhand-screenshot-min3.png";
import secondhand4 from "../assets/images/secondhand/secondhand-screenshot-min4.png";
import secondhandRelated_large from "../assets/images/secondhand/photo-1516382686263-779707ed2896-large.jpeg";
import secondhandRelated_small from "../assets/images/secondhand/photo-1516382686263-779707ed2896-small.jpeg";

import gdflower1 from "../assets/images/gdflower/geumhwafood-screenshot-min1.png";
import gdflower2 from "../assets/images/gdflower/geumhwafood-screenshot-min2.png";
import gdflower3 from "../assets/images/gdflower/geumhwafood-screenshot-min3.png";
import gdflowerRelated_large from "../assets/images/gdflower/photo-1509440159596-0249088772ff-large.jpeg";
import gdflowerRelated_small from "../assets/images/gdflower/photo-1509440159596-0249088772ff-small.jpeg";

import misinterpreter1 from "../assets/images/misinterpreter/misinterpreter-screenshot-min1.png";
import misinterpreter2 from "../assets/images/misinterpreter/misinterpreter-screenshot-min2.png";
import misinterpreterRelated_large from "../assets/images/misinterpreter/photo-1453748866136-b1dd97284f49-large.jpeg";
import misinterpreterRelated_small from "../assets/images/misinterpreter/photo-1453748866136-b1dd97284f49-small.jpeg";

import ujeon_half_small from "../assets/images/profile/ujeon-half-small.png";
import ujeon_half_large from "../assets/images/profile/ujeon-half-large.png";

interface imageDataType {
  [uritube: string]: {
    [projectImg: string]: string[];
    relatedImg_large: string[];
    relatedImg_small: string[];
  };
  secondhand: {
    projectImg: string[];
    relatedImg_large: string[];
    relatedImg_small: string[];
  };
  gdflower: {
    projectImg: string[];
    relatedImg_large: string[];
    relatedImg_small: string[];
  };
  misinterpreter: {
    projectImg: string[];
    relatedImg_large: string[];
    relatedImg_small: string[];
  };
}

interface profileImgType {
  ujeon_half_small: string;
  ujeon_half_large: string;
}

interface projectRepresentativeImgType {
  [uritube: string]: string;
  secondhand: string;
  misinterpreter: string;
  gdflower: string;
}

export const imageData: imageDataType = {
  uritube: {
    projectImg: [uritube1, uritube2, uritube3],
    relatedImg_large: [uritubeRelated_large],
    relatedImg_small: [uritubeRelated_small]
  },
  secondhand: {
    projectImg: [secondhand1, secondhand2, secondhand3, secondhand4],
    relatedImg_large: [secondhandRelated_large],
    relatedImg_small: [secondhandRelated_small]
  },
  gdflower: {
    projectImg: [gdflower1, gdflower2, gdflower3],
    relatedImg_large: [gdflowerRelated_large],
    relatedImg_small: [gdflowerRelated_small]
  },
  misinterpreter: {
    projectImg: [misinterpreter1, misinterpreter2],
    relatedImg_large: [misinterpreterRelated_large],
    relatedImg_small: [misinterpreterRelated_small]
  }
};

export const profileImgData: profileImgType = {
  ujeon_half_small: ujeon_half_small,
  ujeon_half_large: ujeon_half_large
};

export const projectRepresentativeImg: projectRepresentativeImgType = {
  uritube: uritube1,
  secondhand: secondhand1,
  misinterpreter: misinterpreter1,
  gdflower: gdflower1
};
