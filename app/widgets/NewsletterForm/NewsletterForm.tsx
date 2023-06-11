'use client'
import NewsletterFormStyle from './NewsletterFormStyle.module.scss';
import { INewsletterForm } from "./INewsletterForm";

import BenefitCard from "@/app/components/BenefitCard/BenefitCard";
import EmailInput from '@/app/components/EmailInput/EmailInput';
import Button from "@/app/components/Button/Button";

import BenefitTexts from "@/app/assets/BenefitsTexts.json";
import BannerImageMobile from "@/app/assets/illustration-sign-up-mobile.svg";
import BannerImageDesktop from "@/app/assets/illustration-sign-up-desktop.svg";

import Image from 'next/image';
import useWindowSize from '@rooks/use-window-size';
import { useState } from 'react';

export default function NewsletterForm(props: INewsletterForm) {
  const [validate, setValidate] = useState(false)

  return (
    <div className={NewsletterFormStyle.newsletterForm}>
      <Image className={NewsletterFormStyle.newsletterForm__banner} src={GetImage()} alt='BannerImage' />
      <div className={NewsletterFormStyle.newsletterForm__app}>
        <h1 className={NewsletterFormStyle.newsletterForm__app__heading}>
          Stay updated!
        </h1>
        <p className={NewsletterFormStyle.newsletterForm__app__offerDescription}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className={NewsletterFormStyle.newsletterForm__app__benefits}>
          {BenefitTexts.map((text) => <BenefitCard key={text}>{text}</BenefitCard>)}
        </div>
        <div className={NewsletterFormStyle.newsletterForm__app__inputs}>
          <EmailInput emailPlaceholder='email@company.com' onInputChange={props.handleEmailChange} isValid={validate}/>
          <Button handleClick={() => { setValidate(props.userEmail.includes('@')) }}>Subscribe to monthly newsletter</Button>
        </div>
      </div>
    </div>
  )
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