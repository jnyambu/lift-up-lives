import {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Direction } from "@/hooks/useIntervals";
import { useTabs, UseTabsOptions } from "@/hooks/useTabs";
import { tw } from "@/utils/style";

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
      className={tw(
        "cursor-pointer transition-all duration-200 whitespace-nowrap",
        liClassName,
        {
          [activeLiClassName]: index === activeTabIndex,
        }
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
  tabs,
  activeTabIndex,
  onTabClick,
  holderClassName,
  underlineClassName,
  liClassName,
  ulClassName,
  activeLiClassName = "",
  vertical = false,
}: TabsProps) {
  const [{ width, left, height, top }, setUnderline] = useState({
    width: 0,
    left: 0,
    height: 0,
    top: 0,
  });

  // Recalculate underline when clicked
  const handleTabClick = useCallback(
    (index: number) => (ev: MouseEvent<HTMLLIElement>) => {
      const tab = ev.currentTarget;
      setUnderline({
        width: tab.offsetWidth,
        left: tab.offsetLeft,
        height: tab.offsetHeight,
        top: tab.offsetTop,
      });

      if (onTabClick) onTabClick(index);
    },
    [onTabClick]
  );

  // Set underline on mount and active tab change
  const setUnderlineOnMount = useCallback(
    (ref: HTMLUListElement | null) => {
      if (ref) {
        const tab = ref.children[activeTabIndex] as HTMLLIElement | undefined;
        if (tab) {
          setUnderline({
            width: tab.offsetWidth,
            left: tab.offsetLeft,
            height: tab.offsetHeight,
            top: tab.offsetTop,
          });
        }
      }
    },
    [activeTabIndex]
  );

  // ✅ Recalculate underline on window resize (responsive)
  useEffect(() => {
    const handleResize = () => {
      const activeTab = document.querySelector<HTMLLIElement>(
        `[data-active="true"]`
      );
      if (activeTab) {
        setUnderline({
          width: activeTab.offsetWidth,
          left: activeTab.offsetLeft,
          height: activeTab.offsetHeight,
          top: activeTab.offsetTop,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = useMemo((): CSSProperties => {
    return vertical
      ? { height, top }
      : { width, left };
  }, [height, vertical, left, top, width]);

  const Wrapper = typeof tabs[0] === "string" ? "div" : "nav";

  return (
    <Wrapper className={tw("relative", holderClassName)}>
      <ul
        ref={setUnderlineOnMount}
        className={tw(
          "flex flex-wrap items-center justify-center text-center",
          {
            "flex-col": vertical,
            "flex-row": !vertical,
          },
          ulClassName
        )}
      >
        {tabs.map((tab, index) => (
          <TabElement
            key={typeof tab === "string" ? tab : tab.name}
            tab={tab}
            index={index}
            liClassName={liClassName}
            handleTabClick={handleTabClick}
            activeTabIndex={activeTabIndex}
            activeLiClassName={activeLiClassName}
          />
        ))}
      </ul>

      {/* ✅ Responsive Underline */}
      <div
        className={tw(
          "absolute transition-all duration-300 rounded-full bg-blue-500",
          {
            "bottom-0 h-[3px]": !vertical,
            "right-0 w-[3px]": vertical,
          },
          underlineClassName
        )}
        style={styles}
      />
    </Wrapper>
  );
}

// ------------------ Tabs Holder ------------------

export function TabsHolder<Tab extends string>({
  vertical = false,
  ...props
}: TabsHolderProps<Tab>) {
  const [direction, setDirection] = useState<Direction>(Direction.forward);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [component, setActiveTab] = useTabs({
    tabs: props.tabs,
    components: props.components,
  });

  // ✅ Auto vertical on mobile screens
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleTabClick = useCallback(
    (index: number) => {
      setDirection(index > activeTabIndex ? Direction.forward : Direction.backward);
      setActiveTab(props.tabs[index]);
      setActiveTabIndex(index);
    },
    [activeTabIndex, props.tabs, setActiveTab]
  );

  return (
    <div className={tw("relative", props.wrapperClassName)}>
      <Tabs
        {...props}
        vertical={vertical || isMobile}
        onTabClick={handleTabClick}
        activeTabIndex={activeTabIndex}
      />
      <AnimatePresence initial={false} mode={"popLayout"}>
        <motion.div
          key={activeTabIndex}
          initial={"enter"}
          animate={"center"}
          exit={"exit"}
          variants={variants}
          className={tw("flex-1 h-full", props.componentWrapperClassName)}
          custom={{ direction, horizontal: !(vertical || isMobile) }}
          transition={{
            x: !(vertical || isMobile)
              ? { type: "spring", stiffness: 300, damping: 30 }
              : undefined,
            y: vertical || isMobile
              ? { type: "spring", stiffness: 300, damping: 30 }
              : undefined,
          }}
        >
          {component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
