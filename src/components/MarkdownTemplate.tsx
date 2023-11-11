import highlight, { AutoHighlightResult } from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import parse, { HTMLReactParserOptions } from 'html-react-parser';

type Props = {
  props: string;
};

const options: HTMLReactParserOptions = {
  replace: (domNode: any) => {
    if (domNode.name === 'code' && domNode.parent.name === 'pre') {
      const code: string = domNode.children[0].data;
      const highlightedCode: AutoHighlightResult =
        highlight.highlightAuto(code);

      return (
        <pre>
          <code className="hljs">{parse(highlightedCode.value)}</code>
        </pre>
      );
    }
  },
};

export const MarkdownTemplate = ({ props }: Props) => {
  return <>{parse(props, options)}</>;
};
