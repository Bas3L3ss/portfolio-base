import { Music } from "lucide-react";

export default function SpotifyWidget() {
  return (
    <div className="">
      <div className="relative w-full aspect-square rounded-3xl bg-[#121212] p-5">
        {/* Spotify Logo */}
        <div className="absolute top-4 right-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.491-1.093.24-3.051-1.862-6.832-2.283-11.324-1.262-.431.121-.854-.13-.973-.55-.121-.431.13-.854.55-.973 4.914-1.122 9.157-.661 12.6 1.452.371.241.462.742.24 1.093zm1.473-3.272c-.302.462-.932.612-1.394.311-3.482-2.133-8.776-2.764-12.896-1.512-.522.16-1.073-.131-1.233-.652-.161-.522.131-1.073.652-1.233 4.722-1.432 10.597-.732 14.629 1.692.462.302.611.932.242 1.394zm.127-3.403C15.33 8.412 8.887 8.202 5.175 9.333c-.623.191-1.285-.155-1.475-.778-.191-.623.154-1.284.777-1.475 4.293-1.302 11.426-1.052 15.935 1.623.544.321.725 1.013.404 1.556-.32.545-1.013.726-1.555.405z"
              fill="currentColor"
              className="text-[#1DB954]"
            />
          </svg>
        </div>

        {/* Main Music Panel */}
        <div className="w-[80%] h-[70%] bg-neutral-800 rounded-lg flex items-center justify-center">
          <Music className="w-6 h-6 text-white" />
        </div>

        {/* Title */}
        <div className="mt-4">
          <span className="text-white text-sm font-medium">Chill</span>
        </div>
      </div>
      <p className="  mt-2 text-sm text-white text-center ">Spotify</p>
    </div>
  );
}
