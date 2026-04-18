import { useEffect, useRef } from "react";

const GameCard = ({
  title,
  image,
  link,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    // 👉 only mobile
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          //   setActiveIndex(index);
          setTimeout(() => {
            setActiveIndex(index);
          }, 100);
        }
      },
      {
        threshold: 0.8,
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        ref={ref}
        className={`relative w-40 md:w-52 xl:w-52 h-56 md:h-72 xl:h-80 
        border-2 border-[#f3cc44] rounded-xl 
        flex flex-col items-center justify-between p-2 
        bg-black/20 backdrop-blur-sm
        transition-all duration-300 ease-in-out cursor-pointer

        ${isActive ? "scale-105 shadow-[0_0_20px_rgba(243,204,68,0.6)]" : ""}

        md:hover:scale-105 md:hover:shadow-[0_0_20px_rgba(243,204,68,0.6)]
      `}
      >
        <h3 className="font-cinzel text-white text-lg md:text-xl xl:text-3xl uppercase text-center whitespace-break-spaces">
          {title}
        </h3>

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover mt-2 scale-125"
        />
      </div>
    </a>
  );
};

export default GameCard;
