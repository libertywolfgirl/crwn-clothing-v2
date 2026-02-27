import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((directory) => (
        <DirectoryItem key={directory.id} directory={directory} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
