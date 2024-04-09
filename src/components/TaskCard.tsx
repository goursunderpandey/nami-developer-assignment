import { Card } from 'react-bootstrap';

// Card component to display task details
const TaskDetailsCard = ({ name, status, time, description, taskType, date, taskNumber, fromLocation, toLocation, textlooop }) => {
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
        {time ===""? <div className='col-auto box m-1'></div>:
        <div style={{ borderRadius: "20px", fontSize: "15px", backgroundColor: time !== "2 min" ?'#90ee90':"red" }} className='col-auto box m-1'>
          {time}
        </div>
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
      <button style={{ borderRadius: "20px" }}  className={ time === "1 min" ? 'col btn btn-danger m-1' : (textlooop === "View Details" ? 'col btn btn-outline-primary m-1' : 'col btn btn-primary m-1')}>
          {textlooop}
        </button>
      </div>
    </Card>
  );
};

// Parent component
const TaskCard = () => {
  // Sample task data
  const tasks = [
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
      time:"",
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
        time: '1 min',
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
        time:"",
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
          time: '1 min',
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
            time:"",
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
              time: '1 min',
              description: 'Routine Cleaning',
              taskType: 'Internal Task',
              date: '21 Jul 2024 | 03:00 am',
              taskNumber: '# 68988',
              fromLocation: 'Pantry',
              toLocation: 'Reception',
              textlooop: "View Details"
            },
    // Additional task data
  ];

  return (
    <div className='container-fluid'>
      <strong style={{ fontSize: "20px" }}>Tasks Of The Day</strong>
      <div>
        {/* Render task buttons */}
      </div>
      <div>
        <div className='row mt-3'>
          {/* Render task cards */}
          {tasks.map((task, index) => (
            <TaskDetailsCard key={index} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
