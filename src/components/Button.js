import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const buttonClassName = className(
    rest.className,
    'flex items-center gap-x-1 px-3 py-1.5 border',
    {
      'bg-blue-500 border-blue-500 text-white': primary,
      'bg-gray-100 border-gray-100 text-black': secondary,
      'bg-green-500 border-green-500 text-white': success,
      'bg-yellow-300 border-yellow-300 text-black': warning,
      'bg-red-500 border-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-100': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-300': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }

    if (count === 0) {
      return new Error(
        'Either primary, secondary, success, warning, danger must be true'
      );
    }
  },
};

export default Button;
