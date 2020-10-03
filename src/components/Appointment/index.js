
import React from 'react';
import "./styles.scss";


import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from '../../hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = 'DELETING';
const CONFIRM = 'CONFIRM';
const UPDATE = 'UPDATE';



function Appointment (props)  {
 
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => { transition(SHOW) })
      .catch(err => console.log(err));
  }

  function removeInterview(){
    if (mode === CONFIRM){
      transition(DELETING);
      props.cancelInterview(props.id)
      .then(()=> transition(EMPTY))
      .catch(err => console.log(err));
    }
    transition(CONFIRM);
  }
  
  return(
    // <article className="appointment"></article>
    <article className="appointment">
      <Header time ={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={props.interviewers} onSave={save} onCancel={back} />}
      {mode === SHOW && ( <Show student={props.interview.student} interviewer={props.interview.interviewer} onDelete ={removeInterview} onEdit = {() =>transition(UPDATE)}/> )}
      {mode === SAVING && <Status message ={"Saving"}/>}
      {mode === DELETING && <Status message ={"Deleting"}/>}
      {mode === CONFIRM && <Confirm onConfirm={removeInterview} onCancel ={back}/>}
      {mode === UPDATE && <Form name = {props.interview.student} interviewer={props.interview.interviewer.id} interviewers={props.interviewers} onSave={save} onCancel={back}/>}
  
    </article>
  );
}
export default Appointment;