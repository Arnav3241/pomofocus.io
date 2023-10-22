import Image from 'next/image'

export const metadata = {
  title: 'Pomofocus.io',
  description: "Arnav's Pomodoro Timer",
}

export default function todo() {
  var timePercenteage = 60;

  return (
    <div className="h-[100vh] w-[100vw] bg-[#BA4949] flex justify-center align-middle">
      <div className="h-[8vh] w-[330px]">
        <div className="w-full h-[7vh] flex justify-between">
          <div className="flex items-center">
            <Image src="/icon.png" width={10} height={10} className='w-[12px] h-[12px]' />
            <div className="px-1 text-[12px] font-semibold text-white"> Pomofocus </div>
          </div>
          <div className="flex items-center buttons">
            <button className="p-1 px-2 rounded bg-[#d45959] text-[8px] mx-1 text-semibold text-white flex items-center">
              <Image src="/report.png" width={10} height={10} className='w-[9px] h-[9px]' /> 
              <div className='pl-1'>Report</div>
            </button>
            <button className="p-1 px-2 rounded bg-[#d45959] text-[8px] mx-1 text-semibold text-white flex items-center">
              <Image src="/settings.png" width={10} height={10} className='w-[9px] h-[9px]' /> 
              <div className='pl-1'>Settings</div>
            </button>
          </div>
        </div>
        <div className="w-full h-[1vh]">
          <div className='bg-[#d45959] w-full h-[0.3vh]'>
            <div className={`bg-white w- h-[0.3vh]`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
