// eslint-disable-next-line react/prop-types
export default function Promises({ icon, text }) {
  return (
    <>
      <div className="min-h-[200px] sm:col-span-3">
        <div className="flex flex-col h-1/2 border-b-2 justify-center items-center rounded-tl-2xl rounded-tr-2xl bg-black">
          {icon}
        </div>
        <div className="flex justify-center items-center h-1/2 font-semibold text-xl border-black border-l-2 border-r-2 border-b-2 rounded-bl-2xl rounded-br-2xl">
          {text}
        </div>
      </div>
    </>
  );
}
