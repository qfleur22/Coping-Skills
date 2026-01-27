import Link from 'next/link';

const headerNavLinks = [
  { href: '/', title: 'Skills Flowchart' },
  { href: '/about', title: 'About the Skills' },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="mr-4 ml-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Coping Skills</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {headerNavLinks.map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

