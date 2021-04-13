import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "お名前です",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "aaaa@aaa.com",
  phone: "000-9999-8888",
  company: {
    name: "aaa会社"
  },
  website: "https://www.google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
