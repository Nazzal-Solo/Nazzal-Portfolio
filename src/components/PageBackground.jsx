import OptimizedLiquidEther from "./OptimizedLiquidEther";

const PageBackground = ({
  variant = "default",
  opacity = 0.1,
  className = "",
}) => {
  // Different color schemes for different pages
  const colorSchemes = {
    default: ["#5227FF", "#FF9FFC", "#B19EEF"],
    about: ["#3B82F6", "#8B5CF6", "#06B6D4"],
    projects: ["#10B981", "#F59E0B", "#EF4444"],
    contact: ["#EC4899", "#8B5CF6", "#3B82F6"],
    blog: ["#F59E0B", "#EF4444", "#EC4899"],
  };

  const colors = colorSchemes[variant] || colorSchemes.default;

  return (
    <div className={`fixed inset-0 -z-10 ${className}`} style={{ opacity }}>
      <OptimizedLiquidEther
        colors={colors}
        mouseForce={12}
        cursorSize={60}
        isViscous={false}
        viscous={15}
        iterationsViscous={12}
        iterationsPoisson={12}
        resolution={0.25}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.2}
        autoIntensity={1.2}
        takeoverDuration={0.2}
        autoResumeDelay={1500}
        autoRampDuration={0.3}
      />
    </div>
  );
};

export default PageBackground;
