import "./App.css";
import GameCard from "./GameCard";
import Sticker from "./Sticker";
import { useEffect, useState, useRef } from "react";

const offers = [
  { line1: "100% SIGN-UP", line2: "BONUS" },
  { line1: "Up to $30 REFERRAL", line2: "BONUS" },
  { line1: "30% - 70%", line2: "DAILY BONUS" },
  { line1: "Up to 50% LOYALTY", line2: "BONUS" },
  { line1: "BIRTHDAY", line2: "TREATS" },
  { line1: "5 DAYS STREAK", line2: "BONUS" },
  { line1: "HOLIDAY", line2: "BONUS" },
  { line1: "INSTANT", line2: "LOAD / REDEEM" },
  { line1: "WEEKLY", line2: "FREEPLAY" },
  { line1: "24/7", line2: "SUPPORT" },
  { line1: "$20 SEASONAL", line2: "BOOSTS" },
];

const games = [
  {
    title: "PANDA MASTER",
    image: "/images/PANDA MASTER.png",
    link: "https://pandamaster.vip:8888",
  },
  {
    title: "FIREKIRIN",
    image: "/images/FIREKIRIN.png",
    link: " http://start.firekirin.xyz:8580",
  },
  { title: "JUWA", image: "/images/JUWA.png", link: "https://dl.juwa777.com" },
  {
    title: "VEGAS X",
    image: "/images/VEGAS X.png",
    link: "https://vegas-x.org",
  },
  {
    title: "ULTRA PANDA",
    image: "/images/ULTRA PANDA.png",
    link: "https://www.ultrapanda.club",
  },
  {
    title: "VEGAS SWEEPS",
    image: "/images/VEGAS SWEEPS.png",
    link: "https://m.lasvegassweeps.com",
  },
  {
    title: "CASH FRENZY",
    image: "/images/CASH FRENZY.png",
    link: "https://www.cashfrenzy777.com",
  },
  {
    title: "VBLINK",
    image: "/images/VBLINK.png",
    link: "https://www.vblink777.club",
  },
  {
    title: "ORION STARS",
    image: "/images/ORION STARS.png",
    link: "https://www.orionstars777.club",
  },
  {
    title: "GAME ROOM",
    image: "/images/GAME ROOM.png",
    link: "https://www.gameroom777.com",
  },
  {
    title: "GAME VAULT",
    image: "/images/GAME VAULT.png",
    link: "https://download.gamevault999.com",
  },
  {
    title: "MILKYWAY",
    image: "/images/MILKYWAY.png",
    link: "https://milkywayapp.xyz",
  },
  {
    title: "MEGA SPIN",
    image: "/images/MEGA SPIN.png",
    link: "https://www.megaspinsweeps.com",
  },
  {
    title: "JUWA 2.0",
    image: "/images/JUWA.png",
    link: "https://m.juwa2.com",
  },
  {
    title: "MOOLAH",
    image: "/images/MOOLAH.png",
    link: "https://moolah.vip:8888",
  },
  {
    title: "VEGAS ROLL",
    image: "/images/VEGAS ROLL.png",
    link: "https://www.vegas-roll.com/m",
  },
];

