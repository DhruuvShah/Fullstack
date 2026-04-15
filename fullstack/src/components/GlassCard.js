import { motion } from "motion/react";
import { cn } from "../lib/utils";
import "../styles/GlassCard.css";
function GlassCard({ children, className, delay = 0, title, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay }}
      className={cn("glasscard-container", className)}
    >
      {/* Inner light reflection for glass effect */}
      <div className="glasscard-reflection" />

      <div className="glasscard-content">
        {title && (
          <div className="glasscard-header">
            {Icon && (
              <div className="glasscard-icon-wrapper">
                <Icon size={22} strokeWidth={1.5} />
              </div>
            )}
            <h2 className="glasscard-title">{title}</h2>
          </div>
        )}
        <div className="glasscard-body">{children}</div>
      </div>
    </motion.div>
  );
}
export { GlassCard };
