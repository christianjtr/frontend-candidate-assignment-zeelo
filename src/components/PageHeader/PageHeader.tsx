import { StyledPageHeader } from './PageHeader.styled';

export default function PageHeader({ children }: { children: React.ReactNode }) {
  return <StyledPageHeader>{children}</StyledPageHeader>;
}
