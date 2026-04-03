export default function ScrollIndicator() {
  return (
    <div className="absolute inset-x-0 bottom-6 grid place-items-center">
      <span className="relative inline-block h-11 w-11 rounded-md bg-white/5 border border-white/10">
        <span className="absolute inset-0 m-auto h-[10px] w-[10px] rotate-45 border-b-2 border-r-2 border-slate-300 top-[6px]" />
      </span>
    </div>
  )
}