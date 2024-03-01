import ContentContainer from '../components/container/ContentContainer';
import Title from '../components/container/Title';
import Form from '../components/sub-components/forms/Form';
import FormRegister from '../components/sub-components/forms/FormRegister';

const FormPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Formularios"/>
            <p className='py-2'>
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
            </p>
        </div>
        <Form/>
        <FormRegister/>
    </ContentContainer>
  )
}
export default FormPage;