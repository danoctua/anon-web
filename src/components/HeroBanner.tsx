'use client';

interface HeroBannerProps {
  translations: {
    introducing: string;
    selfOrganizing: string;
    community: string;
  };
}

export default function HeroBanner({ translations }: HeroBannerProps) {
  return (
    <section className="min-h-[50%] flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="216" height="216" viewBox="0 0 216 216" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 md:w-64 md:h-64">
          <circle cx="108" cy="108" r="108" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M100.77 110.815C128.259 98.0363 142.309 69.9661 132.152 48.1186C121.996 26.2712 91.4786 18.9197 63.9903 31.6986C36.502 44.4775 22.4518 72.5478 32.6084 94.3952C42.7649 116.243 73.2821 123.594 100.77 110.815ZM63.5601 65.289C61.9234 64.3504 60.6292 63.0508 59.8203 61.4095C56.776 55.2324 61.7568 46.5539 70.9453 42.0254C80.1337 37.4969 90.0504 38.8333 93.0947 45.0104C95.0551 48.988 93.6878 54.0028 90.0122 58.2789C93.7032 59.6346 96.6998 62.0874 98.3869 65.5106C102.57 73.9974 97.1194 85.2345 86.2137 90.6093C75.3079 95.9841 63.0764 93.4614 58.8937 84.9746C55.831 78.7603 57.9331 71.0713 63.5601 65.289Z" fill="white" />
          <path d="M80.4924 49.7767C81.553 52.0057 79.9692 55.1313 76.9547 56.758C73.9403 58.3847 70.6368 57.8964 69.5761 55.6674C68.5155 53.4384 70.0993 50.3127 73.1138 48.6861C76.1282 47.0594 79.4317 47.5477 80.4924 49.7767Z" fill="white" />
          <path d="M84.4418 69.6449C86.2346 72.7356 84.372 77.1647 80.2814 79.5376C76.1908 81.9105 71.4213 81.3285 69.6285 78.2378C67.8356 75.1471 69.6983 70.718 73.7888 68.3451C77.8794 65.9723 82.6489 66.5542 84.4418 69.6449Z" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10 pt-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="block">{translations.introducing}</span>
          <span className="block text-radial-pink">{translations.selfOrganizing}</span>
          <span className="block">{translations.community}</span>
        </h1>
      </div>
    </section>
  );
} 