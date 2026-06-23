export default function SpinningText() {
  const text = "A MART FAMILY SHOP \u2022 TRUSTED QUALITY \u2022 ";

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 spin-slow">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
        </defs>
        <text
          fill="#F9F8F6"
          fontSize="14"
          fontFamily="Cinzel, serif"
          letterSpacing="3"
        >
          <textPath href="#circlePath">
            {text}
          </textPath>
        </text>
      </svg>
      
      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#A67C00' }}
        >
          <span className="font-cinzel text-white text-lg md:text-xl font-bold">A</span>
        </div>
      </div>
    </div>
  );
}
