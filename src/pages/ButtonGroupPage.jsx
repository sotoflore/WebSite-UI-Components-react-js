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
                Los grupos de botones son conjuntos de botones relacionados que se utilizan para 
                permitir a los usuarios seleccionar una opción entre varias alternativas. 
                Nuestros componentes de grupos de botones están diseñados para ofrecer flexibilidad, 
                accesibilidad y facilidad de uso en diferentes contextos y proyectos.
            </p>
        </div>
        <ButtonGroup/>
        <ButtonGroupIcon/>
    </ContentContainer>
  )
}
export default ButtonGroupPage;