import Image from 'next/image';

import BenefitCardStyle from './BenefitCardStyle.module.scss';
import IconList from '@/app/assets/icon-list.svg';

interface IProps {
  description: string;
}

export default function BenefitCard(props: IProps) {
  return (
    <div className={BenefitCardStyle.benefitCard}>
      <Image src={IconList} alt='Icon List' className={BenefitCardStyle.benefitCard__iconList} />
      <p className={BenefitCardStyle.benefitCard__description}>{props.description}</p>
    </div>
  )
}