import {
  Milk,
  CakeSlice,
  Beef,
  Wheat,
  Droplets,
  Soup,
  HeartPulse,
} from "lucide-react";

export const productItems = [
 {
  id: 1,
  name: "DAIRY",
    image: "/Images/food/dairy.jpg",
  icon: Milk,
  content: [
    {
      title: "Cultures & Starter",
      items: [
        "Deep-frozen, highly concentrated cultures in readily soluble form, for direct inoculation",
        "Freeze-dried, highly concentrated cultures in powder form, for direct inoculation",
        "Deep-frozen, concentrated cultures for propagation of bulk starter",
        "Freeze-dried, concentrated cultures in powder form, for propagation of bulk starter",
        "The highly concentrated cultures DVS (Direct Vat Set) or DVI (Direct Vat Inoculation)",
      ],
    },

    {
      title: "Emulsifiers",
      items: [
        "Dairy E-Salts or Phosphate blends",
        "Di & Mono Glycerides of Fatty Acids",
        "Lecithin",
      ],
    },

    {
      title: "Flavors",
      items: [
        "Food Natural & Synthetic flavors",
      ],
    },

    {
      title: "Buffer pH",
      items: [
        "Phosphates, E-Salts",
        "Di Potassium Phosphate",
        "Tetra Potassium Phosphates",
      ],
    },

    {
      title: "Coloring",
      items: [
        "Natural & Synthetic Colors",
        "Caramel Color",
      ],
    },

    {
      title: "Fat Filled Whey Powders & Others",
      items: [
        "Different fat content spray dried whey powders",
      ],
    },

    {
      title: "Proteins",
      items: [
        "Blend of highly specialized proteins",
      ],
    },

    {
      title: "Dairy Ingredients",
      items: [
        "Casein & Caseinates",
        "Whey",
      ],
    },

    {
      title: "Fortification",
      items: [
        "Single Vitamins & Blends",
        "Minerals",
        "Nucleotide and functional ingredient blends",
      ],
    },

    {
      title: "Shelf life control",
      items: [
        "Lactic Acid",
      ],
    },

    {
      title: "Vitamins",
      items: [
        "Ascorbic Acid",
        "Niacin",
        "Riboflavin",
        "Thiamine",
      ],
    },

    {
      title: "Intense Sweeteners",
      items: [
        "Stevia",
        "Aspartame",
        "Sucralose",
        "Acesulfame",
      ],
    },
  ],
},
  {
  id: 2,
   image: "/Images/food/Confectionery2.jpg",

  name: "CONFECTIONERY",
  icon: CakeSlice,
  content: [
    {
      title: "Flavors",
      items: [
        "Food Natural & Synthetic flavors",
        "Vanillin & Ethyl Vanillin",
        "Butter Flavor",
        "Yeast Extract – flavor enhancer",
      ],
    },
    {
      title: "Starch & Polyols",
      items: [
        "Fructose",
        "Dextrose",
        "Potato Starch",
        "Modified Starches",
      ],
    },
    {
      title: "Fibers",
      items: [
        "Single Hydrocolloids",
        "Carrageenan",
        "Guar gum",
        "Pectin",
        "Xanthan Gum",
        "Agar",
      ],
    },
    {
      title: "Emulsifiers & Egg Products",
      items: [
        "Di & Mono Glycerides of Fatty Acids",
        "Lecithin",
        "Whipping products",
        "Egg Powder",
        "Egg Liquid",
      ],
    },
    {
      title: "Cocoa powder",
      items: ["Cocoa Powders"],
    },
    {
      title: "Sweeteners",
      items: ["Intense Sweeteners"],
    },
    {
      title: "Colors",
      items: [
        "Natural & Synthetic Colors",
        "Caramel Colors",
        "Liquid & Powdered Caramel Colors",
        "Burnt Sugars",
      ],
    },
    {
      title: "Flavors Enhancer",
      items: [
        "Yeast Extract",
        "Monosodium Glutamate",
        "I+G",
      ],
    },
    {
      title: "Fruit Granulates & Paste",
      items: [
        "Fruit Inclusions",
        "High Brix – Low aW paste",
      ],
    },
  ],
},
 {
  id: 3,
  name: "MEAT POULTRY & SEAFOOD",
  image: "/Images/food/Meat1.jpg",

  icon: Beef,
  content: [
    {
      title: "Blends & Texturizing Agents",
      items: [
        "Carrageenan",
        "Phosphate Blends",
        "STPP FG",
        "Transglutaminase",
      ],
    },

    {
      title: "Milk Powders & Starches",
      items: [
        "Potato Starch",
        "Dextrose",
        "Modified Starches",
      ],
    },

    {
      title: "Fiber & Protein Replacement",
      items: [
        "Collagens",
        "Texturized Vegetable Protein (TVP)",
        "Soya Proteins",
      ],
    },

    {
      title: "Gelling & Water Absorption",
      items: [
        "Carrageenan",
        "Xanthan & Guar Gum",
      ],
    },

    {
      title: "Flavors & Spices",
      items: [
        "Natural & Synthetic Flavors",
        "Oleoresins",
        "Aquaresins",
        "Blends of Spices",
      ],
    },

    {
      title: "Colors",
      items: [
        "Natural & Synthetic Colors",
        "Food Colors",
        "Caramel Colors",
      ],
    },

    {
      title: "Antioxidants & Preservatives",
      items: [
        "Vitamin C",
        "Tocopherols",
        "Ascorbic Acid",
        "Niacin",
        "Riboflavin",
        "Thiamine",
      ],
    },
  ],
},
  {
  id: 4,
  name: "BAKING",
  image: "/Images/food/Baking1.jpg",
  
  icon: Wheat,
  content: [
     {
      title: "Leavening Agents",
      items: [
        "Sodium Acid Pyrophosphate SAPP 28",
        "Sodium Acid Pyrophosphate SAPP 40",
        "MSP",
        "Baking Powders",
        "Sodium Bicarbonate",
      ],
    },
    {
      title: "Enzymes",
      items: [
        "Amylases",
        "Xylanases",
        "Lipases",
        "Proteases",
        "Oxidases",
        "Transglutaminases",
      ],
    },

    {
      title: "Texturizing",
      items: [
        "Starches",
        "Gluten",
      ],
    },

   

    {
      title: "Emulsifiers & Egg Products",
      items: [
        "Di & Mono Glycerides of Fatty Acids",
        "Lecithin",
        "Egg Powder",
        "Egg Liquid",
      ],
    },

    {
      title: "Yeast",
      items: [
        "Instant Dry Yeast",
      ],
    },

    {
      title: "Anti-caking & Raising Agents",
      items: [
        "Tri Calcium Phosphate – TCP",
        "Silica",
        "Single & Blends of Food Phosphates",
      ],
    },

    {
      title: "Flavors",
      items: [
        "Food Natural & Synthetic Flavors",
        "Butter Flavor",
        "Yeast Extract – Flavor Enhancer",
      ],
    },

    {
      title: "Vitamin Premixes",
      items: [
        "Vitamins & Its Blends",
      ],
    },

    {
      title: "Malt Flours & Flakes",
      items: [
        "Malt Flours",
        "Malt Extracts",
      ],
    },

    {
      title: "Vegetable Fat & Dairy Solutions",
      items: [
        "Spray Dried Vegetable Fat on a Dairy Carrier",
        "Whey Based Milk Replacers",
      ],
    },

    {
      title: "Wholegrain, Oats & Cereals",
      items: [
        "Oat Flakes",
        "Grains",
      ],
    },

    {
      title: "Fruit Granulates & Paste",
      items: [
        "Bake-Stable Fruit Inclusions",
        "High Brix – Low aW Bake Stable Paste",
      ],
    },
  ],
},
 {
  id: 5,
  name: "MARGARINES, FATS & OILS",
 image: "/Images/food/Oil2.jpg",
 
  icon: Droplets,
  content: [
    {
      title: "Antioxidants",
      items: [
        "TBHQ",
        "BHA",
        "BHT",
        "Liquid Blends",
        "Tocopherol",
        "Rosemary Extract",
      ],
    },

    {
      title: "Refining & Bleaching",
      items: [
        "Bleaching Earth",
        "Filter Aids",
      ],
    },

    {
      title: "Color Removal",
      items: [
        "Activated Carbon",
      ],
    },

    {
      title: "Food Colorants",
      items: [
        "Beta-Carotene",
      ],
    },

    {
      title: "Vitamin Premixes",
      items: [
        "Vitamin Blends",
      ],
    },
  ],
},

{
  id: 6,
  name: "SAVOURY",
  image: "/Images/food/Savory1.jpg",
  
  icon: Soup,
  content: [
    {
      title: "Thickeners & Gelling Agents",
      items: [
        "Xanthan Gum",
        "Carrageenan",
        "Potato Starch",
      ],
    },

    {
      title: "Emulsifiers",
      items: [
        "Di & Mono Glycerides of Fatty Acids",
        "Lecithin",
      ],
    },

    {
      title: "Preservatives",
      items: [
        "Citric Acid",
        "Ascorbic Acid",
        "Sodium Citrate",
        "Lactic Acid",
      ],
    },

    {
      title: "Flavors & Phosphates",
      items: [
        "Natural & Synthetic Flavors",
        "Di Potassium Phosphate",
        "Tetra Potassium Phosphates",
      ],
    },

    {
      title: "Spices & Colors",
      items: [
        "Blends of Spices",
        "Natural & Synthetic Colours",
      ],
    },

    {
      title: "Flavor Enhancers",
      items: [
        "Yeast Extract",
        "Monosodium Glutamate",
        "I+G",
      ],
    },

    {
      title: "Antioxidants",
      items: [
        "BHT & BHA",
        "Tocopherols",
        "Rosemary Extract",
      ],
    },
  ],
},

{
  id: 7,
  name: "HEALTH & FUNCTIONAL INGREDIENTS",
 image: "/Images/food/Functional-Ingredients.jpg",
  icon: HeartPulse,
  content: [
     {
      title: "Fruit Granulates & Paste",
      items: [
        "High Fibre / Lower Sugar Fruit Inclusions",
        "High Fibre / Lower Sugar Paste",
        "No Added Sugar Fortified Fruit Shapes (Food Supplement)",
      ],
    },
    {
      title: "DHA & EPA",
      items: [
        "Functional Omega Ingredients",
      ],
    },

    {
      title: "Sugar Free Solutions",
      items: [
        "Stevia",
        "Maltitol",
        "Sorbitol",
      ],
    },

    {
      title: "Protein Products",
      items: [
        "Pea Protein",
        "Whey Protein",
      ],
    },

    {
      title: "Fibres",
      items: [
        "Soluble Fibres",
        "Insoluble Fibres (Oat Origin)",
      ],
    },

   
  ],
}
];