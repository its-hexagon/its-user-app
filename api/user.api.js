import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchExamSchedule = async ()=>{
    const examSchedule_res = await axios.get('https://its-edu.site/api/subject/schedule/year');
    return examSchedule_res.data.data.subjects;
}

export const useExamSchedule =() =>{
    return useQuery({
        queryKey: ['examSchedule'],
        queryFn: fetchExamSchedule
    });
};

const fetchMajors = async()=>{
    const majors_res = await axios.get('https://its-edu.site/api/classification/majors');
    return majors_res.data.data.majors;
}

export const useMajor =() =>{
    return useQuery({
        queryKey: ['major'],
        queryFn: fetchMajors
    });
};