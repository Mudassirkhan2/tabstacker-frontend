import NavBar from '@/components/clients/NavBar'
import HeroSection from '@/components/HeroSection'
import ChapterOne from '@/components/ChapterOne'
import CostSection from '@/components/CostSection'
import ResearchSection from '@/components/ResearchSection'
import DemoSection from '@/components/DemoSection'
import FeaturesSection from '@/components/Features'
import CalmSection from '@/components/CalmSection'
import TeamSection from '@/components/TeamSection'
import CTASection from '@/components/CTASection'
import TokenFetcher from '@/components/TokenFetcher'

export default function Home() {
  return (
    <>
      <TokenFetcher />
      <NavBar />
      <HeroSection />
      <ChapterOne />
      <CostSection />
      <ResearchSection />
      <DemoSection />
      <FeaturesSection />
      <CalmSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
