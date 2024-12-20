import { useQuery } from "@tanstack/react-query";
import api from "../AxiosInstance";
import { IMedication } from "../types/IMedication";

const fetchMedications = async (): Promise<IMedication[]> => {
  const response = await api.get("/posts");
  return response.data;
};

export const useMedications = () => {
  return useQuery<IMedication[], Error>({
    queryKey: ["medications"],
    queryFn: fetchMedications,
  });
};
