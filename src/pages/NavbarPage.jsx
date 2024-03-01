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
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
            </p>
        </div>
        <NavHeader/>
        <NavMenu/>
    </ContentContainer>
  )
}
export default NavbarPage;