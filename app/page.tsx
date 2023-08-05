'use client'
import { useState } from 'react';
import AppStyle from './AppStyle.module.scss'
import NewsletterForm from "./widgets/NewsletterForm/NewsletterForm";
import ThankYouPage from './widgets/ThankYouPage/ThankYouPage';

export default function Home() {
  return (
    <>
      <NewsletterForm />
    </>
  )
}