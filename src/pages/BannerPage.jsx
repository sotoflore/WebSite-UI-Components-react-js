import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import Banner from "../components/sub-components/banners/Banner";

const BannerPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Banners"/>
            <p className='py-2'>
                Los banners son elementos visuales llamativos que se utilizan para destacar 
                información importante, promociones, mensajes de bienvenida y mucho más en una 
                página web. Nuestros componentes de banners están diseñados para ser versátiles, 
                atractivos y fáciles de integrar en cualquier proyecto.
            </p>
        </div>
        <Banner/>
    </ContentContainer>
  )
}
export default BannerPage;