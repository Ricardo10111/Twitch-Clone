import Card from './Card'
export default function ItemsCard() {
  const items = [
    {
      title: 'Solo chateando',
      type: 'IRL (vida real)',
      type2: '',
      views: '347.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg'
    },
    {
      title: 'Rust',
      type: 'Shooter en primera persona',
      type2: '',
      views: '23 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg'
    },
    {
      title: 'Legue of Legends',
      type: 'Juego de Rol',
      type2: 'Estrategia',
      views: '8.2 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg'
    },
    {
      title: 'Eventos especiales',
      type: 'IRL (vida real)',
      type2: '',
      views: '17.5 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg'
    },
    {
      title: 'Minecraft',
      type: 'Simulación',
      type2: '',
      views: '21.6 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg'
    },
    {
      title: 'Valorant',
      type: 'Shooter en primera persona',
      type2: '',
      views: '73.1 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg'
    },
    {
      title: 'Call of Duty: Warzone',
      type: 'Shooter en primera persona',
      type2: '',
      views: '30.4 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg'
    },
    {
      title: 'Kings League',
      type: '',
      type2: '',
      views: '1.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg'
    },
    {
      title: 'Fornite',
      type: 'Shooter',
      type2: 'Juego de Rol',
      views: '23 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg'
    },
    {
      title: 'Elden Ring',
      type: 'Juego de Rol',
      type2: '',
      views: '74.5 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg'
    },
    {
      title: "Garry's Mod",
      type: 'Simulación',
      type2: 'Juego Indie',
      views: '1.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/18846_IGDB-285x380.jpg'
    },
    {
      title: 'Overwatch 2',
      type: 'Shooter en primera persona',
      type2: '',
      views: '30.8 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg'
    },
    {
      title: 'Grand Theft Auto V',
      type: 'Shooter en primera persona',
      type2: '',
      views: '21.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg'
    },
    {
      title: 'Red Dead Redemption 2',
      type: 'Shooter en primera persona',
      type2: '',
      views: '13.4 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-285x380.jpg'
    },
    {
      title: 'EA Sports FC 24',
      type: 'Simulación',
      type2: 'Deportes',
      views: '1.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg'
    },
    {
      title: 'IRL',
      type: 'IRL (vida real)',
      type2: '',
      views: '1.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/509672-285x380.jpg'
    },
    {
      title: 'The Last of Us Part II: Remastered',
      type: 'Shooter',
      type2: '',
      views: '1.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/1535225577_IGDB-285x380.jpg'
    },
    {
      title: 'Fall Guys',
      type: 'Plataformas',
      type2: '',
      views: '1.3 k Espectadores',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/512980-285x380.jpg'
    }
  ]
  return (
    <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 p-2 md:px-3 w-full justify-items-center mt-[20px]'>
      {items.map((item) => {
        return (
          <Card
            key={`item-${item.title}`}
            image={item.image}
            title={item.title}
            type={item.type}
            type2={item.type2}
            views={item.views}
          />
        )
      })}
    </section>
  )
}
