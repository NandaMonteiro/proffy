import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem (){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ]);
    };

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de escrinção."
            />

        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input name="name" label="Nome completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="WhatsApp"/>
                <TextArea name="bio" label="Biografia" />

            </fieldset>

            <fieldset>
                <legend>Sobre a Aula</legend>

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
                <Input name="cost" label="Custo da sua hora por aula"/>

            </fieldset>

            <fieldset>
                <legend>Horários Disponíveis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo horário
                    </button>
                </legend>
                
                {scheduleItems.map(scheduleItem => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
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
                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até"type="time"/>
                        </div>
                    );
                })}

            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante."/>
                    Importante! <br/>
                    Preencha todos os dados
                </p>
                <button type="button">
                    Salvar cadastro
                </button>
            </footer>
        </main>

        </div>

        
    )
}

export default TeacherForm;