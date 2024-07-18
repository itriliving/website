import DesktopNavLink from "./desktop-nav-link";
import initTranslations from "@/utils/i18n";



export default async function LeftNav({ locale, namespaces }) {
  const { t } = await initTranslations(locale, namespaces);

  const navLinks = [
		{ title: t('Common:the-club'), path: 'the-club' },
		{ title: t('Common:locations'), path: 'locations' },
		{ title: t('Common:become-a-member'), path: 'become-a-member' },
  ];
  
  return (
		<ul className="gap-8 hidden lg:flex pr-6">
			{navLinks.map((link, index) => (
        <DesktopNavLink key={index} title={link.title} path={link.path} />
      ))}
		</ul>
  );
}
