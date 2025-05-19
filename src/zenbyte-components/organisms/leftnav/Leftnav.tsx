/**
 * src/components/LeftNav/LeftNav.tsx
 */
import React, { useState } from "react";
import {
  Home,
  Settings,
  Users,
  FileText,
  Calendar,
  Mail,
  Bell,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { MenuItem } from "../../atoms/menu-item/MenuItem";
import { Avatar } from "../../atoms/avatar/Avatar";

// Define the MenuItem interface for better type checking
export interface MenuItemType {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: MenuItemType[]; // Add support for nested items
}

export interface LeftNavProps {
  logo?: React.ReactNode;
  menuItems?: MenuItemType[];
  userInfo?: {
    name: string;
    email: string;
    avatarSrc?: string;
  };
  className?: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const LeftNav: React.FC<LeftNavProps> = ({
  logo = "LOGO",
  menuItems = [],
  userInfo,
  className = "",
  collapsed: propCollapsed = false,
  onToggleCollapse,
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  const isCollapsed = onToggleCollapse ? propCollapsed : internalCollapsed;

  const toggleCollapse = () => {
    if (onToggleCollapse) {
      onToggleCollapse();
    } else {
      setInternalCollapsed(!internalCollapsed);
    }
  };

  const toggleSubMenu = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Handle menu item click (expands nav if collapsed)
  const handleItemClick = (item: MenuItemType) => {
    if (isCollapsed) {
      toggleCollapse();
    }
    if (item.children) {
      toggleSubMenu(item.id);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  // Default menu items with required icons, now with nested items
  const defaultMenuItems: MenuItemType[] = menuItems.length
    ? menuItems
    : [
        { id: "1", label: "Home", icon: <Home className="w-5 h-5" /> },
        {
          id: "2",
          label: "Projects",
          icon: <FileText className="w-5 h-5" />,
          children: [
            {
              id: "2-1",
              label: "Active",
              icon: <FileText className="w-5 h-5" />,
            },
            {
              id: "2-2",
              label: "Archived",
              icon: <FileText className="w-5 h-5" />,
            },
          ],
        },
        {
          id: "3",
          label: "Team",
          icon: <Users className="w-5 h-5" />,
          children: [
            {
              id: "3-1",
              label: "Members",
              icon: <Users className="w-5 h-5" />,
            },
            { id: "3-2", label: "Invites", icon: <Mail className="w-5 h-5" /> },
          ],
        },
        { id: "4", label: "Calendar", icon: <Calendar className="w-5 h-5" /> },
        { id: "5", label: "Messages", icon: <Mail className="w-5 h-5" /> },
        { id: "6", label: "Notifications", icon: <Bell className="w-5 h-5" /> },
        { id: "7", label: "Settings", icon: <Settings className="w-5 h-5" /> },
      ];

  // Recursive rendering function to handle nested menu items
  const renderMenuItem = (item: MenuItemType, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];

    return (
      <div key={item.id} className="ml-0">
        <MenuItem
          label={isCollapsed ? undefined : item.label}
          active={item.active}
          disabled={item.disabled}
          onClick={() => handleItemClick(item)}
          icon={item.icon}
          showChevron={!isCollapsed && hasChildren}
          trailingIcon={
            hasChildren && !isCollapsed ? (
              isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )
            ) : undefined
          }
          tooltip={isCollapsed ? item.label : undefined}
          collapsed={isCollapsed}
          onToggleCollapse={toggleCollapse}
        />

        {/* Render children if expanded */}
        {hasChildren && isExpanded && !isCollapsed && (
          <div
            className={`ml-${
              4 * (level + 1)
            } mt-1 mb-1 pl-6 border-l border-gray-200`}
          >
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`bg-white flex flex-col h-full border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } ${className}`}
    >
      {/* Logo/brand section */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200 h-16">
        {!isCollapsed &&
          (typeof logo === "string" ? (
            <div className="text-xl font-bold">{logo}</div>
          ) : (
            logo
          ))}
        <button
          onClick={toggleCollapse}
          className="p-1 rounded-md hover:bg-gray-100"
          aria-label={isCollapsed ? "Expand menu" : "Collapse menu"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu items - Always shows icons */}
      <div className="flex-1 overflow-y-auto p-2">
        <nav className="space-y-1">
          {defaultMenuItems.map((item) => renderMenuItem(item))}
        </nav>
      </div>

      {/* User profile section */}
      {userInfo && (
        <div
          className={`p-2 border-t border-gray-200 ${
            isCollapsed ? "flex justify-center" : ""
          }`}
        >
          <div
            className={`flex items-center ${
              isCollapsed ? "flex-col" : "gap-2"
            }`}
          >
            <Avatar
              size={isCollapsed ? "sm" : "md"}
              src={userInfo.avatarSrc}
              alt={userInfo.name}
            />
            {!isCollapsed && (
              <div className="truncate">
                <div className="font-medium truncate">{userInfo.name}</div>
                <div className="text-xs text-gray-500 truncate">
                  {userInfo.email}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftNav;
