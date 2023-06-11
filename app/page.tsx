'use client'
import { useState } from 'react';
import AppStyle from './AppStyle.module.scss'
import NewsletterForm from "./widgets/NewsletterForm/NewsletterForm";

export default function Home() {
  const [userEmail, setUserEmail] = useState('');

  function handleChange(e: any) {
    setUserEmail(e.target.value);
  }

  return (
    <div className={AppStyle.app}>
      <NewsletterForm userEmail={userEmail} handleEmailChange={handleChange}/>
    </div>
  );
}