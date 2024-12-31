import React from "react";

const RegisterServices = () => {
   return (
      <div className="container mx-auto p-4 md:p-10">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
            {/* Image - Right Side, Only visible on md and above */}
            <div className="hidden md:block w-full md:w-1/2">
               <img
                  src="/images/Home(3).jpg"
                  alt="Healthcare"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
               />
            </div>
            {/* Form Container  */}
            <div className="w-full md:w-1/2">
               <div className="relative w-full overflow-hidden pt-4">
                  <iframe
                     src="https://docs.google.com/forms/d/e/1FAIpQLSc7p99Reif_3XjbwVW94wT6eYwTeInksfkYzhJaqA_UVILudg/viewform?embedded=true"
                     className="w-full h-[600px] border-0"
                     title="Registration Form"
                  >
                     Loading…
                  </iframe>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RegisterServices;
