import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export type BackgroundIconCloudProps = {
  iconSlugs?: string[];
  imageArray?: string[];
  opacity?: number;
  className?: string;
  children?: React.ReactNode;
};

const defaultCloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      zIndex: 0,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.01,
    freezeActive: true,
    shuffleTags: true,
    shape: "sphere",
    zoom: 0.95,
    noSelect: true,
    noMouse: false,
    pinchZoom: false,
  },
};

const renderCustomIcon = (
  icon: SimpleIcon,
  theme: string,
  opacity: number = 0.7
) => {
  const bgHex = theme === "light" ? "#ffffff" : "#000000"; 
  const fallbackHex = theme === "light" ? "#FF0000" : "#00FF00"; 
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      style: { opacity },
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

const BackgroundIconCloud = ({
  iconSlugs = [],
  imageArray = [],
  opacity = 0.7,
  className = "",
  children,
}: BackgroundIconCloudProps) => {
  const [data, setData] = useState<Record<string, SimpleIcon> | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then((result) =>
        setData(result.simpleIcons)
      );
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data).map((icon) =>
      renderCustomIcon(icon, theme || "light", opacity)
    );
  }, [data, theme, opacity]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background Cloud */}
      <Cloud {...defaultCloudProps}>
          {renderedIcons}
          {imageArray.map((image, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ opacity }}
            >
              <img
                height="42"
                width="42"
                alt="Custom icon"
                src={image}
                style={{ pointerEvents: "none" }}
              />
            </a>
          ))}
      </Cloud>

      {/* Content Layer */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default BackgroundIconCloud;
