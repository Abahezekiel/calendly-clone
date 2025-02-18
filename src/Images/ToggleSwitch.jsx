import React from 'react'

const ToggleSwitch = () => {
  return (
    <div class="flex items-center">
    <label for="toggle" class="inline-flex items-center cursor-pointer">
      <div class="relative">
        <input
          id="toggle"
          type="checkbox"
          class="sr-only peer"
        />
        <div class="block w-9 h-4 bg-gray-300 rounded-full peer-checked:bg-blue-500"></div>
        <div
          class="dot absolute left-1 top-0 w-4 h-4 bg-white border-blue-300 border rounded-full transition transform peer-checked:translate-x-full peer-checked:bg-white"
        ></div>
      </div>
    </label>
  </div>
  
  )
}

export default ToggleSwitch

