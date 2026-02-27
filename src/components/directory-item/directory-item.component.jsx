import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  H2,
  P,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ directory }) => {
  const { imageUrl, title } = directory;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <H2>{title}</H2>
        <P>Shop Now</P>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
