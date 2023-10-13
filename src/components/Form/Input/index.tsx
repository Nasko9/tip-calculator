// Style
import './index.css';
// Copmonent
import DollarIcon from 'components/SvgIcons/DollarIcon';
import PersonIcon from 'components/SvgIcons/PersonIcon';

interface IInput {
  type: string;
  icon: 'dollar' | 'person';
}

export default function Input({ type, icon }: IInput) {
  const handleInputIcon = (iconProp: string) => {
    switch (iconProp) {
      case 'dollar':
        return <DollarIcon />;
      case 'person':
        return <PersonIcon />;
      default:
        break;
    }
  };

  return (
    <div className="input-container">
      {handleInputIcon(icon)}
      <input name={`input-${icon}`} type={type} className="input-field" />
    </div>
  );
}
