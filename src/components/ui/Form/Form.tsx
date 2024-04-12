interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
};

export default Form;
