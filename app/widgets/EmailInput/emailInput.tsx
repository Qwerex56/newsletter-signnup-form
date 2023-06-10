import React from 'react';
import EmailStyle from './emailInputStyle.module.scss'

interface IEmailInput {
  onInputChange: (e: any) => void;
}

export default function EmailInput(props: IEmailInput) {
  return (
    <div className={EmailStyle.emailInput}>
      <div className={EmailStyle.emailInput__header}>
        <p className={EmailStyle.emailInput__header__title}>Email</p>
        {hasError()}
      </div>
      <input className={EmailStyle.emailInput__input} type='email' onChange={props.onInputChange}></input>
    </div>
  )
}

function hasError() {
  if (true /* TODO: Add condition */) {
    return (
      <p className={EmailStyle.emailInput__header__error}>Error</p>
    )
  } else return (<></>)
}