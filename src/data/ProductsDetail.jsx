// src/data/productsDetail.jsx

import coffee2 from "../assets/agri_products/coffee.png";
import sesame from "../assets/agri_products/sesame.png";
import mugbeans from "../assets/agri_products/mungbean.png";
import safflower from "../assets/agri_products/safflower.png";
import roastedcoffee from "../assets/agri_products/roastedCoffee.png";
import CastorSeeds from "../assets/agri_products/CastorSeeds.jpg";
import Chickpeas from "../assets/agri_products/Chickpeas.jpg";

import sodiumHydroxide from "../assets/chem_products/SodiumHydroxide.jpg";
import sodaAsh from "../assets/chem_products/SodaAsh.jpg";
import polyaluminiumChloride from "../assets/chem_products/PolyaluminiumChloride.jpg";
import chlorineTablets from "../assets/chem_products/ChlorineTablets.jpg";
import citricAcid from "../assets/chem_products/CitricAcid.jpg";
import phosphoricAcid from "../assets/chem_products/PhosphoricAcid.jpg";
import industrialPolymers from "../assets/chem_products/IndustrialPolymers.jpg";
import industrialResins from "../assets/chem_products/IndustrialResins.jpg";

const ProductsDetail = {
  agricultural: [
    {
      id: "green-mung-beans",
      slug: "green-mung-beans",
      type: "agricultural",
      name: "Green Mung Beans",
      category: "Pulses",
      origin: "Ethiopia",
      originFlag: "🇪🇹",
      grade: "Sprout Grade",
      shortDescription:
        "Premium Ethiopian green mung beans sourced from selected farming regions and prepared for international markets.",
      heroImage: mugbeans,
      gallery: [mugbeans],
      keySpec: {
        purity: "99%",
        moisture: "≤ 14%",
        foreignMatter: "≤ 1%",
      },
      card: {
        highlight:
          "Sprout-grade mung beans for Southeast and South Asian markets.",
        specification: "Moisture ≤ 14% · Cleaned & graded",
      },
      overview:
        "Yanet Industrial supplies carefully cleaned and graded green mung beans suitable for sprouting, food processing, and export. Our supply chain focuses on consistent quality, reliable volumes, and documentation that meets international buyer requirements.",
      keyCharacteristics: [
        "Uniform grain size and color",
        "Suitable for sprouting applications",
        "Low foreign matter after cleaning",
        "Stable supply from Ethiopian farming regions",
      ],
      specifications: {
        moisture: "≤ 14%",
        purity: "≥ 99%",
        foreignMatter: "≤ 1%",
        broken: "≤ 2%",
        color: "Natural green",
        size: "As per buyer specification",
      },
      originAndSourcing: {
        regions: ["Selected Ethiopian agricultural zones"],
        sourcingModel: "Direct engagement with producers and aggregators",
        seasonality: "Aligned with main harvest windows",
        traceability:
          "Lot-based tracking from collection to export preparation",
      },
      qualityAndProcessing: {
        steps: [
          "Receiving and lot identification",
          "Cleaning and sorting",
          "Grading by size and quality",
          "Moisture and purity checks",
          "Packing under controlled conditions",
        ],
        qualityControl: "Batch inspection before dispatch",
      },
      packagingAndHandling: {
        options: ["25 kg bags", "50 kg bags", "Bulk as agreed"],
        labeling: "Product name, lot number, net weight, origin",
        storage: "Cool, dry, ventilated warehouse",
      },
      exportAndLogistics: {
        incoterms: ["FOB", "CFR", "CIF – as agreed"],
        ports: ["Djibouti Port"],
        leadTime: "Subject to volume and shipping schedule",
        documentation: [
          "Commercial invoice",
          "Packing list",
          "Certificate of origin",
          "Phytosanitary certificate",
        ],
      },
      certifications: [
        "Phytosanitary certificate",
        "Certificate of origin",
        "Quality / analysis report on request",
      ],
      applications: [
        "Sprouting",
        "Food processing",
        "Wholesale distribution",
        "Export trading",
      ],
      exportMarkets: ["Southeast Asia", "South Asia", "Middle East"],
    },
    {
      id: "white-sesame-seeds",
      slug: "white-sesame-seeds",
      type: "agricultural",
      name: "White Sesame Seeds",
      category: "Oilseeds",
      origin: "Humera, Ethiopia",
      originFlag: "🇪🇹",
      grade: "Humera Type",
      shortDescription:
        "Premium Humera-type white sesame seeds known for high oil content and superior quality for export markets.",
      heroImage: sesame,
      gallery: [sesame],
      keySpec: {
        oilContent: "≥ 48%",
        moisture: "≤ 7%",
        purity: "≥ 99%",
      },
      card: {
        highlight: "Premium Humera-type sesame with high oil content.",
        specification: "Oil content ≥ 48% · Export grade",
      },
      overview:
        "Our Humera-type white sesame is selected for oil content, cleanliness, and consistency. It is prepared for buyers in food, oil extraction, and wholesale channels worldwide.",
      keyCharacteristics: [
        "High oil content typical of Humera type",
        "Clean appearance and uniform seed",
        "Export-oriented grading",
        "Reliable Ethiopian origin supply",
      ],
      specifications: {
        moisture: "≤ 7%",
        oilContent: "≥ 48%",
        purity: "≥ 99%",
        foreignMatter: "≤ 1%",
        type: "White / Humera type",
      },
      originAndSourcing: {
        regions: ["Humera and related production areas"],
        sourcingModel: "Regional aggregation with quality screening",
        seasonality: "Post-harvest supply windows",
        traceability: "Batch tracking through cleaning and packing",
      },
      qualityAndProcessing: {
        steps: [
          "Sourcing and intake",
          "Cleaning and destoning",
          "Sorting and grading",
          "Quality sampling",
          "Export packing",
        ],
        qualityControl: "Pre-shipment quality verification",
      },
      packagingAndHandling: {
        options: ["25 kg bags", "50 kg bags"],
        labeling: "Origin, type, lot, net weight",
        storage: "Dry storage away from moisture and odor",
      },
      exportAndLogistics: {
        incoterms: ["FOB", "CFR", "CIF – as agreed"],
        ports: ["Djibouti Port"],
        leadTime: "Based on order size and vessel schedule",
        documentation: [
          "Commercial invoice",
          "Packing list",
          "Certificate of origin",
          "Phytosanitary certificate",
        ],
      },
      certifications: [
        "Phytosanitary certificate",
        "Certificate of origin",
        "Quality report on request",
      ],
      applications: [
        "Edible oil extraction",
        "Bakery and food industry",
        "Wholesale export",
      ],
      exportMarkets: ["Middle East", "Asia", "Europe"],
    },
    {
      id: "ethiopian-coffee",
      slug: "ethiopian-coffee",
      type: "agricultural",
      name: "Ethiopian Coffee",
      category: "Coffee",
      origin: "Ethiopia",
      originFlag: "🇪🇹",
      grade: "Washed / Unwashed · Lekempti & specialty origins",
      shortDescription:
        "Ethiopian coffee beans including washed and unwashed lots, with specialty origin options such as Lekempti.",
      heroImage: coffee2,
      gallery: [coffee2],
      keySpec: {
        process: "Washed / Unwashed",
        grade: "Specialty / Commercial",
        origin: "Ethiopia",
      },
      card: {
        highlight:
          "Washed and unwashed specialty origin grades including Lekempti.",
        specification: "Specialty / Commercial grades",
      },
      overview:
        "Yanet Industrial handles Ethiopian coffee lots prepared for international buyers, with attention to origin profile, processing method, and consistent presentation for export.",
      keyCharacteristics: [
        "Ethiopian origin profiles",
        "Washed and unwashed options",
        "Commercial and specialty-oriented lots",
        "Export documentation support",
      ],
      specifications: {
        process: "Washed or Unwashed",
        grade: "As contracted (e.g. Lekempti, specialty grades)",
        moisture: "Within export norms",
        screen: "As per buyer specification",
      },
      originAndSourcing: {
        regions: ["Selected Ethiopian coffee-producing areas"],
        sourcingModel: "Origin-linked supply partners",
        seasonality: "Crop-year dependent",
        traceability: "Lot identification by origin and process",
      },
      qualityAndProcessing: {
        steps: [
          "Lot selection",
          "Process verification (washed / unwashed)",
          "Grading and screening",
          "Quality sampling",
          "Export preparation",
        ],
        qualityControl: "Sample approval where required",
      },
      packagingAndHandling: {
        options: ["60 kg bags", "As agreed"],
        labeling: "Origin, process, grade, lot",
        storage: "Clean, dry, odor-free conditions",
      },
      exportAndLogistics: {
        incoterms: ["FOB", "CFR", "CIF – as agreed"],
        ports: ["Djibouti Port"],
        leadTime: "Subject to crop availability and shipping",
        documentation: [
          "Commercial invoice",
          "Packing list",
          "Certificate of origin",
          "Quality documents as agreed",
        ],
      },
      certifications: [
        "Certificate of origin",
        "Quality documentation on request",
      ],
      applications: ["Roasting", "Specialty trade", "Commercial blending"],
      exportMarkets: ["Europe", "Middle East", "Asia", "North America"],
    },
    {
      id: "safflower-seeds",
      slug: "safflower-seeds",
      type: "agricultural",
      name: "Safflower Seeds",
      category: "Oilseeds",
      origin: "Ethiopia",
      originFlag: "🇪🇹",
      grade: "Export Grade",
      shortDescription:
        "Cleaned Ethiopian safflower seeds prepared for international oilseed and commodity buyers.",
      heroImage: safflower,
      gallery: [safflower],
      keySpec: {
        purity: "Export grade",
        moisture: "Controlled",
        foreignMatter: "Minimized",
      },
      card: {
        highlight: "Cleaned safflower prepared for international buyers.",
        specification: "Export grade · Sorted",
      },
      overview:
        "Safflower seeds are cleaned, sorted, and packed for export-oriented oilseed trade, with focus on cleanliness and consistent lot presentation.",
      keyCharacteristics: [
        "Cleaned and sorted",
        "Export-oriented preparation",
        "Ethiopian origin",
        "Suitable for oil extraction channels",
      ],
      specifications: {
        moisture: "As per contract",
        purity: "Export grade",
        foreignMatter: "Minimized through cleaning",
        type: "Safflower seeds",
      },
      originAndSourcing: {
        regions: ["Ethiopian production areas"],
        sourcingModel: "Regional collection and screening",
        seasonality: "Harvest-linked",
        traceability: "Lot-based handling",
      },
      qualityAndProcessing: {
        steps: ["Intake", "Cleaning", "Sorting", "Quality check", "Packing"],
        qualityControl: "Pre-shipment checks",
      },
      packagingAndHandling: {
        options: ["25 kg / 50 kg bags", "As agreed"],
        labeling: "Product, origin, lot, weight",
        storage: "Dry warehouse storage",
      },
      exportAndLogistics: {
        incoterms: ["FOB", "CFR", "CIF – as agreed"],
        ports: ["Djibouti Port"],
        leadTime: "Order and schedule dependent",
        documentation: [
          "Commercial invoice",
          "Packing list",
          "Certificate of origin",
        ],
      },
      certifications: [
        "Certificate of origin",
        "Supporting quality documents on request",
      ],
      applications: ["Oil extraction", "Commodity trading"],
      exportMarkets: ["Regional and international oilseed markets"],
    },
    {
      id: "castor-seeds",
      slug: "castor-seeds",
      type: "agricultural",
      name: "Castor Seeds",
      category: "Oilseeds",
      origin: "Ethiopia",
      originFlag: "🇪🇹",
      grade: "Industrial / Export Grade",
      shortDescription:
        "Quality castor seeds for industrial processing and export, moisture-controlled and graded.",
      heroImage: CastorSeeds,
      gallery: [CastorSeeds],
      keySpec: {
        moisture: "Controlled",
        grade: "Graded",
        use: "Industrial / export",
      },
      card: {
        highlight: "Quality castor seeds for industrial and export use.",
        specification: "Moisture controlled · Graded",
      },
      overview:
        "Castor seeds are prepared for industrial buyers and export partners requiring consistent grading and careful moisture management.",
      keyCharacteristics: [
        "Moisture-controlled lots",
        "Graded for industrial use",
        "Ethiopian origin",
        "Export documentation support",
      ],
      specifications: {
        moisture: "Controlled to contract level",
        grade: "Industrial / export",
        foreignMatter: "Reduced via cleaning",
        type: "Castor seeds",
      },
      originAndSourcing: {
        regions: ["Ethiopian supply regions"],
        sourcingModel: "Screened aggregation",
        seasonality: "Crop cycle dependent",
        traceability: "Batch identification",
      },
      qualityAndProcessing: {
        steps: [
          "Receiving",
          "Cleaning",
          "Grading",
          "Moisture monitoring",
          "Packing",
        ],
        qualityControl: "Lot inspection before export",
      },
      packagingAndHandling: {
        options: ["Bag packing as agreed"],
        labeling: "Product, lot, weight, origin",
        storage: "Dry, controlled storage",
      },
      exportAndLogistics: {
        incoterms: ["FOB", "CFR", "CIF – as agreed"],
        ports: ["Djibouti Port"],
        leadTime: "Volume and shipping dependent",
        documentation: [
          "Commercial invoice",
          "Packing list",
          "Certificate of origin",
        ],
      },
      certifications: [
        "Certificate of origin",
        "Analysis documents on request",
      ],
      applications: [
        "Castor oil processing",
        "Industrial applications",
        "Export trade",
      ],
      exportMarkets: ["Industrial import markets"],
    },
    {
      id: "chickpeas",
      slug: "chickpeas",
      type: "agricultural",
      name: "Chickpeas",
      category: "Pulses",
      origin: "Ethiopia",
      originFlag: "🇪🇹",
      grade: "Food Grade",
      shortDescription:
        "Sorted Ethiopian chickpeas prepared for food processing and export markets.",
      heroImage: Chickpeas,
      gallery: [Chickpeas],
      keySpec: {
        grade: "Food grade",
        moisture: "Within export norms",
        cleanliness: "Cleaned & sorted",
      },
      card: {
        highlight: "Sorted chickpeas for food processing and export markets.",
        specification: "Food grade · Cleaned",
      },
      overview:
        "Food-grade chickpeas are cleaned and sorted for processors and traders requiring reliable Ethiopian pulse supply.",
      keyCharacteristics: [
        "Food-grade preparation",
        "Cleaned and sorted",
        "Suitable for processing and wholesale",
        "Ethiopian origin",
      ],
      specifications: {
        moisture: "As per export norms / contract",
        grade: "Food grade",
        foreignMatter: "Minimized",
        size: "As agreed",
      },
      originAndSourcing: {
        regions: ["Ethiopian pulse-producing areas"],
        sourcingModel: "Regional supply partners",
        seasonality: "Harvest-linked",
        traceability: "Lot tracking",
      },
      qualityAndProcessing: {
        steps: [
          "Collection",
          "Cleaning",
          "Sorting",
          "Quality check",
          "Packing",
        ],
        qualityControl: "Batch review before shipment",
      },
      packagingAndHandling: {
        options: ["25 kg / 50 kg bags", "As agreed"],
        labeling: "Product, origin, lot, weight",
        storage: "Clean dry storage",
      },
      exportAndLogistics: {
        incoterms: ["FOB", "CFR", "CIF – as agreed"],
        ports: ["Djibouti Port"],
        leadTime: "Subject to availability",
        documentation: [
          "Commercial invoice",
          "Packing list",
          "Certificate of origin",
          "Phytosanitary as required",
        ],
      },
      certifications: [
        "Certificate of origin",
        "Phytosanitary certificate when required",
      ],
      applications: [
        "Food processing",
        "Wholesale distribution",
        "Export trading",
      ],
      exportMarkets: ["Regional and international pulse markets"],
    },
  ],

  chemical: [
    {
      id: "sodium-hydroxide",
      slug: "sodium-hydroxide",
      type: "chemical",
      name: "Sodium Hydroxide",
      isOurs: "yes",
      category: "Basic chemicals",
      casNumber: "1310-73-2",
      physicalForm: "Flake",
      grade: "Industrial Grade",
      origin: "International supply",
      shortDescription:
        "Caustic soda for detergent, soap, and industrial process applications.",
      heroImage: sodiumHydroxide,
      gallery: [sodiumHydroxide],
      keySpec: {
        purity: "As per grade",
        form: "Flake",
      },
      card: {
        highlight:
          "Reliable industrial-grade sodium hydroxide for manufacturing use.",
        specification: "CAS 1310-73-2 · Flake · Industrial Grade",
      },
      overview:
        "Yanet Industrial supplies sodium hydroxide (caustic soda) used widely in soap, detergent, and industrial processing, with focus on consistent quality and dependable delivery.",
      keyCharacteristics: [
        "Suitable for detergent and soap production",
        "Industrial process applications",
        "Reliable import supply chain",
      ],
      specifications: {
        casNumber: "1310-73-2",
        "HS code": "2815.11",
        "UN Number": "UN1823",
        "IMCO Class": "8",
        form: "Flake",
        grade: "Industrial Grade",
        purity: "As per specification",
      },
      originAndSourcing: {
        regions: ["International chemical suppliers"],
        sourcingModel: "Partnered global suppliers",
        seasonality: "Year-round supply",
        traceability: "Batch and shipment documentation",
      },
      qualityAndProcessing: {
        steps: [
          "Supplier qualification",
          "Specification verification",
          "Import documentation",
          "Local distribution",
        ],
        qualityControl: "Certificate of analysis as applicable",
      },
      packagingAndHandling: {
        options: ["Bags", "As agreed"],
        labeling: "Product name, batch, hazard labels as required",
        storage: "Per material safety guidelines",
      },
      exportAndLogistics: {
        incoterms: ["As agreed with buyer"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Subject to order and shipping",
        documentation: [
          "Commercial invoice",
          "Packing list",
          "CoA / MSDS as required",
        ],
      },
      certifications: ["Certificate of analysis on request", "MSDS"],
      applications: ["Soap & detergent", "Industrial processing"],
      exportMarkets: ["Ethiopian industrial market"],
    },
    {
      id: "soda-ash",
      slug: "soda-ash",
      type: "chemical",
      name: "Soda Ash",
      category: "Basic chemicals",
      casNumber: "497-19-8",
      physicalForm: "Powder",
      grade: "Industrial Grade",
      origin: "International supply",
      shortDescription:
        "Sodium carbonate for glass, detergent, and general industrial applications.",
      heroImage: sodaAsh,
      gallery: [sodaAsh],
      keySpec: {
        form: "Powder",
        grade: "Industrial",
      },
      card: {
        highlight:
          "Industrial soda ash for manufacturing and detergent producers.",
        specification: "CAS 497-19-8 · Powder · Industrial Grade",
      },
      overview:
        "Soda ash (sodium carbonate) is supplied for industrial users requiring consistent quality for process and detergent applications.",
      keyCharacteristics: [
        "Industrial process input",
        "Detergent manufacturing",
        "Stable import supply",
      ],
      specifications: {
        casNumber: "497-19-8",
        "HS code": "2815.11",
        "UN Number": "UN1823",
        "IMCO Class": "8",
        form: "Powder",
        grade: "Industrial Grade",
      },
      originAndSourcing: {
        regions: ["International suppliers"],
        sourcingModel: "Qualified chemical partners",
        seasonality: "Year-round",
        traceability: "Batch documentation",
      },
      qualityAndProcessing: {
        steps: [
          "Supplier screening",
          "Spec confirmation",
          "Import & distribution",
        ],
        qualityControl: "CoA as applicable",
      },
      packagingAndHandling: {
        options: ["Bags", "As agreed"],
        labeling: "Product, batch, weight",
        storage: "Dry storage per guidelines",
      },
      exportAndLogistics: {
        incoterms: ["As agreed"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Order dependent",
        documentation: ["Invoice", "Packing list", "CoA / MSDS"],
      },
      certifications: ["CoA on request", "MSDS"],
      applications: ["Detergent", "Industrial processes"],
      exportMarkets: ["Local industrial market"],
    },
    {
      id: "polyaluminium-chloride",
      slug: "polyaluminium-chloride",
      type: "chemical",
      name: "Polyaluminium Chloride",
      category: "Water treatment chemicals",
      casNumber: "1327-41-9",
      physicalForm: "Powder",
      grade: "Technical Grade",
      origin: "International supply",
      shortDescription:
        "PAC coagulant for municipal and industrial water treatment applications.",
      heroImage: polyaluminiumChloride,
      gallery: [polyaluminiumChloride],
      keySpec: {
        use: "Water treatment",
        form: "Powder",
      },
      card: {
        highlight: "Technical-grade PAC for effective water clarification.",
        specification: "CAS 1327-41-9 · Powder · Technical Grade",
      },
      overview:
        "Polyaluminium chloride is used as a coagulant in water and wastewater treatment, supporting reliable clarification performance.",
      keyCharacteristics: [
        "Water treatment coagulant",
        "Suitable for industrial and municipal use",
        "Technical grade supply",
      ],
      specifications: {
        casNumber: "1327-41-9",
        "HS code": "2815.11",
        "UN Number": "UN1823",
        "IMCO Class": "8",
        form: "Powder",
        grade: "Technical Grade",
      },
      originAndSourcing: {
        regions: ["International suppliers"],
        sourcingModel: "Specialized water-treatment partners",
        seasonality: "Year-round",
        traceability: "Batch tracking",
      },
      qualityAndProcessing: {
        steps: ["Spec match", "Import handling", "Local supply"],
        qualityControl: "CoA as required",
      },
      packagingAndHandling: {
        options: ["Bags", "As agreed"],
        labeling: "Product, batch, handling notes",
        storage: "Dry, sealed storage",
      },
      exportAndLogistics: {
        incoterms: ["As agreed"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Subject to order",
        documentation: ["Invoice", "Packing list", "CoA / MSDS"],
      },
      certifications: ["CoA", "MSDS"],
      applications: ["Water treatment", "Wastewater treatment"],
      exportMarkets: ["Ethiopian utilities & industry"],
    },
    {
      id: "chlorine-tablets",
      slug: "chlorine-tablets",
      type: "chemical",
      name: "Chlorine Tablets",
      isOurs: "yes",
      category: "Water treatment chemicals",
      casNumber: "87-90-1",
      physicalForm: "Tablet",
      grade: "Commercial Grade",
      origin: "International supply",
      shortDescription:
        "Disinfection tablets for water treatment and sanitation applications.",
      heroImage: chlorineTablets,
      gallery: [chlorineTablets],
      keySpec: {
        form: "Tablet",
        use: "Disinfection",
      },
      card: {
        highlight:
          "Convenient chlorine tablets for water disinfection programs.",
        specification: "Tablet · Commercial Grade",
      },
      overview:
        "Chlorine tablets support water disinfection and sanitation programs with practical handling and dosing.",
      keyCharacteristics: [
        "Water disinfection",
        "Easy handling tablet form",
        "Commercial supply packages",
      ],
      specifications: {
        form: "Tablet",
        "HS code": "2815.11",
        "UN Number": "UN1823",
        "IMCO Class": "8",
        grade: "Commercial Grade",
        use: "Disinfection",
      },
      originAndSourcing: {
        regions: ["International suppliers"],
        sourcingModel: "Water treatment product partners",
        seasonality: "Year-round",
        traceability: "Batch documentation",
      },
      qualityAndProcessing: {
        steps: ["Supplier QA", "Import", "Distribution"],
        qualityControl: "Product documentation as supplied",
      },
      packagingAndHandling: {
        options: ["Pails / drums as agreed"],
        labeling: "Product identity and safety labeling",
        storage: "Cool, dry, away from incompatible materials",
      },
      exportAndLogistics: {
        incoterms: ["As agreed"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Order dependent",
        documentation: ["Invoice", "Packing list", "MSDS"],
      },
      certifications: ["MSDS"],
      applications: ["Water disinfection", "Sanitation"],
      exportMarkets: ["Local institutional and industrial users"],
    },
    {
      id: "citric-acid",
      slug: "citric-acid",
      type: "chemical",
      name: "Citric Acid",
      category: "Food and beverage chemicals",
      casNumber: "77-92-9",
      physicalForm: "Crystal",
      grade: "Food Grade",
      origin: "International supply",
      shortDescription:
        "Food-grade citric acid for beverage, food processing, and related applications.",
      heroImage: citricAcid,
      gallery: [citricAcid],
      keySpec: {
        grade: "Food Grade",
        form: "Crystal",
      },
      card: {
        highlight:
          "Food-grade citric acid for beverage and food manufacturers.",
        specification: "CAS 77-92-9 · Crystal · Food Grade",
      },
      overview:
        "Citric acid is supplied for food and beverage producers requiring consistent quality and appropriate grade documentation.",
      keyCharacteristics: [
        "Food and beverage use",
        "Crystal form",
        "Food-grade orientation",
      ],
      specifications: {
        casNumber: "77-92-9",
        form: "Crystal",
        grade: "Food Grade",
      },
      originAndSourcing: {
        regions: ["International food-ingredient suppliers"],
        sourcingModel: "Qualified food-chemical partners",
        seasonality: "Year-round",
        traceability: "Batch documentation",
      },
      qualityAndProcessing: {
        steps: ["Grade verification", "Import", "Distribution"],
        qualityControl: "CoA as applicable",
      },
      packagingAndHandling: {
        options: ["Bags", "As agreed"],
        labeling: "Food-grade labeling as required",
        storage: "Clean, dry storage",
      },
      exportAndLogistics: {
        incoterms: ["As agreed"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Subject to order",
        documentation: ["Invoice", "Packing list", "CoA"],
      },
      certifications: ["CoA on request"],
      applications: ["Beverages", "Food processing"],
      exportMarkets: ["Ethiopian food & beverage industry"],
    },
    {
      id: "phosphoric-acid",
      slug: "phosphoric-acid",
      type: "chemical",
      name: "Phosphoric Acid",
      category: "Food and beverage chemicals",
      casNumber: "7664-38-2",
      physicalForm: "Liquid",
      grade: "Food Grade",
      origin: "International supply",
      shortDescription:
        "Food-grade phosphoric acid used in beverage formulation and related processes.",
      heroImage: phosphoricAcid,
      gallery: [phosphoricAcid],
      keySpec: {
        form: "Liquid",
        grade: "Food Grade",
      },
      card: {
        highlight: "Liquid phosphoric acid for beverage and food process use.",
        specification: "CAS 7664-38-2 · Liquid · Food Grade",
      },
      overview:
        "Phosphoric acid is offered for beverage and food-related process applications where food-grade material is required.",
      keyCharacteristics: [
        "Beverage industry use",
        "Liquid form",
        "Food-grade supply options",
      ],
      specifications: {
        casNumber: "7664-38-2",
        "HS code": "2815.11",
        "UN Number": "UN1823",
        "IMCO Class": "8",
        form: "Liquid",
        grade: "Food Grade",
      },
      originAndSourcing: {
        regions: ["International suppliers"],
        sourcingModel: "Food & beverage chemical partners",
        seasonality: "Year-round",
        traceability: "Shipment documentation",
      },
      qualityAndProcessing: {
        steps: ["Spec confirmation", "Import handling", "Delivery"],
        qualityControl: "CoA / documentation as applicable",
      },
      packagingAndHandling: {
        options: ["Drums / IBC as agreed"],
        labeling: "Product and safety labeling",
        storage: "Per MSDS guidance",
      },
      exportAndLogistics: {
        incoterms: ["As agreed"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Order dependent",
        documentation: ["Invoice", "Packing list", "MSDS / CoA"],
      },
      certifications: ["MSDS", "CoA on request"],
      applications: ["Beverages", "Food processing"],
      exportMarkets: ["Local beverage manufacturers"],
    },
    {
      id: "industrial-polymers",
      slug: "industrial-polymers",
      type: "chemical",
      name: "Industrial Polymers",
      category: "Raw materials",
      casNumber: "",
      physicalForm: "Granular",
      grade: "Technical Grade",
      origin: "International supply",
      shortDescription:
        "Polymer raw materials for industrial manufacturing and process applications.",
      heroImage: industrialPolymers,
      gallery: [industrialPolymers],
      keySpec: {
        form: "Granular",
        grade: "Technical",
      },
      card: {
        highlight:
          "Technical-grade polymer inputs for industrial production lines.",
        specification: "Granular · Technical Grade",
      },
      overview:
        "Industrial polymer materials are sourced to support manufacturing customers requiring consistent technical-grade inputs.",
      keyCharacteristics: [
        "Manufacturing raw material",
        "Granular form options",
        "Technical grade supply",
      ],
      specifications: {
        form: "Granular",
        "HS code": "2815.11",
        "UN Number": "UN1823",
        "IMCO Class": "8",
        grade: "Technical Grade",
      },
      originAndSourcing: {
        regions: ["International polymer suppliers"],
        sourcingModel: "Industrial materials partners",
        seasonality: "Year-round",
        traceability: "Batch documentation",
      },
      qualityAndProcessing: {
        steps: ["Spec match", "Import", "Distribution"],
        qualityControl: "Supplier quality documents",
      },
      packagingAndHandling: {
        options: ["Bags / bulk as agreed"],
        labeling: "Product and lot identification",
        storage: "Clean dry warehouse",
      },
      exportAndLogistics: {
        incoterms: ["As agreed"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Subject to grade and volume",
        documentation: ["Invoice", "Packing list"],
      },
      certifications: ["Supplier documents on request"],
      applications: ["Industrial manufacturing"],
      exportMarkets: ["Ethiopian manufacturers"],
    },
    {
      id: "industrial-resins",
      slug: "industrial-resins",
      type: "chemical",
      name: "Industrial Resins",
      category: "Raw materials",
      casNumber: "",
      physicalForm: "Liquid",
      grade: "Technical Grade",
      origin: "International supply",
      shortDescription:
        "Process resins and related materials for industrial manufacturing applications.",
      heroImage: industrialResins,
      gallery: [industrialResins],
      keySpec: {
        form: "Liquid",
        grade: "Technical",
      },
      card: {
        highlight:
          "Technical resins supporting industrial production requirements.",
        specification: "Liquid · Technical Grade",
      },
      overview:
        "Industrial resins are supplied as process inputs for manufacturers seeking dependable technical-grade materials.",
      keyCharacteristics: [
        "Industrial process use",
        "Liquid form options",
        "Technical grade",
      ],
      specifications: {
        form: "Liquid",
        "HS code": "2815.11",
        "UN Number": "UN1823",
        "IMCO Class": "8",
        grade: "Technical Grade",
      },
      originAndSourcing: {
        regions: ["International suppliers"],
        sourcingModel: "Industrial chemical partners",
        seasonality: "Year-round",
        traceability: "Lot documentation",
      },
      qualityAndProcessing: {
        steps: ["Specification alignment", "Import", "Local supply"],
        qualityControl: "Supplier quality packages",
      },
      packagingAndHandling: {
        options: ["Drums / as agreed"],
        labeling: "Product identification and safety labels",
        storage: "Per product guidelines",
      },
      exportAndLogistics: {
        incoterms: ["As agreed"],
        ports: ["Djibouti / as applicable"],
        leadTime: "Order dependent",
        documentation: ["Invoice", "Packing list", "MSDS as required"],
      },
      certifications: ["MSDS as applicable"],
      applications: ["Industrial manufacturing", "Process chemistry"],
      exportMarkets: ["Local industrial customers"],
    },
  ],

  other: [],
};

export default ProductsDetail;
