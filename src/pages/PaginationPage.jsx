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
                La paginación es un elemento crucial en la navegación de sitios web que tienen 
                mucho contenido para mostrar. Nuestros componentes de paginación están 
                diseñados para una integración fácil de usar, permitiendo a 
                los usuarios explorar grandes conjuntos de datos de manera eficiente.
            </p>
        </div>
        <Pagination/>
        <PaginationIcon/>
    </ContentContainer>
  )
}
export default PaginationPage;