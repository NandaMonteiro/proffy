import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

function TeacherList() {
    const[teachers, setTeachers] = useState([]);

    const [subject, setsubject]= useState('');
    const [week_day, setWeekDay]= useState('');
    const [time, setTime]= useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('/classes', {
            params: {
              subject,
              week_day,
              time  
            }
        });
        setTeachers(response.data);
    };

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponivéis.">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => {setsubject(e.target.value)}}
                        options={[
                            {valeu: 'Artes', label: 'Artes'},
                            {valeu: 'Educação Fisíca', label: 'Educação Fisíca'},
                            {valeu: 'Matemática', label: 'Matemática'},
                            {valeu: 'Geografia', label: 'Geografia'},
                            {valeu: 'História', label: 'História'},
                            {valeu: 'Português', label: 'Português'},
                            {valeu: 'Biologia', label: 'Biologia'},
                            {valeu: 'Quimíca', label: 'Quimíca'},
                            {valeu: 'Fisíca', label: 'Fisica'},
                            {valeu: 'Filosofia', label: 'Filosofia'},
                            {valeu: 'Sociolofia', label: 'Sociologia'},
                            {valeu: 'Inglês', label: 'Inglês'}

                        ]}
                    />
                    <Select 
                    name="week_day" 
                    label="Dia da Semana"
                    value={week_day}
                    onChange={e => {setWeekDay(e.target.value)}}
                        options={[
                            {valeu: '0', label: 'Domingp'},
                            {valeu: '1', label: 'Segunda-feira'},
                            {valeu: '2', label: 'Terça-feira'},
                            {valeu: '3', label: 'Quarta-feira'},
                            {valeu: '4', label: 'Quinta-feira'},
                            {valeu: '5', label: 'Sexta-feira'},
                            {valeu: '6', label: 'Sabábo'}
                        ]}
                    />
                    <Input 
                        type="time"
                        name="time"
                        label="Horas"
                        value={time}
                        onChange={e => {setTime(e.target.value)}}
                    />
                    
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;