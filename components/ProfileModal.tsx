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
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

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

  // Local data for stats/interests/tools if not in global data, 
  // or we can map global data if available. 
  // For now, keeping the specific modal data structure but using global name/title.
  const localData: PortfolioData = {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 right-0 z-[70] h-full w-full md:w-96 shadow-2xl overflow-y-auto border-l"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-light)"
            }}
          >
            {/* Header */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-[80]">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl transition shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-light)"
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
                className="p-3 rounded-xl transition hover:opacity-80 hover:bg-[var(--bg-surface)]"
                style={{ color: "var(--text-secondary)" }}
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
            </div>

            {/* Profile Header */}
            <div className="pt-16 pb-8 px-8 text-center">
              <div
                className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 shadow-lg"
                style={{ borderColor: "var(--bg-surface)" }}
              >
                <img
                  src="./profile.png"
                  alt={PORTFOLIO_DATA.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {PORTFOLIO_DATA.name}
              </h1>
              <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                {PORTFOLIO_DATA.title}
              </p>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 px-8 pb-8 border-b"
              style={{ borderColor: "var(--border-light)" }}
            >
              {localData.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${index === 1 ? "border-l border-r" : ""}`}
                  style={index === 1 ? { borderColor: "var(--border-light)" } : {}}
                >
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wide"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div
              className="flex gap-4 px-8 py-6"
            >
              <button
                onClick={() => setActiveTab("interests")}
                className={`flex-1 font-medium py-2.5 px-4 rounded-xl text-sm transition-all duration-200 ${activeTab === "interests" ? "shadow-md" : ""
                  }`}
                style={{
                  background:
                    activeTab === "interests"
                      ? "var(--color-accent)"
                      : "var(--bg-surface)",
                  color:
                    activeTab === "interests"
                      ? "#ffffff"
                      : "var(--text-secondary)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Interests</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("favorites")}
                className={`flex-1 font-medium py-2.5 px-4 rounded-xl text-sm transition-all duration-200 ${activeTab === "favorites" ? "shadow-md" : ""
                  }`}
                style={{
                  background:
                    activeTab === "favorites"
                      ? "var(--color-accent)"
                      : "var(--bg-surface)",
                  color:
                    activeTab === "favorites"
                      ? "#ffffff"
                      : "var(--text-secondary)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faCode} />
                  <span>Favorites</span>
                </div>
              </button>
            </div>

            {/* Dynamic Content */}
            <div className="px-8 pb-8 text-[0.9rem]">
              <AnimatePresence mode="wait">
                {activeTab === "interests" && (
                  <motion.div
                    key="interests"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2
                      className="text-xs font-bold uppercase tracking-wider mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Interests
                    </h2>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {localData.interests.map((interest, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-xl border flex-1 h-14 justify-center transition hover:scale-[1.02]"
                          style={{
                            borderColor: "var(--border-light)",
                            background: "var(--bg-surface)",
                            color: "var(--text-primary)",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={interest.icon}
                            className="text-base"
                            style={{ color: "var(--color-accent)" }}
                          />
                          <span className="text-xs font-medium">{interest.name}</span>
                        </button>
                      ))}
                    </div>

                    {/* Currently Available section */}
                    <div
                      className="rounded-xl p-4 border mt-4 relative overflow-hidden"
                      style={{
                        background: "var(--bg-surface)",
                        borderColor: "var(--border-light)",
                      }}
                    >
                      <div className="absolute top-0 right-0 p-2 opacity-10">
                        <FontAwesomeIcon icon={faBolt} size="3x" />
                      </div>
                      <div className="flex items-center gap-2 mb-2 relative z-10">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span
                          className="font-bold text-xs uppercase tracking-wide"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Currently Available
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed relative z-10"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Open to freelance projects, collaborations, and full-time
                        opportunities. Let's build something amazing together!
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "favorites" && (
                  <motion.div
                    key="favorites"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2
                      className="text-xs font-bold uppercase tracking-wider mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Favorite Tools & Resources
                    </h2>

                    <div className="grid grid-cols-1 gap-3">
                      {localData.tools.map((tool, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl border flex flex-col transition hover:border-[var(--color-accent)] group"
                          style={{
                            borderColor: "var(--border-light)",
                            background: "var(--bg-surface)",
                          }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3
                              className="font-bold text-sm"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {tool.name}
                            </h3>
                            <span
                              className="px-2 py-1 text-[0.65rem] font-bold rounded-md uppercase tracking-wide"
                              style={{
                                color: "var(--color-accent)",
                                background: "var(--bg-elevated)",
                              }}
                            >
                              {tool.tag}
                            </span>
                          </div>

                          <p
                            className="text-xs leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {tool.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