function App() {
  const contactRef = useRef(null);
  const [showWhatsapp, setShowWhatsapp] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ❌ hide when contact section is visible
        setShowWhatsapp(!entry.isIntersecting);
      },
      { threshold: 0.3 }, // adjust sensitivity
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  const chunk = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const chunk2 = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const gameChunks = chunk2(games, 4);

  return (
    <div>
      {/* Home */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 🎬 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>

        {/* 🔲 Dark overlay (important for readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 🧠 Content        md=Tablet(768px) xl=Desktop(1280px)  */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <h1
            data-text="MEGA WINNERS CLUB OFFICIAL"
            className="luxury-text font-cinzelDecorative text-5xl md:text-6xl xl:text-7xl font-semibold text-white text-center uppercase"
          >
            MEGA
            <br /> WINNERS CLUB
            <br /> OFFICIAL
          </h1>

          <p className="font-cinzelDecorative text-base md:text-xl lg:text-2xl text-white font-semibold text-center uppercase mt-2">
            The World of Winners!!
          </p>
        </div>
      </div>

      {/* About Us */}
      <div className="relative h-[80vh] xl:h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/about.webp')] bg-cover bg-center"></div>

        {/* 🔲 Overlay (UNCHANGED as you wanted) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* 🧠 Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-16 px-4 text-center">
          {/* 🔝 TOP */}
          <h1 className="luxury-text2 font-cinzelDecorative text-xl md:text-3xl xl:text-5xl font-semibold text-white uppercase">
            ABOUT US!
          </h1>

          {/* 🟰 CENTER */}
          <p className="font-cinzel text-lg md:text-2xl xl:text-4xl text-white font-semibold uppercase max-w-5xl leading-relaxed">
            Welcome to Mega Winners Club your go to <br /> place for exciting
            spins and big wins.
            <br /> We bring you a vibrant casino-style
            <br /> experience filled with fun, thrill, and nonstop
            <br />
            entertainment.
            <br /> Join us and enjoy the excitement of every spin.
          </p>

          {/* 🔻 BOTTOM */}
          <h3 className="font-times text-xl md:text-3xl xl:text-6xl font-semibold text-white uppercase">
            Play. Spin. Win.
          </h3>
        </div>
      </div>

      {/* Why Us */}
      <div className="relative h-[70vh] md:h-[80vh] xl:h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/why.png')] bg-cover bg-no-repeat bg-center"></div>

        {/* 🧠 Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-16 px-4 text-center">
          {/* 🔝 TOP */}
          <h1 className="font-cinzelDecorative text-2xl md:text-4xl xl:text-6xl font-semibold text-white uppercase why-text">
            WHY US!
          </h1>

          {/* 🟰 CENTER */}
          <h2 className="font-cinzel text-2xl md:text-4xl xl:text-5xl text-[#f3cc44] font-bold uppercase why-text">
            At <br />
            Mega Winners Club
          </h2>

          {/* 🔻 BOTTOM */}
          <h3 className="font-times text-lg md:text-2xl xl:text-4xl font-semibold text-white uppercase why-text leading-relaxed max-w-6xl mx-auto text-center tracking-widest">
            enjoy professional service from our highly <br /> qualified team.
            <br />
            Get high chances of winning, daily exciting
            <br /> bonuses, instant loading,
            <br /> and quick cashouts.
            <br /> Available 24/7, play anytime, anywhere where
            <br /> winning never stops.
          </h3>
        </div>
      </div>

      {/* Offers & Promotions */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/offers.png')] bg-contain bg-center"></div>

        {/* 🧠 Content */}
        <div className="relative z-10 w-full flex flex-col items-center py-4 px-6 text-center justify-evenly gap-4">
          {/* 🔝 TITLE */}
          <h1 className="font-cinzelDecorative text-xl md:text-3xl xl:text-5xl font-semibold text-white uppercase why-text mb-2 md:my-4">
            OFFERS & PROMOTIONS
          </h1>

          {/* 📱 MOBILE (2 per row) */}
          <div className="flex flex-col gap-0 md:hidden items-center">
            {chunk(offers, 2).map((row, i) => (
              <div key={i} className="flex justify-center gap-0">
                {row.map((item, idx) => (
                  <Sticker key={idx} {...item} />
                ))}
              </div>
            ))}
          </div>

          {/* 📲 TABLET (3 per row) */}
          <div className="hidden md:flex xl:hidden flex-col items-center gap-6">
            {chunk(offers, 3).map((row, i) => (
              <div key={i} className="flex justify-center gap-6">
                {row.map((item, idx) => (
                  <Sticker key={idx} {...item} />
                ))}
              </div>
            ))}
          </div>

          {/* 💻 DESKTOP (xl+) CUSTOM 4-3-4 */}
          <div className="hidden xl:flex flex-col items-center gap-6">
            {[offers.slice(0, 4), offers.slice(4, 7), offers.slice(7, 11)].map(
              (row, i) => (
                <div
                  key={i}
                  className={`flex justify-center ${
                    i === 1 ? "gap-12" : "gap-8"
                  }`}
                >
                  {row.map((item, idx) => (
                    <Sticker key={idx} {...item} />
                  ))}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Explore Our Games */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/offers.png')] bg-contain bg-center"></div>

        {/* 🧠 Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-start gap-10 py-16 px-4 text-center">
          {/* 🔝 TOP */}
          <h1 className="font-cinzelDecorative text-xl md:text-3xl xl:text-5xl font-semibold text-white uppercase why-text">
            Explore Our Games
          </h1>

          {gameChunks.map((group, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              {/* 🎴 CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 w-full max-w-7xl place-items-center">
                {group.map((game, idx) => (
                  <GameCard
                    key={idx}
                    {...game}
                    index={idx}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                ))}
              </div>

              {/* 🔻 TEXT (after each group) */}
              <p className="font-canva text-lg md:text-xl xl:text-3xl text-white font-bold uppercase mt-6 tracking-wide">
                Click the icon to download the game...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* REACH US ANYTIME */}
      <div
        ref={contactRef}
        className="relative h-[80vh] xl:h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* 🖼️ Background */}
        <div className="absolute inset-0 bg-[url('/images/about.webp')] bg-cover bg-center"></div>

        {/* 🔲 Overlay (UNCHANGED as you wanted) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* 🧠 Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-16 px-4 text-center">
          {/* 🔝 TOP */}
          <h1 className="font-cinzelDecorative text-xl md:text-3xl xl:text-5xl font-semibold text-white uppercase">
            REACH US ANYTIME
          </h1>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/qr/IYZ34O72U6XFJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src="/images/whatsapp-logo.png"
                alt="whatsapp logo"
                className="w-24 h-24 md:w-40 md:h-40 xl:w-72 xl:h-72 transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.9)]"
              />
              <p className="mt-2 text-white font-cinzel font-extrabold text-sm md:text-lg xl:text-2xl transition duration-300 group-hover:scale-105">
                WHATSAPP
              </p>
            </a>

            {/* Telegram */}
            <a
              href="http://t.me/Officialmegawinnerscluab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <img
                src="/images/telegram.png"
                alt="telegram logo"
                className="w-24 h-24 md:w-40 md:h-40 xl:w-72 xl:h-72 transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]"
              />
              <p className="mt-2 text-white font-cinzel font-extrabold text-sm md:text-lg xl:text-2xl transition duration-300 group-hover:scale-105">
                TELEGRAM
              </p>
            </a>
          </div>

          {/* 🔻 BOTTOM */}
          <h3 className="font-times text-lg md:text-xl xl:text-3xl font-semibold text-white uppercase line-height-relaxed">
            MESSAGE US <br /> IN ONE CLICK
          </h3>
        </div>
      </div>

      {/* Whatsapp */}
      {showWhatsapp && (
        <a
          href="https://wa.me/qr/IYZ34O72U6XFJ1"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 flex flex-col items-center group"
        >
          {/* 🟢 Icon */}
          <div className="p-1 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="w-12 h-12"
            />
          </div>

          {/* 🟢 Text */}
          <span className="text-white hidden md:block text-xs xl:text-sm font-bold font-cinzel tracking-wide uppercase drop-shadow-md transition-all duration-300 group-hover:translate-y-1">
            For more query
          </span>
        </a>
      )}
    </div>
  );
}

export default App;
