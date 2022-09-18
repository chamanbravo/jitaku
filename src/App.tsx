import Image from './components/image'
import Find from './components/find'
import Categories from './components/categories'

function App() {
  return (
    <div className="flex gap-[2rem] items-center justify-center h-screen bg-[#373E4D]">
      <Image />
      <div className='border-[2px] border-[#22A4AC]'>
        <div className='p-[1rem]'>
          <Find />
          <div className='flex justify-between mt-[2.5rem]'>
            <Categories />
            <Categories />
            <Categories />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
