const Sticker = ({ line1, line2 }) => {
  return (
    <div className="relative inline-block">
      {/* 🖼️ Background */}
      <img
        src="/images/brush.png"
        alt="bonus-bg"
        className="w-72 md:w-96 animate-float"
      />

      {/* 🧠 Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
        <h1 className="bonus-text animate-jiggle leading-tight text-lg md:text-xl xl:text-3xl font-extrabold tracking-wide">
          <span className="block">{line1}</span>
          <span className="block">{line2}</span>
        </h1>
      </div>
    </div>
  );
};

export default Sticker;
