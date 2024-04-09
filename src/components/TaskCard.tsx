import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface Task {
  name: string;
  status: string;
  time?: string; // Made time optional as per your data structure
  description: string;
  taskType: string;
  date: string;
  taskNumber: string;
  fromLocation: string;
  toLocation: string;
  textlooop: string;
}

const TaskDetailsCard: React.FC<Task> = ({ name, status, time, description, taskType, date, taskNumber, fromLocation, toLocation, textlooop }) => {
  return (
    <Card className='col-3 m-3 w-auto'>
      <div className='row'>
        <div style={{ borderRadius: "20px", fontSize: "15px", backgroundColor:"#f0f8ff", fontWeight: "bold" }} className='col-auto box m-1'>
          <i className="bi bi-tools"></i> {name} <span className="red-dot"></span>
        </div>
        <div style={{ borderRadius: "20px", fontSize: "15px", backgroundColor:"#f0f8ff", color:"red" }} className='col-auto box m-1'>
          {status}
        </div>
        <i className="col-auto bi bi-recycle align-self-center"></i>
        {time ? 
          <div style={{ borderRadius: "20px", fontSize: "15px", backgroundColor: time !== "2 min" ?'#90ee90':"red" }} className='col-auto box m-1'>
            {time}
          </div> : null
        }
      </div>
      <div className='row mt-2'>
        <strong className='col-7'>
          {description}
        </strong>
        <div style={{ borderRadius: "20px", color: taskType === 'Internal Task' ? "blue" : "orange" }} className='col-5 box btn-secondary  mr-1'>
          {taskType}
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-8'>
          {date}
        </div>
        <div className='col-4'>
          {taskNumber}
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-6'>
          From: {fromLocation}
        </div>
        <div className='col-5'>
          To: {toLocation}
        </div>
      </div>
      <div className='row mt-3'>
        <Button style={{ borderRadius: "20px" }} variant={time === "1 min" ? 'danger' : (textlooop === "View Details" ? 'outline-primary' : 'primary')} className='col m-1'>
          {textlooop}
        </Button>
      </div>
    </Card>
  );
};

const TaskCard: React.FC = () => {
  const tasks: Task[] = [
    // Sample task data
    {
      name: 'Rajesh',
      status: 'Not accepted',
      time: '20 min',
      description: 'Routine Cleaning',
      taskType: 'Guest Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "Notify Staff"
    },
    {
      name: 'Rajesh',
      status: 'Not accepted',
      description: 'Routine Cleaning',
      taskType: 'Internal Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "View Details"
    },
    {
      name: 'Rajesh',
      status: 'Not accepted',
      time: '20 min',
      description: 'Routine Cleaning',
      taskType: 'Guest Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "Notify Staff"
    },
    {
      name: 'Rajesh',
      status: 'Not accepted',
      description: 'Routine Cleaning',
      taskType: 'Internal Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "View Details"
    },
    {
      name: 'Rajesh',
      status: 'Not accepted',
      time: '20 min',
      description: 'Routine Cleaning',
      taskType: 'Guest Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "Notify Staff"
    },
    {
      name: 'Rajesh',
      status: 'Not accepted',
      description: 'Routine Cleaning',
      taskType: 'Internal Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "View Details"
    },
    {
      name: 'Rajesh',
      status: 'Not accepted',
      time: '20 min',
      description: 'Routine Cleaning',
      taskType: 'Guest Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "Notify Staff"
    },
    {
      name: 'Rajesh',
      status: 'Not accepted',
      description: 'Routine Cleaning',
      taskType: 'Internal Task',
      date: '21 Jul 2024 | 03:00 am',
      taskNumber: '# 68988',
      fromLocation: 'Pantry',
      toLocation: 'Reception',
      textlooop: "View Details"
    },
    // Add more tasks as needed
  ];

  return (
    <div className='container-fluid'>
      <strong style={{ fontSize: "20px" }}>Tasks Of The Day</strong>
      <div className='row mt-3'>
        {tasks.map((task, index) => (
          <TaskDetailsCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
