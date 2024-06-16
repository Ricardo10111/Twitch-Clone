export default function Button() {
  const itemsButton = [
    {
      name: 'Juegos',
      icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg'
    },
    {
      name: 'IRL',
      icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg'
    },
    {
      name: 'Música',
      icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg'
    },
    {
      name: 'Creative',
      icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg'
    },
    {
      name: 'Esports',
      icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg'
    }
  ]
  return (
    <div className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {itemsButton.map((item) => (
        <div
          key={`menu-item${item.name}`}
          className='p-2 font-bold bg-[#5c16c5] flex justify-between rounded-lg h-[44px] items-center hover:bg-[#330c6e] transition-all cursor-pointer hover:w-full '
        >
          <p className="text-[24px] ml-[6px] text-[#ffffff]">{item.name}</p>
          <img src={item.icon} alt='' />
        </div>
      ))}
    </div>
  )
}
