"use client";
import { RootState } from "@/redux/store";
import { Button } from "antd";
import { useSelector } from "react-redux";

const CandidateId = ({ params }: { params: { candidateId: string } }) => {
  const candidates = useSelector(
    (state: RootState) => state.candidates.candidates
  );
  const candidate = candidates.find(
    (candidate) => candidate.id === params.candidateId
  );
  return (
    <div>
      <Button type="link" href="/" className="m-4">
        Accueil
      </Button>
      <h1>Détail de mon candidat sélectionné avec ID {params.candidateId}</h1>
      <p>Nom du candidat: {candidate?.username}</p>
    </div>
  );
};

export default CandidateId;
