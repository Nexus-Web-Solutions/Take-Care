import ServicesInView from "@/components/pages/services/ServicesInView";
import { InView } from "@/components/ui/in-view";

const Services = () => {
   return (
      <div className=" flex flex-col items-center justify-center bg-take_care_bg">
         <div className="mb-20">
            <h1 className="text-5xl font-bold text-take_care_primary mt-10">
               Our Services
            </h1>
         </div>
         <div className=" mx-10 space-y-44 flex flex-col items-center justify-center">
            {/* top left */}
            <ServicesInView
               title={"Athletics"}
               imgLeft={true}
               description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique facere itaque libero obcaecati, enim rerum adipisci suscipit. Dicta voluptates, adipisci perferendis"
               }
               image={"/images/hero.jpg"}
            />
            <ServicesInView
               title={"Athletics"}
               imgLeft={false}
               description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique facere itaque libero obcaecati, enim rerum adipisci suscipit. Dicta voluptates, adipisci perferendis"
               }
               image={"/images/hero.jpg"}
            />
            <ServicesInView
               title={"Athletics"}
               imgLeft={true}
               description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique facere itaque libero obcaecati, enim rerum adipisci suscipit. Dicta voluptates, adipisci perferendis"
               }
               image={"/images/hero.jpg"}
            />
            <ServicesInView
               title={"Athletics"}
               imgLeft={false}
               description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique facere itaque libero obcaecati, enim rerum adipisci suscipit. Dicta voluptates, adipisci perferendis"
               }
               image={"/images/hero.jpg"}
            />
         </div>
      </div>
   );
};

export default Services;
