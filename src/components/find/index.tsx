import {useState} from 'react'

function index() {
  const [value, setValue] = useState<String>('')
  return (
    <div className="flex gap-[1rem] items-center">
      <h1 className="text-[#CAE6E8] text-[2rem]">{'>'} find /</h1>
      <input type="text" className="rounded-[10px] bg-[#455169] outline-none text-[#CAE6E8] text-[1.5rem] p-1 pl-2 min-w-[400px]"/>
    </div>
  );
}

export default index;
