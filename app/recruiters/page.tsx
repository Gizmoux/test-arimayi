"use client";
import { RootState } from "@/redux/store";
import { Divider, List } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const RecruitersPage = () => {
  const candidatesInfos = useSelector(
    (state: RootState) => state.candidates.candidates
  );

  return (
    <>
      <Divider orientation="left">Page Candidats</Divider>
      <List
        size="large"
        header={<div>Mes candidats</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={candidatesInfos}
        renderItem={(item) => (
          <List.Item>
            <Link href={`/recruiters/${item.id}`}>{item.name}</Link>
          </List.Item>
        )}
      />
    </>
  );
};

export default RecruitersPage;
