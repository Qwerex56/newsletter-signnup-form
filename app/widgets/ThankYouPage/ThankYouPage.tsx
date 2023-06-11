import ThankYouPageStyle from './ThankYouPageStyle.module.scss';

import Button from '@/app/components/Button/Button';

import SuccessIcon from '@/app/assets/icon-success.svg';

import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <div>
      <Image src={SuccessIcon} alt='SuccesIcon'/>
      <h1>

      </h1>
      <p>

      </p>

      <Button handleClick={() => {}}>Dismiss message</Button>
    </div>

  )
}