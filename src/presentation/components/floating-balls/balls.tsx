export function FloatingBalls() {
  return (
    <div className="z-0 balls">
      <div className="violet h-[15rem] absolute rounded-full left-0 right-0 -top-20 opacity-[.1] mx-auto  w-[15rem] bg-violet animate-float"></div>
      <div className="violet h-[10rem] absolute rounded-full left-[10%] top-20 opacity-[.1] mx-auto  w-[10rem] bg-primary animate-float2"></div>
    </div>
  );
}
