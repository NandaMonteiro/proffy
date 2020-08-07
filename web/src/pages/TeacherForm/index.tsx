import React, {useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem (){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ]);
    };

    function handleCreateClass (e: FormEvent){
        e.preventDefault();

        api.post('/classes', {
            name, 
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastrado realizado com sucesso!');
            history.push('/');

        }).catch(() => {
            alert('Erro no cadastro!');
        })

    };

    function setScheduleItemValue(position: Number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ... scheduleItem, [field]: value};
            }
            return scheduleItem;
        });
        setScheduleItems(updateScheduleItems);
    };

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de escrinção."
            />

        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input 
                        name="name" 
                        label="Nome completo"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <Input 
                        name="avatar" 
                        label="Avatar"
                        value={avatar}
                        onChange={(e) => {setAvatar(e.target.value)}}
                    />
                    <Input 
                        name="whatsapp" 
                        label="WhatsApp"
                        value={whatsapp}
                        onChange={(e) => {setWhatsapp(e.target.value)}}
                    />
                    <TextArea 
                        name="bio" 
                        label="Biografia"
                        value={bio}
                        onChange={(e) => {setBio(e.target.value)}} 
                    />

                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
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
                    <Input 
                        name="cost" 
                        label="Custo da sua hora por aula"
                        value={cost}
                        onChange={(e) => {setCost(e.target.value)}}
                    />

                </fieldset>

                <fieldset>
                    <legend>Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                    
                    {scheduleItems.map((scheduleItem, index )=> {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da Semana"
                                    value={scheduleItem.week_day}
                                    onChange={(e) => {setScheduleItemValue(index, 'week_day', e.target.value)}}
                                        options={[
                                            {valeu: '0', label: 'Domingo'},
                                            {valeu: '1', label: 'Segunda-feira'},
                                            {valeu: '2', label: 'Terça-feira'},
                                            {valeu: '3', label: 'Quarta-feira'},
                                            {valeu: '4', label: 'Quinta-feira'},
                                            {valeu: '5', label: 'Sexta-feira'},
                                            {valeu: '6', label: 'Sabábo'}
                                        ]}
                                />
                            <Input 
                                name="from" 
                                label="Das" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                            />
                            <Input 
                                name="to" 
                                label="Até"
                                type="time"
                                value={scheduleItem.to}
                                onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                            />
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
                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
            </form>
        </main>

        </div>

        
    )
}

export default TeacherForm;