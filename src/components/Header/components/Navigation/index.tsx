import cn from 'classnames';
import { AnimeteRoundedRect } from 'components';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

type IProps = {
  style?: any;
  className?: string;
  onToggleMenu: () => void;
};

const Navigation = ({ className, style, onToggleMenu }: IProps) => {
  const ItemList = [
    {
      title: 'Home',
      href: '/',
      onClick: () => {
        onToggleMenu?.();
      },
    },
    {
      title: 'White Paper',
      href: '/white-paper',
      onClick: () => {
        onToggleMenu?.();
      },
    },
    {
      title: 'Class-Fi',
      href: '/class-fi',
      onClick: () => {
        onToggleMenu?.();
      },
    },
    {
      title: 'WKT',
      href: '/wkt',
      onClick: () => {
        onToggleMenu?.();
      },
    },
    {
      title: 'About Us',
      href: '/about-us',
      onClick: () => {
        onToggleMenu?.();
      },
    },
    {
      title: 'User Guide',
      href: '/user-guide',
      onClick: () => {
        onToggleMenu?.();
      },
    },
    {
      title: 'Contact Us',
      href: '/contact-us',
      onClick: () => {
        onToggleMenu?.();
      },
    },
  ];

  return (
    <div className={cn(className)} style={style}>
      {ItemList.map((item, index) => (
        <div key={String(index)} className={styles.menuItem} onClick={item?.onClick}>
          <Link href={item.href}>
            <a className={styles.links}>{item.title}</a>
          </Link>
          <AnimeteRoundedRect className={styles.animeteBg} />
        </div>
      ))}
    </div>
  );
};

export default Navigation;
