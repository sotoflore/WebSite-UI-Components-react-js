import ContentContainer from "../components/container/ContentContainer";
import ButtonIcon from "../components/sub-components/buttons/ButtonIcon";
import Title from "../components/container/Title";
import ButtonPayment from "../components/sub-components/buttons/ButtonPayment";
import ButtonPrimary from "../components/sub-components/buttons/ButtonPrimary";
import ButtonLoading from "../components/sub-components/buttons/ButtonLoading";

const ButtonPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Botones"/>
            <p className='py-2'>
                Los botones son elementos fundamentales en cualquier interfaz de usuario, 
                utilizados para acciones, enlaces, formularios y más. 
                Nuestros componentes de botones están diseñados para ser altamente personalizables, 
                accesibles y fáciles de integrar en cualquier proyecto.
            </p>
        </div>
        <ButtonIcon/>
        <ButtonPayment/>
        <ButtonPrimary/>
        <ButtonLoading/>
    </ContentContainer>
  )
}
export default ButtonPage;