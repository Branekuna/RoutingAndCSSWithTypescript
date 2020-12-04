import s from './MainLayout.module.scss';
import cln from 'classnames';
import { Header } from '../../components/Header/Header';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
//import { useState } from 'react';

export const MainLayout: React.FC = ({ children }) => {
	/*const [sideBarToggle, setSidebarToggle] = useState(true);
	const toggleSidebar = () => {
		console.log('aaaa', sideBarToggle);
		setSidebarToggle(!sideBarToggle);
	};*/
	console.log(cln('kaw', 'kawkaw'));
	return (
		<section className={s.layout}>
			<header className={s.header}>
				<Header />
			</header>
			<aside className={s.sidebar}>
				<Navbar />
			</aside>
			<main className={s.main}>{children}</main>
			<footer className={s.footer}>
				<Footer />
			</footer>
		</section>
	);
};
