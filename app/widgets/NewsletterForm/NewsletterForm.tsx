'use client'

import NewsletterFormStyle from './NewsletterFormStyle.module.scss';

import TextBlock from '@/app/components/TextBlock/TextBlock';
import BenefitCard from "@/app/components/BenefitCard/BenefitCard";
import EmailInput from '@/app/components/EmailInput/EmailInput';
import Button from "@/app/components/Button/Button";

import { userEmail, updateUserEmail } from '@/app/assets/userEmail';
import BenefitTexts from "@/app/assets/BenefitsTexts.json";
import BannerImageMobile from "@/app/assets/illustration-sign-up-mobile.svg";
import BannerImageDesktop from "@/app/assets/illustration-sign-up-desktop.svg";

import Image from 'next/image';
import useWindowSize from '@rooks/use-window-size';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsletterForm() {
  const [validate, setValidate] = useState(true);
  const router = useRouter();

  function validateEmail(): boolean {
    const SMALLEST_EMAIL = 5;
    const isAscii = (str: string) => /^[\x00-\x7F]+$/.test(str);
    
    if(!userEmail) return false;
    if (userEmail.length < SMALLEST_EMAIL) return false;
    if (!userEmail.includes('@')) return false;
  
    const atIndex = userEmail.indexOf('@');
    const firstPart = userEmail.substring(0, atIndex);
  
    if (!isAscii(firstPart)) return false;
  
    return true;
  }

  function verifyAndRedirect() {
    const isValid = validateEmail();
    
    setValidate(validateEmail());

    if (isValid) {
      router.push('/pages/ThankYou');
    }
  }

  return (
    <div className={NewsletterFormStyle.newsletterForm}>
      <Image
        className={NewsletterFormStyle.newsletterForm__banner}
        src={GetImage()}
        alt="BannerImage"
      />
      <div className={NewsletterFormStyle.newsletterForm__app}>
        <TextBlock>
          <TextBlock.Title>Stay updated!</TextBlock.Title>
          <TextBlock.Content>
            Join 60,000+ product managers receiving monthly updates on:
          </TextBlock.Content>
        </TextBlock>
        <div className={NewsletterFormStyle.newsletterForm__app__benefits}>
          {BenefitTexts.map((text) => (
            <BenefitCard key={text}>{text}</BenefitCard>
          ))}
        </div>
        <div className={NewsletterFormStyle.newsletterForm__app__inputs}>
          <EmailInput
            emailPlaceholder="email@company.com"
            onInputChange={updateUserEmail}
            isValid={validate}
          />
          <Button handleClick={verifyAndRedirect}>
            Subscribe to monthly newsletter
          </Button>
        </div>
      </div>
    </div>
  );
}

function GetImage() {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  if (!innerWidth) {
    return BannerImageDesktop;
  }

  if (innerWidth >= 1440) {
    return BannerImageDesktop;
  }

  return BannerImageMobile;
}