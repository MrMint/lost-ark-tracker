import { Set } from "immutable";
import { atom, useRecoilValue } from "recoil";
import { v4 as uuid } from "uuid";
import { User } from "../types";

const usersState = atom({
  key: "users",
  default: Set<User>([new User({ id: uuid(), name: "mint" })]),
});

const UserSelect = () => {
  const users = useRecoilValue(usersState);
  return (
    <div>
      <div>User Select</div>
      {users.map((v) => (
        <div key={v.id}>{v.name}</div>
      ))}
    </div>
  );
};

export default UserSelect;
