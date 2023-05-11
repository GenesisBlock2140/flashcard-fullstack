import { CustomNotFound } from "@/components/CustomNotFound";

export default function NotFound() {
  
  return (
    <CustomNotFound 
      title="Impossible de trouver ce deck" 
      message="Ce deck est introuvable, peut être un mauvais URL ?"
    />
  )
}