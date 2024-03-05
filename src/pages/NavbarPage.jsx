import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import NavHeader from "../components/sub-components/navs/NavHeader";
import NavMenu from "../components/sub-components/navs/NavMenu";

const NavbarPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Menús"/>
            <p className='py-2'>
                Las barras de navegación son elementos esenciales en cualquier sitio web, 
                proporcionando una estructura de navegación clara y facilitando a los usuarios 
                encontrar y acceder a diferentes secciones del sitio. 
                Nuestros componentes de barras de navegación están diseñados para ser personalizables 
                y fáciles de integrar en cualquier proyecto.
            </p>
        </div>
        <NavHeader/>
        <NavMenu/>
    </ContentContainer>
  )
}
export default NavbarPage;