import React from "react";

import {
  FooterSection,
  CommentContainer,
  SocialIconsContainer,
  BlogContainer,
  SocialLink,
  IconFooter,
  Comment
} from "../styledComponents/components/_footer";
import { Text } from "../styledComponents/components/_typography";
import * as Color from "../styledComponents/base/_colors";

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <CommentContainer>
        <Comment>Have a nice day :)</Comment>
      </CommentContainer>
      <SocialIconsContainer>
        <SocialLink href="https://github.com/ujeon?tab=repositories">
          <IconFooter className="icon ion-logo-github" />
        </SocialLink>
        <SocialLink href="https://twitter.com/wj9304">
          <IconFooter className="icon ion-logo-twitter" />
        </SocialLink>
        <SocialLink href="mailto:wj9304@gmail.com">
          <IconFooter className="icon ion-ios-mail" />
        </SocialLink>
      </SocialIconsContainer>
      <BlogContainer>
        <SocialLink href="https://medium.com/@wj9304">
          <Text size="1.1" color={Color.color_grey_dark}>
            Blog
          </Text>
        </SocialLink>
      </BlogContainer>
    </FooterSection>
  );
};

export default Footer;
