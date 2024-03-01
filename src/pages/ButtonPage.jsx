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
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
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