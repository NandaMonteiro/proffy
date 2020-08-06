import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponivéis.">
                <form action="" id="search-teachers">

                    <Select 
                        name="subject" 
                        label="Matéria"
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
                    <Input type="time" name="time" label="Horas"/>
                    
                </form>
            </PageHeader>
            <main>
                 <TeacherItem/>
                 <TeacherItem/>
                 <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;