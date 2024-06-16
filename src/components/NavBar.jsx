import ButtonNav from './ButtonNav'
import Twitch from './Twitch'
export default function NavBar() {
  return (
    <nav className='col-start-1 col-end-3 grid grid-cols-3 bg-[#18181b] w-full h-full p-[1px_15px]'>
      <div className=' flex justify-start items-center gap-6 text-white'>
        <span>
          <Twitch className='w-8 h-8' />
        </span>
        <p className='hidden sm:block leading-[1.2] text-[1.2rem] text-[#bf94ff] font-semibold border-b-2 border-[#bf94ff] p-[10px_0] cursor-pointer'>
          Explorar
        </p>
        <span className='p-[5px] rounded-[8px] hover:bg-[#3b3b44] border-none cursor-pointer'>
          <img src='/public/dots.svg' alt='' />
        </span>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex items-center w-full h-full justify-center'>
          <input
            type='search'
            name=''
            id=''
            placeholder='Buscar'
            className='hidden sm:block w-[80%] h-[70%] bg-transparent border-solid border-[1.8px] border-[#3b3b44] p-[0_10px] rounded-[0.375rem_0_0_0.375rem] text-[#efeff1] hover:border-[3px]'
          />
          <span className='bg-[#53535F61] p-[7px] rounded-[0_0.5rem_0.5rem_0] ml-[4rem] sm:ml-0 cursor-pointer'>
            <img src='/public/search.svg' alt='' />
          </span>
        </div>
      </div>
      <div className='flex justify-end items-center'>
        <span>
          <img src='/public/subscription_notifications_communication_updates_email_alerts_icon_260969.svg' alt='' />
        </span>
        <ButtonNav />
        <span>
          <img src='/public/people.svg' alt='' />
        </span>
      </div>
    </nav>
  )
}
