export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Shivam
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Kumar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build modern, responsive web interfaces using front-end and backend
            technologies, focusing on clean design and smooth user experience.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* 🔽 SVG Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        

        <svg
          className="arrows"
          width="60"
          height="72"
          viewBox="0 0 60 72"
          fill="none"
        >
          <path
            d="M0 0 L30 32 L60 0"
            className="scroll-arrow"
            style={{ animationDelay: "-1s" }}
          />
          <path
            d="M0 20 L30 52 L60 20"
            className="scroll-arrow"
            style={{ animationDelay: "-0.5s" }}
          />
          <path
            d="M0 40 L30 72 L60 40"
            className="scroll-arrow"
            style={{ animationDelay: "0s" }}
          />
        </svg>
      </div>
    </section>
  );
};
