import * as Styles from './styles';

export type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

const Wrapper: React.FC<WrapperProps> = ({ children, ...containerProps }) => (
  <Styles.Container {...containerProps}>{children}</Styles.Container>
);

export default Wrapper;
