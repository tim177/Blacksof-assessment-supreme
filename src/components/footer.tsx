import FooterColumn from "./footer-column";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerData = [
    {
      title: "APPLICATIONS",
      links: [
        { label: "Apparel", href: "/applications/apparel" },
        { label: "Automotive", href: "/applications/automotive" },
        { label: "Filtration", href: "/applications/filtration" },
        {
          label: "Customised Nonwoven",
          href: "/applications/customised-nonwoven",
        },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "Who We Are", href: "/company/about" },
        { label: "Global Compentency", href: "/company/global-compentency" },
        { label: "Innovation", href: "/company/innovation" },
        { label: "ESG Impact", href: "/company/esg-impact" },
      ],
    },
    {
      title: "MORE",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "FOLLOW US",
      links: [
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/supreme-group",
        },
      ],
    },
  ];

  return (
    <footer className="px-32 bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 relative">
          <Logo />
        </div>

        <div className="mt-36 ml-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-sky-200 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>©{currentYear}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.
          </p>
        </div>
      </div>
    </footer>
  );
}
