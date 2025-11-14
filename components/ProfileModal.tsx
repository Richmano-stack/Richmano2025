import React, { useState } from "react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faCode,
  faUser,
  faGamepad,
  faBolt,
  faSun,
  faMoon,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@/context/ThemeContext";

interface StatItem {
  value: string;
  label: string;
}

interface InterestItem {
  name: string;
  icon: IconDefinition;
}

interface ToolItem {
  name: string;
  description: string;
  tag: string;
}

interface PortfolioData {
  name: string;
  title: string;
  stats: StatItem[];
  interests: InterestItem[];
  tools: ToolItem[];
}

interface ProfileModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose, isOpen }) => {
  const [activeTab, setActiveTab] = useState<"interests" | "favorites">(
    "interests"
  );

  const { isDark, toggleTheme } = useTheme();

  const portfolioData: PortfolioData = {
    name: "Richmano NASY",
    title: "Full-Stack Developer",
    stats: [
      { value: "5+", label: "Years" },
      { value: "6+", label: "Projects" },
      { value: "8h", label: "Sleep" },
    ],
    interests: [
      { name: "React", icon: faReact },
      { name: "Continuous Learning", icon: faGraduationCap },
      { name: "Next.js", icon: faCode },
      { name: "TypeScript", icon: faCode },
      { name: "Gaming", icon: faGamepad },
      { name: "Dancing", icon: faBolt },
    ],
    tools: [
      { name: "Figma", description: "All my design/prototyping", tag: "Design" },
      { name: "Notion", description: "Notes and planning", tag: "Productivity" },
      {
        name: "Product Hunt",
        description: "Discover and share ideas",
        tag: "Discovery",
      },
      { name: "Vercel", description: "Deployment and hosting", tag: "Hosting" },
      {
        name: "GitHub",
        description: "Version control and collaboration",
        tag: "Code",
      },
    ],
  };

  const animationClasses = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed top-0 right-0 z-[70] h-full w-full md:w-96 shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${animationClasses}`}
      style={{ background: "var(--bg-elevated)" }}
    >
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-[80]">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-md transition shadow-md"
          style={{
            backgroundColor: "var(--bg-surface)",
            color: "var(--text-secondary)",
          }}
        >
          {isDark ? (
            <FontAwesomeIcon size="lg" icon={faSun} />
          ) : (
            <FontAwesomeIcon size="lg" icon={faMoon} />
          )}
        </button>

        <button
          onClick={onClose}
          className="p-3 transition hover:opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>
      </div>

      {/* Profile Header */}
      <div className="pt-12 pb-8 px-8 text-center">
        <div
          className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4"
          style={{ borderColor: "var(--border-medium)" }}
        >
          <img
            src="./profile.png"
            alt={portfolioData.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          {portfolioData.name}
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {portfolioData.title}
        </p>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-3 gap-4 px-8 pb-8 border-b"
        style={{ borderColor: "var(--border-light)" }}
      >
        {portfolioData.stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center ${index === 1 ? "border-l border-r" : ""}`}
            style={index === 1 ? { borderColor: "var(--border-light)" } : {}}
          >
            <div
              className="text-xl font-light mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div
        className="flex gap-4 px-8 py-5 border-b"
        style={{ borderColor: "var(--border-light)" }}
      >
        <button
          onClick={() => setActiveTab("interests")}
          className={`flex-1 font-medium py-2 px-4 rounded-full text-sm ${
            activeTab === "interests" ? "shadow-lg" : ""
          }`}
          style={{
            background:
              activeTab === "interests"
                ? "var(--text-primary)"
                : "var(--bg-surface)",
            color:
              activeTab === "interests"
                ? "var(--bg-base)"
                : "var(--text-primary)",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            <span>Interests</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("favorites")}
          className={`flex-1 font-medium py-2 px-4 rounded-full text-sm ${
            activeTab === "favorites" ? "shadow-lg" : ""
          }`}
          style={{
            background:
              activeTab === "favorites"
                ? "var(--text-primary)"
                : "var(--bg-surface)",
            color:
              activeTab === "favorites"
                ? "var(--bg-base)"
                : "var(--text-primary)",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCode} />
            <span>Favorites</span>
          </div>
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="px-8 py-6 text-[0.9rem]">
        {/* Interests */}
        {activeTab === "interests" && (
          <div>
            <h2
              className="text-xs font-medium uppercase tracking-wider mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Interests
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {portfolioData.interests.map((interest, index) => (
                <button
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg border flex-1 h-14 justify-center hover:opacity-80"
                  style={{
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={interest.icon}
                    className="text-base"
                  />
                  <span className="text-xs">{interest.name}</span>
                </button>
              ))}
            </div>

            {/* Currently Available section */}
            <div
              className="rounded-lg p-3 border mt-3"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border-light)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span
                  className="font-medium text-xs"
                  style={{ color: "var(--text-primary)" }}
                >
                  Currently Available
                </span>
              </div>
              <p
                className="text-[0.8rem] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Open to freelance projects, collaborations, and full-time
                opportunities. Let's build something amazing together!
              </p>
            </div>
          </div>
        )}

        {/* Favorites */}
        {activeTab === "favorites" && (
          <div>
            <h2
              className="text-xs font-medium uppercase tracking-wider mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Favorite Tools & Resources
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {portfolioData.tools.map((tool, index) => (
                <div
                  key={index}
                  className="p-2 rounded-lg border flex flex-col h-full"
                  style={{
                    borderColor: "var(--border-light)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <div className="text-right">
                    <span
                      className="px-2 py-0.5 text-[0.65rem] font-semibold rounded"
                      style={{
                        color: "var(--text-primary)",
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-medium)",
                      }}
                    >
                      {tool.tag}
                    </span>
                  </div>

                  <h3
                    className="font-semibold mt-1 mb-1 text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {tool.name}
                  </h3>

                  <p
                    className="text-xs leading-snug"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
