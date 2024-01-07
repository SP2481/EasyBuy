/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// Confimation modal
export default function ConfirmationModal({ onClose }) {
  return (
    <div className=" fixed left-0 right-0 bottom-0 top-0 bg-slate-300 bg-opacity-60 flex justify-center items-center">
      <div className="w-[20rem] h-auto fixed border-2 p-4  bg-white shadow-2xl">
        <h2 className="text-black text-xl mb-4">Congratulations!! </h2>
        <h3 className="text-lg font-semibold mb-2">You've Placed an order</h3>
        <button
          onClick={onClose}
          className="bg-yellow-400 w-full h-12 rounded-lg"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
