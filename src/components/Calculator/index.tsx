// Style
import './index.css';
// Component
import Input from 'components/Form/Input';

export default function Calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator-form">
        <Input type="number" icon="dollar" />
        <Input type="number" icon="person" />
      </div>
      <div className="calculator-result"></div>
    </div>
  );
}
