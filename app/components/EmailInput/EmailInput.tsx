import React from 'react';
import EmailStyle from './EmailInputStyle.module.scss'
import { IEmailInput } from './IEmailInput';

import clsx from 'clsx';

export default function EmailInput(props: IEmailInput) {
  return (
    <div className={clsx(EmailStyle.emailInput, !props.isValid && EmailStyle.error)}>
      <div className={EmailStyle.emailInput__header}>
        <p className={EmailStyle.emailInput__header__title}>Email address</p>
        {!props.isValid && <p className={EmailStyle.emailInput__header__error}>Valid email required</p>}
      </div>
      <input 
        className={EmailStyle.emailInput__input} 
        type='email' 
        placeholder={props.emailPlaceholder}
        onChange={props.onInputChange}
      />
    </div>
  )
}