import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import SpinnerList from "../components/sub-components/spiners/SpinerList";
import Spinner from "../components/sub-components/spiners/Spinner";

const SpinnerPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Sppiners"/>
            <p className='py-2'>
                Los spinners, también conocidos como indicadores de carga, son elementos 
                visuales utilizados para indicar que un proceso está en curso 
                y que el usuario debe esperar un momento. Nuestros componentes de 
                spinners están diseñados para ser atractivos y funcionales. 
            </p>
        </div>
        <Spinner/>
        <SpinnerList/>
    </ContentContainer>
  )
}
export default SpinnerPage;