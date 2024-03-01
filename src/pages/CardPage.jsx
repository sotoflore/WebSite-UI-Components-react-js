import ContentContainer from '../components/container/ContentContainer';
import Title from '../components/container/Title';
import Card from '../components/sub-components/cards/Card';
import CardProduct from '../components/sub-components/cards/CardProduct';
import CardProfile from '../components/sub-components/cards/CardProfile';
import TestimonialText from '../components/sub-components/testimonials/TestimonialText';

const CardPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Tarjetas"/>
            <p className='py-2'>
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
            </p>
        </div>
        <Card/>
        <CardProduct/>
        <CardProfile/>
        <TestimonialText/>
    </ContentContainer>
  )
}
export default CardPage;