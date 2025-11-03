import React, {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { tw } from "@/utils/style"; // if missing, replace all tw() → cn()
import { Direction } from "@/hooks/useIntervals";
import { useTabs, UseTabsOptions } from "@/hooks/useTabs";

// ------------------ Interfaces ------------------

interface Route {
  name: string;
  path: string;
}

interface TabsProps {
  liClassName?: string;
  activeTabIndex: number;
  tabs: string[] | Route[];
  holderClassName?: string;
  ulClassName?: string;
  activeLiClassName?: string;
  underlineClassName?: string;
  vertical?: boolean;
  onTabClick?: (index: number) => void;
}

type TabsHolderUnion<Tab extends string> = UseTabsOptions<Tab> &
  Omit<TabsProps, "activeTabIndex" | "onTabClick" | "tabs">;

interface TabsHolderProps<Tab extends string> extends TabsHolderUnion<Tab> {
  wrapperClassName?: string;
  componentWrapperClassName?: string;
}

interface CustomVariant {
  direction: Direction;
  horizontal: boolean;
}

const variants = {
  enter: ({ direction, horizontal }: CustomVariant) => ({
    x: horizontal ? (direction === Direction.forward ? 1 : -1) * 100 : 0,
    y: horizontal ? 0 : (direction === Direction.forward ? 1 : -1) * 100,
    opacity: 0,
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: ({ direction, horizontal }: CustomVariant) => ({
    x: horizontal ? (direction === Direction.forward ? -1 : 1) * 100 : 0,
    y: horizontal ? 0 : (direction === Direction.forward ? -1 : 1) * 100,
    opacity: 0,
  }),
};

interface ElementProps {
  index: number;
  children: ReactNode;
  liClassName?: string;
  activeTabIndex?: number;
  activeLiClassName: string;
  handleTabClick: (index: number) => (ev: MouseEvent<HTMLLIElement>) => void;
}

interface TabElementProps {
  tab: string | Route;
  index: number;
  liClassName?: string;
  activeTabIndex: number;
  activeLiClassName: string;
  handleTabClick: (index: number) => (ev: MouseEvent<HTMLLIElement>) => void;
}

// ------------------ Tab Item ------------------

function Element({
  index,
  children,
  liClassName,
  activeTabIndex,
  activeLiClassName,
  handleTabClick,
}: ElementProps) {
  return (
    <li
      onClick={handleTabClick(index)}
      data-active={index === activeTabIndex}
      className={cn(
        "cursor-pointer transition-all duration-200 whitespace-nowrap text-gray-600 hover:text-blue-600",
        liClassName,
        index === activeTabIndex && activeLiClassName
      )}
    >
      {children}
    </li>
  );
}

function TabElement({
  tab,
  index,
  liClassName,
  activeTabIndex,
  activeLiClassName,
  handleTabClick,
}: TabElementProps) {
  if (typeof tab === "string") {
    return (
      <Element
        index={index}
        liClassName={liClassName}
        activeTabIndex={activeTabIndex}
        activeLiClassName={activeLiClassName}
        handleTabClick={handleTabClick}
      >
        {tab}
      </Element>
    );
  }

  return (
    <Link to={tab.path}>
      <Element
        index={index}
        liClassName={liClassName}
        activeTabIndex={activeTabIndex}
        activeLiClassName={activeLiClassName}
        handleTabClick={handleTabClick}
      >
        {tab.name}
      </Element>
    </Link>
  );
}

// ------------------ Main Tabs ------------------

export function Tabs({
  ta
