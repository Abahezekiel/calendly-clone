// import React, { useState } from 'react';

// const handleModalToggle = () => {
//   setIsModalOpen(!isModalOpen);
// };

// const CreateModal = ({ isModalOpen, handleModalToggle }) => {
  
//   return (
//     isModalOpen && (
//       <div className="fixed inset-0   bg-opacity-50 flex  items-center z-50 pb-28">
//         <div className="bg-white border border-blue-100 rounded-lg shadow-sm w-80 p-6">
//           <h2 className="text-lg font-semibold mb-4">EVENT TYPES</h2>
//           <form>
//             <div className="mb-4">
//               <label
//                 htmlFor="event-name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Event Name
//               </label>
//               <input
//                 type="text"
//                 id="event-name"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Enter event name"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="event-description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Event Description
//               </label>
//               <textarea
//                 id="event-description"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Enter event description"
//               />
//             </div>
//             <div className="flex justify-end gap-2">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
//                 onClick={handleModalToggle} // Close the modal
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md"
//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   )
// }

// export default CreateModal


import React, { useState } from 'react';

const CreateModal = ({ isModalOpen, handleModalToggle }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., API call or state update
    console.log('Event Created:', { eventName, eventDescription });
    handleModalToggle(); // Close the modal after form submission
  };

  return (
    
    isModalOpen && (
      <div className="fixed inset-0 bg-opacity-50 flex items-center z-50 pb-28">
        <div className="bg-white border border-blue-100 rounded-lg shadow-sm w-80 p-6 m-2">
          <h2 className="text-lg font-semibold mb-4">EVENT TYPES</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="event-name"
                className="block text-sm font-medium text-gray-700"
              >
                Event Name
              </label>
              <input
                type="text"
                id="event-name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter event name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="event-description"
                className="block text-sm font-medium text-gray-700"
              >
                Event Description
              </label>
              <textarea
                id="event-description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter event description"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                onClick={handleModalToggle}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CreateModal;
