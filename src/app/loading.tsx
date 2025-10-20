export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-purple-500 border-purple-700" />
        <span className="text-lg font-medium bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent">
          Loading...
        </span>
      </div>
    </div>
  );
}
