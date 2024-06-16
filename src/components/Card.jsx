import clsx from "clsx"
export default function Card({ image, title, type, type2, views }) {
  return (
    <article className='flex flex-col mb-2'>
      <img
        src={image}
        alt={title}
        className='h-auto w-full object-cover  hover:border-b-[6px] hover:border-l-[6px] border-[#772ce8] transition-all cursor-pointer'
      />

      <footer>
        <div className='flex- flex-col py-2'>
          <p className='text-[15px] font-semibold hover:text-[#bf94ff] cursor-pointer'>{title}</p>
          <p className='text-[12px] text-slate-400'>{views}</p>
        </div>

        <div className='flex flex-nowrap md:flex-wrap gap-1'>
          {type ? (
            <p className={clsx('bg-[#29292E] text-[#adadb8] rounded-lg p-1 text-[12px] h-5 items-center flex px-3 hover:bg-[#adadb8] cursor-pointer', {'sm:text-[9px] sm:p-1 ': type === 'Shooter en primera persona'})}>
              {type}
            </p>
          ) : (
            <p className='hidden'></p>
          )}

          {type2 ? (
            <p className='bg-[#29292E] text-[#adadb8] rounded-lg p-1 text-[12px] h-5 items-center flex px-3 hover:bg-[#adadb8] cursor-pointer'>
              {type2}
            </p>
          ) : (
            <p className='hidden'></p>
          )}
        </div>
      </footer>
    </article>
  )
}
