import { FigmaLogo, AdobeLogo } from "./SoftwareLogos";
const logos: Record<string, React.ReactNode> = {
  Figma: <FigmaLogo />,
  Photoshop: <AdobeLogo abbr="Ps" bg="#001E36" fg="#31A8FF" />,
  Illustrator: <AdobeLogo abbr="Ai" bg="#330000" fg="#FF9A00" />,
};
export default function SkillCard({ name }: { name: string }) {
  return (
    <li title={name} className="flex h-14 w-14 items-center justify-center transition duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <span aria-hidden className="flex items-center justify-center">{logos[name]}</span>
      <span className="sr-only">{name}</span>
    </li>
  );
}
