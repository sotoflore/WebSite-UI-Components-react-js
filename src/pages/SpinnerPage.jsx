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
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
            </p>
        </div>
        <Spinner/>
        <SpinnerList/>
    </ContentContainer>
  )
}
export default SpinnerPage;