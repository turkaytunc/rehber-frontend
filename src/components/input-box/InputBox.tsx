import './input-box.scss';

const InputBox = ({
  testId,
  item,
  setItem,
  setError,
  isPassword,
  placeholder,
}: {
  testId: string;
  item: string;
  setItem: any;
  setError: any;
  isPassword: boolean;
  placeholder: string;
}) => {
  return (
    <label className="input-label" htmlFor={placeholder}>
      <span className="input-placeholder">{placeholder}</span>
      <input
        data-testid={testId}
        className="input-box"
        type={`${isPassword ? 'password' : 'text'}`}
        id={placeholder}
        onChange={(event) => setItem(event.target.value)}
        onFocus={() => {
          setError('');
        }}
        value={item}
      />
    </label>
  );
};

export default InputBox;
