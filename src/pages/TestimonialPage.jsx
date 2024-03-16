import ContentContainer from "../components/container/ContentContainer";
import Title from "../components/container/Title";
import TestimonialGradient from "../components/sub-components/testimonials/TestimonialGradient";
import TestimonialSquare from "../components/sub-components/testimonials/TestimonialSquare";
import TestimonialStar from "../components/sub-components/testimonials/TestimonialStar";
import TestimonialText from "../components/sub-components/testimonials/TestimonialText";

const TestimonialPage = () => {
  return (
    <ContentContainer>
        <div className="bg-white px-8 py-4 rounded-xl border-2 border-gray-300 shadow">
            <Title title="Testimonios"/>
            <p className='py-2'>
                Los testimonios son una poderosa herramienta para construir confianza y credibilidad en tu marca o producto. 
                Nuestros componentes de testimonios están diseñados para resaltar las experiencias positivas de tus clientes y 
                mostrarlas de manera atractiva en tu sitio web.
            </p>
        </div>
        <TestimonialGradient/>
        <TestimonialSquare/>
        <TestimonialStar/>
        <TestimonialText/>
    </ContentContainer>
  )
}
export default TestimonialPage;