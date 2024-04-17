import { FC } from 'react';

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

const Form: FC<IFormProps> = ({ children, className, ...props }) => {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
};

export default Form;
