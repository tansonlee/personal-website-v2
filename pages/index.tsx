import { ReactNode, useEffect, useState } from 'react';
import { education, Entry, experience, links, profile, projects } from '../lib/data';
import s from '../styles/Home.module.css';

type Theme = 'light' | 'dark';

const savedTheme = (): string | null => {
	try {
		return localStorage.getItem('theme');
	} catch {
		return null;
	}
};

const ThemeToggle = () => {
	// The theme is set on <html> before React runs (see _document), so it's only known after mount
	const [theme, setTheme] = useState<Theme>();

	const apply = (t: Theme) => {
		document.documentElement.dataset.theme = t;
		setTheme(t);
	};

	useEffect(() => {
		apply(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

		// Follow the system theme until the visitor picks one
		const media = matchMedia('(prefers-color-scheme: light)');
		const onChange = () => !savedTheme() && apply(media.matches ? 'light' : 'dark');
		media.addEventListener('change', onChange);
		return () => media.removeEventListener('change', onChange);
	}, []);

	if (!theme) return null;

	const next = theme === 'dark' ? 'light' : 'dark';
	const toggle = () => {
		try {
			localStorage.setItem('theme', next);
		} catch {}
		apply(next);
	};

	return (
		<button className={s.theme} onClick={toggle} title={`Switch to ${next} mode`}>
			[{next}]
		</button>
	);
};

const Heading = ({ level, children }: { level: 2 | 3; children: ReactNode }) => {
	const Tag = level === 2 ? 'h2' : 'h3';
	return (
		<Tag className={level === 2 ? s.heading : s.subheading}>
			<span className={s.accent}>{'#'.repeat(level)}</span> {children}
		</Tag>
	);
};

const Logo = ({ entry }: { entry: Entry }) => (
	<>
		<img src={entry.logo} alt='' width={18} height={18} className={entry.lightLogo ? `${s.logo} ${s.darkOnly}` : s.logo} />
		{entry.lightLogo && (
			<img src={entry.lightLogo} alt='' width={18} height={18} className={`${s.logo} ${s.lightOnly}`} />
		)}
	</>
);

const EntryRow = ({ entry }: { entry: Entry }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={open ? `${s.entry} ${s.open}` : s.entry}>
			<button className={s.row} onClick={() => setOpen(o => !o)} aria-expanded={open}>
				<span className={s.date}>{entry.date}</span>
				<span className={s.name}>
					<Logo entry={entry} />
					{entry.name}
					{entry.current && <span className={s.dot} role='img' aria-label='current' />}
				</span>
				<span className={s.desc}>{entry.description}</span>
				<span className={s.toggle} aria-hidden>
					{open ? '−' : '+'}
				</span>
			</button>
			<div className={s.panel}>
				<ul className={s.details}>
					{entry.details.map(d => (
						<li key={d}>{d}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const jobs = experience.filter(e => !e.intern);
const internships = experience.filter(e => e.intern);

const Home = () => (
	<main className={s.main}>
		<header>
			<div className={s.prompt}>
				<p>
					<span className={s.accent}>~ $</span> whoami
				</p>
				<ThemeToggle />
			</div>
			<h1 className={s.title}>{profile.name}</h1>
			<p className={s.bio}>{profile.bio}</p>
			<nav className={s.links}>
				{links.map(l => (
					<a key={l.label} href={l.href} target='_blank' rel='noreferrer'>
						[{l.label}]
					</a>
				))}
			</nav>
		</header>

		<section className={s.section}>
			<Heading level={2}>experience</Heading>
			{jobs.map(e => (
				<EntryRow key={e.name} entry={e} />
			))}
			<Heading level={3}>internships</Heading>
			{internships.map(e => (
				<EntryRow key={e.name} entry={e} />
			))}
		</section>

		<section className={s.section}>
			<Heading level={2}>education</Heading>
			<EntryRow entry={education} />
		</section>

		<section className={s.section}>
			<Heading level={2}>projects</Heading>
			{projects.map(p => (
				<div key={p.name} className={`${s.entry} ${s.row}`}>
					<span className={s.projectLinks}>
						{p.links.map(l => (
							<a key={l.href} href={l.href} target='_blank' rel='noreferrer'>
								{l.label} ↗
							</a>
						))}
					</span>
					<span className={s.name}>{p.name}</span>
					<span className={s.desc}>{p.description}</span>
				</div>
			))}
		</section>

		<footer className={s.footer}>
			<span className={s.accent}>~ $</span> echo &quot;thanks for visiting&quot;
		</footer>
	</main>
);

export default Home;
