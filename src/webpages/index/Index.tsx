import Header from '../../components/Header'
import Hero from '../../components/Hero'
import FeaturedPlants from '../../components/FeaturedPlants'
import Categories from '../../components/Categories'
import HelpEnvironment from '../../components/HelpEnvironment'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedPlants />
        <Categories />
        <HelpEnvironment />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
