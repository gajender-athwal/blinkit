export default function Imgsection() {
  return (
    <div className="hidden lg:block max-w-7xl mx-auto">
      <img
        className="w-full"
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2026-01/Frame-1437256605-2-2.jpg"
        alt=""
      />

      <div className="flex  gap-5 mt-4">
        <img
          className="w-[335px] h-[195px] object-cover"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
          alt=""
        />

        <img
          className="w-[335px] h-[195px] object-cover"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png"
          alt=""
        />

        <img
          className="w-[335px] h-[195px] object-cover"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png"
          alt=""
        />
      </div>
    </div>
  );
}