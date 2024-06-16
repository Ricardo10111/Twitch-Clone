import Button from './Button'
// import Card from './Card'
import ItemsCard from './ItemsCard'
export default function Content() {
  return (
    <section className='cols-[2/3] row-[2/3] bg-[#0e0e10] p-6 text-[#ffffff]'>
      <div className='mt-3'>
        <h1 className='leading-[1.2] text-[3.5rem] font-bold font-content text-[#ffffff]'>
          Explorar
        </h1>
      </div>
      <div className='hidden sm:block mt-10'>
        <Button />
      </div>

      <div className='flex flex-col mt-[2.4rem]'>
        <div className='flex flex-row gap-5 h-[4rem]'>
          <span className='font-semibold text-[18px] text-[#bf94ff] border-solid border-[#bf94ff] border-b-[2px] h-[35px] hover:text-[#9147ff] cursor-pointer'>
            Categorías
          </span>
          <span className='font-semibold text-[18px] text-[#ffffff] h-[35px] hover:text-[#bf94ff] cursor-pointer'>
            Canales en vivo
          </span>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex justify-center items-center border-solid border-[1px] rounded-[0.2rem] border-[#3b3b44] bg-[#18181b] h-[2rem] w-[13.3rem] p-[0.2rem] hover:border-[2px]'>
            <img src='/public/searchCo.svg' alt='' className='h-[20px] w-[20px]'/>
            <input
              type='search'
              name=''
              id=''
              placeholder='Buscar etiquetas de categorías'
              className='bg-transparent border-none p-[0_10px] text-[13px] text-[#efeff1] hover:border-[3px] w-[100%] h-[70%]'
            />
          </div>
          <div className=' justify-center items-center gap-3 hidden sm:flex'>
            <span className='text-[13px] font-semibold'>Ordenar por</span>
            <div className='flex justify-center items-center  border-solid border-[1px] rounded-[0.2rem] border-[#3b3b44] bg-[#18181b] w-[12rem] h-[2rem] p-[0.3rem_0.4rem] hover:border-[2px]'>
            <button className='flex items-center bg-transparent border-none text-[13px] text-[#efeff1] hover:border-[3px] w-[100%] h-[70%]' >Recomendaciones para ti</button>
            <img src="/public/angle-arrow-down_icon-icons.com_73683.svg" alt="" className='h-3 w-3'/>

            </div>
            
          </div>
        </div>
      </div>
        <ItemsCard />

    </section>
  )
}
