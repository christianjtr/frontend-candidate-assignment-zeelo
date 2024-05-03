import { BlankState } from '@components';

const NotFoundStyles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  width: '70%',
};

export default function NotFound() {
  return (
    <div>
      <div style={NotFoundStyles}>
        <BlankState state="not_found" message="This page does not exists" />
      </div>
    </div>
  );
}
