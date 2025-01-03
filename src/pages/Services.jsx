import ServicesInView from "@/components/pages/services/ServicesInView";
import { InView } from "@/components/ui/in-view";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-take_care_bg">
      <div className="mb-20">
        <h1 className="mt-10 text-5xl font-bold text-take_care_primary">
          Our Services
        </h1>
      </div>
      <div className="mx-10 flex flex-col items-center justify-center space-y-44">
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
