import HeroSection from "@/components/locations/hero-section";
import LocationsSection from "@/components/common/locations-section";

export default function Locations() {
  return (
		<main className="flex min-h-screen flex-col bg-off-white text-dark">
			<HeroSection />
      <LocationsSection />
		</main>
  );
}
