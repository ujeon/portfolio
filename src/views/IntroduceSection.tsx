import React from "react";

import {
  ContentContainer,
  ContentHead,
  SubTitle,
  ContentBody,
  Text
} from "../components/styledComponents";

const IntroduceSection = () => {
  return (
    <ContentContainer>
      <ContentHead>
        <SubTitle>개발을 통해 가치를 전달하고 싶습니다.</SubTitle>
      </ContentHead>
      <ContentBody>
        <Text>
          세상에 존재하는 많은 직업들은 저마다 사회에 필요한 가치를 전달합니다.
        </Text>
        <br></br>
        <Text>
          그리고 저는 개발자로써 사회에 긍정적인 가치를 전달하려고 합니다.
        </Text>
        <br></br>
        <Text>아직 서투르고 부족한 점이 많은 초보 개발자이지만,</Text>
        <br></br>
        <Text>
          어제보다는 오늘, 오늘보다는 내일에 더 성숙한 개발자가 되기 위해
          노력하고 있습니다.
        </Text>
      </ContentBody>
    </ContentContainer>
  );
};

export default IntroduceSection;
