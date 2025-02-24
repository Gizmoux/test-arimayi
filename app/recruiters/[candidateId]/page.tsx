"use client";
import { RootState } from "@/redux/store";
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
      <h1>
        Détail de mon candidat sélectionné avec ID {params.candidateId}{" "}
        {candidate?.name}
      </h1>
    </div>
  );
};

export default CandidateId;
