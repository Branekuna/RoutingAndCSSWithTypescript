import { FaCalendar, FaCamera, FaThumbsUp, FaUser } from 'react-icons/fa';
import s from './Main.module.scss';

/*interface IMainProps { }*/

export const Main: React.FC /*<IMainProps>*/ = () => {
	return (
		<div className={s.main}>
			<div className={s.title}>
				<img src="assets/hello.svg" alt="" />
				<div>
					<h1>Hello Codersbite</h1>
					<p>Welcome to your admin dashboard</p>
				</div>
			</div>
			<div className={s.cards}>
				<div>
					<FaUser className={s.i} />
					<div>
						<p>Number of Subscribers</p>
						<span>578</span>
					</div>
				</div>

				<div>
					<FaCalendar />
					<div>
						<p>Times of Watching</p>
						<span>2467</span>
					</div>
				</div>

				<div>
					<FaCamera />
					<div>
						<p>Number of Videos</p>
						<span>340</span>
					</div>
				</div>

				<div>
					<FaThumbsUp />
					<div>
						<p>Number of Likes</p>
						<span>645</span>
					</div>
				</div>
			</div>
		</div>
	);
};
