import styles from './page.module.css'
import Navbar from '@/Components/Navbar'
import Herosection from '@/Components/Herosection'
import OrderStep from '@/Components/OrderStep'
import PopularSection from '@/Components/PopularSection'
import PopularCusineSection from '@/Components/PopularCusineSection'
import ResturantSection from '@/Components/ResturantSection'
import WhyUsSection from '@/Components/WhyUsSection'
import FooterSection from '@/Components/FooterSection'
export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <OrderStep />
      <PopularSection />
      <PopularCusineSection />
      <ResturantSection />
      <WhyUsSection />
      <FooterSection />
    </>
  )
}
