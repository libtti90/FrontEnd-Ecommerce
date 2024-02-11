import { Banner } from "../../Layout/Banner/Banner";
import ProductCardContainer from "../../components/ProductsCards/ProductCardContainer";



export default function Home() {
  return (
    <>
    
    <Banner />
    <div className="main-container">
    <ProductCardContainer />
    </div>
    
    </>
  )
}
