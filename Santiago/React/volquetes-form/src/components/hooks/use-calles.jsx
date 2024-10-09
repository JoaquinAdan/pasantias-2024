import { useQuery } from "@tanstack/react-query";
import { getCalles } from "../services/getCalles";

export default function useCalles() {
  const calles = useQuery({
    queryKey: ["calles"],
    queryFn: getCalles,
  });

  return calles;
}
