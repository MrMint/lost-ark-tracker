import { Avatar } from "@mui/material";
import { Classes } from "src/character/types";
import Berserker from "../icons/Berserker.svg";

type ClassAvatarProps = {
  characterClass: Classes;
};

const getClassIcon = (characterClass: Classes) => {
  switch (characterClass) {
    case Classes.Striker:
    default:
      return <Berserker />;
      throw new Error(`Unsupported character class: ${characterClass}`);
  }
};

const ClassAvatar = ({ characterClass }: ClassAvatarProps) => {
  return <Avatar>{getClassIcon(characterClass)}</Avatar>;
};

export default ClassAvatar;
