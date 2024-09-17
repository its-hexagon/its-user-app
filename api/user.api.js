import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { min } from "date-fns";

// 올행의 모든 과목(시험일정) 조회
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

// 모든 대과목 조회
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

// 모든 소과목 조회
const fetchMinors = async()=>{
    const minors_res = await axios.get('https://its-edu.site/api/classification/minors');
    return minors_res.data.data.minors;
}

export const useMinor =()=>{
    return useQuery({
        queryKey: ['minor'],
        queryFn: fetchMinors
    })
}