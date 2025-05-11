import './TileButton.scss';

interface ButtonProps {
  title: string
}

const TileButton = ({ title }: ButtonProps) => {
  // TODO: implement text trimming for long texts
  // TODO: add tooltip on hover
  return (
    <div className="tile-button-container">
      <button className="tile-button" data-testid="TileTitle">{title}</button>
    </div>
  );
};

export default TileButton;
