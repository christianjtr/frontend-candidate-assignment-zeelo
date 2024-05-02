import { StyledLoaderSpinner } from './LoaderSpinner.styled';

export interface LoaderSpinnerProps {
  message?: string;
}

export default function LoaderSpinner(props: LoaderSpinnerProps) {
  const { message = 'Loading...' } = props;

  return (
    <div>
      <StyledLoaderSpinner>{message}</StyledLoaderSpinner>
    </div>
  );
}
