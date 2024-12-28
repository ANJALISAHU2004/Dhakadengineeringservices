import "./Services.css";
import ServicesCard from "./Servicescard";

const data = [
  {
    Service_name: "Warehouse Shed Manufacturer",
    Service_data:
      "Designed to complete predefined industrial standards, Perfect Metal Structure is a renowned Warehouse Shed Manufacturer. We are manufacturing the sheds with the capability of lifting easily as its lightweight in lifting. Weather Resistant. A product with the toughness to bear the climatic effects Warehouse Sheds Offered products are manufactured   using the finest quality raw material and are in total compliance with set industry norms. ",
    // Service_photo:url("") ,
  },
  {
    Service_name: "Pre-engineered buildings",
    Service_data:
      "Pre-engineered buildings are buildings that are built in factories and are made of steel that are shipped to site and bolted together. PEB (Pre-engineered Building) revolution the construction market using built up sections in place of conventional hot rolled sections. A large column free area is the utmost requirement for any type of industry which is provided by PEB  ",
    // Service_photo:url("") ,
  },
  {
    Service_name: "Dairy Shed",
    Service_data:
      "Dairy Shed is a simple housing created for agricultural animals to prevent them from extreme weather conditions like heat, cold or raining. Using our shed, it is easier to fabricate basic cattle shed even at a small space. A Whole farm dairy model was developed & evaluated the dairy wise model is an empirical model that simulated technical environmental and financial processes on a dairy firm",
    // Service_photo:url("") ,
  },
  {
    Service_name: "Industrial stairs",
    Service_data:
      " The main purpose of our industrial stairs is to provide a safe and       convenient route to access upper levels or platforms, as well as landings  around types of machinery or devices in production halls. Straight Stairs with a Central Landing. L-shaped stairs. U-shaped Stairs.Winder Stairs. Spiral Stairs. Circular Stairs. Curved Stairs. Ladder Stairs. Split Staircase. Space-Saving Staircase. Floating Staircase. Storage Staircase",
    // Service_photo:url("") ,
  },
  {
    Service_name: " Sheet-metal fabrication",
    Service_data:
      " Sheet-metal fabrication SS ,MS, fabrication work Welding cutting ,folding ,bending , galvanising, powercoting work Interior & exterior wrought iron,       screeen panel safety fances & gates works house accessories sun  shade,poles, gutter, downtake pipes and window work. furnutre: Seats , benches, screen,bins and planter work.,",
    // Service_photo:url("") ,
  },
  {
    Service_name: " Car Parking Sheds",
    Service_data:
      "     provide a wide range of Car Parking Sheds which is widely appreciated by our clients for easy installation and negligible Manufacturer of Car Parking Shed - Industrial Car Parking Shed, Green Car Parking Shed, Aluminum Car Parking Shed and Open Car",
    // Service_photo:url("") ,
  },
];

export default function Services(params) {
  return (
    <>
      <div className="ServiceContainer_main">
        <div className="ServiceContainer">
          <h2 className="ServiceContainer_main_h2">Services</h2>
          <section className="articles">
            {data.map((service) => (
              <ServicesCard service={service}></ServicesCard>
            ))}
          </section>
        </div>
      </div>
      <div></div>
    </>
  );
}
