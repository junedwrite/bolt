import React from "react";
import {
  School,
  Train,
  Trees as Tree,
  Coffee,
  ShoppingBag,
  Utensils,
} from "lucide-react";

interface Place {
  name: string;
  address?: string;
  rating?: number;
  distance?: string | number;
}

interface NeighborhoodDetails {
  [key: string]: Place[];
}

interface NeighborhoodInfoProps {
  neighbersDetails: NeighborhoodDetails;
}

const categoryIcons: { [key: string]: any } = {
  Education: School,
  Transportation: Train,
  "Parks & Recreation": Tree,
  "Dining & Entertainment": Utensils,
  Shopping: ShoppingBag,
  Cafes: Coffee,
};

const NeighborhoodInfo: React.FC<NeighborhoodInfoProps> = ({
  neighbersDetails,
}) => {
  console.log("neighbersDetails", neighbersDetails);

  const amenities = Object.entries(neighbersDetails).map(([category, places]) => ({
    category,
    icon: categoryIcons[category] || Utensils, // Default icon if category is missing
    items: places.slice(0, 3).map((place) => ({ // Slice to max 3 items
      name: place.name,
      distance: place.distance  || "Unknown distance",
    })),
  }));

  return (
    <section className="my-16">
      <div className="mb-8">
        <h2 className="text-3xl font-serif mb-3">Neighborhood</h2>
        <p className="text-gray-600">
          Discover the prestigious Beverly Hills community and nearby amenities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center">
                    <span className="text-gray-800">{item.name}</span>
                    <span className="text-gray-500 text-sm">{item.distance} miles</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NeighborhoodInfo;
