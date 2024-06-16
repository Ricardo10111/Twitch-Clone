import AccountCard from './AccountCard'
export default function Menu() {
  return (
    <aside className='bg-[#1f1f23] text-white p-[15px_0px_1px_0px] col-[1/2] row-[2/3] '>
      <div className='flex gap-1 w-[250px]' >
        <span className='hidden xl:block text-[14px] font-semibold ml-2'>CANALES RECOMENDADOS</span>
        <span>
          <img src='/public/arrow.svg' alt='' className='fill-white ml-[17px] md:ml-[50px] lg:ml-[0px]' />
        </span>
      </div>

      <AccountCard />
    </aside>
  )
}
