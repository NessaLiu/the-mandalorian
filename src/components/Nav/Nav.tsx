// import { useRef } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Nav.module.scss';

import Image from '@/components/Image/Image';

// const LINKS = [
//   { href: 'https://jam3.com', label: 'Jam3', file: 'three-logo.jpeg' },
//   { href: 'https://github.com/jam3', label: 'GitHub', file: 'github-icon-64b.png' }
// ].map((link) => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`
// }));

function Nav() {
  // const containerRef = useRef<HTMLElement>(null);

  return (
    <nav className={classnames(styles.nav)}>
      <div className={classnames(styles.navBar)}>
        <ul>
          <li>
            <Link href={'/'}>
              <a aria-label="Home">
                <Image src={'buddha-logo.png'} alt="Buddha Jones" className={classnames(styles.buddha)} />
              </a>
            </Link>
          </li>
        </ul>

        <ul className={styles.links}>
          <li>
            <a href={'/'} target="_blank" rel="noopener noreferrer" aria-label={'Menu'}>
              <svg className={styles.menuHamburger} viewBox="0 0 100 30" width="40" height="40">
                <rect className={styles.topBar} y="0" rx="4"></rect>
                <rect className={styles.bottomBar} y="30" x="20" rx="4"></rect>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
