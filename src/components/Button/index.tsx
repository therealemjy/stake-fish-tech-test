import * as Styles from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...buttonProps }) => (
  <Styles.Container {...buttonProps}>{label}</Styles.Container>
);

export default Button;
