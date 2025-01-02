import React from "react";

const Contact = () => {
   return (
      <div className="md:grid md:grid-cols-2 mx-auto container px-4 py-10">
         <div className="md:block hidden">
            <img
               src="/images/Home(3).jpg"
               alt="Healthcare"
               className="rounded-lg shadow-lg w-full h-auto object-cover xl:max-w-[700px] lg:max-w-[500px]"
            />
         </div>
         <div>
            <iframe
               src="https://docs.google.com/forms/d/e/1FAIpQLSc7p99Reif_3XjbwVW94wT6eYwTeInksfkYzhJaqA_UVILudg/viewform?embedded=true"
               className="w-full xl:h-[700px] lg:h-[500px] border-0 md:h-[370px] h-[600px]"
               title="Registration Form"
            >
               Loading…
            </iframe>
         </div>
      </div>
   );
};

export default Contact;
