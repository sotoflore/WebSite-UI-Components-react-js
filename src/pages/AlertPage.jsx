import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import Alert from "../components/sub-components/alerts/Alert";
import AlertDanger from "../components/sub-components/alerts/AlertDanger";
import AlertInfo from "../components/sub-components/alerts/AlertInfo";
import AlertWarning from "../components/sub-components/alerts/AlertWarning";

const AlertPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Alertas"/>
            <p className='py-2'>
                Las alertas son elementos fundamentales en cualquier interfaz de usuario para 
                comunicar información importante o para notificar al usuario sobre eventos críticos. 
                Nuestros componentes de alertas están diseñados para ser flexibles, personalizables 
                y fáciles de integrar en cualquier proyecto.
            </p>
        </div>
        <Alert/>
        <AlertInfo/>
        <AlertWarning/>
        <AlertDanger/>
    </ContentContainer>
  )
}
export default AlertPage;