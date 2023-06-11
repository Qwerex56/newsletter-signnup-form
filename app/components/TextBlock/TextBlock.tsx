import TextBlockStyle from './TextBlockStyle.module.scss';
import { ITextBox } from './ITextBlock';

function TextBlock(props: ITextBox) {
  return <>{props.children}</>;
}

const TextBlockTitle = (props: ITextBox) => {
  return (
    <h1 className={TextBlockStyle.textBlock__title}>{props.children}</h1>
  )
}

const TextBlockContent = (props: ITextBox) => {
  return (
    <p className={TextBlockStyle.textBlock__content}>{props.children}</p>
  )
}

TextBlock.Title = TextBlockTitle;
TextBlock.Content = TextBlockContent;

export default TextBlock;