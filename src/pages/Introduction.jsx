import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import LineStep from '../components/introduction/LineStep';
import NumberStep from '../components/introduction/NumberStep';
import ContentStructure from '../components/introduction/ContentStructure';
import Title from '../components/introduction/Title';
import Code from '../components/introduction/Code';

const Introduction = () => {
    
    const clasName = "flex relative py-5 items-center"

    const customStyle = {
        fontSize: '.85rem',
        backgroundColor: '#000',
        overflowX:"auto",
        width:"100%",
        borderRadius:"7px"
    };

    const code = `npm install -D tailwindcss`;
    const codeConfiguration = `npx tailwindcss init`;
    const configuration = `
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    `;
    const directive = `
    /* src/input.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `;
    const start = `
    npx tailwindcss -i 
    ./src/input.css -o 
    ./src/output.css --watch
    `;
    const example = `
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./output.css" rel="stylesheet" />
    </head>
    <body>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    </body>
    `;

    return (
        <div className='col-span-4 lg:col-span-3 lg:ps-10'>
            <h1 className='text-2xl pt-3 text-center font-black text-blue-500 lg:text-4xl lg:pt-0'>Componentes de Código Abierto de Tailwind CSS en UI Components</h1>
            <p className='py-5'>
                Acelera tu flujo de trabajo y eleva tu diseño con una amplia selección de componentes 
                gratuitos basados en Tailwind cuidadosamente seleccionados para tus necesidades. 
            </p>
            <h2 className='text-3xl font-semibold'>Empezando</h2>
            <p className='pt-2 pb-5'>Para comenzar a utilizar los componentes de Tailwind CSS en tu proyecto, sigue estos pasos:</p>
            <div className="flex flex-wrap">
                <div className={clasName}>
                    <LineStep/>
                    <NumberStep textNumber="1"/>
                    <ContentStructure>
                        <Title titleText="Instalación de Tailwind CSS"/>
                        <p className="text-gray-900 pt-2 pb-3">
                            Primero, asegúrate de tener Tailwind CSS instalado en tu proyecto. 
                            Puedes instalarlo a través de <Code textCode="npm"/> ejecutando el siguiente comando en tu terminal.
                        </p>
                        <p className='text-gray-900 pt-2 pb-5'>
                            Si deseas instalar Tailwind CSS en Librerías o Frameworks como React, Next, Vue o Angular revisa
                            aquí <Link to="https://tailwindcss.com/docs/installation/framework-guides" target="_blank"  rel="noopener noreferrer" className='text-blue-700 underline underline-offset-4'>ver documentación</Link>.
                        </p>
                        <SyntaxHighlighter  children={code} language="bash" style={atomOneDarkReasonable}  customStyle={customStyle} />
                    </ContentStructure>
                </div>
                <div className={clasName}>
                    <LineStep/>
                    <NumberStep textNumber="2"/>
                    <ContentStructure>
                        <Title titleText="Archivo tailwind.config.js"/>
                        <p className="text-gray-900 pt-2 pb-3">
                            Crea un archivo <Code textCode="tailwind.config.js"/> en la raíz de tu proyecto y configura las opciones según tus preferencias.
                             Para crearlo ejecuta el siguiente comando en tu terminal.
                        </p>
                        <SyntaxHighlighter  children={codeConfiguration} language="bash" style={atomOneDarkReasonable}  customStyle={customStyle} />
                    </ContentStructure>
                </div>
                <div className={clasName}>
                    <LineStep/>
                    <NumberStep textNumber="3"/>
                    <ContentStructure>
                        <Title titleText="Configura tailwind.config.js"/>
                        <p className="text-gray-900 pt-2 pb-3">
                            Incluya las rutas hacia todos sus archivos de plantilla dentro del archivo <Code textCode="tailwind.config.js"/>
                        </p>
                        <SyntaxHighlighter  children={configuration} language="javascript" style={atomOneDarkReasonable}  customStyle={customStyle} wrapLongLines={true}/>
                    </ContentStructure>
                </div>
                <div className={clasName}>
                    <LineStep/>
                    <NumberStep textNumber="4"/>
                    <ContentStructure>
                        <Title titleText="Añade las Directivas Tailwind a tu CSS"/>
                        <p className="text-gray-900 pt-2 pb-3">
                            Incluya las directivas <Code textCode="@tailwind"/> en su archivo CSS principal, una para cada una de las capas de estilos de Tailwind,
                            de la siguiente manera.
                        </p>
                        <SyntaxHighlighter  children={directive} language="css" style={atomOneDarkReasonable}  customStyle={customStyle} wrapLines={true}/>
                    </ContentStructure>
                </div>
                <div className={clasName}>
                    <LineStep/>
                    <NumberStep textNumber="5"/>
                    <ContentStructure>
                        <Title titleText="Inicia el Proceso de Creación de Tailwind CLI"/>
                        <p className='pt-2 pb-3'>
                           Ejecute en la terminal  para escanear sus archivos de plantilla para las clases y construir su CSS.
                        </p>
                        <SyntaxHighlighter  children={start} language="bash" style={atomOneDarkReasonable}  customStyle={customStyle} />
                    </ContentStructure>
                </div>
                <div className={clasName}>
                    <LineStep/>
                    <NumberStep textNumber="6"/>
                    <ContentStructure>
                        <Title titleText="Empieza a utilizar Tailwind"/>
                        <p className='pt-2 pb-3'>
                           Incorpore su archivo CSS compilado dentro de la sección <Code textCode="head"/>  de su documento <Code textCode="HTML"/> y comience a utilizar las clases de utilidad de Tailwind para aplicar estilos a su contenido.
                        </p>
                        <SyntaxHighlighter  children={example} language="htmlbars" style={atomOneDarkReasonable}  customStyle={customStyle} wrapLongLines={true} />
                    </ContentStructure>
                </div>
            </div>
        </div>
    )
}
export default Introduction;