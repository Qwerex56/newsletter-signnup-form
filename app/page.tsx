'use client'
import React from "react";
import BenefitCard from "./widgets/BenefitCard/BenefitCard";
import EmailInput from "./widgets/EmailInput/emailInput";

export default function Home() {
  const foo = 'place';
  const [bar, setBar] = React.useState('');

  function handleChange(e: any) {
    let em : string = e.target.value;
    setBar(em.toUpperCase());
  }

  return (
    <>
      <EmailInput onInputChange={handleChange}></EmailInput>
      <BenefitCard description="hello"></BenefitCard>
      {bar}
    </>
  );
}