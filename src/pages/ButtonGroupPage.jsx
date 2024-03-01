import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import ButtonGroup from "../components/sub-components/buttongroups/ButtonGroup";
import ButtonGroupIcon from "../components/sub-components/buttongroups/ButtonGroupIcon";

const ButtonGroupPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Grupo de Botones"/>
            <p className='py-2'>
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
            </p>
        </div>
        <ButtonGroup/>
        <ButtonGroupIcon/>
    </ContentContainer>
  )
}
export default ButtonGroupPage;