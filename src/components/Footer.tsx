import React from "react";

import {
  FooterSection,
  CommentContainer,
  SocialIconsContainer,
  AboutMeContainder,
  IconFooter,
  Comment,
  ContactMeContainer
} from "../styledComponents/components/_footer";
import { Text } from "../styledComponents/components/_typography";
import { SocialLink } from "../styledComponents/base/utilities";
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

      <AboutMeContainder>
        <SocialLink href="https://medium.com/@wj9304">
          <Text size="1.6" color={Color.color_grey_dark}>
            Blog
          </Text>
        </SocialLink>
        <SocialLink
          href="https://www.dropbox.com/s/kh0yf3dmz2ommxp/%EC%9E%A5%EC%9A%B0%EC%A0%84%20%EC%9D%B4%EB%A0%A5%EC%84%9C.pdf?dl=0"
          target="_blank"
        >
          <Text size="1.6" color={Color.color_grey_dark}>
            Resume
          </Text>
        </SocialLink>
      </AboutMeContainder>

      <ContactMeContainer>
        <SocialLink href="tel:+8201091126563">
          <Text size="1.6" color={Color.color_grey_dark}>
            +82 10-9112-6563
          </Text>
        </SocialLink>
      </ContactMeContainer>
    </FooterSection>
  );
};

export default Footer;
