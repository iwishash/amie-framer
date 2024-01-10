import {
  AvailCard,
  ColorCard,
  MusicCard,
  ScheduleCard,
  TeamCard,
  TodoCard,
} from "../components/Cards";
import { MusicVisual, OtherVisual } from "../components/Visuals";

type Feature = {
  title: string;
  id: string;
  card: React.FC<CardProps>;
  visualImage: React.FC<VisualProps>;
};

type CardProps = {
  id: string;
};

type VisualProps = {
  id: string;
};

export const features: Feature[] = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    card: TodoCard,
    visualImage: OtherVisual,
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    card: ColorCard,
    visualImage: OtherVisual,
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: AvailCard,
    visualImage: OtherVisual,
  },
  {
    title: "Track what you listened to when",
    id: "music",
    card: MusicCard,
    visualImage: MusicVisual,
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
    card: ScheduleCard,
    visualImage: OtherVisual,
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    card: TeamCard,
    visualImage: OtherVisual,
  },
];
