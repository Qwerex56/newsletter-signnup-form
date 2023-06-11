'use client'
import NewsletterForm from "@/app/widgets/NewsletterForm/NewsletterForm";
import { useState } from "react";

export default function NewsletterPage() {
  const [userEmail, setUserEmail] = useState('');

  function handleUserEmail(e: any) {
    setUserEmail(e.target.value);
  }

  return (
    <>
      <NewsletterForm />
    </>
  )
}