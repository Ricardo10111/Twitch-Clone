import clsx from 'clsx'
export default function ButtonNav() {
  const categories = ['Iniciar Sesion', 'Registrarse']

  return (
    <div className='flex flex-row gap-4 justify-center items-center'>
      {categories.map((category) => {
        return (
          <span
            key={`category-${category}`}
            className={clsx(
              'text-[#efeff1] text-[0.8rem] font-semibold rounded-md border-2 border-[#bf94ff] p-[0.375rem_0.775rem] border-none bg-[#53535F60] hover:bg-[#3b3b44] cursor-pointer hidden sm:block',
              {
                'bg-[#9147ff] hover:bg-[#5c16c5]': category === 'Registrarse'
              }
            )}
          >
            {category}
          </span>
        )
      })}
    </div>
  )
}
