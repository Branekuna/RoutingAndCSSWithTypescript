export const AuthLayout: React.FC = ({ children }) => (
	<section className="layout">
		<aside className="right-panel">
			<main>{children}</main>
		</aside>
	</section>
);
