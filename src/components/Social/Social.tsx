import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { gsap } from 'gsap';

import styles from './Social.module.scss';

import Description from '../Description/Description';
import { mainEase } from '@/data/eases';

export type Props = {
  className?: string;
  socialContent: {
    desc: {
      title: string;
      description: string;
      titleAnimation: { delay: number };
      descAnimation: { delay: number };
    };
    smallNum: string;
    num: string;
  };
};

function Social({ className, socialContent }: Props) {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: numberRef.current,
          start: 'top bottom'
        }
      })
      .from(numberRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: mainEase
      });
  });

  return (
    <div className={classnames(styles.Social, className)}>
      <Description content={socialContent.desc} />
      <div ref={numberRef} className={styles.textContainer}>
        <p className={styles.shortNum}>{socialContent.smallNum}</p>
        <p className={styles.num}>{socialContent.num}</p>
      </div>
    </div>
  );
}

export default memo(Social);
