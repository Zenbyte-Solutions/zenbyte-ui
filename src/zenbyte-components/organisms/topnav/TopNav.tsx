import React, { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Avatar } from "../../atoms/avatar/Avatar";

interface Page {
  label: string;
  href: string;
  onClick?: () => void; // callback in plaats van router link
}

interface TopNavProps {
  logo?: React.ReactNode;
  cartItemCount?: number;
  onCartClick?: () => void;
  onLoginClick?: () => void;
  user?: {
    name: string;
    avatarUrl?: string;
  };
  pages?: Page[];
}

const TopNav: React.FC<TopNavProps> = ({
  logo = "WEBSHOP",
  cartItemCount = 0,
  onCartClick,
  onLoginClick,
  user,
  pages = [],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: logo + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {typeof logo === "string" ? (
            <div className="text-xl font-bold">{logo}</div>
          ) : (
            logo
          )}
        </div>

        {/* Middle: pages (desktop only) */}
        <nav className="hidden md:flex gap-6">
          {pages.map((page) => (
            <button
              key={page.href}
              onClick={() => {
                page.onClick && page.onClick();
                setMobileMenuOpen(false);
              }}
              className="text-zb-desktop-bodySmallMedium transition-all hover:underline"
              type="button"
            >
              {page.label}
            </button>
          ))}
        </nav>

        {/* Right: user + cart */}
        <div className="flex items-center gap-4">
          {user ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={onLoginClick}
            >
              <Avatar src={user.avatarUrl} size="sm" alt={user.name} />
              <span className="hidden md:inline text-zb-desktop-bodySmallMedium">
                {user.name}
              </span>
            </div>
          ) : (
            <button
              className="flex items-center gap-1 text-zb-desktop-bodySmallMedium text-gray-700 hover:underline"
              onClick={onLoginClick}
              type="button"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Inloggen</span>
            </button>
          )}

          <button
            className="relative"
            onClick={onCartClick}
            aria-label="Winkelwagen openen"
            type="button"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-zb-desktop-captionRegular rounded-full px-1">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden bg-white border-t px-4 pb-4 overflow-hidden transition-all duration-zb-slow ease-in-out ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          {pages.map((page) => (
            <button
              key={page.href}
              onClick={() => {
                page.onClick && page.onClick();
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-zb-desktop-captionRegular text-gray-700 hover:underline"
              type="button"
            >
              {page.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default TopNav;
