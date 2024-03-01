import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import Pagination from "../components/sub-components/paginations/Pagination";
import PaginationIcon from "../components/sub-components/paginations/PaginationIcon";

const PaginationPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Paginación"/>
            <p className='py-2'>
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
            </p>
        </div>
        <Pagination/>
        <PaginationIcon/>
    </ContentContainer>
  )
}
export default PaginationPage;