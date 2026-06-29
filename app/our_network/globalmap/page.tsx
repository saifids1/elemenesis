"use client";

import React, { useEffect, useState, useCallback, useMemo, memo } from "react";
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
  Truck,
  ChevronDown,
  ExternalLink
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

// Map options with refined styling
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

// Memoized Marker component for performance
const OfficeMarker = memo(({ 
  office, 
  isHovered, 
  onSelect, 
  onHover 
}: { 
  office: OfficeLocation; 
  isHovered: boolean; 
  onSelect: (office: OfficeLocation) => void; 
  onHover: (id: number | null) => void;
}) => {
  const markerIcon = useMemo(() => ({
    url: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 35' fill='none'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12c0 6.627 12 23 12 23s12-16.373 12-23c0-6.627-5.373-12-12-12z' fill='${isHovered ? '%2310b2b5' : '%2300CCAA'}' stroke='white' stroke-width='2'/%3E%3Ccircle cx='12' cy='12' r='4' fill='white'/%3E%3C/svg%3E`,
    scaledSize: new google.maps.Size(30, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(15, 40),
  }), [isHovered]);

  return (
    <Marker
      position={office.position}
      onClick={() => onSelect(office)}
      onMouseOver={() => onHover(office.id)}
      onMouseOut={() => onHover(null)}
      icon={markerIcon}
      animation={isHovered ? google.maps.Animation.BOUNCE : undefined}
    />
  );
});

OfficeMarker.displayName = 'OfficeMarker';

// Memoized InfoWindow component
const OfficeInfoWindow = memo(({ 
  office, 
  onClose 
}: { 
  office: OfficeLocation; 
  onClose: () => void;
}) => (
  <InfoWindow
    position={office.position}
    onCloseClick={onClose}
    options={{
      pixelOffset: new google.maps.Size(0, -40),
    }}
  >
    <div className="max-w-sm p-3">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#064D50]">
            {office.name}
          </h3>
          <p className="text-xs text-[#096F72]/70">{office.region} | {office.country}</p>
        </div>
        <button
          onClick={onClose}
          className="text-[#096F72]/70 hover:text-[#096F72] transition-colors"
          aria-label="Close info window"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <div className="mb-3 space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#096F72]/70" />
          <span className="text-[#096F72]">{office.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-3 w-3 text-[#096F72]/70" />
          <a href={`tel:${office.phone}`} className="text-[#096F72] hover:text-[#064D50] transition-colors">
            {office.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-3 w-3 text-[#096F72]/70" />
          <a href={`mailto:${office.email}`} className="text-[#096F72] hover:text-[#064D50] transition-colors">
            {office.email}
          </a>
        </div>
      </div>
      
      <p className="mb-3 text-xs text-[#096F72]/70 leading-relaxed">
        {office.description}
      </p>

      <div className="mb-3">
        <p className="text-xs font-semibold text-[#064D50] mb-2">Trade Specialties:</p>
        <div className="flex flex-wrap gap-1.5">
          {office.tradeSpecialties.map((specialty, idx) => (
            <span 
              key={idx} 
              className="rounded-full bg-[#00CCAA]/10 px-2.5 py-1 text-xs text-[#064D50] font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={`https://www.google.com/maps/dir//${office.position.lat},${office.position.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#096F72] hover:text-[#064D50] transition-colors group"
      >
        Get Directions 
        <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  </InfoWindow>
));

OfficeInfoWindow.displayName = 'OfficeInfoWindow';

// Memoized Office Card component
const OfficeCard = memo(({ 
  office, 
  onSelect, 
  map 
}: { 
  office: OfficeLocation; 
  onSelect: (office: OfficeLocation) => void;
  map: google.maps.Map | null;
}) => {
  const handleClick = useCallback(() => {
    onSelect(office);
    if (map) {
      map.panTo(office.position);
      map.setZoom(10);
    }
  }, [office, onSelect, map]);

  return (
    <div
      className="group cursor-pointer rounded-lg border border-[#096F72]/10 bg-white p-4 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg hover:-translate-y-0.5"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-[#064D50] group-hover:text-[#096F72] transition-colors">
            {office.name}
          </h3>
          <p className="text-xs text-[#096F72]/70">{office.region} | {office.country}</p>
        </div>
        <MapPin className="h-4 w-4 text-[#096F72]" />
      </div>
      <p className="mt-2 text-sm text-[#096F72]/70 line-clamp-1">{office.address}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {office.tradeSpecialties.slice(0, 2).map((specialty, idx) => (
          <span key={idx} className="rounded-full bg-[#096F72]/5 px-2.5 py-0.5 text-xs text-[#096F72]/70">
            {specialty}
          </span>
        ))}
        {office.tradeSpecialties.length > 2 && (
          <span className="rounded-full bg-[#096F72]/5 px-2.5 py-0.5 text-xs text-[#096F72]/70">
            +{office.tradeSpecialties.length - 2}
          </span>
        )}
      </div>
      <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#096F72] opacity-0 group-hover:opacity-100 transition-all duration-300">
        View on Map 
        <ChevronDown className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );
});

OfficeCard.displayName = 'OfficeCard';

export default function NetworkPage() {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Load Google Maps
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  // Office locations data
  const officeLocations: OfficeLocation[] = useMemo(() => [
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
  ], []);

  // Filter offices based on selected region
  const filteredOffices = useMemo(() => 
    activeFilter === "all" 
      ? officeLocations 
      : officeLocations.filter(office => office.region === activeFilter),
    [activeFilter, officeLocations]
  );

  // Get unique regions for filter buttons
  const regions = useMemo(() => 
    ["all", ...new Set(officeLocations.map(office => office.region))],
    [officeLocations]
  );

  // Fit bounds to show all markers
  const fitBounds = useCallback(() => {
    if (map && filteredOffices.length > 0 && isMapLoaded) {
      const bounds = new google.maps.LatLngBounds();
      filteredOffices.forEach((office) => {
        bounds.extend(office.position);
      });
      map.fitBounds(bounds);
    }
  }, [map, filteredOffices, isMapLoaded]);

  // Fit bounds when map loads or filter changes
  useEffect(() => {
    if (map && isLoaded) {
      const timer = setTimeout(() => {
        fitBounds();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [map, isLoaded, fitBounds, activeFilter]);

  // Handle map load
  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
    setIsMapLoaded(true);
  }, []);

  // Handle office selection
  const handleOfficeSelect = useCallback((office: OfficeLocation) => {
    setSelectedOffice(office);
  }, []);

  // Handle info window close
  const handleInfoClose = useCallback(() => {
    setSelectedOffice(null);
  }, []);

  // Handle marker hover
  const handleMarkerHover = useCallback((id: number | null) => {
    setHoveredOffice(id);
  }, []);

  // Loading and error states
  if (loadError) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white">
          <div className="flex h-[600px] items-center justify-center">
            <div className="text-center">
              <div className="text-red-500 text-xl mb-4 font-semibold">Error loading maps</div>
              <p className="text-[#096F72]/70">Please check your API key and try again.</p>
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
              <p className="text-[#096F72]/70">Loading map...</p>
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
        <section className="relative h-[400px] overflow-hidden bg-[#064D50]">
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
              <p className="mt-4 max-w-2xl text-lg text-white/90 leading-relaxed">
                Strategically positioned across GCC, Europe, and Asia to facilitate seamless international trade
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-[#064D50]">
              Our Global Trade Network
            </h2>
            <p className="text-base leading-relaxed text-[#096F72]/70 max-w-4xl">
              REDA Chemicals operates a comprehensive global trade network spanning across GCC countries, 
              Europe, and Asia. With strategic offices in UAE, Saudi Arabia, Kuwait, Qatar, Egypt, India, 
              Pakistan, Singapore, and France, we facilitate international chemical trade and distribution 
              with unparalleled efficiency and expertise.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: Globe2, label: "Global Offices", value: "12+" },
              { icon: Ship, label: "Trade Routes", value: "500+" },
              { icon: Building2, label: "Warehouses", value: "25+" },
              { icon: Truck, label: "Countries Served", value: "50+" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="rounded-xl bg-[#096F72]/5 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-[#064D50]" />
                <div className="text-3xl font-bold text-[#064D50]">{stat.value}</div>
                <div className="text-sm text-[#096F72]/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="w-full bg-[#096F72]/5 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#064D50]">
                Interactive Global Trade Map
              </h2>
              <p className="mt-1 text-[#096F72]/70">
                Explore our strategic office locations across key global trade hubs
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="mb-6 flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveFilter(region)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeFilter === region
                      ? "bg-[#00CCAA] text-white shadow-lg"
                      : "bg-white text-[#096F72]/70 hover:bg-[#00CCAA]/10 hover:text-[#064D50]"
                  }`}
                  aria-pressed={activeFilter === region}
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
                  <OfficeMarker
                    key={office.id}
                    office={office}
                    isHovered={hoveredOffice === office.id}
                    onSelect={handleOfficeSelect}
                    onHover={handleMarkerHover}
                  />
                ))}

                {/* Trade Hub Radius Circles */}
                {[
                  { center: { lat: 25.276987, lng: 55.296249 }, radius: 800000 },
                  { center: { lat: 19.07609, lng: 72.877426 }, radius: 600000 },
                  { center: { lat: 48.856614, lng: 2.352222 }, radius: 500000 },
                ].map((circle, index) => (
                  <Circle
                    key={index}
                    center={circle.center}
                    radius={circle.radius}
                    options={{
                      fillColor: "#00CCAA",
                      fillOpacity: 0.08,
                      strokeColor: "#00CCAA",
                      strokeOpacity: 0.2,
                      strokeWeight: 1,
                    }}
                  />
                ))}

                {/* Info Window for selected office */}
                {selectedOffice && (
                  <OfficeInfoWindow
                    office={selectedOffice}
                    onClose={handleInfoClose}
                  />
                )}
              </GoogleMap>
            </div>

            {/* Office List Grid */}
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredOffices.map((office) => (
                <OfficeCard
                  key={office.id}
                  office={office}
                  onSelect={handleOfficeSelect}
                  map={map}
                />
              ))}
            </div>

            {/* No results message */}
            {filteredOffices.length === 0 && (
              <div className="mt-8 text-center py-12">
                <p className="text-[#096F72]/70">No offices found in this region.</p>
              </div>
            )}
          </div>
        </section>

        {/* Trade Regions Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-[#064D50]">Our Key Trade Regions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "GCC Countries: UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman",
              "Europe: France and strategic European partnerships",
              "Asia: India, Pakistan, Singapore, and Southeast Asia",
              "North Africa: Egypt and North African markets",
              "UAE Trade Hub: Dubai & Abu Dhabi - Major trading gateway",
              "Indian Subcontinent: India & Pakistan - Rapidly growing markets",
            ].map((region, index) => {
              const [title, ...descriptionParts] = region.split(": ");
              const description = descriptionParts.join(": ");
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-[#096F72]/10 p-5 transition-all duration-300 hover:border-[#00CCAA] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#00CCAA]" />
                    <h3 className="font-semibold text-[#064D50]">{title}</h3>
                  </div>
                  <p className="text-sm text-[#096F72]/70 leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#064D50] py-12">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to Expand Your Global Trade?
            </h2>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with us to access international markets and streamline your chemical supply chain
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/inquiries"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase text-[#064D50] transition-all duration-300 hover:bg-[#00CCAA] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
              >
                <Info className="h-4 w-4" />
                Contact Trade Team
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-[#064D50] hover:-translate-y-0.5"
              >
                <TrendingUp className="h-4 w-4" />
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Custom animations */}
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
}