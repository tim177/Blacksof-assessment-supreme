import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-600 hover:text-[#0066b3] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
