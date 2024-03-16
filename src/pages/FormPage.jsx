import ContentContainer from '../components/container/ContentContainer';
import Title from '../components/container/Title';
import Form from '../components/sub-components/forms/Form';
import FormLogin from '../components/sub-components/forms/FormLogin';
import FormRegister from '../components/sub-components/forms/FormRegister';
import FormWelcome from '../components/sub-components/forms/FormWelcome';

const FormPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Formularios"/>
            <p className='py-2'>
                Los formularios son elementos cruciales en cualquier sitio web o aplicación, 
                utilizados para recopilar información, interactuar con los usuarios y facilitar 
                procesos como el registro y la compra. Nuestros componentes de formularios están 
                diseñados para ser flexibles, accesibles y fáciles de integrar en cualquier proyecto.
            </p>
        </div>
        <FormLogin/>
        <FormWelcome/>
        <Form/>
        <FormRegister/>
    </ContentContainer>
  )
}
export default FormPage;