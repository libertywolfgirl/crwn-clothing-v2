import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  H2,
  P,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ directory }) => {
  const { imageUrl, title, route } = directory;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <H2>{title}</H2>
        <P>Shop Now</P>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
