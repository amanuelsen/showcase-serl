export default function Loadingspinner() {
  return (
    <div className='flex h-screen items-center justify-center'>
      {' '}
      <button
        type='button'
        className='flex items-center rounded-lg bg-indigo-500 p-4 font-semibold text-white'
        disabled
      >
        <svg
          className='mr-3 h-5 w-5 animate-spin text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
          ></path>
        </svg>
        Processing...
      </button>
    </div>
  );
}
