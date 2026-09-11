import {
  HeartPulse,
  ShoppingBag,
  ChefHat,
  Target,
  Globe2,
  Users,
  Users2,
  ShieldCheck,
  MessageSquare,
  Search,
  FileCheck2,
  HandHeart,
} from "lucide-react";

export const iconMap = {
  HeartPulse,
  ShoppingBag,
  ChefHat,
  Target,
  Globe2,
  Users,
  Users2,
  ShieldCheck,
  MessageSquare,
  Search,
  FileCheck2,
  HandHeart,
};

export default function DynamicIcon({ name, ...props }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
