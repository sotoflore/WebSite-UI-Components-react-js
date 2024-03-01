import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import TestimonialSquare from "../components/sub-components/testimonials/TestimonialSquare";
import TestimonialStar from "../components/sub-components/testimonials/TestimonialStar";
import TestimonialText from "../components/sub-components/testimonials/TestimonialText";

const TestimonialPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Testimonios"/>
            <p className='py-2'>
                Una gran variedad de ejemplos de alertas disponibles hechas con Tailwindin CSS, puedes personalizar según tus necesidades específicas
                y usarlo en tus proyectos web.
            </p>
        </div>
        <TestimonialSquare/>
        <TestimonialStar/>
        <TestimonialText/>
    </ContentContainer>
  )
}
export default TestimonialPage;