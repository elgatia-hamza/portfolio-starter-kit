import Link from "next/link";
import Logo from "./logo";

const footerLinks = [
	{
		title: "About",
		links: [
			{ label: "Bio", href: "/about" },
			{ label: "Skills", href: "/about#skills" },
			{ label: "Resume", href: "/resume.pdf", external: true },
		],
	},
	{
		title: "Projects",
		links: [
			{ label: "Portfolio", href: "/project" },
			{ label: "GitHub", href: "https://github.com/elgatia-hamza", external: true },
			{ label: "CodePen", href: "https://codepen.io/", external: true },
		],
	},
	{
		title: "Blog",
		links: [
			{ label: "All Posts", href: "/blog" },
			{ label: "Categories", href: "/blog#categories" },
			{ label: "RSS", href: "/rss", external: true },
		],
	},
	{
		title: "Contact",
		links: [
			{ label: "Email", href: "mailto:hamzaelgatia7@gmail.com", external: true },
			{ label: "LinkedIn", href: "https://www.linkedin.com/in/hamzaelgatia/", external: true },
			{ label: "Contact Me", href: "/#contact" },
		],
	},
];

export default function Footer() {
	return (
		<footer className="mt-16 px-4">
			<hr className="border-neutral-200 dark:border-neutral-800 mb-8" />
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
				{/* Logo and copyright */}
				<div className="mb-8 md:mb-0 flex-shrink-0 flex flex-col items-start">
					<Link href="/" aria-label="Home">
						<Logo width={48} height={32} />
					</Link>
					<p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
						© {new Date().getFullYear()} Hamza EL GATIA. MIT Licensed.
					</p>
				</div>
				{/* Footer Columns pushed right */}
				<div className="w-full flex justify-end">
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
						{footerLinks.map((section) => (
							<div key={section.title}>
								<h4 className="font-semibold text-black dark:text-white mb-3 text-base">
									{section.title}
								</h4>
								<ul className="space-y-2">
									{section.links.map((link) => (
										<li key={link.label}>
											<Link
												href={link.href}
												target={link.external ? "_blank" : undefined}
												rel={link.external ? "noopener noreferrer" : undefined}
												className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-all"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
