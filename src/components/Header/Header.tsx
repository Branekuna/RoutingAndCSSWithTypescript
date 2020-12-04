import s from './Header.module.scss';
import { FaBars, FaSearch, FaClock } from 'react-icons/fa';
/*interface IHeaderProps { }*/

export const Header: React.FC /*<IHeaderProps>*/ = () => {
	return (
		<>
			<FaBars aria-hidden />
			<div className={s.left}>
				<a href="#">Subscribers</a>
				<a href="#">Video Management</a>
				<a className="active_link" href="#">
					Admin
				</a>
			</div>
			<div className={s.right}>
				<a href="#">
					<FaSearch aria-hidden className={s.i} />
				</a>
				<a href="#">
					<FaClock aria-hidden className={s.i} />
				</a>
				<a href="#">
					<img width="30" src="assets/avatar.svg" alt="" />
				</a>
			</div>
		</>
	);
};
