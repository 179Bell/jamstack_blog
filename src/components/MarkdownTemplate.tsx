import parse from 'html-react-parser';

type Props = {
  props: string;
};

export const MarkdownTemplate = ({ props }: Props) => {
  return <>{parse(props)}</>;
};
