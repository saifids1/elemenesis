"use client";

import React, { useEffect, useState, useCallback } from "react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import { 
  Globe2, 
  Mail,
  MapPin,
  Phone,
  X,
  Info,
  TrendingUp,
  Ship,
  Building2,
  Truck
} from "lucide-react";

// Google Maps API
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";

// Types
interface OfficeLocation {
  id: number;
  name: string;
  region: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  position: {
    lat: number;
    lng: number;
  };
  description: string;
  tradeSpecialties: string[];
}

// Map container style
const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

// Map options
const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: true,
  streetViewControl: true,
  fullscreenControl: true,
  styles: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
  ],
};

// Default center (World view)
const defaultCenter = {
  lat: 30,
  lng: 40,
};

export default function NetworkPage() {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Load Google Maps
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  // Office locations data - Updated for GCC, Europe, Asia, UAE, Egypt, India, Pakistan
  const officeLocations: OfficeLocation[] = [
    {
      id: 1,
      name: "GCC Regional Headquarters",
      region: "GCC Countries",
      country: "United Arab Emirates",
      address: "Dubai, United Arab Emirates",
      phone: "+971 4 123 4567",
      email: "gcc.trade@redachem.com",
      position: { lat: 25.276987, lng: 55.296249 },
      description: "Strategic hub serving all GCC countries including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman.",
      tradeSpecialties: ["Petrochemicals", "Industrial Chemicals", "Oil & Gas", "Construction Materials"],
    },
    {
      id: 2,
      name: "Saudi Arabia Office",
      region: "GCC Countries",
      country: "Saudi Arabia",
      address: "Riyadh, Saudi Arabia",
      phone: "+966 11 123 4567",
      email: "ksa.trade@redachem.com",
      position: { lat: 24.713552, lng: 46.675296 },
      description: "Supporting the largest market in the GCC region with comprehensive chemical distribution.",
      tradeSpecialties: ["Petrochemicals", "Industrial Solutions", "Mining Chemicals"],
    },
    {
      id: 3,
      name: "Kuwait Office",
      region: "GCC Countries",
      country: "Kuwait",
      address: "Kuwait City, Kuwait",
      phone: "+965 1234 5678",
      email: "kuwait.trade@redachem.com",
      position: { lat: 29.375859, lng: 47.977405 },
      description: "Serving the Kuwaiti market with specialized chemical solutions.",
      tradeSpecialties: ["Oil & Gas", "Petrochemicals", "Industrial Chemicals"],
    },
    {
      id: 4,
      name: "Qatar Office",
      region: "GCC Countries",
      country: "Qatar",
      address: "Doha, Qatar",
      phone: "+974 1234 5678",
      email: "qatar.trade@redachem.com",
      position: { lat: 25.285447, lng: 51.53104 },
      description: "Strategic location serving the growing Qatari market.",
      tradeSpecialties: ["Construction", "Energy Sector", "Industrial Chemicals"],
    },
    {
      id: 5,
      name: "UAE Trade Hub",
      region: "UAE",
      country: "United Arab Emirates",
      address: "Abu Dhabi, United Arab Emirates",
      phone: "+971 2 123 4567",
      email: "uae.trade@redachem.com",
      position: { lat: 24.453884, lng: 54.377344 },
      description: "Major trading hub for the United Arab Emirates with strategic logistics capabilities.",
      tradeSpecialties: ["International Trade", "Logistics", "Chemical Distribution"],
    },
    {
      id: 6,
      name: "Egypt Trade Office",
      region: "North Africa",
      country: "Egypt",
      address: "Cairo, Egypt",
      phone: "+20 2 1234 5678",
      email: "egypt.trade@redachem.com",
      position: { lat: 30.044388, lng: 31.235726 },
      description: "Gateway to North African markets with extensive distribution network.",
      tradeSpecialties: ["Agricultural Chemicals", "Industrial Solutions", "Food Ingredients"],
    },
    {
      id: 7,
      name: "India Regional Hub",
      region: "Asia",
      country: "India",
      address: "Mumbai, India",
      phone: "+91 22 1234 5678",
      email: "india.trade@redachem.com",
      position: { lat: 19.07609, lng: 72.877426 },
      description: "Major distribution center serving the Indian subcontinent with comprehensive chemical solutions.",
      tradeSpecialties: ["Pharmaceuticals", "Industrial Chemicals", "Food Ingredients", "Textile Chemicals"],
    },
    {
      id: 8,
      name: "India - Delhi Office",
      region: "Asia",
      country: "India",
      address: "New Delhi, India",
      phone: "+91 11 1234 5678",
      email: "delhi.trade@redachem.com",
      position: { lat: 28.613939, lng: 77.209021 },
      description: "Strategic office serving Northern India markets.",
      tradeSpecialties: ["Industrial Chemicals", "Construction Materials", "Coatings"],
    },
    {
      id: 9,
      name: "Pakistan Trade Center",
      region: "Asia",
      country: "Pakistan",
      address: "Karachi, Pakistan",
      phone: "+92 21 123 4567",
      email: "pakistan.trade@redachem.com",
      position: { lat: 24.860735, lng: 67.001137 },
      description: "Strategic office serving the Pakistani market with comprehensive trade solutions.",
      tradeSpecialties: ["Textile Chemicals", "Industrial Solutions", "Agriculture"],
    },
    {
      id: 10,
      name: "Pakistan - Lahore Office",
      region: "Asia",
      country: "Pakistan",
      address: "Lahore, Pakistan",
      phone: "+92 42 123 4567",
      email: "lahore.trade@redachem.com",
      position: { lat: 31.549721, lng: 74.34362 },
      description: "Serving the industrial hub of Punjab region.",
      tradeSpecialties: ["Manufacturing Chemicals", "Industrial Solutions", "Coatings"],
    },
    {
      id: 11,
      name: "Europe Regional Office",
      region: "Europe",
      country: "France",
      address: "Paris, France",
      phone: "+33 1 23 45 67 89",
      email: "europe.trade@redachem.com",
      position: { lat: 48.856614, lng: 2.352222 },
      description: "European liaison office for international trade and operations.",
      tradeSpecialties: ["Specialty Chemicals", "European Distribution", "Regulatory Compliance"],
    },
    {
      id: 12,
      name: "Asia Regional Hub",
      region: "Asia",
      country: "Singapore",
      address: "Singapore",
      phone: "+65 6789 0123",
      email: "asia.trade@redachem.com",
      position: { lat: 1.352083, lng: 103.819836 },
      description: "Regional headquarters for Southeast Asian operations and trade.",
      tradeSpecialties: ["Regional Distribution", "Logistics Hub", "International Trade"],
    },
  ];

  // Filter offices based on selected region
  const filteredOffices = activeFilter === "all" 
    ? officeLocations 
    : officeLocations.filter(office => office.region === activeFilter);

  // Get unique regions for filter buttons
  const regions = ["all", ...new Set(officeLocations.map(office => office.region))];

  // Fit bounds to show all markers
  const fitBounds = useCallback(() => {
    if (map && filteredOffices.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      filteredOffices.forEach((office) => {
        bounds.extend(office.position);
      });
      map.fitBounds(bounds);
    }
  }, [map, filteredOffices]);

  // Fit bounds when map loads or filter changes
  useEffect(() => {
    if (map && isLoaded) {
      fitBounds();
    }
  }, [map, isLoaded, fitBounds, activeFilter]);

  // Handle map load
  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  // Custom marker icon
  const createCustomMarker = (isHovered: boolean) => ({
    url: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 35' fill='none'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12c0 6.627 12 23 12 23s12-16.373 12-23c0-6.627-5.373-12-12-12z' fill='${isHovered ? '%2310b2b5' : '%2300CCAA'}' stroke='white' stroke-width='2'/%3E%3Ccircle cx='12' cy='12' r='4' fill='white'/%3E%3C/svg%3E`,
    scaledSize: new google.maps.Size(30, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(15, 40),
  });

  if (loadError) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white">
          <div className="flex h-[600px] items-center justify-center">
            <div className="text-center">
              <div className="text-red-500 text-xl mb-4">Error loading maps</div>
              <p className="text-gray-600">Please check your API key and try again.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white">
          <div className="flex h-[600px] items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00CCAA] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-[#10b2b5] to-[#08244A]">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <div className="animate-fadeIn">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <Globe2 className="h-4 w-4" />
                Our Global Trade Network
              </span>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Connecting Global<br />Trade Markets
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/90">
                Strategically positioned across GCC, Europe, and Asia to facilitate seamless international trade
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-[#00CCAA]">
              Our Global Trade Network
            </h2>
            <p className="text-base leading-relaxed text-gray-600 max-w-4xl">
              REDA Chemicals operates a comprehensive global trade network spanning across GCC countries, 
              Europe, and Asia. With strategic offices in UAE, Saudi Arabia, Kuwait, Qatar, Egypt, India, 
              Pakistan, Singapore, and France, we facilitate international chemical trade and distribution 
              with unparalleled efficiency and expertise.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-br from-[#00CCAA]/10 to-transparent p-6 text-center transition-all duration-300 hover:scale-105">
              <Globe2 className="h-8 w-8 mx-auto mb-3 text-[#00CCAA]" />
              <div className="text-3xl font-bold text-[#00CCAA]">12+</div>
              <div className="text-sm text-gray-600 mt-2">Global Offices</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#10b2b5]/10 to-transparent p-6 text-center transition-all duration-300 hover:scale-105">
              <Ship className="h-8 w-8 mx-auto mb-3 text-[#10b2b5]" />
              <div className="text-3xl font-bold text-[#10b2b5]">500+</div>
              <div className="text-sm text-gray-600 mt-2">Trade Routes</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#00CCAA]/10 to-transparent p-6 text-center transition-all duration-300 hover:scale-105">
              <Building2 className="h-8 w-8 mx-auto mb-3 text-[#00CCAA]" />
              <div className="text-3xl font-bold text-[#00CCAA]">25+</div>
              <div className="text-sm text-gray-600 mt-2">Warehouses</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#10b2b5]/10 to-transparent p-6 text-center transition-all duration-300 hover:scale-105">
              <Truck className="h-8 w-8 mx-auto mb-3 text-[#10b2b5]" />
              <div className="text-3xl font-bold text-[#10b2b5]">50+</div>
              <div className="text-sm text-gray-600 mt-2">Countries Served</div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="w-full bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Interactive Global Trade Map
            </h2>
            <p className="mb-6 text-gray-600">
              Explore our strategic office locations across key global trade hubs
            </p>

            {/* Filter Buttons */}
            <div className="mb-6 flex flex-wrap gap-3">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveFilter(region)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeFilter === region
                      ? "bg-[#00CCAA] text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-[#00CCAA]/10 hover:text-[#00CCAA]"
                  }`}
                >
                  {region === "all" ? "All Locations" : region}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={2}
                center={defaultCenter}
                options={mapOptions}
                onLoad={onMapLoad}
              >
                {/* Office Markers */}
                {filteredOffices.map((office) => (
                  <Marker
                    key={office.id}
                    position={office.position}
                    onClick={() => setSelectedOffice(office)}
                    onMouseOver={() => setHoveredOffice(office.id)}
                    onMouseOut={() => setHoveredOffice(null)}
                    icon={createCustomMarker(hoveredOffice === office.id)}
                    animation={hoveredOffice === office.id ? google.maps.Animation.BOUNCE : undefined}
                  />
                ))}

                {/* Add radius circles for major trade hubs */}
                <Circle
                  center={{ lat: 25.276987, lng: 55.296249 }}
                  radius={800000}
                  options={{
                    fillColor: "#00CCAA",
                    fillOpacity: 0.1,
                    strokeColor: "#00CCAA",
                    strokeOpacity: 0.3,
                    strokeWeight: 1,
                  }}
                />
                <Circle
                  center={{ lat: 19.07609, lng: 72.877426 }}
                  radius={600000}
                  options={{
                    fillColor: "#10b2b5",
                    fillOpacity: 0.1,
                    strokeColor: "#10b2b5",
                    strokeOpacity: 0.3,
                    strokeWeight: 1,
                  }}
                />
                <Circle
                  center={{ lat: 48.856614, lng: 2.352222 }}
                  radius={500000}
                  options={{
                    fillColor: "#00CCAA",
                    fillOpacity: 0.1,
                    strokeColor: "#00CCAA",
                    strokeOpacity: 0.3,
                    strokeWeight: 1,
                  }}
                />

                {/* Info Window for selected office */}
                {selectedOffice && (
                  <InfoWindow
                    position={selectedOffice.position}
                    onCloseClick={() => setSelectedOffice(null)}
                    options={{
                      pixelOffset: new google.maps.Size(0, -40),
                    }}
                  >
                    <div className="max-w-sm p-3">
                      <div className="mb-3 flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-[#00CCAA]">
                            {selectedOffice.name}
                          </h3>
                          <p className="text-xs text-gray-500">{selectedOffice.region} | {selectedOffice.country}</p>
                        </div>
                        <button
                          onClick={() => setSelectedOffice(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="mb-3 space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-gray-400" />
                          <span className="text-gray-700">{selectedOffice.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-gray-400" />
                          <a href={`tel:${selectedOffice.phone}`} className="text-blue-600 hover:underline">
                            {selectedOffice.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <a href={`mailto:${selectedOffice.email}`} className="text-blue-600 hover:underline">
                            {selectedOffice.email}
                          </a>
                        </div>
                      </div>
                      
                      <p className="mb-3 text-xs text-gray-600">
                        {selectedOffice.description}
                      </p>

                      <div className="mb-3">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Trade Specialties:</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedOffice.tradeSpecialties.map((specialty, idx) => (
                            <span key={idx} className="rounded-full bg-[#00CCAA]/10 px-2 py-1 text-xs text-[#00CCAA]">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={`https://www.google.com/maps/dir//${selectedOffice.position.lat},${selectedOffice.position.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#00CCAA] hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </div>

            {/* Office List Sidebar */}
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredOffices.map((office) => (
                <div
                  key={office.id}
                  className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg"
                  onClick={() => {
                    setSelectedOffice(office);
                    if (map) {
                      map.panTo(office.position);
                      map.setZoom(10);
                    }
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-[#00CCAA]">
                        {office.name}
                      </h3>
                      <p className="text-xs text-gray-500">{office.region} | {office.country}</p>
                    </div>
                    <MapPin className="h-4 w-4 text-[#00CCAA]" />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{office.address}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {office.tradeSpecialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {specialty}
                      </span>
                    ))}
                    {office.tradeSpecialties.length > 2 && (
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        +{office.tradeSpecialties.length - 2}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 text-xs font-medium text-[#00CCAA] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    View on Map →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade Regions Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Our Key Trade Regions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#00CCAA]" />
                <h3 className="font-semibold text-gray-800">GCC Countries</h3>
              </div>
              <p className="text-sm text-gray-600">UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#00CCAA]" />
                <h3 className="font-semibold text-gray-800">Europe</h3>
              </div>
              <p className="text-sm text-gray-600">France and strategic European partnerships</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#00CCAA]" />
                <h3 className="font-semibold text-gray-800">Asia</h3>
              </div>
              <p className="text-sm text-gray-600">India, Pakistan, Singapore, and Southeast Asia</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#00CCAA]" />
                <h3 className="font-semibold text-gray-800">North Africa</h3>
              </div>
              <p className="text-sm text-gray-600">Egypt and North African markets</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#00CCAA]" />
                <h3 className="font-semibold text-gray-800">UAE Trade Hub</h3>
              </div>
              <p className="text-sm text-gray-600">Dubai & Abu Dhabi - Major trading gateway</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#00CCAA]" />
                <h3 className="font-semibold text-gray-800">Indian Subcontinent</h3>
              </div>
              <p className="text-sm text-gray-600">India & Pakistan - Rapidly growing markets</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#10b2b5] to-[#0c8e91] py-12">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to Expand Your Global Trade?
            </h2>
            <p className="mb-6 text-white/90">
              Partner with us to access international markets and streamline your chemical supply chain
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/inquiries"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase text-[#10b2b5] transition-all duration-300 hover:bg-[#00CCAA] hover:text-white hover:shadow-lg"
              >
                <Info className="h-4 w-4" />
                Contact Trade Team
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-[#10b2b5]"
              >
                <TrendingUp className="h-4 w-4" />
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </>
  );
}