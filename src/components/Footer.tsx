import React, { useRef, useState } from "react";

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

const CryptoJS = require("crypto-js");

const encryptedEmail = CryptoJS.AES.encrypt(
  "wj9304@gmail.com",
  "wkddnwjs"
).toString();

const encryptedPhone = CryptoJS.AES.encrypt(
  "+8201091126563",
  "wkddnwjs"
).toString();

const Footer: React.FC = () => {
  const elEmail = useRef(document.createElement("a"));
  const elPhone = useRef(document.createElement("a"));

  const [isEmailDescrypted, setIsEmailDescrypted] = useState(false);
  const [isPhoneDescrypted, setIsPhoneDescrypted] = useState(false);

  const descryptEmail = () => {
    const emailInHref = elEmail.current.href.split(":")[1];

    if (!isEmailDescrypted) {
      const emailBytes = CryptoJS.AES.decrypt(emailInHref, "wkddnwjs");
      const originalEmail = emailBytes.toString(CryptoJS.enc.Utf8);

      elEmail.current.href = `mailto:${originalEmail}`;

      setIsEmailDescrypted(true);
    }
  };

  const descryptPhone = () => {
    const phoneInHref = elPhone.current.href.split(":")[1];

    if (!isPhoneDescrypted) {
      const phoneBytes = CryptoJS.AES.decrypt(phoneInHref, "wkddnwjs");
      const originalphone = phoneBytes.toString(CryptoJS.enc.Utf8);

      elPhone.current.href = `tel:${originalphone}`;

      setIsPhoneDescrypted(true);
    }
  };

  return (
    <FooterSection itemScope itemType="https://schema.org/Person">
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
        <SocialLink
          ref={elEmail}
          href={`mailto:${encryptedEmail}`}
          onClick={descryptEmail}
          itemProp="email"
        >
          <IconFooter className="icon ion-ios-mail" />
        </SocialLink>
      </SocialIconsContainer>

      <AboutMeContainder>
        <SocialLink href="https://medium.com/@wj9304">
          <Text color={Color.color_grey_dark}>Blog</Text>
        </SocialLink>
        <SocialLink
          href="https://www.dropbox.com/s/kh0yf3dmz2ommxp/%EC%9E%A5%EC%9A%B0%EC%A0%84%20%EC%9D%B4%EB%A0%A5%EC%84%9C.pdf?dl=0"
          target="_blank"
        >
          <Text color={Color.color_grey_dark}>Resume</Text>
        </SocialLink>
      </AboutMeContainder>

      <ContactMeContainer>
        <SocialLink
          ref={elPhone}
          href={`tel:${encryptedPhone}`}
          onClick={descryptPhone}
        >
          <Text color={Color.color_grey_dark} itemProp="telephone">
            +82 10-9112-6563
          </Text>
        </SocialLink>
      </ContactMeContainer>
    </FooterSection>
  );
};

export default Footer;
