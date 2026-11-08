import EducationCard from "../components/education/EducationCard";
import Background2 from "../components/ui/Background2";
import LenisScroll from "../components/ui/LenisScroll";
import PageContainer from "../components/ui/PageContainer";
import PageTitle from "../components/ui/PageTitle";
import PageTransition from "../components/ui/PageTransition";
import type { Education } from "../types/education";

const educations: Education[] = [
  {
    schoolname: "Faculty of Economics and Management of Tunis",
    name: "Master’s Degree in Data Science",
    date: "2026-present",
  },
  {
    schoolname: "Faculty of Economics and Management of Tunis",
    name: "Bachelor’s Degree in Business Intelligence",
    date: "2023-2026",
  },
  {
    schoolname: "Omrane superieur",
    name: "High School Diploma in Computer Science",
    date: "2022-2023",
  },
];

export default function Education() {
  return (
    <div>
      <LenisScroll />

      <PageTransition>Education</PageTransition>
      <Background2 />
      <PageContainer>
        <PageTitle>Education</PageTitle>
        <div className="flex flex-col gap-7">
          {educations.map((ed) => (
            <EducationCard key={`${ed.schoolname}-${ed.name}`} education={ed} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
