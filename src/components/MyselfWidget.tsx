import Image from "next/image";

export default function SocialWidget() {
  return (
    <div>
      <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400&h=400"
            alt="Profile background"
            fill
            className="object-cover"
            priority
          />

          {/* Notification Badge */}
          <div className="absolute top-3 right-3 bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
            <span className="text-black text-sm font-bold">3</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md rounded-br-3xl  rounded-bl-3xl bg-black/30 p-4">
          <div className="flex items-center gap-3">
            <div className="relative size-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold">Baseless</h3>
              <p className="text-white/90 text-sm">Let&apos;s contact</p>
            </div>
          </div>
        </div>
      </div>
      <p className="  mt-2 text-sm text-white text-center ">Me</p>
    </div>
  );
}
