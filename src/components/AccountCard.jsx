export default function AccountCad() {
  const menuItems = [
    {
      name: 'Ibai',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png',
      record: '🔴',

      views: '66 k',
      type: 'Rust'
    },
    {
      name: 'Elded',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/9eb48e6a-eae8-49f7-933a-b9a047234054-profile_image-70x70.png',
      record: '🔴',

      views: '12 k',
      type: 'Rust'
    },
    {
      name: 'rivers_gg',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/0e6f8782-d5b9-4a51-ae8a-9c952c213487-profile_image-70x70.png',
      record: '🔴',

      views: '1.2 k',
      type: 'Rust'
    },
    {
      name: 'CrystalMolly',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/f1f5921c-bf2e-4232-9610-b4e2fdd8a64d-profile_image-70x70.png',
      record: '🔴',

      views: '12.2 k',
      type: 'Rust'
    },
    {
      name: 'elxokas',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-70x70.png',
      record: '🔴',

      views: '1.8 k',
      type: 'Rust'
    },
    {
      name: 'ElFedelobo',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/elfedelobo-profile_image-1d74acb6f0797ea1-70x70.png',
      record: '🔴',

      views: '5.5 k',
      type: 'Rust'
    },
    {
      name: 'Horcus',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/d4885242-febf-4a11-a42a-a0ad52474ee2-profile_image-70x70.png',
      record: '🔴',

      views: '1.2 k',
      type: 'Rust'
    },
    {
      name: 'Teimens',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/a969a69b-15a3-429e-98f1-0e3507ef43ad-profile_image-70x70.png',
      record: '🔴',

      views: '2.4 k',
      type: 'Rust'
    },
    {
      name: 'Reverant',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/791ac228-58c4-4700-beed-86e48132d554-profile_image-70x70.png',
      record: '🔴',

      views: '15.2 k',
      type: 'Rust'
    },
    {
      name: 'vezzzznis',
      avatar:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/ricoy-profile_image-3a5c89918e06fa42-70x70.png',
      record: '🔴',
      views: '2 k',
      type: 'Rust'
    }
  ]

  return (
    <div className='flex flex-col mt-4'>
      {menuItems.map((item) => (
        <div
          key={`menu-item${item.name}`}
          className='flex flex-row justify-between p-[0.25rem_1rem] items-center  hover:bg-[#2f2f33] cursor-pointer hover:w-full'
        >
          <div className='flex justify-between'>
            <div className='flex justify-center items-center'>
              <img
                src={item.avatar}
                alt=''
                className='w-7 h-7 rounded-full mr-3'
              />
            </div>
            <div className=' flex-col p-0 hidden xl:flex'>
              <span className='text-[15px] font-semibold text-[#dedee3] mb-[-4px]'>
                {item.name}
              </span>
              <span className='text-[12px] text-[#adadb8] '>{item.type}</span>
            </div>
          </div>
          <div className="hidden sm:flex">
            <span className='mr-2 text-[7px]'>{item.record}</span>
            <span className='text-xs font-light'>{item.views}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
