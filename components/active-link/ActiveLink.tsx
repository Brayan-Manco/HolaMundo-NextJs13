'use client';

import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();

  return (
    <Link 
      className={ `${style.link} ${ ( pathName === path) && style['active-link']}`} 
                                    // se hace la condicion con usePathname para ver en que item esta
      href={path}>
        {text}
    </Link>
  );
};
