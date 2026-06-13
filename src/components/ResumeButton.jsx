// const ResumeButton = () => {
//   return (
//     <a
//       href="/Mohammad_Hasib_Junior_Full_Stack_Developer.pdf"
//       download="Mohammad_Hasib_Junior_Full_Stack_Developer.pdf"
//       title="Download Resume"
//       className="btn btn-accent"
//     >
//       Download Resume
//     </a>
//   );
// };

// export default ResumeButton;

import { useRef } from "react";

export default function ResumeDownload() {
  const modalRef = useRef(null);

  const handleDownload = () => {
    // Closes the modal programmatically right as the download triggers
    modalRef.current?.close();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => modalRef.current?.showModal()}
        className="size-8 md:size-10 rounded-full border border-black dark:border-zinc-500 flex justify-center items-center ml-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-200 focus:outline-none"
        aria-label="Open download resume modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 md:size-5 text-zinc-700 dark:text-zinc-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </button>

      {/* Styled Modal Dialog */}
      <dialog
        ref={modalRef}
        id="my_modal_4"
        className="modal backdrop:blur-sm transition-all duration-300"
      >
        <div className="modal-box bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 md:p-8 max-w-md w-11/12 shadow-2xl">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Download Resume
          </h3>
          <p className="py-3 text-sm text-zinc-500 dark:text-zinc-400 font-medium normal-case">
            Are you sure you want to download the premium resume file?
          </p>

          <div className="modal-action mt-6">
            <form
              method="dialog"
              className="flex items-center gap-3 w-full justify-end"
            >
              {/* Cancel Button */}
              <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md transition-colors">
                Cancel
              </button>

              {/* Action Download Button */}
              <a
                href="/Mohammad_Hasib_Junior_Full_Stack_Developer.pdf"
                download="Mohammad_Hasib_Junior_Full_Stack_Developer.pdf"
                onClick={handleDownload}
                className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-black text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors inline-flex items-center justify-center"
              >
                Download Now
              </a>
            </form>
          </div>
        </div>

        {/* Click outside to close layout */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
