import ContentContainer from '../components/container/ContentContainer';
import Title from '../components/container/Title';
import Card from '../components/sub-components/cards/Card';
import CardPricing from '../components/sub-components/cards/CardPricing';
import CardHover from '../components/sub-components/cards/CardHover';
import CardProduct from '../components/sub-components/cards/CardProduct';
import CardProfile from '../components/sub-components/cards/CardProfile';
import TestimonialText from '../components/sub-components/testimonials/TestimonialText';
import CardProductTwo from '../components/sub-components/cards/CardProductTwo';
import CardBlog from '../components/sub-components/cards/CardBlog';

const CardPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Tarjetas"/>
            <p className='py-2'>
                Las tarjetas son elementos visuales versátiles que se utilizan para presentar
                información de manera clara y atractiva en una interfaz de usuario.
                Nuestros componentes de tarjetas están diseñados para ofrecer flexibilidad y funcionalidad 
                en diversos contextos como tarjetas de productos, perfiles, de blogs, entre otros.
            </p>
        </div>
        <CardBlog/>
        <CardProductTwo/>
        <CardPricing/>
        <CardHover/>
        <Card/>
        <CardProduct/>
        <CardProfile/>
        <TestimonialText/>
    </ContentContainer>
  )
}
export default CardPage;