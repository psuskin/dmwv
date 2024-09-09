import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors duration-200">
            <Home className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            {index === items.length - 1 ? (
              <span className="text-sm font-medium text-primary-600">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-sm text-gray-700 hover:text-primary-600 transition-colors duration-200">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
