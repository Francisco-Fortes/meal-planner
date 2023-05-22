import "./profile-form.css";
import { Badge, Card } from "react-bootstrap";

const ProfileRecipeCard = () => {
  return (
    <Card style={{ width: "14rem" }}>
      <div className="rel">
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1390464358/pl/zdj%C4%99cie/ciasto-cytrynowe-babka-posypana-cukrem-pudrem-na-%C5%9Bwi%C4%85tecznym-stole-ozdobionym-wiosennymi.jpg?s=612x612&w=0&k=20&c=6STaOpF9hUhFMp7f3YOQxFTpWthy9GeV3VH3SZgShgM="
        />
        <Badge className="card-badge abs-tr p-1">SHARED</Badge>
        <div className="card-container abs-b pb-1">
          <Card.Title>Title</Card.Title>
          <Card.Text>40 minutes</Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default ProfileRecipeCard;
