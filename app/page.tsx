import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MusicSection } from "@/components/music-section"
import { VideosSection } from "@/components/videos-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { TourSection } from "@/components/tour-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MusicSection />
      <VideosSection />
      <GallerySection />
      <AboutSection />
      <TourSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
