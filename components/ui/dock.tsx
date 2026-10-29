import Dock from "@/app/components/Dock";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete02Icon,
  Home01Icon,
  Mail01Icon,
  MusicNote03Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";

const glyph = (icon) => (
  <HugeiconsIcon icon={icon} size="1em" strokeWidth={1.8} />
);

const items = [
  {
    icon: glyph(Home01Icon),
    label: "Home",
    active: true,
    onClick: () => console.log("Home"),
    menu: [
      { label: "New Window", onClick: () => console.log("New Window") },
      { separator: true },
      {
        label: "Options",
        items: [
          { label: "Open at Login", checked: true },
          { label: "Show in Finder" },
        ],
      },
      { separator: true },
      { label: "Quit", onClick: () => console.log("Quit") },
    ],
  },
  {
    icon: glyph(Mail01Icon),
    label: "Mail",
    badge: 3,
    onClick: () => console.log("Mail"),
  },
  {
    icon: glyph(MusicNote03Icon),
    label: "Music",
    active: true,
    onClick: () => console.log("Music"),
  },
  {
    icon: glyph(Settings01Icon),
    label: "Settings",
    onClick: () => console.log("Settings"),
  },
  { separator: true },
  {
    icon: glyph(Delete02Icon),
    label: "Trash",
    onClick: () => console.log("Trash"),
  },
];

const NavDock = () => {
  return (
    <div style={{ position: "relative", height: 400 }}>
      <Dock
        items={items}
        baseItemSize={50}
        magnification={70}
        panelHeight={68}
        accentColor="#0a84ff"
        badgeColor="#ff453a"
        position="bottom"
        distance={200}
        gap={10}
        roundness={0.5}
        bounce
        autoHide={false}
        tiles
        showLabels
        showIndicators
        showBadges
      />
    </div>
  );
};

export default NavDock;
