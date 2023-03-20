import { Figure, Stack } from "react-bootstrap";
import { Encounters } from "../interfaces/types";

interface EncounterCardProps {
  enc: Encounters;
  withImage?: boolean;
}

const EncounterCard = ({ enc, withImage = true }: EncounterCardProps) => {
  const handleClick = () => {
    if (enc.url !== '') {
      window.open(enc.url, '_blank');
    }
  };

  return (
    <div className="d-flex justify-content-center" onClick={handleClick}>
      <div className="w-50">
        <Stack className="text-center" gap={0}>
          {withImage && (
            <Figure>
              <Figure.Image
                width={70}
                height={70}
                alt={enc.home_team}
                src={'logos/' + enc.home_team.replace(/[0-9\s/.]/g, "").toLowerCase() + '.png'}
              />
            </Figure>
          )}
          <div className="text-truncate">{enc.home_team}</div>
        </Stack>
      </div>
      <h1 className="align-self-center">{enc.home_points}:{enc.guest_points}</h1>
      <div className="w-50">
        <Stack className="text-center" gap={0}>
          {withImage && (
            <Figure>
              <Figure.Image
                width={70}
                height={70}
                alt={enc.guest_team}
                src={'logos/' + enc.guest_team.replace(/[0-9\s/.]/g, "").toLowerCase() + '.png'}
              />
            </Figure>
          )}
          <div className="text-truncate">{enc.guest_team}</div>
        </Stack>
      </div>
    </div>
  );
};

export default EncounterCard;
