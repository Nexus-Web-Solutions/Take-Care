import React from "react";

const Contact = () => {
   return (
      <div className="md:grid md:grid-cols-2 px-10 py-20">
         <div className="md:block hidden bg-red-100 ">
            <img
               src="/images/Home(3).jpg"
               alt="Healthcare"
               className="rounded-lg w-full xl:h-[700px] h-full object-cover "
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
