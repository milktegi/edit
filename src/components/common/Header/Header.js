import React from 'react';
import styles from './Header.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const Header = () => {
	return (  
		<div className={cx('header')}>
			<div className={cx('header-content')}> 
				<div className={cx('brand')}>
					<Link to="/">reditt</Link>	
				</div>
				<div className={cx('right')}>
					왼쪽인지 오른쪽인지 모르겠을 땐
					오른쪽 
				</div>
			</div>
		</div>
	);
}
 
export default Header;