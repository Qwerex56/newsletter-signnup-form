import ThankYouPageStyle from './ThankYouPageStyle.module.scss';

import Button from '@/app/components/Button/Button';
import TextBlock from '@/app/components/TextBlock/TextBlock';

import SuccessIcon from '@/app/assets/icon-success.svg';
import { setUserEmail, userEmail } from '@/app/assets/userEmail';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className={ThankYouPageStyle.thankYouPage}>
      <div className={ThankYouPageStyle.thankYouPage__greetings}>
        <Image
          className={ThankYouPageStyle.thankYouPage__greetings__succesIcon}
          src={SuccessIcon}
          alt="SuccesIcon"
        />
        <TextBlock>
          <TextBlock.Title>Thanks for subscribing!</TextBlock.Title>
          <TextBlock.Content>
            A confirmation email has been sent to {userEmail}. Please open it and click the
            button inside to confirm your subscription
          </TextBlock.Content>
        </TextBlock>
      </div>
      <Button handleClick={() => {
        router.push('/pages/NewsletterSignUp');
        setUserEmail('');
      }}
      >Dismiss message</Button>
    </div>
  );
}