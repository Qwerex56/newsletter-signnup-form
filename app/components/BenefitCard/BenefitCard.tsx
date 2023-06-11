import Image from 'next/image';

import BenefitCardStyle from './BenefitCardStyle.module.scss';
import { IBenefitCard } from './IBenefitCard';
import IconList from '@/app/assets/icon-list.svg';

export default function BenefitCard(props: IBenefitCard) {
  return (
    <div className={BenefitCardStyle.benefitCard}>
      <Image src={IconList} alt='Icon List' className={BenefitCardStyle.benefitCard__iconList} />
      <p className={BenefitCardStyle.benefitCard__description}>{props.children}</p>
    </div>
  )
}