import s from './Navbar.module.scss';
import {
	FaArchive,
	FaBriefcase,
	FaBuilding,
	FaCalendarCheck,
	FaFile,
	FaHandshake,
	FaHome,
	FaMoneyBill,
	FaPowerOff,
	FaQuestion,
	FaSignOutAlt,
	FaUserSecret,
	FaWrench,
} from 'react-icons/fa';
/*interface INavbarProps { }*/

export const Navbar: React.FC /*<INavbarProps>*/ = () => {
	return (
		<>
			<div className={s.title}>
				<div>
					<img src="assets/logo.png" alt="logo" />
					<h1>Codersbite</h1>
				</div>
			</div>

			<div className={s.menu}>
				<div>
					<FaHome aria-hidden className={s.i} />
					<a href="#">Dashboard</a>
				</div>
				<h2>MNG</h2>
				<div>
					<FaUserSecret aria-hidden className={s.i} />
					<a href="#">Admin Management</a>
				</div>
				<div>
					<FaBuilding aria-hidden className={s.i} />
					<a href="#">Company Management</a>
				</div>
				<div>
					<FaWrench className={s.i} />
					<a href="#">Employee Management</a>
				</div>
				<div>
					<FaArchive className={s.i} />
					<a href="#">Warehouse</a>
				</div>
				<div>
					<FaHandshake className={s.i} />
					<a href="#">Contracts</a>
				</div>
				<h2>LEAVE</h2>
				<div>
					<FaQuestion className={s.i} />
					<a href="#">Requests</a>
				</div>
				<div>
					<FaSignOutAlt className={s.i} />
					<a href="#">Leave Policy</a>
				</div>
				<div>
					<FaCalendarCheck className={s.i} />
					<a href="#">Special Days</a>
				</div>
				<div>
					<FaFile className={s.i} />
					<a href="#">Apply for leave</a>
				</div>
				<h2>PAYROLL</h2>
				<div>
					<FaMoneyBill className={s.i} />
					<a href="#">Payroll</a>
				</div>
				<div>
					<FaBriefcase className={s.i} />
					<a href="#">Paygrade</a>
				</div>
				<div>
					<FaPowerOff className={s.i} />
					<a href="#">Log out</a>
				</div>
			</div>
		</>
	);
};
