import React from 'react'

const Header = () => {
  return (
    <nav class="bg-black">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
            <div className='block lg:hidden h-8 w-auto text-lg color text-yellow-400' id='heading-logo' >CryptoTracker</div>
            <div className='hidden lg:block h-8 w-auto text-lg text-yellow-400'  id='heading-logo'>CryptoTracker</div>
          {/* <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/> */}
          {/* <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/> */}
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
           
            <a href="#" class=" bg-black text-gray-300 hover:bg-gray-700  active:bg-violet-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="bg-black text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

            <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        
        <option selected value="INR">INR</option>
        <option value="USD">USD</option>
        
    </select>
  </div>
</div>


          </div>
        </div>
      </div>
      
    </div>
  </div>

  
 
</nav>
  )
}

export default Header;