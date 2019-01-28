import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <Link to="/" className={cx('brand')}>
        reditt
      </Link>

      <div className={cx('admin-login')}>관리자 로그인</div>
    </div>
  );
};

export default Footer;
