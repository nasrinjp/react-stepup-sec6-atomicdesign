import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    name: `お名前-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaaa@aaa.com",
    phone: "000-9999-8888",
    company: {
      name: "aaa会社"
    },
    website: "https://www.google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  console.log(state);
  return (
    <SContainer>
      <SUserArea>
        <h2>ユーザ一覧</h2>
        <SearchInput />
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
