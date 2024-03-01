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
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
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