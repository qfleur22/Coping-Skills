import Link from 'next/link';
import { careGeneratorRelatedLinks } from '@/data/care-generator-related-links';

export function RelatedCareLinks({
  variant = 'plan',
  compact = false,
}: {
  variant?: 'plan' | 'menu';
  compact?: boolean;
}) {
  const isPlan = variant === 'plan';

  if (compact) {
    return (
      <div
        className={`mt-4 border-t pt-4 print:hidden ${
          isPlan ? 'border-[#ddd2e9]' : 'border-[#ded9eb]'
        }`}
      >
        <h3 className="mx-2 mb-2 text-sm font-bold">Related skills</h3>
        <div className="mx-2 flex flex-col gap-1">
          {careGeneratorRelatedLinks.flatMap((group) => group.links).slice(0, 8).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-[10px] px-2.5 py-1.5 text-xs no-underline ${
                isPlan
                  ? 'text-[#6f4aa8] hover:bg-[#eee6f8]'
                  : 'text-[#6750a4] hover:bg-[#eee8ff]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      className={`rounded-[18px] border p-6 print:hidden ${
        isPlan
          ? 'border-[#ddd2e9] bg-white shadow-[0_12px_36px_rgba(61,36,83,0.10)]'
          : 'border-[#ded9eb] bg-white shadow-[0_7px_25px_rgba(62,49,83,0.07)]'
      }`}
    >
      <h2 className="mb-1 text-xl font-bold">Related skills & pages</h2>
      <p className={`mb-5 text-sm ${isPlan ? 'text-[#665d70]' : 'text-[#6d697e]'}`}>
        Use these alongside your care plan or menu when you need skills, grounding, or help naming
        what you feel.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {careGeneratorRelatedLinks.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 text-sm font-bold">{group.title}</h3>
            <ul className="space-y-1.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm underline-offset-2 hover:underline ${
                      isPlan ? 'text-[#6f4aa8]' : 'text-[#6750a4]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
