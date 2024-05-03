import NotFoundIllustration from '@assets/illustrations/not_found.svg';
import NoDataIllustration from '@assets/illustrations/no_data.svg';
import { StyledBlankState } from './BlankState.styled';

export type IllustrationType = 'not_found' | 'no_data';

export interface BlankStateProps {
  state: IllustrationType;
  message?: string;
}

export default function BlankState(props: BlankStateProps) {
  const { state, message = 'Ups, something happened...' } = props;

  const states: Record<IllustrationType, { illustration: string; altMessage: string }> = {
    not_found: {
      illustration: NotFoundIllustration,
      altMessage: 'Not content found',
    },
    no_data: {
      illustration: NoDataIllustration,
      altMessage: 'Not data found',
    },
  };

  const State = states[state];

  return (
    <StyledBlankState>
      <div className="blank-state">
        <img src={State.illustration} alt={State.altMessage} />
        <span className="message">{message}</span>
      </div>
    </StyledBlankState>
  );
}
