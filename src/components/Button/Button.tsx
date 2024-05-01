import StyledButton from './Button.styled';

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />;
}
