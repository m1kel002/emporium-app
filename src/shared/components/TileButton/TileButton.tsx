import './TileButton.scss';

interface ButtonProps {
  title: string
}

const TileButton = ({ title }: ButtonProps) => {
  return (
    <div className="tile-button-container">
      <button className="tile-button">{title}</button>
    </div>
  );
};

export default TileButton;
