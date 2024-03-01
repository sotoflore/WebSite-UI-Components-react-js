import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ButtonCopy from "./ButtonCopy";

const CodeBlock = ( {code, language} ) => {
    const customStyle = {
        fontSize: '.85rem',
        backgroundColor: '#000',
        overflowX:"auto",
        borderRadius:"0px 0px 25px 22px"
    };

    return (
        <div className='w-full mt-10'>
            <ButtonCopy code={code}/>
            <SyntaxHighlighter  children={code} language={language} style={atelierCaveDark} customStyle={customStyle} />
        </div>
    )
}
export default CodeBlock;