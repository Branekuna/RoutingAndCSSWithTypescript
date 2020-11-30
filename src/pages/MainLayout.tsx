export const MainLayout: React.FC = ({ children }) => (
	<section className="layout">
		<aside className="sidebar" />
		<section>
			<header />
			<main>{children}</main>
			<footer />
		</section>
	</section>
);
