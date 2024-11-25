
export type PageOption = 'services' | 'domestic' | 'asian' | 'european' | 'exotic' | 'optional'
export const pageOptions: Record<PageOption, string[]> = {
  services: [
    "Car AC Repair",
    "Brake Repair",
    "Oil Changes",
    "Auto Diagnostics",
    "Auto Electrical Repair",
    "Car Heater Repair",
    "Engine Repair",
    "Cooling System",
    "Wheel Alignment",
    "Tire Services",
    "Drivetrain & Differential",
    "Battery Installation",
    "Starter",
    "Alternator Repair & Replacement",
    "Suspension Repair",
    "Check Engine Light",
    "Transmissions",
    "Car Repair",
    "ADAS (Advanced Driver Assistance Systems)",
    "Shock & Struts",
    "TPMS (Tire Pressure Monitoring System)",
    "Exhaust System",
    "Fuel Injector Service",
    "Catalytic Converter",
    "Preventative Maintenance",
    "Factory Scheduled Maintenance",
    "Computer Programming",
    "ABS (Anti-Lock Brake System)",
    "Steering Repair"
  ],
  domestic: [
    "Buick",
    "Cadillac",
    "Chevy",
    "Chrysler",
    "Dodge",
    "Ford",
    "GMC",
    "Hummer",
    "Jeep",
    "Lincoln"
  ],
  asian: [
    "Acura",
    "Honda",
    "Hyundai",
    "Kia",
    "Lexus",
    "Mazda",
    "Mitsubishi",
    "Nissan",
    "Scion",
    "Subaru",
    "Toyota"
  ],
  european: [
    "Audi",
    "BMW",
    "Fiat",
    "Jaguar",
    "Land Rover",
    "Mercedes",
    "MINI",
    "Porsche",
    "Volkswagen",
    "Volvo"
  ],
  exotic: [
    "Maserati",
    "Ferrari",
    "Lamborghini",
    "Aston Martin",
    "Rolls Royce",
    "McLaren",
    "Alpha Romeo",
    "Bentley"
  ],
  optional: [
    "Diesel Repair",
    "Power Stroke",
    "Cummins",
    "Duramax",
    "Fleet Maintenance"
  ]
}
