import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import RemarkCode from './remark-code'
import { defaultSchema } from 'hast-util-sanitize'
import './preview.css'

import 'github-markdown-css/github-markdown.css'
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface Props {
  doc: string
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

const Preview: React.FC<Props> = (props) => {
 /*
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm) 
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: schema,
      remarkReactComponents: {
        code: Component
      }
    })
    .processSync(props.doc).result
    console.log(RemarkCode)
    console.log(md)
    */
   return (
    <>
    {/*<div className="preview markdown-body">{md}</div>*/}
     <Component language={"javascript"} value={props.doc} className={"preview markdown-body"}/>
    </>
    )

  /* 
  return (
   <ReactMarkdown 
    source={props.doc}
    className="preview markdown-body"
    //className = "markdown";
    renderers={{
      code:Component

    }}
    //remarkPlugins={[remarkGfm]}
    />
   )
   */
}

/*import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
*/
export const Component = ({value,language,className}) => {
  return (
    <SyntaxHighlighter className={className} language={language ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};
export default Preview
