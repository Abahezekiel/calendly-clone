


// import React, { useState } from 'react';

// const EnterpriseForm = () => {
//   // State for handling the focus and value of the input field
//   const [isFocused, setIsFocused] = useState(false);
//   const [value, setValue] = useState('');

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     if (value === '') {
//       setIsFocused(false);
//     }
//   };

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//     {/* Form Heading */}
// <div className='flex gap-5'>
// <div className="relative space-y-2">
//       {/* Floating label */}
//       <label
//         htmlFor="first-name"
//         className={`absolute left-3 top-1/2 transform transition-all duration-200 ${
//           isFocused || value ? 'text-xs top-0 -translate-y-4 text-blue-500' : 'text-sm top-1/2 -translate-y-1/2 text-gray-700'
//         }`}
//       >
//         First Name
//       </label>

//       {/* Input field */}
//       <input
//         type="text"
//         id="first-name"
//         name="first-name"
//         value={value}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         className="w-full p-3 border border-[#0B3558] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3"
//         placeholder=" "
//       />
//     </div>
//     <div className="relative space-y-2">
//       {/* Floating label */}
//       <label
//         htmlFor="first-name"
//         className={`absolute left-3 top-1/2 transform transition-all duration-200 ${
//           isFocused || value ? 'text-xs top-0 -translate-y-4 text-blue-500' : 'text-sm top-1/2 -translate-y-1/2 text-gray-700'
//         }`}
//       >
//         Last Name
//       </label>

//       {/* Input field */}
//       <input
//         type="text"
//         id="first-name"
//         name="first-name"
//         value={value}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3"
//         placeholder=" "
//       />
//     </div>
// </div>
// <div className="relative space-y-2">
//       {/* Floating label */}
//       <label
//         htmlFor="first-name"
//         className={`absolute left-3 top-1/2 transform transition-all duration-200 ${
//           isFocused || value ? 'text-xs top-0 -translate-y-4 text-blue-500' : 'text-sm top-1/2 -translate-y-1/2 text-gray-700'
//         }`}
//       >
//         Work Emil
//       </label>

//       {/* Input field */}
//       <input
//         type="text"
//         id="first-name"
//         name="first-name"
//         value={value}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3"
//         placeholder=" "
//       />
//     </div>

//     <select>
//       <option>How do you plan on using Calendly</option>
//       <option>Hosting meetings myself</option>
//       <option>With a small team (2-10 users)</option>
//       <option>With a larger team (11+ users)</option>
//       <option>Across departments or multiple teams (50+ users)</option>
//       <option>Not sure yet</option>
//     </select>
//     <textarea placeholder='How can we help?'>
      
//     </textarea >
    
//     {/* Submit Button */}
//     <div className="mt-4">
//       <button
//         type="submit"
//         className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         Submit
//       </button>
//     </div>
//   </form>
//   );
// };

// export default EnterpriseForm;




import React, { useState } from 'react';

const EnterpriseForm = () => {
  // State for handling the focus and value of each input field
  const [isFocused, setIsFocused] = useState({ firstName: false, lastName: false, workEmail: false });
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
  });

  // Handle input field focus
  const handleFocus = (field) => {
    setIsFocused((prevState) => ({ ...prevState, [field]: true }));
  };

  // Handle input field blur
  const handleBlur = (field) => {
    if (values[field] === '') {
      setIsFocused((prevState) => ({ ...prevState, [field]: false }));
    }
  };

  // Handle input value change
  const handleChange = (field, e) => {
    setValues((prevState) => ({ ...prevState, [field]: e.target.value }));
  };

  return (
    <form className="max-w-lg mx-auto pt-8 ">
      {/* Form Heading */}

      {/* First Name and Last Name Inputs */}
      <div className="flex gap-5">
        <div className="relative space-y-2 w-1/2">
          {/* Floating label for First Name */}
          <label
            htmlFor="first-name"
            className={`absolute left-3 top-1/2 transform transition-all duration-200 ${
              isFocused.firstName || values.firstName
                ? 'text-xs top-0 -translate-y-4 text-blue-500'
                : 'text-sm top-1/2 -translate-y-1/2 text-gray-700'
            }`}
          >
            First Name
          </label>

          {/* Input field for First Name */}
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={values.firstName}
            onFocus={() => handleFocus('firstName')}
            onBlur={() => handleBlur('firstName')}
            onChange={(e) => handleChange('firstName', e)}
            className="w-full p-3 border border-[#A6BBD1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3"
            placeholder=" "
          />
        </div>

        <div className="relative space-y-2 w-1/2">
          {/* Floating label for Last Name */}
          <label
            htmlFor="last-name"
            className={`absolute left-3 top-1/2 transform transition-all duration-200 ${
              isFocused.lastName || values.lastName
                ? 'text-xs top-0 -translate-y-4 text-blue-500'
                : 'text-sm top-1/2 -translate-y-1/2 text-gray-700'
            }`}
          >
            Last Name
          </label>

          {/* Input field for Last Name */}
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={values.lastName}
            onFocus={() => handleFocus('lastName')}
            onBlur={() => handleBlur('lastName')}
            onChange={(e) => handleChange('lastName', e)}
            className="w-full p-3 border border-[#A6BBD1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3"
            placeholder=" "
          />
        </div>
      </div>

      {/* Work Email Input */}
      <div className="relative space-y-2">
        {/* Floating label for Work Email */}
        <label
          htmlFor="work-email"
          className={`absolute left-3 top-1/2 transform transition-all duration-200 ${
            isFocused.workEmail || values.workEmail
              ? 'text-xs top-0 -translate-y-4 text-blue-500'
              : 'text-sm top-1/2 -translate-y-1/2 text-gray-700'
          }`}
        >
          Work Email
        </label>

        {/* Input field for Work Email */}
        <input
          type="email"
          id="work-email"
          name="work-email"
          value={values.workEmail}
          onFocus={() => handleFocus('workEmail')}
          onBlur={() => handleBlur('workEmail')}
          onChange={(e) => handleChange('workEmail', e)}
          className="w-full p-3 border border-[#A6BBD1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3"
          placeholder=" "
        />
      </div>

      {/* Dropdown for Calendly usage */}
      <div className="mt-4">
        <select className="w-full p-3 border border-[#A6BBD1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>How do you plan on using Calendly?</option>
          <option>Hosting meetings myself</option>
          <option>With a small team (2-10 users)</option>
          <option>With a larger team (11+ users)</option>
          <option>Across departments or multiple teams (50+ users)</option>
          <option>Not sure yet</option>
        </select>
      </div>

      {/* Textarea for help */}
      <div className="mt-4">
        <textarea
          placeholder="How can we help?"
          className="w-full p-3 border border-[#A6BBD1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full py-4 bg-[#006BFF] text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>

      <p className='text-xs pt-5 font-light'>By clicking submit you consent to receive email communications about Calendly products and services and agree to our <span className='underline text-blue-600'>Terms</span> . Your data will be processed in accordance with our <span className='underline text-blue-600'>privacy policy</span> . You may opt out at any time.</p>
    </form>
  );
};

export default EnterpriseForm;
